import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBQ6wTXihuqRMnOfaVKHIRhYyFFd-g-OI",
  authDomain: "arttradesimulator.firebaseapp.com",
  projectId: "arttradesimulator",
  storageBucket: "arttradesimulator.appspot.com",
  messagingSenderId: "695799437429",
  appId: "1:695799437429:web:e03c38abc083cdbb1a803c"

  
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
