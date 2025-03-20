// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN0jRnObnu18i9oC0WIXhYSiaBqS23YGk",
  authDomain: "decreact.firebaseapp.com",
  projectId: "decreact",
  storageBucket: "decreact.firebasestorage.app",
  messagingSenderId: "870566985945",
  appId: "1:870566985945:web:9b357e6b893e8bd43efec8",
  measurementId: "G-X2E06YSSD8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}