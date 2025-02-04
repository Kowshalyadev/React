import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCStSONl8XnMh4ekt55vrwi1n_4jByUjtA",
  authDomain: "ptroutes-7412f.firebaseapp.com",
  projectId: "ptroutes-7412f",
  storageBucket: "ptroutes-7412f.firebasestorage.app",
  messagingSenderId: "832163035529",
  appId: "1:832163035529:web:60398f175340408d05c958",
  measurementId: "G-CYSW83NG6K"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Set authentication persistence to session (optional: use 'local' for permanent login)
setPersistence(auth, browserSessionPersistence)
  .then(() => console.log("Firebase Auth persistence set"))
  .catch((error) => console.error("Error setting persistence:", error));

export { app, auth };
