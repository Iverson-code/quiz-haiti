import { useNavigate } from 'react-router-dom'
import bloc1 from '../data/bloc1_dirigeants.json'
import bloc2 from '../data/bloc2_ueh.json'

export default function CategorieSpeciale() {
  const navigate = useNavigate()

  return (
    <div className="screen mode-screen">
      <button className="mode-back" onClick={() => navigate('/mode')}>←</button>
      <h1 className="mode-title">CATÉGORIE SPÉCIALE</h1>

      <div className="mode-list">
        <button className="mode-card" onClick={() => navigate('/special/quiz/bloc1')}>
          <span className="mode-card__icon">🏛️</span>
          <div className="mode-card__text">
            <span className="mode-card__title">Les Dirigeants d'Haïti</span>
            <span className="mode-card__subtitle">
              Présidents, ministres, directeurs généraux (1993-2026)
            </span>
          </div>
        </button>

        <button className="mode-card" onClick={() => navigate('/special/quiz/bloc2')}>
          <span className="mode-card__icon">🎓</span>
          <div className="mode-card__text">
            <span className="mode-card__title">Spécial Concours UEH</span>
            <span className="mode-card__subtitle">
              Culture générale & actualité
            </span>
          </div>
        </button>
      </div>
    </div>
  )
}
