// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAVxiUvVsHE4WMNXQRSBG_DodjwivbDbcI',
  authDomain: 'webstack-projects.firebaseapp.com',
  projectId: 'webstack-projects',
  storageBucket: 'webstack-projects.appspot.com',
  messagingSenderId: '155637577958',
  appId: '1:155637577958:web:3299ff16398e497eaba327',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
