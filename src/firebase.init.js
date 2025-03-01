// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1CN0XwLKa6sLkLgCEpvEGJScSw-STpw8",
  authDomain: "auth-moha-milon-d43d8.firebaseapp.com",
  projectId: "auth-moha-milon-d43d8",
  storageBucket: "auth-moha-milon-d43d8.firebasestorage.app",
  messagingSenderId: "572405454305",
  appId: "1:572405454305:web:b688b77649fd79a8696ea0",
  measurementId: "G-F1YVX6F91V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
