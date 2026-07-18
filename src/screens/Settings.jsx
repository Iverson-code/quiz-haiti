import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  isSoundEnabled, setSoundEnabled,
  isMusicEnabled, setMusicEnabled,
  startMusic, stopMusic
} from '../utils/sound.js'

const PREFIX = 'quizhaiti_'

export default function Settings() {
  const navigate = useNavigate()
  const [sound, setSound] = useState(isSoundEnabled())
  const [music, setMusic] = useState(isMusicEnabled())
  const [confirmReset, setConfirmReset] = useState(false)

  function toggleSound() {
    const next = !sound
    setSound(next)
    setSoundEnabled(next)
  }

  function toggleMusic() {
    const next = !music
    setMusic(next)
    setMusicEnabled(next)
    if (next) startMusic()
    else stopMusic()
  }

  function resetScores() {
    if (!confirmReset) {
      setConfirmReset(true)
      return
    }
    Object.keys(localStorage)
      .filter(k => k.startsWith(PREFIX + 'best_') || k.startsWith(PREFIX + 'daily_'))
      .forEach(k => localStorage.removeItem(k))
    setConfirmReset(false)
  }

  return (
    <div className="screen mode-screen">
      <button className="mode-back" onClick={() => navigate('/')}>←</button>
      <h1 className="mode-title">PARAMÈTRES</h1>

      <div className="mode-list">
        <div className="mode-card mode-card--static settings-row">
          <span className="mode-card__icon">🎵</span>
          <div className="mode-card__text">
            <span className="mode-card__title">Musique de fond</span>
            <span className="mode-card__subtitle">Nappe douce en boucle pendant le jeu</span>
          </div>
          <button className={"toggle-switch" + (music ? " toggle-switch--on" : "")} onClick={toggleMusic}>
            <span className="toggle-switch__knob" />
          </button>
        </div>

        <div className="mode-card mode-card--static settings-row">
          <span className="mode-card__icon">🔊</span>
          <div className="mode-card__text">
            <span className="mode-card__title">Effets sonores</span>
            <span className="mode-card__subtitle">Sons de bonne / mauvaise réponse</span>
          </div>
          <button className={"toggle-switch" + (sound ? " toggle-switch--on" : "")} onClick={toggleSound}>
            <span className="toggle-switch__knob" />
          </button>
        </div>

        <button className="mode-card" onClick={() => navigate('/aide')}>
          <span className="mode-card__icon">❓</span>
          <div className="mode-card__text">
            <span className="mode-card__title">Aide & Contact</span>
            <span className="mode-card__subtitle">Une question ou une proposition ? Écris-nous</span>
          </div>
        </button>

        <button className="mode-card" onClick={resetScores}>
          <span className="mode-card__icon">🗑️</span>
          <div className="mode-card__text">
            <span className="mode-card__title">
              {confirmReset ? 'Confirmer la réinitialisation ?' : 'Réinitialiser les scores'}
            </span>
            <span className="mode-card__subtitle">
              {confirmReset ? 'Appuie à nouveau pour confirmer' : 'Efface tous tes meilleurs scores locaux'}
            </span>
          </div>
        </button>
      </div>
    </div>
  )
}
