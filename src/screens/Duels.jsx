import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getMyDuels } from '../firebase/duels.js'
import { auth } from '../firebase/config.js'

function statusLabel(d, myUid) {
  if (d.status === 'pending') return d.challengerUid === myUid ? 'En attente de réponse' : 'Défi reçu'
  if (d.status === 'declined') return 'Refusé'
  if (d.status === 'active') return 'En cours'
  if (d.status === 'completed') {
    const myRes = d.results?.[myUid]
    const oppUid = d.challengerUid === myUid ? d.opponentUid : d.challengerUid
    const oppRes = d.results?.[oppUid]
    if (!myRes || !oppRes) return 'Terminé'
    if (myRes.points === oppRes.points) return 'Égalité'
    return myRes.points > oppRes.points ? 'Gagné 🏆' : 'Perdu'
  }
  return ''
}

export default function Duels() {
  const navigate = useNavigate()
  const me = auth.currentUser
  const [incoming, setIncoming] = useState([])
  const [mine, setMine] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMyDuels().then(({ incoming, mine }) => {
      setIncoming(incoming)
      setMine(mine)
      setLoading(false)
    })
  }, [])

  return (
    <div className="screen mode-screen">
      <button className="mode-back" onClick={() => navigate('/amis')}>←</button>
      <h1 className="mode-title">DUELS</h1>

      {loading && <p className="leaderboard-note">Chargement...</p>}

      {!loading && incoming.length > 0 && (
        <>
          <h2 className="lb-local-title">Défis reçus</h2>
          <div className="mode-list" style={{ marginBottom: 24 }}>
            {incoming.map(d => (
              <button key={d.id} className="mode-card" onClick={() => navigate(`/duel/${d.id}`)}>
                <span className="mode-card__icon">⚔️</span>
                <div className="mode-card__text">
                  <span className="mode-card__title">{d.challengerPseudo}</span>
                  <span className="mode-card__subtitle">Te défie sur {d.questions.length} questions</span>
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      {!loading && (
        <>
          <h2 className="lb-local-title">Historique</h2>
          <div className="mode-list">
            {mine.length === 0 && (
              <p className="leaderboard-note">Aucun duel pour l'instant. Défie un ami depuis l'onglet Amis.</p>
            )}
            {mine.map(d => {
              const oppPseudo = d.challengerUid === me.uid ? d.opponentPseudo : d.challengerPseudo
              return (
                <button key={d.id} className="mode-card" onClick={() => navigate(`/duel/${d.id}`)}>
                  <span className="mode-card__icon">⚔️</span>
                  <div className="mode-card__text">
                    <span className="mode-card__title">vs {oppPseudo}</span>
                    <span className="mode-card__subtitle">{statusLabel(d, me.uid)}</span>
                  </div>
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
