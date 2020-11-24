// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAj06BtT0M3WUZLcQEHWN8bv_N8hrZ6N_o",
    authDomain: "whatsapp-clone-f77d0.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-f77d0.firebaseio.com",
    projectId: "whatsapp-clone-f77d0",
    storageBucket: "whatsapp-clone-f77d0.appspot.com",
    messagingSenderId: "406078913327",
    appId: "1:406078913327:web:4f3f756b7ca141f3ffffda",
    measurementId: "G-P8P48KC23P"
  };

// initializing firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//  connecting to db
const db = firebaseApp.firestore();

// Authentication
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
