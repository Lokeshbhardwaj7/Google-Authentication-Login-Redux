import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

const firebaseConfig = {
   apiKey: "AIzaSyBxVaLdnCsIsUzR5VPCra2CeHnpuA7BG5M",
   authDomain: "proven-answer-352705.firebaseapp.com",
   projectId: "proven-answer-352705",
   storageBucket: "proven-answer-352705.appspot.com",
   messagingSenderId: "805020835765",
   appId: "1:805020835765:web:c193a67b9ec70be75ac3fc"
 };   

 firebase.initializeApp(firebaseConfig);

 const auth = firebase.auth();
 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

 export {auth, googleAuthProvider};
