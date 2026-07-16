import { useNavigate } from 'react-router-dom'
import { getHistory } from '../utils/progress.js'

function formatDate(iso) {
  const d = new Date(iso)
  return d.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' }) +
    ' ' + d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
}

export default function History() {
  const navigate = useNavigate()
  const history = getHistory()
  const chartData = history.slice(0, 12).reverse()
  const maxPoints = Math.max(1, ...chartData.map(h => h.points))

  return (
    <div className="screen mode-screen">
      <button className="mode-back" onClick={() => navigate('/profil')}>←</button>
      <h1 className="mode-title">HISTORIQUE</h1>

      {history.length === 0 ? (
        <p className="leaderboard-note">Aucune partie jouée pour l'instant.</p>
      ) : (
        <>
          <div className="history-chart">
            {chartData.map((h, i) => (
              <div key={i} className="history-chart__bar-wrap" title={`${h.points} pts`}>
                <div
                  className="history-chart__bar"
                  style={{ height: `${Math.max(6, (h.points / maxPoints) * 100)}%` }}
                />
              </div>
            ))}
          </div>
          <p className="history-chart__caption">Points des 12 dernières parties</p>

          <div className="mode-list">
            {history.map((h, i) => (
              <div key={i} className="mode-card mode-card--static">
                <span className="mode-card__icon">
                  {h.catId === 'survie' ? '🎮' : h.catId === 'quizdujour' ? '📅' : '📚'}
                </span>
                <div className="mode-card__text">
                  <span className="mode-card__title">{h.modeLabel}</span>
                  <span className="mode-card__subtitle">
                    {formatDate(h.date)} · {h.correctCount}/{h.total} bonnes réponses
                  </span>
                </div>
                <span className="mode-card__best">{h.points} pts</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
