// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAd6zeYhMaNbORC1G6AS4pBaG-tRAofXlA",
  authDomain: "study-hub-ca4cc.firebaseapp.com",
  projectId: "study-hub-ca4cc",
  storageBucket: "study-hub-ca4cc.appspot.com",
  messagingSenderId: "1093338727784",
  appId: "1:1093338727784:web:b193954ba3cfb8b455c2dd",
  measurementId: "G-G44Q0ZX97R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);