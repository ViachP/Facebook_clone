import firebase from "firebase";
import "firebase/storage";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAS2XcMDem0tG92MolW-d8IHoCGTyhBQzE",
  authDomain: "facebook-clone-ab9a4.firebaseapp.com",
  projectId: "facebook-clone-ab9a4",
  storageBucket: "facebook-clone-ab9a4.appspot.com",
  messagingSenderId: "1064174238359",
  appId: "1:1064174238359:web:a634256c967f1f334407d2",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firebase();
const storage = firebase.storage();

export {db,storage};