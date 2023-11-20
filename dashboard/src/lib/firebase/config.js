import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyAo7KMpE-ZVYHABWZaG6PmOvSbgThNrRKM",

  authDomain: "tiaa-surplus.firebaseapp.com",

  projectId: "tiaa-surplus",

  storageBucket: "tiaa-surplus.appspot.com",

  messagingSenderId: "1060829446769",

  appId: "1:1060829446769:web:274c65066d10c535df91d0"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
