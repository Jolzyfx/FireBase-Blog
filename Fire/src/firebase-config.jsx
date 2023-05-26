import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8Z2kbu7Kc-ob0YsmVinZt0Q4LHh-pvcc",
  authDomain: "fireblog-30336.firebaseapp.com",
  projectId: "fireblog-30336",
  storageBucket: "fireblog-30336.appspot.com",
  messagingSenderId: "1064773033032",
  appId: "1:1064773033032:web:3362630fba39714d424c7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()