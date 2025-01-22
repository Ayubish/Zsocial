// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOBgpb8Sm9s4zHifB_8rwKMFOTj4-iLDw",
  authDomain: "fb-lite-clone.firebaseapp.com",
  databaseURL: "https://fb-lite-clone-default-rtdb.firebaseio.com",
  projectId: "fb-lite-clone",
  storageBucket: "fb-lite-clone.firebasestorage.app",
  messagingSenderId: "860914099546",
  appId: "1:860914099546:web:e7f6f86dade9ee27c87f63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
