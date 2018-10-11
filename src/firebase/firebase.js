import firebase from 'firebase/app';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyD2XZwbhbnnGNrXuBBMliQyo3kjFtSgVnM",
  authDomain: "nomadic-girder-109816.firebaseapp.com",
  databaseURL: "https://nomadic-girder-109816.firebaseio.com",
  projectId: "nomadic-girder-109816",
  storageBucket: "nomadic-girder-109816.appspot.com",
  messagingSenderId: "785474873267"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export { auth,};