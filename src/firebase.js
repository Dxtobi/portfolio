// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4Zmazxz3kaD1mICHGDGAYeOC52rlOCfQ",
  authDomain: "akanbiportfolio.firebaseapp.com",
  projectId: "akanbiportfolio",
  storageBucket: "akanbiportfolio.appspot.com",
  messagingSenderId: "883252654315",
  appId: "1:883252654315:web:f6d8d74bf5c77045b10eae",
  measurementId: "G-H211XJ1EF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);