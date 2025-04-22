// firebase.jsx
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

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

// Export saveContactForm function
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
