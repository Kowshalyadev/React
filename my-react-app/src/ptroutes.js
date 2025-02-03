import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Set authentication persistence to session (optional: use 'local' for permanent login)
setPersistence(auth, browserSessionPersistence)
  .then(() => console.log("Firebase Auth persistence set"))
  .catch((error) => console.error("Error setting persistence:", error));

export { app, auth };
