import { db } from "./firebase.js";
import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

async function createUser() {
  await addDoc(collection(db, "users"), {
    name: "Aaron S Christo",
    username: "aaronchristo",
    department: "CSC",
    year:"3'"
    crushRadar: "",
    bluetoothId: ""
  });

  console.log("User added!");
}

createUser();