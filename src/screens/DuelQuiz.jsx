import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { auth } from '../firebase/config.js'
import { listenDuel, acceptDuel, declineDuel, submitDuelResult } from '../firebase/duels.js'
import { playCorrect, playWrong } from '../utils/sound.js'

const TIME_PER_QUESTION = 15

export default function DuelQuiz() {
  const { duelId } = useParams()
  const navigate = useNavigate()
  const me = auth.currentUser

  const [duel, setDuel] = useState(null)
  const [phase, setPhase] = useState('loading')
  const [index, setIndex] = useState(0)
  const [points, setPoints] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [selected, setSelected] = useState(null)
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION)
  const timerRef = useRef(null)
  const timeLeftRef = useRef(TIME_PER_QUESTION)
  const submittedRef = useRef(false)

  const isChallenger = duel && me && duel.challengerUid === me.uid
  const opponentUid = duel ? (isChallenger ? duel.opponentUid : duel.challengerUid) : null
  const opponentPseudo = duel ? (isChallenger ? duel.opponentPseudo : duel.challengerPseudo) : null

  useEffect(() => {
    if (!me) { navigate('/connexion'); return }
    const unsub = listenDuel(duelId, d => {
      setDuel(d)
      if (!d) { setPhase('error'); return }

      if (d.status === 'declined') { setPhase('declined'); return }
      if (d.status === 'completed') { setPhase('result'); return }

      const myResult = d.results?.[me.uid]
      if (myResult) { setPhase('waiting_opponent'); return }

      if (d.status === 'pending') {
        setPhase(d.challengerUid === me.uid ? 'waiting_accept' : 'invite')
      } else if (d.status === 'active') {
        setPhase('playing')
      }
    })
    return unsub
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duelId])

  const current = duel && phase === 'playing' ? duel.questions[index] : null

  useEffect(() => {
    if (!current) return
    setSelected(null)
    setTimeLeft(TIME_PER_QUESTION)
    timeLeftRef.current = TIME_PER_QUESTION
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

  function handleAnswer(optionIndex) {
    if (selected !== null || !current) return
    clearInterval(timerRef.current)
    setSelected(optionIndex)

    const isCorrect = optionIndex === current.correct
    let nextPoints = points
    let nextCorrect = correctCount
    if (isCorrect) {
      playCorrect()
      nextPoints = points + Math.max(timeLeftRef.current, 0) * 10
      nextCorrect = correctCount + 1
    } else {
      playWrong()
    }
    setPoints(nextPoints)
    setCorrectCount(nextCorrect)

    setTimeout(() => {
      if (index + 1 >= duel.questions.length) {
        if (!submittedRef.current) {
          submittedRef.current = true
          submitDuelResult(duelId, nextPoints, nextCorrect)
        }
      } else {
        setIndex(i => i + 1)
      }
    }, 800)
  }

  if (phase === 'loading') {
    return <div className="screen quiz-screen"><p className="leaderboard-note">Chargement du duel...</p></div>
  }

  if (phase === 'error') {
    return (
      <div className="screen mode-screen">
        <button className="mode-back" onClick={() => navigate('/duels')}>←</button>
        <p className="leaderboard-note">Ce duel n'existe plus.</p>
      </div>
    )
  }

  if (phase === 'declined') {
    return (
      <div className="screen mode-screen">
        <button className="mode-back" onClick={() => navigate('/duels')}>←</button>
        <p className="leaderboard-note">Ce duel a été refusé.</p>
      </div>
    )
  }

  if (phase === 'invite') {
    return (
      <div className="screen mode-screen">
        <button className="mode-back" onClick={() => navigate('/duels')}>←</button>
        <h1 className="mode-title">DÉFI REÇU</h1>
        <p className="leaderboard-note">
          {duel.challengerPseudo} te défie sur {duel.questions.length} questions !
        </p>
        <div className="result-actions">
          <button className="btn-primary" onClick={() => acceptDuel(duelId)}>Accepter</button>
          <button className="btn-outline" onClick={() => declineDuel(duelId)}>Refuser</button>
        </div>
      </div>
    )
  }

  if (phase === 'waiting_accept') {
    return (
      <div className="screen mode-screen">
        <button className="mode-back" onClick={() => navigate('/duels')}>←</button>
        <h1 className="mode-title">EN ATTENTE</h1>
        <p className="leaderboard-note">
          En attente que {duel.opponentPseudo} accepte ton défi...
        </p>
      </div>
    )
  }

  if (phase === 'waiting_opponent') {
    return (
      <div className="screen mode-screen">
        <button className="mode-back" onClick={() => navigate('/duels')}>←</button>
        <h1 className="mode-title">TERMINÉ !</h1>
        <p className="leaderboard-note">
          Ton score : {duel.results[me.uid].points} pts — en attente que {opponentPseudo} termine...
        </p>
      </div>
    )
  }

  if (phase === 'result') {
    const myRes = duel.results[me.uid]
    const oppRes = duel.results[opponentUid]
    const won = myRes.points > oppRes.points
    const tie = myRes.points === oppRes.points

    return (
      <div className="screen result-screen">
        <div className="result-flag">🇭🇹</div>
        <h1 className="home-v2-title" style={{ fontSize: 26 }}>
          {tie ? 'ÉGALITÉ !' : won ? 'VICTOIRE ! 🏆' : 'DÉFAITE'}
        </h1>

        <div className="duel-compare">
          <div className="duel-compare__side">
            <span className="duel-compare__name">Toi</span>
            <span className="duel-compare__score">{myRes.points}</span>
          </div>
          <span className="duel-compare__vs">VS</span>
          <div className="duel-compare__side">
            <span className="duel-compare__name">{opponentPseudo}</span>
            <span className="duel-compare__score">{oppRes.points}</span>
          </div>
        </div>

        <div className="result-actions">
          <button className="btn-primary" onClick={() => navigate('/duels')}>Retour aux duels</button>
          <button className="btn-outline" onClick={() => navigate('/')}>Accueil</button>
        </div>
      </div>
    )
  }

  if (!current) {
    return <div className="screen quiz-screen"><p className="leaderboard-note">Préparation...</p></div>
  }

  return (
    <div className="screen quiz-screen">
      <div className="quiz-topbar">
        <button className="quiz-close" onClick={() => navigate('/duels')}>✕</button>
        <div className="quiz-score">vs {opponentPseudo}</div>
        <div className="quiz-score">{points} pts</div>
      </div>

      <div className="quiz-progress-track">
        <div className="quiz-progress-fill" style={{ width: `${(timeLeft / TIME_PER_QUESTION) * 100}%` }} />
      </div>

      <div className="quiz-question-index">Question {index + 1} / {duel.questions.length} · {timeLeft}s</div>

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
            <button key={i} className={cls} disabled={selected !== null} onClick={() => handleAnswer(i)}>
              {opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}
