import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2E1dW0SLoFNJiKkhwERVsYaCT4J8rzgM",
  authDomain: "nhom1videocall.firebaseapp.com",
  projectId: "nhom1videocall",
  storageBucket: "nhom1videocall.firebasestorage.app",
  messagingSenderId: "238502631385",
  appId: "1:238502631385:web:f6992363e2953a60c62bc8",
  measurementId: "G-84ZWQQVT6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
