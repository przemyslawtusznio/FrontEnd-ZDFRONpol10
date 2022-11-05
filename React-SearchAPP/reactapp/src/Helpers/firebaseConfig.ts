import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyCzbbVoYWTNqKTPnZ-owGNXjTgv3ru0qZU",
  authDomain: "reactapp-cb399.firebaseapp.com",
  projectId: "reactapp-cb399",
  storageBucket: "reactapp-cb399.appspot.com",
  messagingSenderId: "992939177927",
  appId: "1:992939177927:web:39e1bb8de6577cbe09cbe2",
  measurementId: "G-4XYDVZHP2L"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);