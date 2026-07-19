import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp, signIn, translateAuthError } from '../firebase/auth.js'
import { auth } from '../firebase/config.js'

const REGIONS = [
  'Artibonite', 'Centre', "Grand'Anse", 'Nippes', 'Nord',
  'Nord-Est', 'Nord-Ouest', 'Ouest', 'Sud', 'Sud-Est', 'Diaspora'
]

export default function Auth() {
  const navigate = useNavigate()
  const [mode, setMode] = useState('login')
  const [pseudo, setPseudo] = useState('')
  const [region, setRegion] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (auth.currentUser) navigate('/profil')
  }, [navigate])

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (mode === 'signup') {
        if (!pseudo.trim()) {
          setError('Choisis un pseudo.')
          setLoading(false)
          return
        }
        if (!region) {
          setError('Choisis ton département (ou Diaspora).')
          setLoading(false)
          return
        }
        await signUp(email.trim(), password, pseudo.trim(), region)
      } else {
        await signIn(email.trim(), password)
      }
      navigate('/profil')
    } catch (err) {
      setError(translateAuthError(err.code))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="screen mode-screen">
      <button className="mode-back" onClick={() => navigate('/')}>←</button>
      <h1 className="mode-title">{mode === 'login' ? 'CONNEXION' : 'CRÉER UN COMPTE'}</h1>

      <form onSubmit={handleSubmit} className="profile-block">
        {mode === 'signup' && (
          <>
            <label className="profile-label">Pseudo</label>
            <input
              className="profile-input"
              value={pseudo}
              onChange={e => setPseudo(e.target.value)}
              maxLength={20}
              style={{ marginBottom: 14 }}
            />

            <label className="profile-label">Département (ou Diaspora)</label>
            <select
              className="profile-input"
              value={region}
              onChange={e => setRegion(e.target.value)}
              style={{ marginBottom: 14 }}
            >
              <option value="">-- Choisis --</option>
              {REGIONS.map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </>
        )}

        <label className="profile-label">E-mail</label>
        <input
          className="profile-input"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ marginBottom: 14 }}
          autoCapitalize="none"
        />

        <label className="profile-label">Mot de passe</label>
        <input
          className="profile-input"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ marginBottom: 14 }}
        />

        {error && <p className="auth-error">{error}</p>}

        <button className="btn-primary" type="submit" disabled={loading} style={{ marginTop: 8 }}>
          {loading ? 'Patiente...' : mode === 'login' ? 'Se connecter' : 'Créer mon compte'}
        </button>
      </form>

      <button
        className="btn-outline"
        onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setError('') }}
      >
        {mode === 'login' ? "Pas encore de compte ? S'inscrire" : 'Déjà un compte ? Se connecter'}
      </button>
    </div>
  )
}
