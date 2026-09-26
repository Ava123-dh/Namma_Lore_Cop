import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'
import HoverExpandTimeline from '../components/HoverExpandTimeline'
import AiraQuizNudge from '../components/AiraQuizNudge'
import useQuizNudge from '../hooks/useQuizNudge'

const FormationKarnatakaTimeline = () => {
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [expandedEvent, setExpandedEvent] = useState(null)

  const events = [
    {
      id: 'form-1',
      year: '1956 CE',
      title: 'Linguistic Reorganisation',
      subtitle: 'Birth of the unified state',
      fullText: "On 1 November 1956 the States Reorganisation Act redrew India's map along linguistic lines and united the Kannada-speaking people. Kannada- and Kodagu-speaking regions from the neighbouring Bombay, Hyderabad and Madras states, together with Coorg (Kodagu), were merged with the old princely Mysore to form a single enlarged state. Fulfilling the long Ekikarana (unification) movement, this new state was first named Mysore - and would be renamed Karnataka in 1973.",
      category: 'Politics',
      highlights: [
        "States Reorganisation Act took effect on 1 November 1956",
        "Redrew India's states along linguistic lines",
        "United Kannada-speaking areas from Bombay, Hyderabad and Madras",
        "Coorg (Kodagu) merged with the princely Mysore",
        "Realised the Ekikarana unification movement",
        "The enlarged state was first named Mysore",
      ],
      image: '/images/formation-karnataka/formation-karnataka-1-map.png',
      sources: [{ label: 'Wikipedia — Karnataka', url: 'https://en.wikipedia.org/wiki/Karnataka' }],
    },
  ]

  const { showNudge, markSeen, hideNudge } = useQuizNudge(events.length)

  const handleToggleEvent = (eventId) => {
    const next = expandedEvent === eventId ? null : eventId
    setExpandedEvent(next)
    if (next === eventId) markSeen(eventId)
  }

  const parentEvent = { id: 'evt14', title: 'Formation of Karnataka', year: '1956 CE', category: 'Politics' }

  return (
    <div className="min-h-screen py-12 bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/timeline')} className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8">
          <ArrowLeft size={20} />
          Back to Timeline
        </button>

        <div className="mb-12">
          <div className="text-primary-600 font-bold text-sm mb-2">DETAILED HISTORY</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{parentEvent.title}</h1>
          <p className="text-xl text-gray-600">How linguistic reorganisation shaped the state's modern identity.</p>
        </div>

        <HoverExpandTimeline events={events} onOpen={markSeen} />

        <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About Formation</h3>
          <p className="text-gray-700 leading-relaxed">The 1956 linguistic reorganisation brought together Kannada-speaking areas into a single state, forming the basis of present-day Karnataka.</p>
        </div>

        <div className="mt-8 p-6 bg-cream-50 rounded-lg border border-gray-200">
          <h4 className="font-bold text-lg mb-3">Explore more</h4>
          <ul className="list-disc pl-5 text-primary-700">
            <li><a href="https://en.wikipedia.org/wiki/States_Reorganisation_Act" target="_blank" rel="noreferrer" className="underline">States Reorganisation Act — Wikipedia</a></li>
            <li><a href="https://en.wikipedia.org/wiki/History_of_Karnataka" target="_blank" rel="noreferrer" className="underline">History of Karnataka — Wikipedia</a></li>
          </ul>
        </div>
      </div>

      <AiraQuizNudge show={showNudge} onClose={hideNudge} />
      <ChatBot />
    </div>
  )
}

export default FormationKarnatakaTimeline
