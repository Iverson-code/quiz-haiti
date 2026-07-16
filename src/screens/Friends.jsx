import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  searchUserByPseudo, sendFriendRequest,
  getIncomingRequests, respondToRequest,
  getFriends, removeFriend
} from '../firebase/friends.js'
import { createDuel } from '../firebase/duels.js'

export default function Friends() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('amis')
  const [friends, setFriends] = useState([])
  const [requests, setRequests] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResult, setSearchResult] = useState(null)
  const [searchStatus, setSearchStatus] = useState('')
  const [loading, setLoading] = useState(true)

  async function loadAll() {
    setLoading(true)
    const [f, r] = await Promise.all([getFriends(), getIncomingRequests()])
    setFriends(f)
    setRequests(r)
    setLoading(false)
  }

  useEffect(() => { loadAll() }, [])

  async function handleSearch(e) {
    e.preventDefault()
    if (!searchTerm.trim()) return
    setSearchStatus('searching')
    setSearchResult(null)
    const user = await searchUserByPseudo(searchTerm)
    if (user) {
      setSearchResult(user)
      setSearchStatus('')
    } else {
      setSearchStatus('notfound')
    }
  }

  async function handleSendRequest() {
    if (!searchResult) return
    await sendFriendRequest(searchResult.uid, searchResult.pseudo)
    setSearchStatus('sent')
  }

  async function handleRespond(req, accept) {
    await respondToRequest(req.id, req.fromUid, req.fromPseudo, accept)
    loadAll()
  }

  async function handleChallenge(friend) {
    const duelId = await createDuel(friend.friendUid, friend.friendPseudo)
    navigate(`/duel/${duelId}`)
  }

  return (
    <div className="screen mode-screen">
      <button className="mode-back" onClick={() => navigate('/profil')}>←</button>
      <h1 className="mode-title">AMIS</h1>
      <button className="btn-outline btn-outline--small" onClick={() => navigate('/duels')} style={{ marginBottom: 14 }}>
        ⚔️ Voir mes duels
      </button>

      <div className="lb-tabs">
        <button
          className={"lb-tab" + (tab === 'amis' ? ' lb-tab--active' : '')}
          onClick={() => setTab('amis')}
        >
          Mes amis ({friends.length})
        </button>
        <button
          className={"lb-tab" + (tab === 'demandes' ? ' lb-tab--active' : '')}
          onClick={() => setTab('demandes')}
        >
          Demandes {requests.length > 0 ? `(${requests.length})` : ''}
        </button>
        <button
          className={"lb-tab" + (tab === 'ajouter' ? ' lb-tab--active' : '')}
          onClick={() => setTab('ajouter')}
        >
          Ajouter
        </button>
      </div>

      {loading && <p className="leaderboard-note">Chargement...</p>}

      {!loading && tab === 'amis' && (
        <div className="mode-list">
          {friends.length === 0 && (
            <p className="leaderboard-note">Pas encore d'amis. Va dans l'onglet "Ajouter".</p>
          )}
          {friends.map(f => (
            <div key={f.friendUid} className="mode-card mode-card--static">
              <span className="mode-card__icon">👤</span>
              <div className="mode-card__text">
                <span className="mode-card__title">{f.friendPseudo}</span>
              </div>
              <button className="btn-outline btn-outline--small" onClick={() => handleChallenge(f)}>
                ⚔️ Défier
              </button>
              <button
                className="btn-outline btn-outline--small"
                onClick={async () => { await removeFriend(f.friendUid); loadAll() }}
              >
                Retirer
              </button>
            </div>
          ))}
        </div>
      )}

      {!loading && tab === 'demandes' && (
        <div className="mode-list">
          {requests.length === 0 && (
            <p className="leaderboard-note">Aucune demande en attente.</p>
          )}
          {requests.map(r => (
            <div key={r.id} className="mode-card mode-card--static">
              <span className="mode-card__icon">✉️</span>
              <div className="mode-card__text">
                <span className="mode-card__title">{r.fromPseudo}</span>
                <span className="mode-card__subtitle">veut être ton ami</span>
              </div>
              <div className="friend-req-actions">
                <button className="friend-req-btn friend-req-btn--yes" onClick={() => handleRespond(r, true)}>✓</button>
                <button className="friend-req-btn friend-req-btn--no" onClick={() => handleRespond(r, false)}>✕</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'ajouter' && (
        <div className="profile-block">
          <label className="profile-label">Pseudo exact de ton ami</label>
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: 8 }}>
            <input
              className="profile-input"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Pseudo..."
            />
            <button className="btn-outline btn-outline--small" type="submit">Chercher</button>
          </form>

          {searchStatus === 'searching' && <p className="leaderboard-note">Recherche...</p>}
          {searchStatus === 'notfound' && <p className="leaderboard-note">Personne avec ce pseudo exact.</p>}
          {searchStatus === 'sent' && <p className="leaderboard-note">Demande envoyée ! 🎉</p>}

          {searchResult && searchStatus === '' && (
            <div className="mode-card mode-card--static" style={{ marginTop: 14 }}>
              <span className="mode-card__icon">👤</span>
              <div className="mode-card__text">
                <span className="mode-card__title">{searchResult.pseudo}</span>
              </div>
              <button className="btn-outline btn-outline--small" onClick={handleSendRequest}>
                Ajouter
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
