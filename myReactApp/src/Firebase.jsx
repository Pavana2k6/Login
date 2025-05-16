// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import App from "./App";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgoe4nhxF4InAkotNYwxIKo1DDM9q5Ds0",
  authDomain: "my-project-e9f05.firebaseapp.com",
  projectId: "my-project-e9f05",
  storageBucket: "my-project-e9f05.firebasestorage.app",
  messagingSenderId: "298916989856",
  appId: "1:298916989856:web:a5438cdaaed9bb68adb2c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app
export const auth = getAuth()
export const db = getFirestore(app)