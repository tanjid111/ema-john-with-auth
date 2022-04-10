// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbCqzgoii1QMFgZ4abmZGZkRdvlXDhgRU",
    authDomain: "ema-john-simple-23aec.firebaseapp.com",
    projectId: "ema-john-simple-23aec",
    storageBucket: "ema-john-simple-23aec.appspot.com",
    messagingSenderId: "293951291927",
    appId: "1:293951291927:web:57e40dce6d576d854cd252"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;