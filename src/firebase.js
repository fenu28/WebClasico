import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCkVxsLzCNZJHco9wDU8Z0WE69-kvJI5gA",
  authDomain: "webclasico-eb5e4.firebaseapp.com",
  projectId: "webclasico-eb5e4",
  storageBucket: "webclasico-eb5e4.appspot.com",
  messagingSenderId: "125469366360",
  appId: "1:125469366360:web:e56c68858358cf372ed22d",
  measurementId: "G-TQ8QGV7D40"
};

const firebaseApp =  firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth} ;
export default db;