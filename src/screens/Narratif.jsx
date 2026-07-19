import { useNavigate } from 'react-router-dom'

export default function Narratif() {
  const navigate = useNavigate()

  return (
    <div className="screen mode-screen">
      <button className="mode-back" onClick={() => navigate('/mode')}>←</button>
      <h1 className="mode-title">CAMPAGNE HISTORIQUE</h1>
      <p style={{ color: '#aaa', padding: '0 20px' }}>
        Les chapitres arrivent bientôt.
      </p>
    </div>
  )
}
