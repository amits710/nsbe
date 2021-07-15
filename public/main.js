// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyAJZJFcIaLKowcKWZiDN0dLdqU4fjxgrs8",
  authDomain: "nsbe-ae5cb.firebaseapp.com",
  databaseURL: "https://nsbe-ae5cb.firebaseio.com",
  projectId: "nsbe-ae5cb",
  storageBucket: "nsbe-ae5cb.appspot.com",
  messagingSenderId: "354543937339",
  appId: "1:354543937339:web:b8ec430a92fcb30afff91e",
  measurementId: "G-14T6YF7X1C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);