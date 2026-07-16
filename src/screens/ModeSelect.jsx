import { useNavigate } from 'react-router-dom'
import { getDailyDoneScore } from '../utils/storage.js'

export default function ModeSelect() {
  const navigate = useNavigate()
  const dailyScore = getDailyDoneScore()

  return (
    <div className="screen mode-screen">
      <button className="mode-back" onClick={() => navigate('/')}>←</button>
      <h1 className="mode-title">CHOISIS TON MODE</h1>

      <div className="mode-list">
        <button className="mode-card" onClick={() => navigate('/quiz/quizdujour')}>
          <span className="mode-card__icon">📅</span>
          <div className="mode-card__text">
            <span className="mode-card__title">Quiz du Jour</span>
            <span className="mode-card__subtitle">
              {dailyScore !== null ? `Déjà joué aujourd'hui — score ${dailyScore}` : 'Défi quotidien spécial'}
            </span>
          </div>
        </button>

        <button className="mode-card" onClick={() => navigate('/quiz/survie')}>
          <span className="mode-card__icon">🎮</span>
          <div className="mode-card__text">
            <span className="mode-card__title">Survie Infinie</span>
            <span className="mode-card__subtitle">Questions sans fin jusqu'à épuisement des vies</span>
          </div>
        </button>

        <button className="mode-card" onClick={() => navigate('/categories')}>
          <span className="mode-card__icon">📚</span>
          <div className="mode-card__text">
            <span className="mode-card__title">Catégories</span>
            <span className="mode-card__subtitle">Choisis un thème précis à explorer</span>
          </div>
        </button>
      </div>
    </div>
  )
}
