import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    collection,
    query,
    getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCJkxbxPvObnCqqAxjDGqRxZEHokA8XPUo",
    authDomain: "hassanim-766a4.firebaseapp.com",
    projectId: "hassanim-766a4",
    storageBucket: "hassanim-766a4.appspot.com",
    messagingSenderId: "803131968124",
    appId: "1:803131968124:web:e206643fc8ee13fa7917f9"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore();

const signOutUser = async () => await signOut(auth);

export {
    auth,
    db,
    signOutUser,
    signInWithEmailAndPassword
}