// lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBmX1wtP0ApuIRGo0lS6gsz4dE7lc68_34",
    authDomain: "skillsync-2f0f5.firebaseapp.com",
    projectId: "skillsync-2f0f5",
    storageBucket: "skillsync-2f0f5.firebasestorage.app",
    messagingSenderId: "395264068042",
    appId: "1:395264068042:web:9f6c2cb7465b18f0a02733",
    measurementId: "G-ZPQMHBKYRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

