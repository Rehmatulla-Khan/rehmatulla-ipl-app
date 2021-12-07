import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDdfwz9J0AiKLONfZ7h1GG5RZ7SogO0ljA",
  authDomain: "rehmatulla-ipl-app.firebaseapp.com",
  projectId: "rehmatulla-ipl-app",
  storageBucket: "rehmatulla-ipl-app.appspot.com",
  messagingSenderId: "141541244905",
  appId: "1:141541244905:web:36e08f123bf3586dbc5578",
  measurementId: "G-X1G8CKWMXT",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
