// import 'firebase/auth'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { firebaseConfig } from '../firebase.config'

try {
    firebase.initializeApp(firebaseConfig)
} catch (e) {
    console.error(e.stack)
}

const db = firebase.firestore()
export function signOut() {
    localStorage.clear()
    window.location.reload(false)
}
export function getUserInfo(userId) {
    return db.collection('users').doc(userId).get().then(doc => {
        return {userId:doc.id,...doc.data()}
    }).catch(er => console.log(er))
}

export function getConversationsOf(userId) {
    return db.collection('conversations').where('userIds', 'array-contains', userId).get()
        .then(docs => {
            let data = []
            docs.forEach(doc => {
                let conversation = doc.data()
                let target = conversation.userIds.join('')
                target = target.replace(userId, '')
                data.push({
                    conversationId: doc.id,
                    target: target
                })
            })
            return data
        })
        .catch(er => {
            console.error(er)
        })
}



























export function signIn(username, password) {
    return new Promise((resolve, reject) => {
        db.collection('users')
            .where('username', '==', username)
            .where('password', '==', password)
            .limit(1)
            .get()
            .then((docs) => {
                if (docs.empty) {
                    reject('username or password does not match!')
                } else {
                    let user;
                    docs.forEach(doc => {
                        user = { ...doc.data(), id: doc.id }

                    })

                    resolve(user)
                }
            })
    })
}
export function signUp() {

}