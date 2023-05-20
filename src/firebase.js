// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-vKATUeeTaO6WQlLaHU91XAQYGH-EUQM",
  authDomain: "ave-beauty.firebaseapp.com",
  projectId: "ave-beauty",
  storageBucket: "ave-beauty.appspot.com",
  messagingSenderId: "377541519782",
  appId: "1:377541519782:web:7cc65659fe5353095fc767",
  measurementId: "G-BL94P7TMCR"
};  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getFirestore(app);

export {auth, provider, database}

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    })
    .catch((error) => {
      console.log(error);
    });
};
