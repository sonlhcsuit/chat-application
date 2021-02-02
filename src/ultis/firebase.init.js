import firebase from 'firebase/app'
import 'firebase/firestore'
import { firebaseConfig } from '../config/firebase.config'

try {
    firebase.initializeApp(firebaseConfig);
} catch (e) {
    console.log(e.message)
}
const db = firebase.firestore()
export { db }