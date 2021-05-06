import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCp1ZimRfjMxHnmPU140hI519jsqwYxVGk",
  authDomain: "slackclone-79e7d.firebaseapp.com",
  projectId: "slackclone-79e7d",
  storageBucket: "slackclone-79e7d.appspot.com",
  messagingSenderId: "259405550759",
  appId: "1:259405550759:web:4fa0b7870b475b9411f782",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };