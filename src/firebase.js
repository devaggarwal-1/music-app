// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDrx8r-Txi_6sdyVy6IwX3v2HIMdky0kU",
    authDomain: "firegram-cfd2f.firebaseapp.com",
    projectId: "firegram-cfd2f",
    storageBucket: "firegram-cfd2f.appspot.com",
    messagingSenderId: "964650926727",
    appId: "1:964650926727:web:b29d1238d620fbc28cae22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();