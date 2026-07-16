const PREFIX = 'quizhaiti_'

export function getBestScore(catId) {
  const raw = localStorage.getItem(PREFIX + 'best_' + catId)
  return raw ? JSON.parse(raw) : 0
}

export function setBestScoreIfHigher(catId, score) {
  const current = getBestScore(catId)
  if (score > current) {
    localStorage.setItem(PREFIX + 'best_' + catId, JSON.stringify(score))
    return true
  }
  return false
}

export function getAllBestScores() {
  const out = {}
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key && key.startsWith(PREFIX + 'best_')) {
      const catId = key.replace(PREFIX + 'best_', '')
      out[catId] = JSON.parse(localStorage.getItem(key))
    }
  }
  return out
}

export function getProfileName() {
  return localStorage.getItem(PREFIX + 'profile_name') || 'Joueur'
}

export function setProfileName(name) {
  localStorage.setItem(PREFIX + 'profile_name', name)
}

export function todayKey() {
  const d = new Date()
  return `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`
}

export function seededShuffle(arr, seedStr) {
  let seed = 0
  for (let i = 0; i < seedStr.length; i++) seed = (seed * 31 + seedStr.charCodeAt(i)) >>> 0

  function rand() {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }

  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function getDailyDoneScore() {
  const raw = localStorage.getItem(PREFIX + 'daily_' + todayKey())
  return raw ? JSON.parse(raw) : null
}

export function setDailyDoneScore(score) {
  localStorage.setItem(PREFIX + 'daily_' + todayKey(), JSON.stringify(score))
}
