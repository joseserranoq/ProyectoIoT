// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbSFedtBLMQy8_7jlG85kdah3sM6rZ8-I",
  authDomain: "sample-c6c21.firebaseapp.com",
  projectId: "sample-c6c21",
  storageBucket: "sample-c6c21.appspot.com",
  messagingSenderId: "166762153466",
  appId: "1:166762153466:web:0bc1d88070d4764ff39043",
  measurementId: "G-L4N1FS1LYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);