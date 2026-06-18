import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyygx1goGxbNt5x_YFxOhlS3a8v8qBwVA",
  authDomain: "tynu-music.firebaseapp.com",
  projectId: "tynu-music",
  storageBucket: "tynu-music.firebasestorage.app",
  messagingSenderId: "1050137852694",
  appId: "1:1050137852694:web:b29a7f6d3d73d7d6de2e37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;
