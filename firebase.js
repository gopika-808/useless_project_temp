  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBBWFp_S8zBdw4UYDP7H-v_oLrcMj2OGzQ",
  authDomain: "crushradar-b2eae.firebaseapp.com",
  projectId: "crushradar-b2eae",
  storageBucket: "crushradar-b2eae.firebasestorage.app",
  messagingSenderId: "851073393229",
  appId: "1:851073393229:web:0043b421cd8db60bf8f204",
  measurementId: "G-YWGNZNPGNS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; 