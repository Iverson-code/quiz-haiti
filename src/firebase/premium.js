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

export async function recordDefeat() {
  const user = auth.currentUser
  if (!user) return 0
  const ref = doc(db, 'user_premium', user.uid)
  try {
    await setDoc(ref, { consecutiveDefeats: increment(1) }, { merge: true })
    const snap = await getDoc(ref)
    return snap.data()?.consecutiveDefeats || 0
  } catch (err) {
    console.warn('recordDefeat a échoué :', err)
    return 0
  }
}

export async function resetDefeats() {
  const user = auth.currentUser
  if (!user) return
  try {
    await setDoc(doc(db, 'user_premium', user.uid), { consecutiveDefeats: 0 }, { merge: true })
  } catch (err) {
    console.warn('resetDefeats a échoué :', err)
  }
}
