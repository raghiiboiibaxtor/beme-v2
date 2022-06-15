// Importing Firebase functions from SDKs
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

// BeMe's web app Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMEBQEH-S1nDhjXSWrm8oOoyyt4QTJnIs",
  authDomain: "beme-64162.firebaseapp.com",
  databaseURL: "https://beme-64162-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "beme-64162",
  storageBucket: "beme-64162.appspot.com",
  messagingSenderId: "48807753942",
  appId: "1:48807753942:web:22094a5f69ba588a2df177"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const _firestore_ = getFirestore(app); // Intialising Firestore as a variable and exporting it for global use.
export const _fbstorage_ = getStorage(app); // Grabbing a reference to the Firebase storage service, which is used to create more references in our storage bucket


export default app; // Exporting the "Firebase.WebApp" for global use.