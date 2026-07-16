import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import questions from '../data/questions.js'
import categories from '../data/categories.js'
import {
  getBestScore, setBestScoreIfHigher,
  seededShuffle, todayKey, setDailyDoneScore
} from '../utils/storage.js'
import { playCorrect, playWrong, playCategoryChime } from '../utils/sound.js'
import { addXP, recordGameStats, addHistoryEntry } from '../utils/progress.js'
import { submitGameResult } from '../firebase/leaderboard.js'

const BASE_TIME = 25
const MIN_TIME = 12
const TIME_DROP_EVERY = 5
const DAILY_COUNT = 10
const MAX_COMBO_BONUS = 0.5

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function timeLimitFor(index) {
  return Math.max(MIN_TIME, BASE_TIME - Math.floor(index / TIME_DROP_EVERY))
}

const allQuestions = Object.values(questions).flat()

export default function Quiz() {
  const { catId } = useParams()
  const navigate = useNavigate()

  const isSurvie = catId === 'survie'
  const isDaily = catId === 'quizdujour'
  const category = categories.find(c => c.id === catId)
  const MAX_LIVES = isSurvie ? 5 : 1

  const modeLabel = isSurvie ? 'Survie Infinie' : isDaily ? 'Quiz du Jour' : (category?.name || 'Quiz')

  const basePool = useMemo(() => {
    if (isDaily) return seededShuffle(allQuestions, todayKey()).slice(0, DAILY_COUNT)
    if (isSurvie) return shuffle(allQuestions)
    return shuffle(questions[catId] || [])
  }, [catId, isSurvie, isDaily])

  const [pool, setPool] = useState(basePool)
  const [index, setIndex] = useState(0)
  const [points, setPoints] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [lives, setLives] = useState(MAX_LIVES)
  const [selected, setSelected] = useState(null)
  const [timeLimit, setTimeLimit] = useState(timeLimitFor(0))
  const [timeLeft, setTimeLeft] = useState(timeLimitFor(0))
  const timerRef = useRef(null)
  const timeLeftRef = useRef(timeLimitFor(0))

  const current = pool[index]

  useEffect(() => {
    if (isSurvie && current === undefined && pool.length > 0) {
      setPool(p => [...p, ...shuffle(allQuestions)])
    }
  }, [isSurvie, current, pool])

  useEffect(() => {
    if (!current) return
    const limit = timeLimitFor(index)
    setSelected(null)
    setTimeLimit(limit)
    setTimeLeft(limit)
    timeLeftRef.current = limit
    playCategoryChime(catId)
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      timeLeftRef.current -= 1
      if (timeLeftRef.current <= 0) {
        clearInterval(timerRef.current)
        setTimeLeft(0)
        handleAnswer(null)
        return
      }
      setTimeLeft(timeLeftRef.current)
    }, 1000)
    return () => clearInterval(timerRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, current])

  function finishQuiz(finalPoints, totalAnswered) {
    let isNewRecord = false
    if (isDaily) {
      setDailyDoneScore(finalPoints)
    } else {
      const key = isSurvie ? 'survie' : catId
      isNewRecord = setBestScoreIfHigher(key, finalPoints)
    }

    addXP(finalPoints)
    recordGameStats({
      catId: isSurvie ? 'survie' : catId,
      correctCount,
      total: totalAnswered,
      bestStreak,
      isDaily
    })
    addHistoryEntry({
      catId,
      modeLabel,
      points: finalPoints,
      correctCount,
      total: totalAnswered,
      bestStreak
    })
    submitGameResult({
      catId: isSurvie ? 'survie' : catId,
      points: finalPoints,
      correctCount,
      total: totalAnswered
    })

    navigate('/result', {
      state: {
        points: finalPoints,
        correctCount,
        total: totalAnswered,
        bestStreak,
        modeLabel,
        isNewRecord,
        isDaily
      }
    })
  }

  function handleAnswer(optionIndex) {
    if (selected !== null) return
    clearInterval(timerRef.current)
    setSelected(optionIndex)

    const isCorrect = optionIndex === current.correct
    const timeAtAnswer = timeLeftRef.current
    let nextPoints = points
    let nextStreak = streak
    let nextCorrect = correctCount
    let nextLives = lives

    if (isCorrect) {
      playCorrect()
      nextStreak = streak + 1
      const comboMultiplier = 1 + Math.min(nextStreak - 1, 10) * (MAX_COMBO_BONUS / 10)
      const gained = Math.round(Math.max(timeAtAnswer, 0) * 10 * comboMultiplier)
      nextPoints = points + gained
      nextCorrect = correctCount + 1
    } else {
      playWrong()
      nextStreak = 0
      nextLives = lives - 1
    }

    setPoints(nextPoints)
    setStreak(nextStreak)
    setCorrectCount(nextCorrect)
    setLives(nextLives)
    setBestStreak(b => Math.max(b, nextStreak))

    setTimeout(() => {
      if (nextLives <= 0) {
        finishQuiz(nextPoints, index + 1)
        return
      }
      if (!isSurvie && index + 1 >= pool.length) {
        finishQuiz(nextPoints, pool.length)
        return
      }
      setIndex(i => i + 1)
    }, 900)
  }

  if (!current) {
    return (
      <div className="screen quiz-screen">
        <div className="quiz-empty">
          <p>Pas encore de questions pour ce mode.</p>
          <button className="btn-outline" onClick={() => navigate('/mode')}>Retour</button>
        </div>
      </div>
    )
  }

  return (
    <div className="screen quiz-screen">
      <div className="quiz-topbar">
        <button className="quiz-close" onClick={() => navigate('/mode')}>✕</button>
        <div className="quiz-lives">
          {Array.from({ length: MAX_LIVES }).map((_, i) => (
            <span key={i} className={i < lives ? 'heart heart--full' : 'heart heart--empty'}>♥</span>
          ))}
        </div>
        <div className="quiz-score">{points} pts</div>
      </div>

      {streak >= 2 && (
        <div className="quiz-combo">🔥 Série de {streak} — bonus x{(1 + Math.min(streak - 1, 10) * (MAX_COMBO_BONUS / 10)).toFixed(2)}</div>
      )}

      <div className="quiz-progress-track">
        <div
          className="quiz-progress-fill"
          style={{ width: `${(timeLeft / timeLimit) * 100}%` }}
        />
      </div>

      <div className="quiz-question-index">{modeLabel} · Question {index + 1} · {timeLeft}s</div>

      <div className="quiz-card">
        <p className="quiz-question">{current.q}</p>
      </div>

      <div className="quiz-options">
        {current.options.map((opt, i) => {
          let cls = 'quiz-option'
          if (selected !== null) {
            if (i === current.correct) cls += ' quiz-option--correct'
            else if (i === selected) cls += ' quiz-option--wrong'
          }
          return (
            <button
              key={i}
              className={cls}
              disabled={selected !== null}
              onClick={() => handleAnswer(i)}
            >
              {opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}
