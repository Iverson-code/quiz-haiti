import { useState, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import bloc1 from '../data/bloc1_dirigeants.json'
import bloc2 from '../data/bloc2_ueh.json'

const BLOCS = {
  bloc1: { title: "Les Dirigeants d'Haïti", data: bloc1 },
  bloc2: { title: 'Spécial Concours UEH', data: bloc2 },
}

const QUESTIONS_PER_GAME = 15

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function pickGameQuestions(allQuestions) {
  const picked = shuffle(allQuestions).slice(0, QUESTIONS_PER_GAME)
  return picked.map(q => {
    const optionObjs = q.options.map((text, i) => ({ text, isCorrect: i === q.correct }))
    const shuffledOptions = shuffle(optionObjs)
    return {
      q: q.q,
      options: shuffledOptions.map(o => o.text),
      correct: shuffledOptions.findIndex(o => o.isCorrect),
    }
  })
}

export default function SpecialQuiz() {
  const { blocId } = useParams()
  const navigate = useNavigate()
  const bloc = BLOCS[blocId]

  const questions = useMemo(() => bloc ? pickGameQuestions(bloc.data) : [], [blocId])

  const [qIndex, setQIndex] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)
  const [selected, setSelected] = useState(null)
  const [finished, setFinished] = useState(false)

  if (!bloc) {
    return (
      <div className="screen mode-screen">
        <button className="mode-back" onClick={() => navigate('/special')}>←</button>
        <h1 className="mode-title">BLOC INTROUVABLE</h1>
      </div>
    )
  }

  if (finished) {
    const pct = Math.round((correctCount / questions.length) * 100)
    return (
      <div className="screen mode-screen">
        <h1 className="mode-title">PARTIE TERMINÉE</h1>
        <p style={{ color: '#ccc', padding: '0 20px', fontSize: '18px' }}>
          {correctCount} / {questions.length} bonnes réponses ({pct}%)
        </p>
        <button className="mode-card" onClick={() => navigate('/special')} style={{ marginTop: 20 }}>
          <span className="mode-card__icon">🔁</span>
          <div className="mode-card__text">
            <span className="mode-card__title">Rejouer / Changer de bloc</span>
          </div>
        </button>
      </div>
    )
  }

  const question = questions[qIndex]

  function handleAnswer(i) {
    if (selected !== null) return
    setSelected(i)
    const isCorrect = i === question.correct

    setTimeout(() => {
      if (isCorrect) setCorrectCount(c => c + 1)
      if (qIndex + 1 >= questions.length) {
        setFinished(true)
      } else {
        setQIndex(qIndex + 1)
        setSelected(null)
      }
    }, 700)
  }

  return (
    <div className="screen mode-screen">
      <button className="mode-back" onClick={() => navigate('/special')}>←</button>
      <h1 className="mode-title">{bloc.title}</h1>
      <p style={{ color: '#aaa', padding: '0 20px' }}>
        Question {qIndex + 1}/{questions.length}
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
