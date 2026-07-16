import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProfileName, setProfileName } from '../utils/storage.js'
import { getLevelInfo, getBadgeStatus } from '../utils/progress.js'
import { auth } from '../firebase/config.js'
import { subscribeAuth, signOutUser } from '../firebase/auth.js'

export default function Profile() {
  const navigate = useNavigate()
  const [name, setName] = useState(getProfileName())
  const [user, setUser] = useState(auth.currentUser)
  const { level, xp, xpIntoLevel, xpForNextLevel } = getLevelInfo()
  const badges = getBadgeStatus()
  const unlockedCount = badges.filter(b => b.unlocked).length
  const progressPct = Math.round((xpIntoLevel / xpForNextLevel) * 100)

  useEffect(() => {
    const unsub = subscribeAuth(setUser)
    return unsub
  }, [])

  function handleSave() {
    setProfileName(name.trim() || 'Joueur')
  }

  return (
    <div className="screen mode-screen">
      <button className="mode-back" onClick={() => navigate('/')}>←</button>
      <h1 className="mode-title">MON PROFIL</h1>

      <div className="mode-card mode-card--static account-card">
        {user ? (
          <>
            <span className="mode-card__icon">✅</span>
            <div className="mode-card__text">
              <span className="mode-card__title">{user.displayName || 'Compte'}</span>
              <span className="mode-card__subtitle">{user.email}</span>
            </div>
            <button className="btn-outline btn-outline--small" onClick={signOutUser}>
              Déconnexion
            </button>
          </>
        ) : (
          <>
            <span className="mode-card__icon">👤</span>
            <div className="mode-card__text">
              <span className="mode-card__title">Pas encore connecté</span>
              <span className="mode-card__subtitle">Crée un compte pour le classement en ligne</span>
            </div>
            <button className="btn-outline btn-outline--small" onClick={() => navigate('/connexion')}>
              Se connecter
            </button>
          </>
        )}
      </div>

      <div className="profile-block">
        <label className="profile-label">Ton pseudo (local)</label>
        <input
          className="profile-input"
          value={name}
          onChange={e => setName(e.target.value)}
          onBlur={handleSave}
          maxLength={20}
        />
      </div>

      <div className="profile-block level-block">
        <div className="level-block__header">
          <span className="level-block__badge">Niveau {level}</span>
          <span className="level-block__xp">{xp} XP au total</span>
        </div>
        <div className="level-block__track">
          <div className="level-block__fill" style={{ width: `${progressPct}%` }} />
        </div>
        <span className="level-block__caption">
          {xpIntoLevel} / {xpForNextLevel} XP avant le niveau {level + 1}
        </span>
      </div>

      <div className="mode-list">
        {user && (
          <button className="mode-card" onClick={() => navigate('/amis')}>
            <span className="mode-card__icon">🤝</span>
            <div className="mode-card__text">
              <span className="mode-card__title">Amis</span>
              <span className="mode-card__subtitle">Ajouter des amis et voir tes demandes</span>
            </div>
          </button>
        )}
        <button className="mode-card" onClick={() => navigate('/badges')}>
          <span className="mode-card__icon">🏅</span>
          <div className="mode-card__text">
            <span className="mode-card__title">Badges</span>
            <span className="mode-card__subtitle">{unlockedCount} / {badges.length} débloqués</span>
          </div>
        </button>
        <button className="mode-card" onClick={() => navigate('/historique')}>
          <span className="mode-card__icon">📊</span>
          <div className="mode-card__text">
            <span className="mode-card__title">Historique des parties</span>
            <span className="mode-card__subtitle">Voir ta progression récente</span>
          </div>
        </button>
      </div>

      <p className="profile-note">
        Les amis et le classement en ligne arrivent bientôt.
      </p>
    </div>
  )
}
