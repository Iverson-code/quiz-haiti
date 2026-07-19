import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import categories from '../data/categories.js'
import { getBestScore } from '../utils/storage.js'
import { auth } from '../firebase/config.js'
import {
  getTotalLeaderboard, getCategoryLeaderboard, getPeriodLeaderboard,
  getRegionLeaderboard, getTeamTotals
} from '../firebase/leaderboard.js'

const REGIONS = [
  'Artibonite', 'Centre', "Grand'Anse", 'Nippes', 'Nord',
  'Nord-Est', 'Nord-Ouest', 'Ouest', 'Sud', 'Sud-Est', 'Diaspora'
]

const TABS = [
  { key: 'total', label: 'Total' },
  { key: 'day', label: 'Jour' },
  { key: 'week', label: 'Semaine' },
  { key: 'month', label: 'Mois' },
  { key: 'category', label: 'Catégories' },
  { key: 'region', label: 'Département' },
  { key: 'team', label: 'Haïti vs Diaspora' }
]

export default function Leaderboard() {
  const navigate = useNavigate()
  const user = auth.currentUser
  const [tab, setTab] = useState('total')
  const [selectedCat, setSelectedCat] = useState('histoire')
  const [selectedRegion, setSelectedRegion] = useState('Ouest')
  const [rows, setRows] = useState([])
  const [teamTotals, setTeamTotals] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errored, setErrored] = useState(false)

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      setErrored(false)
      try {
        if (tab === 'team') {
          const data = await getTeamTotals()
          if (!cancelled) setTeamTotals(data)
        } else {
          let data = []
          if (tab === 'total') data = await getTotalLeaderboard()
          else if (tab === 'category') data = await getCategoryLeaderboard(selectedCat)
          else if (tab === 'region') data = await getRegionLeaderboard(selectedRegion)
          else data = await getPeriodLeaderboard(tab)
          if (!cancelled) setRows(data)
        }
      } catch (err) {
        console.warn('Classement indisponible :', err)
        if (!cancelled) setErrored(true)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [tab, selectedCat, selectedRegion])

  const localRows = [
    { id: 'survie', name: 'Survie Infinie', icon: '🎮' },
    ...categories.map(c => ({ id: c.id, name: c.name, icon: c.icon }))
  ].map(r => ({ ...r, best: getBestScore(r.id) }))

  const teamMax = teamTotals ? Math.max(teamTotals.haiti, teamTotals.diaspora, 1) : 1

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

          {tab === 'region' && (
            <div className="lb-cat-picker">
              {REGIONS.map(r => (
                <button
                  key={r}
                  className={"lb-cat-chip" + (selectedRegion === r ? ' lb-cat-chip--active' : '')}
                  onClick={() => setSelectedRegion(r)}
                  style={{ padding: '6px 10px', fontSize: '13px' }}
                >
                  {r}
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

          {!loading && !errored && tab === 'team' && teamTotals && (
            <div className="mode-list">
              <div className="mode-card mode-card--static">
                <div className="mode-card__text" style={{ width: '100%' }}>
                  <span className="mode-card__title">🇭🇹 Haïti — {teamTotals.haiti} pts</span>
                  <div style={{ background: '#222', borderRadius: 6, height: 10, marginTop: 6 }}>
                    <div style={{
                      width: `${(teamTotals.haiti / teamMax) * 100}%`,
                      background: '#1e7e34', height: '100%', borderRadius: 6
                    }} />
                  </div>
                </div>
              </div>
              <div className="mode-card mode-card--static">
                <div className="mode-card__text" style={{ width: '100%' }}>
                  <span className="mode-card__title">🌍 Diaspora — {teamTotals.diaspora} pts</span>
                  <div style={{ background: '#222', borderRadius: 6, height: 10, marginTop: 6 }}>
                    <div style={{
                      width: `${(teamTotals.diaspora / teamMax) * 100}%`,
                      background: '#f5c518', height: '100%', borderRadius: 6
                    }} />
                  </div>
                </div>
              </div>
            </div>
          )}

          {!loading && !errored && tab !== 'team' && (
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
