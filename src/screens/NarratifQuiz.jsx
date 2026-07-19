import { useState, useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import chapters from '../data/narratif_chapters.json'

const REGEN_MS = 20 * 60 * 1000

function getLostLives() {
  try {
    return JSON.parse(localStorage.getItem('narratif_lost_lives') || '[]')
  } catch {
    return []
  }
}

function saveLostLives(arr) {
  localStorage.setItem('narratif_lost_lives', JSON.stringify(arr))
}

function markChapterCompleted(id) {
  const done = JSON.parse(localStorage.getItem('narratif_completed') || '[]')
  if (!done.includes(id)) {
    done.push(id)
    localStorage.setItem('narratif_completed', JSON.stringify(done))
  }
}

function computeAvailableLives(maxLives) {
  const now = Date.now()
  const lost = getLostLives().filter(t => now - t < REGEN_MS)
  saveLostLives(lost)
  const available = maxLives - lost.length
  return Math.max(0, Math.min(maxLives, available))
}

function nextRegenIn() {
  const now = Date.now()
  const lost = getLostLives().filter(t => now - t < REGEN_MS)
  if (lost.length === 0) return 0
  const soonest = Math.min(...lost)
  return REGEN_MS - (now - soonest)
}

function loseOneLife() {
  const lost = getLostLives()
  lost.push(Date.now())
  saveLostLives(lost)
}

function formatCountdown(ms) {
  const totalSec = Math.max(0, Math.ceil(ms / 1000))
  const m = Math.floor(totalSec / 60)
  const s = totalSec % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

export default function NarratifQuiz() {
  const { chapterId } = useParams()
  const navigate = useNavigate()
  const chapter = useMemo(() => chapters.find(c => c.id === chapterId), [chapterId])

  const [lives, setLives] = useState(() => chapter ? computeAvailableLives(chapter.lives) : 0)
  const [qIndex, setQIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [selected, setSelected] = useState(null)
  const [finished, setFinished] = useState(false)
  const [, forceTick] = useState(0)

  useEffect(() => {
    if (lives > 0) return
    const t = setInterval(() => forceTick(x => x + 1), 1000)
    return () => clearInterval(t)
  }, [lives])

  if (!chapter) {
    return (
      <div className="screen mode-screen">
        <button className="mode-back" onClick={() => navigate('/narratif')}>←</button>
        <h1 className="mode-title">CHAPITRE INTROUVABLE</h1>
      </div>
    )
  }

  if (lives <= 0 && !finished) {
    const ms = nextRegenIn()
    return (
      <div className="screen mode-screen">
        <button className="mode-back" onClick={() => navigate('/narratif')}>←</button>
        <h1 className="mode-title">PLUS DE VIES</h1>
        <p style={{ color: '#ccc', padding: '0 20px' }}>
          Toutes tes vies sont épuisées pour ce chapitre.
        </p>
        <p style={{ color: '#f5c518', padding: '0 20px', fontSize: '22px' }}>
          Prochaine vie dans {formatCountdown(ms)}
        </p>
      </div>
    )
  }

  if (finished) {
    const totalQuestions = chapter.questions.length
    const pct = Math.round((correctCount / totalQuestions) * 100)
    const passed = pct >= 80
    if (passed) markChapterCompleted(chapter.id)

    return (
      <div className="screen mode-screen">
        <h1 className="mode-title">{passed ? 'CHAPITRE RÉUSSI ✅' : 'CHAPITRE ÉCHOUÉ ❌'}</h1>
        <p style={{ color: '#ccc', padding: '0 20px', fontSize: '18px' }}>
          {correctCount} / {totalQuestions} bonnes réponses ({pct}%)
        </p>
        <p style={{ color: '#aaa', padding: '0 20px' }}>
          {passed ? 'Chapitre suivant débloqué !' : 'Il te faut au moins 80% pour débloquer la suite.'}
        </p>
        <button className="mode-card" onClick={() => navigate('/narratif')} style={{ marginTop: 20 }}>
          <span className="mode-card__icon">🗺️</span>
          <div className="mode-card__text">
            <span className="mode-card__title">Retour à la campagne</span>
          </div>
        </button>
      </div>
    )
  }

  const question = chapter.questions[qIndex]

  function handleAnswer(i) {
    if (selected !== null) return
    setSelected(i)
    const isCorrect = i === question.correct

    setTimeout(() => {
      let newLives = lives
      if (isCorrect) {
        setCorrectCount(c => c + 1)
      } else {
        loseOneLife()
        newLives = lives - 1
        setLives(newLives)
      }

      if (newLives <= 0) {
        setFinished(true)
        return
      }

      if (qIndex + 1 >= chapter.questions.length) {
        setFinished(true)
      } else {
        setQIndex(qIndex + 1)
        setSelected(null)
      }
    }, 700)
  }

  return (
    <div className="screen mode-screen">
      <button className="mode-back" onClick={() => navigate('/narratif')}>←</button>
      <h1 className="mode-title">{chapter.title}</h1>
      <p style={{ color: '#aaa', padding: '0 20px' }}>
        ❤️ {lives} vies · Question {qIndex + 1}/{chapter.questions.length}
      </p>

      <div className="mode-list">
        <div className="mode-card" style={{ cursor: 'default' }}>
          <div className="mode-card__text">
            <span className="mode-card__title">{question.q}</span>
          </div>
        </div>

        {question.options.map((opt, i) => {
          let bg = null
          if (selected !== null) {
            if (i === question.correct) bg = '#1e7e34'
            else if (i === selected) bg = '#a12626'
          }
          return (
            <button
              key={i}
              className="mode-card"
              style={bg ? { background: bg } : undefined}
              onClick={() => handleAnswer(i)}
              disabled={selected !== null}
            >
              <div className="mode-card__text">
                <span className="mode-card__title">{opt}</span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
