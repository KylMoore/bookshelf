// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJgeeHKpOcHN-TOEuPe-jViN4Je_fBya8",
    authDomain: "bookshelf-a1400.firebaseapp.com",
    projectId: "bookshelf-a1400",
    storageBucket: "bookshelf-a1400.appspot.com",
    messagingSenderId: "228887630575",
    appId: "1:228887630575:web:860e1b9d3021cbcc0f411a"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;