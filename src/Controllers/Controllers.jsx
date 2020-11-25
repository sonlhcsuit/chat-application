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
export function signOut(){
    localStorage.clear()
    window.location.reload(false)
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