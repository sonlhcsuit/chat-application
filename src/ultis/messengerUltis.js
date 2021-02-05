import { db } from './firebase.init'

export function sendMessage(message) {
    return db.collection('messages').add(message).then(doc => {
        return doc.id
    })
        .catch(er => {
            console.log(er)
        })
}
// listen query realtime
// export function subscribeConversation(conversationId, callback) {
//     console.log(conversationId)
//     // let b = 0
//     return db.collection('messages').where('conversationId', '==', conversationId)
//         .onSnapshot(snapshot => {
//             snapshot.docChanges().forEach(change => {
//                 if (change.type === 'added') {
//                     // b+=1
//                     // console.log(b)
//                     callback(change.doc.data())
//                     window.scrollBy(0, 100)
//                 }
//             })
//         })
// }



export function getConversationOf(conversationId) {
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
    return db.collection('conversations').where('userIds', 'array-contains', userId).get()
        .then(docs => {
            let data = []
            docs.forEach(doc => {
                let conversation = doc.data()
                let target = conversation.userIds.join('')
                target = target.replace(userId, '')
                data.push({
                    conversationId: doc.id,
                    target: target,
                    avatar: doc.data().avatar,
                    name: doc.data().name
                })
            })
            return data
        })
        .catch(er => {
            console.error(er)
        })
}

// -----------------------------------------------------------------------//

export function getUserInfo(userId) {
    return db.collection('users').doc(userId).get().then(doc => {


        return {
            id: doc.id,
            ...doc.data()
        }
    })
        .then(user => {
            delete user.password
            // console.log(user)
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
                            participants: user
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
export function subscribeConversation(converId, listener) {
    db.collection('messages').where('conversationId', '==', converId)
        .onSnapshot(observer => {
            observer.docChanges().forEach(doc => {
                if (doc.type === 'added') listener(doc.doc.data())
            })

        })
}
