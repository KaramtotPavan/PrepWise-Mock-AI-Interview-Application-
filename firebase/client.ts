import { initializeApp, getApp, getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmVyMNQBD7ZgRbSHo7WNztbSBoAcK-MOw",
  authDomain: "prepwise-df0eb.firebaseapp.com",
  projectId: "prepwise-df0eb",
  storageBucket: "prepwise-df0eb.firebasestorage.app",
  messagingSenderId: "970339977624",
  appId: "1:970339977624:web:026ae3717496a8f7cd83ed",
  measurementId: "G-JVGJSVPNCG"
};

const app =!getApps().length? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
