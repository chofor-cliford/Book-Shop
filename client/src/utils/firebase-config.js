import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClLtFxgFPG8KPRrt2e7INAkpMmEZ_4YHs",
  authDomain: "netflix-clone-e39ce.firebaseapp.com",
  projectId: "netflix-clone-e39ce",
  storageBucket: "netflix-clone-e39ce.appspot.com",
  messagingSenderId: "819587383123",
  appId: "1:819587383123:web:ca2cc74e82c55fdfd36ba6",
  measurementId: "G-J84394ZX0E"
};


const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);