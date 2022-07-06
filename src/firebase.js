// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWQM4FRAGlol0BI6S8gNnHt3Wpu6pKHbg",
  authDomain: "todo-list-5ecb2.firebaseapp.com",
  databaseURL: "https://todo-list-5ecb2-default-rtdb.firebaseio.com",
  projectId: "todo-list-5ecb2",
  storageBucket: "todo-list-5ecb2.appspot.com",
  messagingSenderId: "1021638718905",
  appId: "1:1021638718905:web:5be8fe2c1ab64f24d13268"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();