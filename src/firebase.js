import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAEEJldsawKlDBwOJOTEMIzrlAeAk0JUSQ",
  authDomain: "tweetterapp.firebaseapp.com",
  projectId: "tweetterapp",
  storageBucket: "tweetterapp.appspot.com",
  messagingSenderId: "3053782815",
  appId: "1:3053782815:web:d04517f658c97a39f4522a",
  measurementId: "G-EH3NVDNGT3"
}



const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

export default db;