// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhjriw4i0OfUXMxIP9FjKy9jSifTi8KcA",
  authDomain: "react-blog-bc1b3.firebaseapp.com",
  projectId: "react-blog-bc1b3",
  storageBucket: "react-blog-bc1b3.appspot.com",
  messagingSenderId: "321403456792",
  appId: "1:321403456792:web:eab7ee67e9f508820de26d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
export const provider = new GoogleAuthProvider()