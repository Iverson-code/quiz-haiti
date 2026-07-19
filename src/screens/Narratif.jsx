import { useNavigate } from 'react-router-dom'
import chapters from '../data/narratif_chapters.json'

function getCompleted() {
  try {
    return JSON.parse(localStorage.getItem('narratif_completed') || '[]')
  } catch {
    return []
  }
}

export default function Narratif() {
  const navigate = useNavigate()
  const completed = getCompleted()
  let lastEra = null

  return (
    <div className="screen mode-screen">
      <button className="mode-back" onClick={() => navigate('/mode')}>←</button>
      <h1 className="mode-title">CAMPAGNE HISTORIQUE</h1>

      <div className="mode-list">
        {chapters.map((ch, index) => {
          const isDone = completed.includes(ch.id)
          const isUnlocked = index === 0 || completed.includes(chapters[index - 1].id)
          const showEraHeader = ch.eraTitle !== lastEra
          lastEra = ch.eraTitle

          return (
            <div key={ch.id}>
              {showEraHeader && (
                <h2 style={{ color: '#f5c518', margin: '20px 0 8px', fontSize: '16px' }}>
                  {ch.eraTitle}
                </h2>
              )}
              <button
                className="mode-card"
                disabled={!isUnlocked}
                style={{ opacity: isUnlocked ? 1 : 0.4 }}
                onClick={() => isUnlocked && navigate(`/narratif/chapitre/${ch.id}`)}
              >
                <span className="mode-card__icon">
                  {isDone ? '✅' : isUnlocked ? '📖' : '🔒'}
                </span>
                <div className="mode-card__text">
                  <span className="mode-card__title">{ch.title}</span>
                  <span className="mode-card__subtitle">
                    {ch.questions.length} questions · {ch.lives} vies
                  </span>
                </div>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
