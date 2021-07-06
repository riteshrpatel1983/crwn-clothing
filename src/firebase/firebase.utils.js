import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAOMkwNpsXTySzvgniSNz21WGzmvJdQkfI",
    authDomain: "crwn-db-ab894.firebaseapp.com",
    projectId: "crwn-db-ab894",
    storageBucket: "crwn-db-ab894.appspot.com",
    messagingSenderId: "552088545223",
    appId: "1:552088545223:web:1044c8dd30070726b9dbe2",
    measurementId: "G-70JNVB9T0W"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signinWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;