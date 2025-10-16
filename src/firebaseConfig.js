// Firebase configuration and initialization
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUqpnGkL3IovG2xmwy97P-_zdH_MiZGus",
  authDomain: "eaglerhub-6ed7d.firebaseapp.com",
  projectId: "eaglerhub-6ed7d",
  storageBucket: "eaglerhub-6ed7d.firebasestorage.app",
  messagingSenderId: "776882040937",
  appId: "1:776882040937:web:7bbb367cfb8f706375f2f8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
