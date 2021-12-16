import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

 const firebaseConfig = {
    apiKey: "AIzaSyC0Pfu_OJ5C1mr4HlOtlrY2UkpYG-G03bY",
    authDomain: "justnow-ef9b4.firebaseapp.com",
    projectId: "justnow-ef9b4",
    storageBucket: "justnow-ef9b4.appspot.com",
    messagingSenderId: "192097555599",
    appId: "1:192097555599:web:8effb1b46705c8436accfa"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase;
