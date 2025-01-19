// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Correct import path for getAuth

import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQJPG8m2VZelLxRii0CfUhrr6-oNBsMo8",
  authDomain: "swiggy-2b692.firebaseapp.com",
  projectId: "swiggy-2b692",
  storageBucket: "swiggy-2b692.firebasestorage.app",
  messagingSenderId: "628132804038",
  appId: "1:628132804038:web:6ad4c84398d146dbb46ec7",
  measurementId: "G-GGD51ZHTC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app); // Corrected syntax for getAuth
const analytics = getAnalytics(app);

export { Auth };
