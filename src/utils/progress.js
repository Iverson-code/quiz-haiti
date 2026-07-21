import { todayKey } from './storage.js'

const PREFIX = 'quizhaiti_'
const LEVEL_STEP = 5000
const HISTORY_MAX = 50

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}
function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function getXP() {
  return readJSON(PREFIX + 'xp_total', 0)
}

export function addXP(amount) {
  const total = getXP() + Math.max(0, amount)
  writeJSON(PREFIX + 'xp_total', total)
  return total
}

export function getLevelInfo() {
  const xp = getXP()
  const level = Math.floor(xp / LEVEL_STEP) + 1
  const xpIntoLevel = xp % LEVEL_STEP
  return { xp, level, xpIntoLevel, xpForNextLevel: LEVEL_STEP }
}

function getStats() {
  return readJSON(PREFIX + 'stats', {
    gamesPlayed: 0,
    correctByCategory: {},
    categoriesPlayed: [],
    maxStreakEver: 0,
    perfectGames: 0,
    dailyDaysPlayed: []
  })
}

export function recordGameStats({ catId, correctCount, total, bestStreak, isDaily }) {
  const stats = getStats()
  stats.gamesPlayed += 1
  stats.correctByCategory[catId] = (stats.correctByCategory[catId] || 0) + correctCount
  if (!stats.categoriesPlayed.includes(catId)) stats.categoriesPlayed.push(catId)
  stats.maxStreakEver = Math.max(stats.maxStreakEver, bestStreak)
  if (total >= 10 && correctCount === total) stats.perfectGames += 1
  if (isDaily) {
    const key = todayKey()
    if (!stats.dailyDaysPlayed.includes(key)) stats.dailyDaysPlayed.push(key)
  }
  writeJSON(PREFIX + 'stats', stats)
  return stats
}

export function getStatsSnapshot() {
  return getStats()
}

export function addHistoryEntry(entry) {
  const history = readJSON(PREFIX + 'history', [])
  history.unshift({ ...entry, date: new Date().toISOString() })
  writeJSON(PREFIX + 'history', history.slice(0, HISTORY_MAX))
}

export function getHistory() {
  return readJSON(PREFIX + 'history', [])
}

export function clearHistory() {
  localStorage.removeItem(PREFIX + 'history')
}

const CATEGORY_IDS = [
  'histoire', 'geographie', 'culture', 'musique',
  'litterature', 'sport', 'cuisine', 'personnalites'
]

export const BADGES = [
  {
    id: 'premier_pas', icon: '👣', name: 'Premier pas',
    description: 'Termine ta première partie',
    check: s => s.gamesPlayed >= 1
  },
  {
    id: 'serie_5', icon: '🔥', name: 'Série de 5',
    description: "Enchaîne 5 bonnes réponses d'affilée",
    check: s => s.maxStreakEver >= 5
  },
  {
    id: 'serie_10', icon: '💥', name: 'Série de 10',
    description: "Enchaîne 10 bonnes réponses d'affilée",
    check: s => s.maxStreakEver >= 10
  },
  {
    id: 'parfait', icon: '💯', name: 'Sans faute',
    description: 'Termine une partie de 10 questions ou plus sans erreur',
    check: s => s.perfectGames >= 1
  },
  {
    id: 'historien', icon: '🏛️', name: 'Historien',
    description: '50 bonnes réponses en Histoire',
    check: s => (s.correctByCategory.histoire || 0) >= 50
  },
  {
    id: 'geographe', icon: '🗺️', name: 'Géographe',
    description: '50 bonnes réponses en Géographie',
    check: s => (s.correctByCategory.geographie || 0) >= 50
  },
  {
    id: 'melomane', icon: '🎵', name: 'Mélomane',
    description: '30 bonnes réponses en Musique',
    check: s => (s.correctByCategory.musique || 0) >= 30
  },
  {
    id: 'gourmand', icon: '🍲', name: 'Gourmand',
    description: '30 bonnes réponses en Cuisine',
    check: s => (s.correctByCategory.cuisine || 0) >= 30
  },
  {
    id: 'toutes_categories', icon: '📚', name: 'Touche-à-tout',
    description: 'Joue au moins une fois dans chaque catégorie',
    check: s => CATEGORY_IDS.every(c => s.categoriesPlayed.includes(c))
  },
  {
    id: 'assidu', icon: '📅', name: 'Assidu',
    description: 'Joue le Quiz du Jour 7 jours différents',
    check: s => (s.dailyDaysPlayed || []).length >= 7
  },
  {
    id: 'vingt_parties', icon: '🎮', name: 'Habitué',
    description: 'Termine 20 parties',
    check: s => s.gamesPlayed >= 20
  },
  {
    id: 'cinq_mille_xp', icon: '⭐', name: 'Étoile montante',
    description: 'Atteins le niveau 2 (5000 XP)',
    check: (s, xp) => xp >= 5000
  }
]

export function getBadgeStatus() {
  const stats = getStats()
  const xp = getXP()
  return BADGES.map(b => ({ ...b, unlocked: b.check(stats, xp) }))
}

