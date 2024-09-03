import firebase from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { app, firebaseConfig } from "./firebaseConfig";
import { getFirestore } from "firebase/firestore";

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

export const auth = getAuth(app);
export const db = getFirestore(app);
