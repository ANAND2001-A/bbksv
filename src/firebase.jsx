// src/firebase.jsx
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";  // Import Firebase Authentication

const firebaseConfig = {
  apiKey: "AIzaSyDbYfGy0fM0eWDdl5ovbQAlpv44Dcmr-to",
  authDomain: "my-portfolio-402a5.firebaseapp.com",
  databaseURL: "https://my-portfolio-402a5-default-rtdb.firebaseio.com",
  projectId: "my-portfolio-402a5",
  storageBucket: "my-portfolio-402a5.appspot.com",
  messagingSenderId: "964260655775",
  appId: "1:964260655775:web:b26c0f87da67209139a8aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore setup
const db = getFirestore(app);

// Authentication setup
const auth = getAuth(app);  // Initialize Firebase Authentication

// Export Firestore and Authentication
export { db, auth };

// Example function to save contact form data to Firestore
export const saveContactForm = async (formData) => {
  try {
    await addDoc(collection(db, "schoolContact"), {
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error saving contact form:", error);
    throw error;
  }
};

// Add a function to register a user (Sign Up)
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User registered: ", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Error registering user: ", error);
    throw error;
  }
};

// Add a function to log in a user
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in: ", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("Error logging in user: ", error);
    throw error;
  }
};

// Add a function to log out a user
export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Error logging out user: ", error);
    throw error;
  }
};
