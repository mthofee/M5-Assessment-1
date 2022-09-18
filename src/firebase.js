import * as firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBenN5uNOyvDfk4rZqbnQ9OR3A_uazpSRE",
  authDomain: "m5-backend-311e6.firebaseapp.com",
  projectId: "m5-backend-311e6",
  storageBucket: "m5-backend-311e6.appspot.com",
  messagingSenderId: "954382756920",
  appId: "1:954382756920:web:0651bfb8083ebaae878acd",
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebaseConfig;
