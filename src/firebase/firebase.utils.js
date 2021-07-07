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


// fungsi berikut menngecek user auth sdh ada atau belum pada database firebase tabel user, jika belum store atau buat baru doc(field) displayName, email, createdAt dan rest paramter lainnya.

export const buatProfilUserDocument = async (userAuth, dataTambahan) => {
    // jika user belum / tidak login kembalikan atau jangan jalankan kode dibawah
    if (!userAuth) return;
    
    // jika user telah login dengan tombol LoginDenganGoogle maka cari userRef berdasar Uid nya
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();
   
    // jika tidak ditemukan users dengan uid diatas pada database firebase tabel users maka set atau buat baru
    if (!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date;

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...dataTambahan
            })
        } catch (error) {
            console.log('error saat membuat user', error.message);
        }
    }

    return userRef;
    // console.log(userAuth);
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;