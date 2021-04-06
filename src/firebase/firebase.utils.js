import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAlXG-bBPgv_UAObzcAyfK463ImlzEfKAg",
    authDomain: "crown-db-4a716.firebaseapp.com",
    projectId: "crown-db-4a716",
    storageBucket: "crown-db-4a716.appspot.com",
    messagingSenderId: "404724715799",
    appId: "1:404724715799:web:ad3c966f88f7fbf4d22752",
    measurementId: "G-Z71M3K07KK"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;