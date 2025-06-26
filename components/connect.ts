// firebase.ts
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, child } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDYSS_ySHJBjHDItPeR8-9BqoN8-nlurJg",
  authDomain: "theusers-233fb.firebaseapp.com",
  databaseURL: "https://theusers-233fb.firebaseio.com",
  projectId: "theusers-233fb",
  storageBucket: "theusers-233fb.appspot.com",
  messagingSenderId: "1065347746590",
  appId: "1:1065347746590:web:fd42cb02aba020eade970f",
  measurementId: "G-J5KGSFQ6D6"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, get, child };
