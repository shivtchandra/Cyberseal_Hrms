import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB6iiggvbRwmtNMZs-Y9SQOB7UvHBOSYLk",
  authDomain: "hrportal-f6fe4.firebaseapp.com",
  projectId: "hrportal-f6fe4",
  storageBucket: "hrportal-f6fe4.firebasestorage.app",
  messagingSenderId: "791119780476",
  appId: "1:791119780476:web:943da5457e8c0be0e447f9",
  measurementId: "G-XD9TN5HN9F"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);