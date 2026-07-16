import { useNavigate } from 'react-router-dom'
import { getBadgeStatus } from '../utils/progress.js'

export default function Badges() {
  const navigate = useNavigate()
  const badges = getBadgeStatus()
  const unlockedCount = badges.filter(b => b.unlocked).length

  return (
    <div className="screen mode-screen">
      <button className="mode-back" onClick={() => navigate('/profil')}>←</button>
      <h1 className="mode-title">BADGES</h1>
      <p className="leaderboard-note">{unlockedCount} / {badges.length} débloqués</p>

      <div className="mode-list">
        {badges.map(b => (
          <div
            key={b.id}
            className={"mode-card mode-card--static badge-card" + (b.unlocked ? '' : ' badge-card--locked')}
          >
            <span className="mode-card__icon">{b.unlocked ? b.icon : '🔒'}</span>
            <div className="mode-card__text">
              <span className="mode-card__title">{b.name}</span>
              <span className="mode-card__subtitle">{b.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
