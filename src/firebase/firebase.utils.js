import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC9NakmHolYL2lgwiYeSKT1S1tH5zHhLgc",
    authDomain: "toko-clothing.firebaseapp.com",
    projectId: "toko-clothing",
    storageBucket: "toko-clothing.appspot.com",
    messagingSenderId: "455477678565",
    appId: "1:455477678565:web:2b03ffd21d068e0a28df0c"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;