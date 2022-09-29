import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_z6YI720gfQvsXzhpmW8T_oiOfSwMTO4",
  authDomain: "ecomercealfano.firebaseapp.com",
  projectId: "ecomercealfano",
  storageBucket: "ecomercealfano.appspot.com",
  messagingSenderId: "249862886636",
  appId: "1:249862886636:web:1dd2d7c19cc6a11a4a81c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);