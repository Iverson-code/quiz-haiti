import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCWraUrCvA_GnsZOVxGqjKVUzXJSBQ8w6Q",
  authDomain: "quiz-haiti-8b4f5.firebaseapp.com",
  projectId: "quiz-haiti-8b4f5",
  storageBucket: "quiz-haiti-8b4f5.firebasestorage.app",
  messagingSenderId: "671658829494",
  appId: "1:671658829494:web:ff5bab049c85527d2ae817"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
