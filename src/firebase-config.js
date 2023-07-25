// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';


const firebaseConfig = {
  apiKey: YOUR_API_KEY_HERE,
  authDomain: YOUR_AUTH_DOMAIN_HERE,
  projectId: YOUR_PROJECT_ID_HERE,
  storageBucket: YOUR_STORAGE_BUCKET_HERE,
  messagingSenderId: YOUR_SENDER_ID_HERE,
  appId: YOUR_APP_ID_HERE,
  measurementId: YOUR_MEASUREMENT_ID_HERE
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)