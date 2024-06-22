import { initializeApp } from "firebase/app";
import {GoogleAuthProvider } from "firebase/auth";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import "firebase/compat/firestore"





// const firebaseConfig = {
//     apiKey: "AIzaSyAGVmHgtNtNLXmlwmn482ZcmxOqtiwiq-c",
//     authDomain: "enablers-cc7e8.firebaseapp.com",
//     projectId: "enablers-cc7e8",
//     storageBucket: "enablers-cc7e8.appspot.com",
//     messagingSenderId: "487444026258",
//     appId: "1:487444026258:web:f2b5757e8b36ad9cee274b",
//     measurementId: "G-MWJ0L3S2BQ"
//   };
const firebaseConfig = {
  apiKey: "AIzaSyD6hVRzxROzKeJIyxnOYp_vf587SkHDE1I",
  authDomain: "yoursol0-hallak.firebaseapp.com",
  projectId: "yoursol0-hallak",
  storageBucket: "yoursol0-hallak.appspot.com",
  messagingSenderId: "241551008733",
  appId: "1:241551008733:web:c10dbac477b0f86b618c34",
  measurementId: "G-9FFHSMX4X4"
};

  

const app = initializeApp(firebaseConfig);

// firebase.initializeApp(firebaseConfig); // not needed in v9
// const db = firebase.firestore();


const googleProvider = new GoogleAuthProvider();
// const signinWPopUP = new signInWithPopup();
const db = getFirestore(app);

const auth = getAuth(app);
// const db = firebase.firestore();

export { auth, googleProvider ,db};
