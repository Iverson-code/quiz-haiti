import { doc, getDoc, setDoc, increment } from 'firebase/firestore'
import { db, auth } from './config.js'

export async function checkIsPremium() {
  const user = auth.currentUser
  if (!user) return false
  try {
    const snap = await getDoc(doc(db, 'user_premium', user.uid))
    if (!snap.exists()) return false
    return snap.data().isPremium === true
  } catch (err) {
    console.warn('checkIsPremium a échoué :', err)
    return false
  }
}

export async function recordGamePlayed() {
  const user = auth.currentUser
  if (!user) return 0
  const ref = doc(db, 'user_premium', user.uid)
  try {
    await setDoc(ref, { gamesSinceAd: increment(1) }, { merge: true })
    const snap = await getDoc(ref)
    return snap.data()?.gamesSinceAd || 0
  } catch (err) {
    console.warn('recordGamePlayed a échoué :', err)
    return 0
  }
}

export async function resetGamesSinceAd() {
  const user = auth.currentUser
  if (!user) return
  try {
    await setDoc(doc(db, 'user_premium', user.uid), { gamesSinceAd: 0 }, { merge: true })
  } catch (err) {
    console.warn('resetGamesSinceAd a échoué :', err)
  }
}
