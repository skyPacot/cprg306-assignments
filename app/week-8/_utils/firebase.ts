import { initializeApp, FirebaseOptions, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

// Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyBMIyB-mGBaU-7nyEQu-eYSj4nEtNFcvnc",
  authDomain: "cprg306-assignments-c2698.firebaseapp.com",
  projectId: "cprg306-assignments-c2698",
  storageBucket: "cprg306-assignments-c2698.firebasestorage.app",
  messagingSenderId: "219102698367",
  appId: "1:219102698367:web:75c6364494853e5781584a",
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Export auth and app
export const auth: Auth = getAuth(app);
export default app;