import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxPGV2ZXMjUIgJmau2SCP-63XxSXZzfrk",
  authDomain: "authgooge-7dcd7.firebaseapp.com",
  projectId: "authgooge-7dcd7",
  storageBucket: "authgooge-7dcd7.appspot.com",
  messagingSenderId: "1043868648450",
  appId: "1:1043868648450:web:c6b37e804c0a8abacf931b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user; // Contains user details
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout Error:", error);
    throw error;
  }
};
