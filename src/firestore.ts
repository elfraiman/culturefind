import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALPh_qsiYXYrfiow4Febt_sMrMUi9YaGw",
  authDomain: "culturefind-401f6.firebaseapp.com",
  databaseURL: "https://culturefind-401f6.firebaseio.com",
  projectId: "culturefind-401f6",
  storageBucket: "culturefind-401f6.appspot.com",
  messagingSenderId: "747723769585",
  appId: "1:747723769585:web:9c916bcdc0dc8027"
};

// Initialize Firebase
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}


export default firebase;