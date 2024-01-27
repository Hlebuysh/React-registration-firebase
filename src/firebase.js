import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

var firebaseConfig = {
  apiKey: "AIzaSyDNfKrmfbCfxtkBOUqPxKnVJyzFZdWWG3g",
  authDomain: "test-app-77345.firebaseapp.com",
  projectId: "test-app-77345",
  storageBucket: "test-app-77345.appspot.com",
  messagingSenderId: "308323914899",
  appId: "1:308323914899:web:6a6e92b641b7d78d65e966",
};

firebase.initializeApp(firebaseConfig);
export default firebase;
