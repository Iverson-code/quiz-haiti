import { useNavigate } from 'react-router-dom'

export default function Help() {
  const navigate = useNavigate()

  return (
    <div className="screen">
      <button className="quiz-close" onClick={() => navigate('/')}>✕</button>
      <div className="home-v2-content">
        <h1 className="home-v2-title" style={{ fontSize: '1.5rem' }}>Aide & Contact</h1>
        <p>Une question, une idée, un bug à signaler ?</p>
        <a
          className="btn-outline"
          href="https://www.instagram.com/quiz_haiti"
          target="_blank"
          rel="noopener noreferrer"
        >
          📸 Instagram
        </a>
        <p style={{ marginTop: '2rem', opacity: 0.7, fontSize: '0.9rem' }}>
          Quiz Haïti créé par Saint-Hilaire Iverson Marc-Ferson
        </p>
      </div>
    </div>
  )
}
