import { useEffect, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home.jsx'
import Help from './screens/Help.jsx'
import ModeSelect from './screens/ModeSelect.jsx'
import Categories from './screens/Categories.jsx'
import Quiz from './screens/Quiz.jsx'
import Result from './screens/Result.jsx'
import Leaderboard from './screens/Leaderboard.jsx'
import Profile from './screens/Profile.jsx'
import Settings from './screens/Settings.jsx'
import Badges from './screens/Badges.jsx'
import History from './screens/History.jsx'
import Auth from './screens/Auth.jsx'
import Friends from './screens/Friends.jsx'
import Duels from './screens/Duels.jsx'
import DuelQuiz from './screens/DuelQuiz.jsx'
import Narratif from './screens/Narratif.jsx'
import NarratifQuiz from './screens/NarratifQuiz.jsx'
import { subscribeAuth } from './firebase/auth.js'
import { pullProgress, pushProgress } from './firebase/progressSync.js'

export default function App() {
  const hadUserRef = useRef(false)
  const syncedRef = useRef(false)

  useEffect(() => {
    const unsub = subscribeAuth(async user => {
      if (user && !syncedRef.current) {
        syncedRef.current = true
        const alreadyReloaded = sessionStorage.getItem('quizhaiti_synced_reload')
        const found = await pullProgress()
        if (found && !alreadyReloaded) {
          sessionStorage.setItem('quizhaiti_synced_reload', '1')
          window.location.reload()
        } else {
          pushProgress()
        }
      }
      if (!user) {
        syncedRef.current = false
      }
      hadUserRef.current = !!user
    })
    return unsub
  }, [])

  return (
    <div className="phone-frame">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aide" element={<Help />} />
        <Route path="/mode" element={<ModeSelect />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/narratif" element={<Narratif />} />
        <Route path="/narratif/chapitre/:chapterId" element={<NarratifQuiz />} />
        <Route path="/quiz/:catId" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/classement" element={<Leaderboard />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/parametres" element={<Settings />} />
        <Route path="/badges" element={<Badges />} />
        <Route path="/historique" element={<History />} />
        <Route path="/connexion" element={<Auth />} />
        <Route path="/amis" element={<Friends />} />
        <Route path="/duels" element={<Duels />} />
        <Route path="/duel/:duelId" element={<DuelQuiz />} />
      </Routes>
    </div>
  )
}
