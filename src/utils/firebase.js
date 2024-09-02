// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5biGjuvadrPwLMqtL38Xxhbk66R9kxNg",
  authDomain: "netflix-e0d64.firebaseapp.com",
  projectId: "netflix-e0d64",
  storageBucket: "netflix-e0d64.appspot.com",
  messagingSenderId: "819559578492",
  appId: "1:819559578492:web:e9b2f46ca0b9d1a20f02f9",
  measurementId: "G-QYHWQG3KD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();