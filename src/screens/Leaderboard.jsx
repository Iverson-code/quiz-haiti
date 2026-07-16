import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import categories from '../data/categories.js'
import { getBestScore } from '../utils/storage.js'
import { auth } from '../firebase/config.js'
import {
  getTotalLeaderboard, getCategoryLeaderboard, getPeriodLeaderboard
} from '../firebase/leaderboard.js'

const TABS = [
  { key: 'total', label: 'Total' },
  { key: 'day', label: 'Jour' },
  { key: 'week', label: 'Semaine' },
  { key: 'month', label: 'Mois' },
  { key: 'category', label: 'Catégories' }
]

export default function Leaderboard() {
  const navigate = useNavigate()
  const user = auth.currentUser
  const [tab, setTab] = useState('total')
  const [selectedCat, setSelectedCat] = useState('histoire')
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(false)
  const [errored, setErrored] = useState(false)

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      setErrored(false)
      try {
        let data = []
        if (tab === 'total') data = await getTotalLeaderboard()
        else if (tab === 'category') data = await getCategoryLeaderboard(selectedCat)
        else data = await getPeriodLeaderboard(tab)
        if (!cancelled) setRows(data)
      } catch (err) {
        console.warn('Classement indisponible :', err)
        if (!cancelled) setErrored(true)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [tab, selectedCat])

  const localRows = [
    { id: 'survie', name: 'Survie Infinie', icon: '🎮' },
    ...categories.map(c => ({ id: c.id, name: c.name, icon: c.icon }))
  ].map(r => ({ ...r, best: getBestScore(r.id) }))

  return (
    <div className="screen mode-screen">
      <button className="mode-back" onClick={() => navigate('/')}>←</button>
      <h1 className="mode-title">CLASSEMENT</h1>

      {!user && (
        <p className="leaderboard-note">
          Connecte-toi (Mon Profil) pour voir le classement en ligne et y apparaître toi-même.
        </p>
      )}

      {user && (
        <>
          <div className="lb-tabs">
            {TABS.map(t => (
              <button
                key={t.key}
                className={"lb-tab" + (tab === t.key ? ' lb-tab--active' : '')}
                onClick={() => setTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>

          {tab === 'category' && (
            <div className="lb-cat-picker">
              {categories.map(c => (
                <button
                  key={c.id}
                  className={"lb-cat-chip" + (selectedCat === c.id ? ' lb-cat-chip--active' : '')}
                  onClick={() => setSelectedCat(c.id)}
                >
                  {c.icon}
                </button>
              ))}
            </div>
          )}

          {loading && <p className="leaderboard-note">Chargement...</p>}
          {errored && (
            <p className="leaderboard-note">
              Impossible de charger le classement (vérifie ta connexion, ou les règles Firestore).
            </p>
          )}

          {!loading && !errored && (
            <div className="mode-list">
              {rows.length === 0 && (
                <p className="leaderboard-note">Personne pour l'instant sur cette période. Sois le premier !</p>
              )}
              {rows.map((r, i) => (
                <div
                  key={r.uid || i}
                  className={"mode-card mode-card--static lb-row" + (r.uid === user.uid ? ' lb-row--me' : '')}
                >
                  <span className="lb-rank">{i + 1}</span>
                  <div className="mode-card__text">
                    <span className="mode-card__title">{r.pseudo}</span>
                  </div>
                  <span className="mode-card__best">{r.totalPoints ?? r.points} pts</span>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      <h2 className="lb-local-title">Tes meilleurs scores (sur cet appareil)</h2>
      <div className="mode-list">
        {localRows.map(r => (
          <div key={r.id} className="mode-card mode-card--static">
            <span className="mode-card__icon">{r.icon}</span>
            <div className="mode-card__text">
              <span className="mode-card__title">{r.name}</span>
            </div>
            <span className="mode-card__best">🏆 {r.best}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
