import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDCOvwXOOrd6Dj7_eMrSP8AUS_tR-GLtXI",
    authDomain: "twitter-like-96619.firebaseapp.com",
    projectId: "twitter-like-96619",
    storageBucket: "twitter-like-96619.appspot.com",
    messagingSenderId: "341663888634",
    appId: "1:341663888634:web:1dcb0776e540bbd1eb0543"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore()

export default firebase;