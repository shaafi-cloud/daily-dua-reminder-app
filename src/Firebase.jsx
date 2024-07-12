import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAOCnBJqKYG0cbJlxIeWTTVrCHRVS9Mb_E",
  authDomain: "daily-dua-reminder.firebaseapp.com",
  projectId: "daily-dua-reminder",
  storageBucket: "daily-dua-reminder.appspot.com",
  messagingSenderId: "269447530870",
  appId: "1:269447530870:web:f26703a47bae6baef95257"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };