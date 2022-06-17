// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ9sr1BGhTbWrBGv1WB350X8IX7ykRWxE",
  authDomain: "react-blogv2.firebaseapp.com",
  projectId: "react-blogv2",
  storageBucket: "react-blogv2.appspot.com",
  messagingSenderId: "500755100338",
  appId: "1:500755100338:web:6f749a2b8ec34ae3558fab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
export const provider = new GoogleAuthProvider()