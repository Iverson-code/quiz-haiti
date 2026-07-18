import { useNavigate } from 'react-router-dom'
import { startMusic } from '../utils/sound.js'

export default function Home() {
  const navigate = useNavigate()

  function handlePlay() {
    startMusic()
    navigate('/mode')
  }

  return (
    <div className="screen home-screen-v2">
      <button className="home-settings-btn" onClick={() => { startMusic(); navigate('/parametres') }}>
        ⚙️
      </button>
      <div className="home-v2-content">
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
