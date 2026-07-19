import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db } from './config.js'

export async function signUp(email, password, pseudo, region) {
  const cred = await createUserWithEmailAndPassword(auth, email, password)
  await updateProfile(cred.user, { displayName: pseudo })
  await setDoc(doc(db, 'users', cred.user.uid), {
    pseudo,
    email,
    region,
    createdAt: serverTimestamp()
  })
  await setDoc(doc(db, 'user_totals', cred.user.uid), {
    pseudo,
    region,
    totalPoints: 0
  })
  return cred.user
}

export async function signIn(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password)
  return cred.user
}

export async function signOutUser() {
  await signOut(auth)
}

export function subscribeAuth(callback) {
  return onAuthStateChanged(auth, callback)
}

export async function getUserProfile(uid) {
  const snap = await getDoc(doc(db, 'users', uid))
  return snap.exists() ? snap.data() : null
}

export function translateAuthError(code) {
  const map = {
    'auth/email-already-in-use': 'Cet e-mail est déjà utilisé par un compte.',
    'auth/invalid-email': "Adresse e-mail invalide.",
    'auth/weak-password': 'Le mot de passe doit faire au moins 6 caractères.',
    'auth/user-not-found': 'Aucun compte avec cet e-mail.',
    'auth/wrong-password': 'Mot de passe incorrect.',
    'auth/invalid-credential': 'E-mail ou mot de passe incorrect.',
    'auth/too-many-requests': 'Trop de tentatives, réessaie dans quelques minutes.',
    'auth/network-request-failed': 'Problème de connexion internet.'
  }
  return map[code] || 'Une erreur est survenue, réessaie.'
}
