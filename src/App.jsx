import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Timeline from './pages/Timeline'
import MauryaTimeline from './pages/MauryaTimeline'
import KadambaTimeline from './pages/KadambaTimeline'
import ChalukyaTimeline from './pages/ChalukyaTimeline'
import RashtrakutaTimeline from './pages/RashtrakutaTimeline'
import WesternChalukyaTimeline from './pages/WesternChalukyaTimeline'
import PampaTimeline from './pages/PampaTimeline'
import HoysalaTimeline from './pages/HoysalaTimeline'
import VijayanagaraTimeline from './pages/VijayanagaraTimeline'
import TalikotaTimeline from './pages/TalikotaTimeline'
import KeladiTimeline from './pages/KeladiTimeline'
import HyderAliTimeline from './pages/HyderAliTimeline'
import TipuTimeline from './pages/TipuTimeline'
import IndependenceTimeline from './pages/IndependenceTimeline'
import FormationKarnatakaTimeline from './pages/FormationKarnatakaTimeline'
import MysoreRenamedTimeline from './pages/MysoreRenamedTimeline'
import Quiz from './pages/Quiz'
import Map from './pages/Map'
import Favorites from './pages/Favorites'
import { FavoritesProvider } from './context/FavoritesContext'

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/timeline/maurya" element={<MauryaTimeline />} />
            <Route path="/timeline/kadamba" element={<KadambaTimeline />} />
            <Route path="/timeline/chalukya" element={<ChalukyaTimeline />} />
            <Route path="/timeline/rashtrakuta" element={<RashtrakutaTimeline />} />
            <Route path="/timeline/western-chalukya" element={<WesternChalukyaTimeline />} />
            <Route path="/timeline/pampa" element={<PampaTimeline />} />
            <Route path="/timeline/hoysala" element={<HoysalaTimeline />} />
            <Route path="/timeline/vijayanagara" element={<VijayanagaraTimeline />} />
            <Route path="/timeline/talikota" element={<TalikotaTimeline />} />
            <Route path="/timeline/keladi" element={<KeladiTimeline />} />
            <Route path="/timeline/hyder-ali" element={<HyderAliTimeline />} />
            <Route path="/timeline/tipu" element={<TipuTimeline />} />
            <Route path="/timeline/independence" element={<IndependenceTimeline />} />
            <Route path="/timeline/formation-karnataka" element={<FormationKarnatakaTimeline />} />
            <Route path="/timeline/mysore-renamed" element={<MysoreRenamedTimeline />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/map" element={<Map />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  )
}

export default App
