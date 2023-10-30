import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBCmH52wBoT0f2BSQ0KsjHzkT_kyLH4eSg",
  authDomain: "chatbot-db-23e4b.firebaseapp.com",
  projectId: "chatbot-db-23e4b",
  storageBucket: "chatbot-db-23e4b.appspot.com",
  messagingSenderId: "248088763570",
  appId: "1:248088763570:web:c2c1c40a0e96485ae07dab",
  measurementId: "G-65S8CYTGYG",
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;