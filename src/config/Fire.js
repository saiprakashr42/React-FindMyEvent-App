import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBRL6RvpfpgWg688DJt6YXnuDTcn0CEk2o",
  authDomain: "projectappclientpanel.firebaseapp.com",
  databaseURL: "https://projectappclientpanel.firebaseio.com",
  projectId: "projectappclientpanel",
  storageBucket: "projectappclientpanel.appspot.com",
  messagingSenderId: "889269869811",
  appId: "1:889269869811:web:533e5a23ad72e6f3b2ab86",
};

const fire = firebase.initializeApp(config);
export default fire;
