import { db } from './firebase.init'

export function sendMessage(message) {
    return db.collection('messages').add(message).then(doc => {
        return doc.id
    })
        .catch(er => {
            console.log(er)
        })
}



export function getConversation(conversationId) {
    // console.log(conversationId)
    return db.collection('messages')
        .where('conversationId', '==', conversationId)
        // .orderBy('created','desc')
        .get()
        .then((vale) => {
            let data = []
            vale.forEach(val => {
                data.push(val.data())
            })
            // sort by time
            return data.sort((a, b) => a.created - b.created)
        })
        .catch(er => {
            console.log(er.message)
        })
}

export function getConversationsInfoOf(userId) {
    return db.collection('conversations').where('users', 'array-contains', userId).get()
        .then(docs => {
            let data = []
            docs.forEach(doc => {
                let conversation = doc.data()
                let target = conversation.users.join('')
                target = target.replace(userId, '')
                data.push({
                    conversationId: doc.id,
                    target: target,
                })
            })
            return data
        })
        .then(docs => {

            let conversations = docs.map(doc => {
                return new Promise((resolve, reject) => {
                    getUserInfo(doc.target)
                        .then(data => {
                            resolve({
                                conversationId: doc.conversationId,
                                target: data,
                                messages:[]
                            })
                        })
                        .catch(error => {
                            console.error(error)
                            reject(error)
                        })
                })
            })
            return Promise.all(conversations)
        })
        .catch(er => {
            console.error(er)
        })
}

// -----------------------------------------------------------------------//


export function getUserInfo(userId) {
    return db.collection('users').doc(userId).get()
        .then(doc => {
            return {
                id: userId,
                ...doc.data()
            }
        })
        .then(user => {
            delete user.password
            return user

        })
        .catch(error => {
            console.error(error)
            throw error
        })

}

export function getConversations(userId) {
    return db.collection('conversations').where('users', 'array-contains', userId).get()
        .then(querySnapshot => {
            const convers = []
            querySnapshot.forEach(doc => {
                convers.push({
                    ...doc.data(),
                    id: doc.id
                })
            })
            return convers
        })
        .then(convers => {
            // console.log(convers)
            return convers
        })
        .catch(error => {
            console.error(error)
            throw error
        })
}
// getConversation('FZY6dmb5Ggr3AFqu3d96')
// getUserInfo('FZY6dmb5Ggr3AFqu3d96')
// a('FZY6dmb5Ggr3AFqu3d96')
export function getConversationsAndParticipants(userId) {
    return getConversations(userId)
        .then((convers) => {
            // with out userId 
            let woUser = convers.map(conver => {
                // console.log(conver)
                return {
                    conversationId: conver.id,
                    participants: conver?.users.filter(val => val != userId)
                }

            })
            return woUser
        })
        .then(convers => {
            const processedConvers = convers.map(conver => {
                return new Promise((resolve, reject) => {
                    // handle 1 user in participant list
                    getUserInfo(conver.participants[0]).then(user => {
                        resolve({
                            conversationId: conver.conversationId,
                            participants: user,
                            
                        })
                    })
                        .catch(error => {
                            console.error(error)
                            reject(error)
                        })

                }).catch(error => {
                    console.error(error)
                    throw error
                })
            })
            return Promise.all(processedConvers).then(convers => {
                return convers
            })
        })
}
export function subscribeConversation(converId, subscriber) {
    return db.collection('messages').where('conversationId', '==', converId)
        .onSnapshot(observables => {
            observables.docChanges().forEach(doc => {
                if (doc.type === 'added') subscriber(doc.doc.data())
            })

        })
}
