import firebase from 'firebase';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmUNoOhsK8DAavty_6_3ukPKNTif-GiE4",
    authDomain: "twitter-clone-49e91.firebaseapp.com",
    projectId: "twitter-clone-49e91",
    storageBucket: "twitter-clone-49e91.appspot.com",
    messagingSenderId: "99003115438",
    appId: "1:99003115438:web:58a122aa00abf501c88a3f",
    measurementId: "G-FMQ17XKXN0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  
  const db = firebaseApp.firestore();

  export default db;