// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALS8CSrjqlautWOeiZDUKK34fy37f3xHI",
  authDomain: "netflixgpt-944df.firebaseapp.com",
  projectId: "netflixgpt-944df",
  storageBucket: "netflixgpt-944df.appspot.com",
  messagingSenderId: "222419859831",
  appId: "1:222419859831:web:9bfa2959a820d9b6528972",
  measurementId: "G-RYGGPTTRE7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();