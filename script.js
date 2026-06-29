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
}

loadSlots();

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    team: form[0].value,
    leader: form[1].value,
    uid: form[2].value,
    whatsapp: form[3].value,
    createdAt: new Date()
  };

  await addDoc(collection(db, "registrations"), data);

  success.style.display = "block";
  form.reset();
  loadSlots();
});
import { db, storage } from "./firebase.js";

import {
  collection,
  addDoc,
  getDocs,
  query
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import {
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

const form = document.querySelector("form");
const success = document.getElementById("success");
const slots = document.getElementById("slots-count");

async function loadSlots() {
  const snapshot = await getDocs(query(collection(db, "registrations")));
  slots.innerText = `${snapshot.size} / 12`;

  if (snapshot.size >= 12) {
    form.style.display = "none";
    slots.innerText = "12 / 12 (FULL)";
  }
}

loadSlots();

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const team = form[0].value;
  const leader = form[1].value;
  const uid = form[2].value;
  const whatsapp = form[3].value;
  const file = form[4].files[0];

  if (!file) {
    alert("Please upload payment screenshot.");
    return;
  }

  const storageRef = ref(storage, "payments/" + Date.now() + "_" + file.name);

  await uploadBytes(storageRef, file);

  const screenshot = await getDownloadURL(storageRef);

  await addDoc(collection(db, "registrations"), {
    team,
    leader,
    uid,
    whatsapp,
    screenshot,
    createdAt: new Date()
  });

  success.style.display = "block";
  form.reset();

  loadSlots();
});
