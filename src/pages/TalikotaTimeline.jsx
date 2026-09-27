import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'
import HoverExpandTimeline from '../components/HoverExpandTimeline'
import AiraQuizNudge from '../components/AiraQuizNudge'
import useQuizNudge from '../hooks/useQuizNudge'

const TalikotaTimeline = () => {
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [expandedEvent, setExpandedEvent] = useState(null)

  const events = [
    {
      id: 't-1',
      year: '1565 CE',
      title: 'Battle of Talikota',
      subtitle: 'Defeat of Vijayanagara',
      fullText: "On 23 January 1565 the combined armies of four Deccan sultanates - Bijapur, Ahmadnagar, Golconda and Bidar - crushed the Vijayanagara Empire at Talikota, a battle also called Rakshasi-Tangadi. Vijayanagara's aged regent Aliya Rama Raya was captured and beheaded on the field, and his army disintegrated. The victors then plundered the magnificent capital, Vijayanagara (Hampi), reducing one of the world's great cities to ruins and breaking the last major Hindu empire of the south.",
      category: 'Military & Political Change',
      highlights: [
        "Fought on 23 January 1565",
        "Also known as the Battle of Rakshasi-Tangadi",
        "Alliance of Bijapur, Ahmadnagar, Golconda and Bidar",
        "Regent Aliya Rama Raya captured and beheaded",
        "Capital Vijayanagara (Hampi) sacked and ruined",
      ],
      image: '/images/talikota/talikota-1-battle.jpg',
      sources: [{ label: 'Wikipedia — Battle of Talikota', url: 'https://en.wikipedia.org/wiki/Battle_of_Talikota' }],
    },
  ]

  const { showNudge, markSeen, hideNudge } = useQuizNudge(events.length)

  const handleToggleEvent = (eventId) => {
    const next = expandedEvent === eventId ? null : eventId
    setExpandedEvent(next)
    if (next === eventId) markSeen(eventId)
  }

  const parentEvent = { id: 'evt9', title: 'Battle of Talikota', year: '1565 CE' }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/timeline')} className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8"><ArrowLeft size={20} />Back to Timeline</button>
        <div className="mb-12">
          <div className="text-primary-600 font-bold text-sm mb-2">DETAILED HISTORY</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{parentEvent.title}</h1>
          <p className="text-xl text-gray-600">The decisive battle that changed South Indian geopolitics.</p>
        </div>
        <HoverExpandTimeline events={events} onOpen={markSeen} />

        <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About</h3>
          <p className="text-gray-700 leading-relaxed">The Battle of Talikota marked a turning point, leading to the fall of Vijayanagara and reshaping regional power structures.</p>
        </div>

        <div className="mt-8 p-6 bg-cream-50 rounded-lg border border-gray-200">
          <h4 className="font-bold text-lg mb-3">Explore more</h4>
          <ul className="list-disc pl-5 text-primary-700"><li><a href="https://en.wikipedia.org/wiki/Battle_of_Talikota" target="_blank" rel="noreferrer" className="underline">Battle of Talikota — Wikipedia</a></li></ul>
        </div>
      </div>
      <AiraQuizNudge show={showNudge} onClose={hideNudge} />
      <ChatBot />
    </div>
  )
}

export default TalikotaTimeline
