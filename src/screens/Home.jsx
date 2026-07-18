import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { startMusic } from '../utils/sound.js'
import { auth } from '../firebase/config.js'
import { subscribeAuth } from '../firebase/auth.js'
import { recordDailyLogin } from '../utils/progress.js'

export default function Home() {
  const navigate = useNavigate()
  const [user, setUser] = useState(auth.currentUser)
  const [loginReward, setLoginReward] = useState(null)

  useEffect(() => {
    const unsub = subscribeAuth(setUser)
    return unsub
  }, [])

  useEffect(() => {
    const result = recordDailyLogin()
    if (result.isNewDay) setLoginReward(result)
  }, [])

  function handlePlay() {
    startMusic()
    navigate('/mode')
  }

  return (
    <div className="screen home-screen-v2">
      <button className="home-settings-btn" onClick={() => { startMusic(); navigate('/parametres') }}>
        ⚙️
      </button>
      {!user && (
        <button
          className="home-settings-btn home-account-btn"
          onClick={() => { startMusic(); navigate('/connexion') }}
        >
          👤
        </button>
      )}
      <div className="home-v2-content">
        {loginReward && (
          <div className="login-streak-banner">
            🔥 Série de {loginReward.streak} jour{loginReward.streak > 1 ? 's' : ''} !
            <br />+{loginReward.rewardXP} XP
            <button className="login-streak-banner__close" onClick={() => setLoginReward(null)}>✕</button>
          </div>
        )}
        <div className="home-v2-flag">🇭🇹</div>
        <h1 className="home-v2-title">QUIZ HAÏTI</h1>
        <p className="home-v2-tagline">Toute l'histoire d'Haïti dans un jeu</p>

        <button className="btn-primary" onClick={handlePlay}>
          🎮 JOUER
        </button>
        <button className="btn-outline" onClick={() => { startMusic(); navigate('/classement') }}>
          🏆 CLASSEMENT
        </button>
        <button className="btn-outline" onClick={() => { startMusic(); navigate('/profil') }}>
          👤 MON PROFIL
        </button>
      </div>
    </div>
  )
}
