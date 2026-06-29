import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const form = document.querySelector("form");
const success = document.getElementById("success");
const slots = document.getElementById("slots-count");

async function loadSlots() {
  const snapshot = await getDocs(collection(db, "registrations"));

  slots.innerText = `${snapshot.size} / 12`;

  if (snapshot.size >= 12) {
    form.style.display = "none";
    slots.innerText = "12 / 12 (FULL)";
  }
}

loadSlots();

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    team: form[0].value,
    leader: form[1].value,
    uid: form[2].value,
    whatsapp: form[3].value,
    utr: form[4].value,
    status: "Pending",
    createdAt: new Date()
  };

  await addDoc(collection(db, "registrations"), data);

  success.style.display = "block";
  form.reset();

  loadSlots();
});
