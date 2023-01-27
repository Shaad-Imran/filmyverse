import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "filmyverse-51c7b.firebaseapp.com",
  projectId: "filmyverse-51c7b",
  storageBucket: "filmyverse-51c7b.appspot.com",
  messagingSenderId: "373903940242",
  appId: "1:373903940242:web:c2fdcd5194eeedb84d244b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movie");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;
