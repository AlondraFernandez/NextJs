// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnZW6u_Ylzj8k6cb_yYc4g6_853Se2ISY",
  authDomain: "nextjs-ee044.firebaseapp.com",
  projectId: "nextjs-ee044",
  storageBucket: "nextjs-ee044.firebasestorage.app",
  messagingSenderId: "572837971214",
  appId: "1:572837971214:web:b4321e4451a9077a6b435f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);