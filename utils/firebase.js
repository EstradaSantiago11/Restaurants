import firebase from 'firebase/app'
import 'firebase/firestore'

 const firebaseConfig = {
    apiKey: "AIzaSyCoy3eIgL7lj4jA5xlfIlEbPRbcCbznpbg",
    authDomain: "restaurants-a4621.firebaseapp.com",
    projectId: "restaurants-a4621",
    storageBucket: "restaurants-a4621.appspot.com",
    messagingSenderId: "480679315455",
    appId: "1:480679315455:web:919a506cd325f82f2e49ca"
  };
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig);