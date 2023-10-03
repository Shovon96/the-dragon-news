// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqynCFa4JEEj-d5ujF43H4wkgwFrjvFqk",
  authDomain: "the-dragon-news-auth-d024a.firebaseapp.com",
  projectId: "the-dragon-news-auth-d024a",
  storageBucket: "the-dragon-news-auth-d024a.appspot.com",
  messagingSenderId: "994050300387",
  appId: "1:994050300387:web:1bd0b161f8d34409c268d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;