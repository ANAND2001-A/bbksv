import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

// ✅ Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBsAbnF0vkrWDXMPl29wsZ28nKvisMpU2g",
  authDomain: "my-portfolio-402a5.firebaseapp.com",
  databaseURL: "https://my-portfolio-402a5-default-rtdb.firebaseio.com",
  projectId: "my-portfolio-402a5",
  storageBucket: "my-portfolio-402a5.appspot.com",
  messagingSenderId: "964260655775",
  appId: "1:964260655775:web:a83e3f2124789cde39a8aa"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Services
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Google Provider
const googleProvider = new GoogleAuthProvider();

// ✅ Export auth, db, provider
export { auth, db, googleProvider };

// ✅ Save contact form
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

// ✅ Register user
export const registerUser = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  await sendEmailVerification(userCredential.user);
  return userCredential.user;
};

// ✅ Login user
export const loginUser = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

// ✅ Logout user
export const logoutUser = async () => {
  await signOut(auth);
};

// ✅ Google Sign-In
export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};

// ✅ Reset password
export const resetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email);
};
