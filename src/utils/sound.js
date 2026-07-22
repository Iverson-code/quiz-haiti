// Générateur de sons léger basé sur l'API Web Audio pour les effets sonores.
// La musique de fond utilise un vrai fichier audio (public/music/bgmusic.mp3).

let ctx = null
let musicAudio = null

const PREFIX = 'quizhaiti_'

function getCtx() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext
    ctx = new AC()
  }
  if (ctx.state === 'suspended') ctx.resume()
  return ctx
}

export function isSoundEnabled() {
  const v = localStorage.getItem(PREFIX + 'sound_on')
  return v === null ? true : v === 'true'
}
export function setSoundEnabled(v) {
  localStorage.setItem(PREFIX + 'sound_on', String(v))
}

export function isMusicEnabled() {
  const v = localStorage.getItem(PREFIX + 'music_on')
  return v === null ? true : v === 'true'
}
export function setMusicEnabled(v) {
  localStorage.setItem(PREFIX + 'music_on', String(v))
  if (!v) stopMusic()
}

function tone(freq, start, duration, { type = 'sine', gain = 0.18, glideTo = null } = {}) {
  const c = getCtx()
  const osc = c.createOscillator()
  const g = c.createGain()
  osc.type = type
  osc.frequency.setValueAtTime(freq, c.currentTime + start)
  if (glideTo) {
    osc.frequency.exponentialRampToValueAtTime(glideTo, c.currentTime + start + duration)
  }
  g.gain.setValueAtTime(0, c.currentTime + start)
  g.gain.linearRampToValueAtTime(gain, c.currentTime + start + 0.02)
  g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + start + duration)
  osc.connect(g)
  g.connect(c.destination)
  osc.start(c.currentTime + start)
  osc.stop(c.currentTime + start + duration + 0.05)
}

export function playCorrect() {
  if (!isSoundEnabled()) return
  tone(523.25, 0, 0.12, { type: 'sine', gain: 0.16 })
  tone(783.99, 0.09, 0.18, { type: 'sine', gain: 0.16 })
}

export function playWrong() {
  if (!isSoundEnabled()) return
  tone(220, 0, 0.28, { type: 'sawtooth', gain: 0.12, glideTo: 110 })
}

export function playTick() {
  if (!isSoundEnabled()) return
  tone(880, 0, 0.03, { type: 'square', gain: 0.03 })
}

export function playRecord() {
  if (!isSoundEnabled()) return
  tone(523.25, 0, 0.1, { gain: 0.15 })
  tone(659.25, 0.08, 0.1, { gain: 0.15 })
  tone(783.99, 0.16, 0.1, { gain: 0.15 })
  tone(1046.5, 0.24, 0.22, { gain: 0.18 })
}

const CATEGORY_FREQ = {
  histoire: 392.0,
  geographie: 349.23,
  culture: 415.3,
  musique: 440.0,
  litterature: 466.16,
  sport: 523.25,
  cuisine: 493.88,
  personnalites: 587.33,
  survie: 261.63,
  quizdujour: 659.25
}
export function playCategoryChime(catId) {
  if (!isSoundEnabled()) return
  const f = CATEGORY_FREQ[catId] || 440
  tone(f, 0, 0.15, { type: 'sine', gain: 0.07 })
}

function getMusicAudio() {
  if (!musicAudio) {
    musicAudio = new Audio('/music/bgmusic.mp3')
    musicAudio.loop = true
    musicAudio.volume = 0.3
  }
  return musicAudio
}

export function startMusic() {
  if (!isMusicEnabled()) return
  const audio = getMusicAudio()
  audio.play().catch(() => {})
}

export function stopMusic() {
  if (musicAudio) {
    musicAudio.pause()
    musicAudio.currentTime = 0
  }
}

// Coupe la musique quand l'app passe en arrière-plan (changement d'onglet,
// mise en veille de l'écran, ou sortie de l'app installée), et la reprend
// si elle jouait au retour.
let wasMusicPlayingBeforeHidden = false
if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      wasMusicPlayingBeforeHidden = !!(musicAudio && !musicAudio.paused)
      stopMusic()
    } else if (wasMusicPlayingBeforeHidden && isMusicEnabled()) {
      startMusic()
    }
  })
}
