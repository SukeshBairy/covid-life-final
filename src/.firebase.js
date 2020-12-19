import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD08UoSDBUuXcqAe8Loi9nXbxdsAHjWAJ8",
  authDomain: "covid-life-a3fd4.firebaseapp.com",
  projectId: "covid-life-a3fd4",
  storageBucket: "covid-life-a3fd4.appspot.com",
  messagingSenderId: "1071558879436",
  appId: "1:1071558879436:web:447550f63b2fbd273efa69",
  measurementId: "G-F0Q6BTVQQ6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
