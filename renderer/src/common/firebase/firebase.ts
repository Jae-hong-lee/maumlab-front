// firebase config
import { initializeApp } from "firebase/app";
// 인증관련
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCxK_7Pr0HNSF_vI_nj0aCa8p4J2vxjm4A",
  authDomain: "chat-maum.firebaseapp.com",
  projectId: "chat-maum",
  storageBucket: "chat-maum.appspot.com",
  messagingSenderId: "590383490162",
  appId: "1:590383490162:web:3c0f7ae8e8dd33e0088eeb",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const Storage = getStorage(app);
const db = getFirestore(app);

export { auth, db, Storage };
