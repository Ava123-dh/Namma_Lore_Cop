import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'
import HoverExpandTimeline from '../components/HoverExpandTimeline'
import AiraQuizNudge from '../components/AiraQuizNudge'
import useQuizNudge from '../hooks/useQuizNudge'

const IndependenceTimeline = () => {
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [expandedEvent, setExpandedEvent] = useState(null)

  const events = [
    {
      id: 'ind-1',
      year: '1947 CE',
      title: 'Indian Independence',
      subtitle: 'End of British rule',
      fullText: "The Indian Independence Act 1947 ended British rule, and on 15 August 1947 India became an independent dominion, partitioned from Pakistan. British paramountcy over the roughly 565 princely states lapsed, leaving each to accede to India or Pakistan. The princely state of Mysore, under Maharaja Jayachamarajendra Wodeyar, signed the Instrument of Accession joining the Indian Union - bringing the heart of present-day Karnataka into independent India.",
      category: 'Politics',
      highlights: [
        "India became independent on 15 August 1947",
        "Enacted by the Indian Independence Act 1947",
        "British India partitioned into India and Pakistan",
        "Paramountcy over ~565 princely states lapsed",
        "Mysore's Maharaja Jayachamarajendra Wodeyar acceded to India",
      ],
      image: '/images/independence/independence-1-flag.jpg',
      sources: [
        { label: 'Wikipedia — Indian Independence Act 1947', url: 'https://en.wikipedia.org/wiki/Indian_Independence_Act_1947' },
        { label: 'Wikipedia — Karnataka', url: 'https://en.wikipedia.org/wiki/Karnataka' },
      ],
    },
  ]

  const { showNudge, markSeen, hideNudge } = useQuizNudge(events.length)

  const handleToggleEvent = (eventId) => {
    const next = expandedEvent === eventId ? null : eventId
    setExpandedEvent(next)
    if (next === eventId) markSeen(eventId)
  }

  const parentEvent = { id: 'evt13', title: 'Indian Independence', year: '1947 CE', category: 'Politics' }

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
          <p className="text-xl text-gray-600">Key events around Indian independence and its regional effects.</p>
        </div>

        <HoverExpandTimeline events={events} onOpen={markSeen} />

        <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About Independence</h3>
          <p className="text-gray-700 leading-relaxed">India's independence in 1947 ended British colonial rule and led to a major reorganisation of political boundaries and governance structures across the subcontinent.</p>
        </div>

        <div className="mt-8 p-6 bg-cream-50 rounded-lg border border-gray-200">
          <h4 className="font-bold text-lg mb-3">Explore more</h4>
          <ul className="list-disc pl-5 text-primary-700">
            <li><a href="https://en.wikipedia.org/wiki/Indian_independence" target="_blank" rel="noreferrer" className="underline">Indian Independence — Wikipedia</a></li>
            <li><a href="https://www.britannica.com/event/Indian-Independence-Day" target="_blank" rel="noreferrer" className="underline">Britannica — Indian Independence</a></li>
          </ul>
        </div>
      </div>

      <AiraQuizNudge show={showNudge} onClose={hideNudge} />
      <ChatBot />
    </div>
  )
}

export default IndependenceTimeline
