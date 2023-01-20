import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "chat-maum.firebaseapp.com",
  projectId: "chat-maum",
  storageBucket: "chat-maum.appspot.com",
  messagingSenderId: "590383490162",
  appId: "1:590383490162:web:3c0f7ae8e8dd33e0088eeb",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
