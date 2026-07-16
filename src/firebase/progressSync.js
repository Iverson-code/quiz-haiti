import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db, auth } from './config.js'

const PREFIX = 'quizhaiti_'
const DEVICE_ONLY_KEYS = new Set([PREFIX + 'sound_on', PREFIX + 'music_on'])

function collectLocalProgress() {
  const data = {}
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key && key.startsWith(PREFIX) && !DEVICE_ONLY_KEYS.has(key)) {
      data[key] = localStorage.getItem(key)
    }
  }
  return data
}

export async function pushProgress() {
  const user = auth.currentUser
  if (!user) return
  try {
    await setDoc(doc(db, 'user_progress', user.uid), {
      data: collectLocalProgress(),
      updatedAt: serverTimestamp()
    })
  } catch (err) {
    console.warn('pushProgress a échoué (probablement hors-ligne) :', err)
  }
}

export async function pullProgress() {
  const user = auth.currentUser
  if (!user) return false
  try {
    const snap = await getDoc(doc(db, 'user_progress', user.uid))
    if (!snap.exists()) return false
    const { data } = snap.data()
    if (!data) return false
    Object.entries(data).forEach(([key, value]) => {
      localStorage.setItem(key, value)
    })
    return true
  } catch (err) {
    console.warn('pullProgress a échoué (probablement hors-ligne) :', err)
    return false
  }
}
