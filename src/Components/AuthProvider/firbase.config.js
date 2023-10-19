// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcIpbCWR1RzAKh90Fbad_hkxB-78TWQvI",
  authDomain: "your-gadget.firebaseapp.com",
  projectId: "your-gadget",
  storageBucket: "your-gadget.appspot.com",
  messagingSenderId: "63747793220",
  appId: "1:63747793220:web:d6550db037fa2fc6383711"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;