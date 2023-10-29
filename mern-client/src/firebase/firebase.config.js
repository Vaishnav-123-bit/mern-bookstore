// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdCK97zzUrJ_bdgfVQek7_lEtazXTP0-I",
  authDomain: "mern-book-653d6.firebaseapp.com",
  projectId: "mern-book-653d6",
  storageBucket: "mern-book-653d6.appspot.com",
  messagingSenderId: "297509130683",
  appId: "1:297509130683:web:9cadeb8130b0196de9349e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;