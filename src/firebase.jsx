import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

// ✅ Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDbYfGy0fM0eWDdl5ovbQAlpv44Dcmr-to",
  authDomain: "my-portfolio-402a5.firebaseapp.com",
  databaseURL: "https://my-portfolio-402a5-default-rtdb.firebaseio.com",
  projectId: "my-portfolio-402a5",
  storageBucket: "my-portfolio-402a5.appspot.com",
  messagingSenderId: "964260655775",
  appId: "1:964260655775:web:b26c0f87da67209139a8aa",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Services
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// ✅ Export services and providers
export { auth, db, googleProvider, facebookProvider };

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

// ✅ Register a user
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// ✅ Login a user
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

// ✅ Logout a user
export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

// ✅ Google Sign-In
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    throw error;
  }
};

// ✅ Facebook Sign-In
export const signInWithFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    return result.user;
  } catch (error) {
    throw error;
  }
};
