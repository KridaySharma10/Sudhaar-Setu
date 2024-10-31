// app/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa0qw1HYBMcbZL27BktzHJUJTIEtcFQXs",
  authDomain: "sudhaarsetu.firebaseapp.com",
  projectId: "sudhaarsetu",
  storageBucket: "sudhaarsetu.appspot.com",
  messagingSenderId: "59373284294",
  appId: "1:59373284294:web:a1454f863d218fdc88e0c7",
  measurementId: "G-GYLJRQD9CR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
