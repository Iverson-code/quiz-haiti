import {
  collection, doc, setDoc, deleteDoc, getDocs, addDoc, updateDoc,
  query, where, serverTimestamp
} from 'firebase/firestore'
import { db, auth } from './config.js'

export async function searchUserByPseudo(pseudo) {
  const me = auth.currentUser
  const q = query(collection(db, 'users'), where('pseudo', '==', pseudo.trim()))
  const snap = await getDocs(q)
  const results = snap.docs
    .map(d => ({ uid: d.id, ...d.data() }))
    .filter(u => u.uid !== me?.uid)
  return results[0] || null
}

export async function sendFriendRequest(toUid, toPseudo) {
  const me = auth.currentUser
  if (!me) throw new Error('Non connecté')

  const existing = await getDocs(query(
    collection(db, 'friend_requests'),
    where('fromUid', '==', me.uid),
    where('toUid', '==', toUid),
    where('status', '==', 'pending')
  ))
  if (!existing.empty) return

  await addDoc(collection(db, 'friend_requests'), {
    fromUid: me.uid,
    fromPseudo: me.displayName || 'Joueur',
    toUid,
    toPseudo,
    status: 'pending',
    createdAt: serverTimestamp()
  })
}

export async function getIncomingRequests() {
  const me = auth.currentUser
  if (!me) return []
  const q = query(
    collection(db, 'friend_requests'),
    where('toUid', '==', me.uid),
    where('status', '==', 'pending')
  )
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export async function respondToRequest(requestId, fromUid, fromPseudo, accept) {
  const me = auth.currentUser
  if (!me) return

  await updateDoc(doc(db, 'friend_requests', requestId), {
    status: accept ? 'accepted' : 'declined'
  })

  if (accept) {
    await setDoc(doc(db, 'friendships', `${me.uid}_${fromUid}`), {
      uid: me.uid,
      friendUid: fromUid,
      friendPseudo: fromPseudo,
      since: serverTimestamp()
    })
    await setDoc(doc(db, 'friendships', `${fromUid}_${me.uid}`), {
      uid: fromUid,
      friendUid: me.uid,
      friendPseudo: me.displayName || 'Joueur',
      since: serverTimestamp()
    })
  }
}

export async function getFriends() {
  const me = auth.currentUser
  if (!me) return []
  const q = query(collection(db, 'friendships'), where('uid', '==', me.uid))
  const snap = await getDocs(q)
  return snap.docs.map(d => d.data())
}

export async function removeFriend(friendUid) {
  const me = auth.currentUser
  if (!me) return
  await deleteDoc(doc(db, 'friendships', `${me.uid}_${friendUid}`))
  await deleteDoc(doc(db, 'friendships', `${friendUid}_${me.uid}`))
}
