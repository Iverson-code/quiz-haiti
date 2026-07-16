import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { playRecord } from '../utils/sound.js'

export default function Result() {
  const { state } = useLocation()
  const navigate = useNavigate()

  const points = state?.points ?? 0
  const correctCount = state?.correctCount ?? 0
  const total = state?.total ?? 0
  const bestStreak = state?.bestStreak ?? 0
  const modeLabel = state?.modeLabel ?? 'Quiz'
  const isNewRecord = state?.isNewRecord ?? false
  const isDaily = state?.isDaily ?? false

  useEffect(() => {
    if (isNewRecord) playRecord()
  }, [isNewRecord])

  return (
    <div className="screen result-screen">
      <div className="result-flag">🇭🇹</div>
      <h1 className="home-v2-title" style={{ fontSize: 26 }}>RÉSULTAT</h1>
      <p className="result-cat">{modeLabel}</p>

      <div className="result-score-circle">
        <span className="result-score-number">{points}</span>
        <span className="result-score-total">points</span>
      </div>

      <p className="result-pct">{correctCount} bonnes réponses sur {total}</p>
      {bestStreak >= 2 && <p className="result-pct">🔥 Meilleure série : {bestStreak}</p>}

      {isNewRecord && <p className="result-record">🏆 Nouveau record dans cette catégorie !</p>}
      {isDaily && <p className="result-record">📅 Reviens demain pour un nouveau défi !</p>}

      <div className="result-actions">
        <button className="btn-primary" onClick={() => navigate('/mode')}>Rejouer</button>
        <button className="btn-outline" onClick={() => navigate('/')}>Accueil</button>
      </div>
    </div>
  )
}
