// Import the functions you need from the SDKs you need
// Musimy zamienic docelowy kierunek przez linki gstatic (ze ściągi lub z DOC'sów, do app wpisujemy app a do analytics analytics)
// Jest to ta sama ścieżka, ale podana przez link
// firebase/app = https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js
// firebase/analytics = https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
// Dodajemy import do rejestrecji uzytkowników
import { getAuth } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://www.firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import {getStorage} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9BYKP4PSDLd9DI81iZYLbn0IPz1PJkX8",
  authDomain: "zdfronpol10-firebase.firebaseapp.com",
  databaseURL: "https://zdfronpol10-firebase-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "zdfronpol10-firebase",
  storageBucket: "zdfronpol10-firebase.appspot.com",
  messagingSenderId: "833393494457",
  appId: "1:833393494457:web:e1995dc34d5942914a8e68",
  measurementId: "G-TKQNT7NJ7C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
// Aby exportować zainicjalizowane zaminne z firebase wystarczy dopisać export przed constami
export const auth = getAuth(app);
// Exportujemy getAuth przez zmienną auth
export const db = getDatabase(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);