import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDLnSgxhMOXQb7tIoK55-Vjw7t0k7a1wo4",
  authDomain: "password-app-5fd14.firebaseapp.com",
  projectId: "password-app-5fd14",
  storageBucket: "password-app-5fd14.appspot.com",
  messagingSenderId: "956207661441",
  appId: "1:956207661441:web:7ca8ca52283668a743a880"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();