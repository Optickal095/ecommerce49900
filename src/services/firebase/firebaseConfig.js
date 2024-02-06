import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANcH0ZAzoLB9BA0tzJ-5MUgiWzK7CzW9I",
  authDomain: "ecommerce49900-6d21c.firebaseapp.com",
  projectId: "ecommerce49900-6d21c",
  storageBucket: "ecommerce49900-6d21c.appspot.com",
  messagingSenderId: "381301260275",
  appId: "1:381301260275:web:2c30b7f271af80d13d5c86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
