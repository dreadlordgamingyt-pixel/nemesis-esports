import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBHSy6WJAPghsby9M9giSipY6L5Qnj1a5c",
  authDomain: "nemesis-esports-56604.firebaseapp.com",
  projectId: "nemesis-esports-56604",
  storageBucket: "nemesis-esports-56604.firebasestorage.app",
  messagingSenderId: "408604883434",
  appId: "1:408604883434:web:a50af407aad5693dbb9a93",
  measurementId: "G-C5VR83DVL2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBHSy6WJAPghsby9M9giSipY6L5Qnj1a5c",
  authDomain: "nemesis-esports-56604.firebaseapp.com",
  projectId: "nemesis-esports-56604",
  storageBucket: "nemesis-esports-56604.firebasestorage.app",
  messagingSenderId: "408604883434",
  appId: "1:408604883434:web:a50af407aad5693dbb9a93",
  measurementId: "G-C5VR83DVL2"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
