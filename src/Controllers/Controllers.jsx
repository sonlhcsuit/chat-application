// import 'firebase/auth'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { firebaseConfig } from '../firebase.config'

try {
    firebase.initializeApp(firebaseConfig)
} catch (e) {
    console.log(e)
}

const db = firebase.firestore()

export function signIn() {

}
export function signUp() {

}