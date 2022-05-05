// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBatxcarxQura2vIQwXGCqv-tHAEjoJnKY",
  authDomain: "warehouse-management-398a5.firebaseapp.com",
  projectId: "warehouse-management-398a5",
  storageBucket: "warehouse-management-398a5.appspot.com",
  messagingSenderId: "475825183739",
  appId: "1:475825183739:web:1b709d06a75ce763a7095e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
