import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home.jsx'
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

export default function App() {
  return (
    <div className="phone-frame">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mode" element={<ModeSelect />} />
        <Route path="/categories" element={<Categories />} />
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
