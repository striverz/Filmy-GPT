// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn3qRCJplEB5ZO6EMs7X0RRRKkBs_2pis",
  authDomain: "netflixgpt-70945.firebaseapp.com",
  projectId: "netflixgpt-70945",
  storageBucket: "netflixgpt-70945.appspot.com",
  messagingSenderId: "920667032023",
  appId: "1:920667032023:web:45e79c955fa8b6112ba392",
  measurementId: "G-F4NZJSKLM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =getAuth();