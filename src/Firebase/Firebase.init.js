// DANGERRRRRR
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtdgiOYlJpp4EWS3-8noi-AukHgZ1vZnw",
  authDomain: "react-firebase-authe-ef9a4.firebaseapp.com",
  projectId: "react-firebase-authe-ef9a4",
  storageBucket: "react-firebase-authe-ef9a4.firebasestorage.app",
  messagingSenderId: "299463115889",
  appId: "1:299463115889:web:86f30dde6c9c5dc03f07d0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);