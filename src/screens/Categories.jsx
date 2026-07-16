import { useNavigate } from 'react-router-dom'
import categories from '../data/categories.js'
import { getBestScore } from '../utils/storage.js'

export default function Categories() {
  const navigate = useNavigate()

  return (
    <div className="screen mode-screen">
      <button className="mode-back" onClick={() => navigate('/mode')}>←</button>
      <h1 className="mode-title">CHOISIS UNE CATÉGORIE</h1>

      <div className="mode-list">
        {categories.map(cat => {
          const best = getBestScore(cat.id)
          return (
            <button
              key={cat.id}
              className="mode-card"
              onClick={() => navigate(`/quiz/${cat.id}`)}
            >
              <span className="mode-card__icon">{cat.icon}</span>
              <div className="mode-card__text">
                <span className="mode-card__title">{cat.name}</span>
                <span className="mode-card__subtitle">{cat.subtitle}</span>
              </div>
              {best > 0 && <span className="mode-card__best">🏆 {best}</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}
