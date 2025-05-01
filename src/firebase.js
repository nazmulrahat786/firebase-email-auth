// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC31xs7rnUkTMSLX_JBChyW6NR2Ymac9S8",
  authDomain: "email-auth-65030.firebaseapp.com",
  projectId: "email-auth-65030",
  storageBucket: "email-auth-65030.firebasestorage.app",
  messagingSenderId: "20979944366",
  appId: "1:20979944366:web:4cac07dadd6d490858963f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);