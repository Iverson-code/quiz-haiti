import {
  collection, doc, setDoc, getDoc, getDocs, addDoc,
  query, where, orderBy, limit, serverTimestamp, Timestamp,
  increment, getCountFromServer
} from 'firebase/firestore'
import { db, auth } from './config.js'

export async function submitGameResult({ catId, points, correctCount, total }) {
  const user = auth.currentUser
  if (!user) return

  const pseudo = user.displayName || 'Joueur'
  const uid = user.uid

  try {
    await addDoc(collection(db, 'game_results'), {
      uid, pseudo, catId, points, correctCount, total,
      playedAt: serverTimestamp()
    })

    const totalsRef = doc(db, 'user_totals', uid)
    const totalsSnap = await getDoc(totalsRef)
    const region = totalsSnap.exists() ? totalsSnap.data().region : null

    if (totalsSnap.exists()) {
      await setDoc(totalsRef, {
        pseudo,
        totalPoints: increment(points)
      }, { merge: true })
    } else {
      await setDoc(totalsRef, { pseudo, totalPoints: points })
    }

    if (region) {
      const team = region === 'Diaspora' ? 'diaspora' : 'haiti'
      await setDoc(doc(db, 'team_totals', team), {
        totalPoints: increment(points)
      }, { merge: true })
    }

    const bestId = `${uid}_${catId}`
    const bestRef = doc(db, 'user_category_best', bestId)
    const bestSnap = await getDoc(bestRef)
    const prevBest = bestSnap.exists() ? bestSnap.data().points : 0
    if (points > prevBest) {
      await setDoc(bestRef, { uid, pseudo, catId, points })
    }
  } catch (err) {
    console.warn('submitGameResult a échoué (probablement hors-ligne) :', err)
  }
}

export async function getTotalLeaderboard(max = 10) {
  const q = query(collection(db, 'user_totals'), orderBy('totalPoints', 'desc'), limit(max))
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ uid: d.id, ...d.data() }))
}

export async function getMyTotalRank(uid) {
  const meRef = doc(db, 'user_totals', uid)
  const meSnap = await getDoc(meRef)
  if (!meSnap.exists()) return null
  const me = meSnap.data()
  const countQ = query(collection(db, 'user_totals'), where('totalPoints', '>', me.totalPoints))
  const countSnap = await getCountFromServer(countQ)
  return { uid, pseudo: me.pseudo, totalPoints: me.totalPoints, rank: countSnap.data().count + 1 }
}

export async function getCategoryLeaderboard(catId, max = 10) {
  const q = query(
    collection(db, 'user_category_best'),
    where('catId', '==', catId),
    orderBy('points', 'desc'),
    limit(max)
  )
  const snap = await getDocs(q)
  return snap.docs.map(d => d.data())
}

export async function getMyCategoryRank(catId, uid) {
  const bestId = `${uid}_${catId}`
  const meRef = doc(db, 'user_category_best', bestId)
  const meSnap = await getDoc(meRef)
  if (!meSnap.exists()) return null
  const me = meSnap.data()
  const countQ = query(
    collection(db, 'user_category_best'),
    where('catId', '==', catId),
    where('points', '>', me.points)
  )
  const countSnap = await getCountFromServer(countQ)
  return { ...me, rank: countSnap.data().count + 1 }
}

export async function getRegionLeaderboard(region, max = 10) {
  const q = query(
    collection(db, 'user_totals'),
    where('region', '==', region),
    orderBy('totalPoints', 'desc'),
    limit(max)
  )
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ uid: d.id, ...d.data() }))
}

export async function getMyRegionRank(region, uid) {
  const meRef = doc(db, 'user_totals', uid)
  const meSnap = await getDoc(meRef)
  if (!meSnap.exists()) return null
  const me = meSnap.data()
  if (me.region !== region) return null
  const countQ = query(
    collection(db, 'user_totals'),
    where('region', '==', region),
    where('totalPoints', '>', me.totalPoints)
  )
  const countSnap = await getCountFromServer(countQ)
  return { uid, ...me, rank: countSnap.data().count + 1 }
}

export async function getTeamTotals() {
  const [haitiSnap, diasporaSnap] = await Promise.all([
    getDoc(doc(db, 'team_totals', 'haiti')),
    getDoc(doc(db, 'team_totals', 'diaspora'))
  ])
  return {
    haiti: haitiSnap.exists() ? haitiSnap.data().totalPoints : 0,
    diaspora: diasporaSnap.exists() ? diasporaSnap.data().totalPoints : 0
  }
}

async function computePeriodTotals(period) {
  const now = new Date()
  const start = new Date(now)
  if (period === 'day') {
    start.setHours(0, 0, 0, 0)
  } else if (period === 'week') {
    const day = start.getDay() || 7
    start.setDate(start.getDate() - day + 1)
    start.setHours(0, 0, 0, 0)
  } else {
    start.setDate(1)
    start.setHours(0, 0, 0, 0)
  }

  const q = query(
    collection(db, 'game_results'),
    where('playedAt', '>=', Timestamp.fromDate(start)),
    orderBy('playedAt', 'desc'),
    limit(1000)
  )
  const snap = await getDocs(q)

  const totals = {}
  snap.docs.forEach(d => {
    const data = d.data()
    if (!totals[data.uid]) totals[data.uid] = { uid: data.uid, pseudo: data.pseudo, totalPoints: 0 }
    totals[data.uid].totalPoints += data.points
  })

  return Object.values(totals).sort((a, b) => b.totalPoints - a.totalPoints)
}

export async function getPeriodLeaderboard(period, max = 10) {
  const all = await computePeriodTotals(period)
  return all.slice(0, max)
}

export async function getMyPeriodRank(period, uid) {
  const all = await computePeriodTotals(period)
  const idx = all.findIndex(r => r.uid === uid)
  if (idx === -1) return null
  return { ...all[idx], rank: idx + 1 }
}
