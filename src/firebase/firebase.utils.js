import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBjjOClQNZ18kjEFYU_nv1Y45FAbEq-LCI",
  authDomain: "crwn-db-2cb98.firebaseapp.com",
  projectId: "crwn-db-2cb98",
  storageBucket: "crwn-db-2cb98.appspot.com",
  messagingSenderId: "89500935684",
  appId: "1:89500935684:web:494cee66d99954eec13751",
  measurementId: "G-ZYJRS91PLW",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
