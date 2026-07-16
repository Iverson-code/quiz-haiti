import {
  collection, doc, setDoc, getDoc, onSnapshot,
  query, where, orderBy, limit, getDocs, serverTimestamp
} from 'firebase/firestore'
import { db, auth } from './config.js'
import questions from '../data/questions.js'

const DUEL_QUESTION_COUNT = 10
const allQuestions = Object.values(questions).flat()

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export async function createDuel(opponentUid, opponentPseudo) {
  const me = auth.currentUser
  if (!me) throw new Error('Non connecté')

  const picked = shuffle(allQuestions).slice(0, DUEL_QUESTION_COUNT)
  const duelRef = doc(collection(db, 'duels'))

  await setDoc(duelRef, {
    challengerUid: me.uid,
    challengerPseudo: me.displayName || 'Joueur',
    opponentUid,
    opponentPseudo,
    status: 'pending',
    questions: picked,
    results: {},
    createdAt: serverTimestamp()
  })

  return duelRef.id
}

export function listenDuel(duelId, callback) {
  return onSnapshot(doc(db, 'duels', duelId), snap => {
    callback(snap.exists() ? { id: snap.id, ...snap.data() } : null)
  })
}

export async function acceptDuel(duelId) {
  await setDoc(doc(db, 'duels', duelId), { status: 'active' }, { merge: true })
}

export async function declineDuel(duelId) {
  await setDoc(doc(db, 'duels', duelId), { status: 'declined' }, { merge: true })
}

export async function submitDuelResult(duelId, points, correctCount) {
  const me = auth.currentUser
  if (!me) return

  const duelRef = doc(db, 'duels', duelId)
  const snap = await getDoc(duelRef)
  if (!snap.exists()) return
  const data = snap.data()

  const results = { ...(data.results || {}) }
  results[me.uid] = { points, correctCount, finishedAt: Date.now() }

  const bothDone = results[data.challengerUid] && results[data.opponentUid]

  await setDoc(duelRef, {
    results,
    status: bothDone ? 'completed' : data.status
  }, { merge: true })
}

export async function getMyDuels() {
  const me = auth.currentUser
  if (!me) return { incoming: [], mine: [] }

  const asOpponent = await getDocs(query(
    collection(db, 'duels'),
    where('opponentUid', '==', me.uid),
    where('status', '==', 'pending')
  ))
  const asChallenger = await getDocs(query(
    collection(db, 'duels'),
    where('challengerUid', '==', me.uid),
    orderBy('createdAt', 'desc'),
    limit(20)
  ))
  const asOpponentAll = await getDocs(query(
    collection(db, 'duels'),
    where('opponentUid', '==', me.uid),
    orderBy('createdAt', 'desc'),
    limit(20)
  ))

  const incoming = asOpponent.docs.map(d => ({ id: d.id, ...d.data() }))
  const mineMap = new Map()
  ;[...asChallenger.docs, ...asOpponentAll.docs].forEach(d => {
    mineMap.set(d.id, { id: d.id, ...d.data() })
  })
  const mine = Array.from(mineMap.values())
    .filter(d => d.status !== 'pending' || d.challengerUid === me.uid)
    .sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0))

  return { incoming, mine }
}
