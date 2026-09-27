import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'
import HoverExpandTimeline from '../components/HoverExpandTimeline'
import AiraQuizNudge from '../components/AiraQuizNudge'
import useQuizNudge from '../hooks/useQuizNudge'

const MysoreRenamedTimeline = () => {
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [expandedEvent, setExpandedEvent] = useState(null)
  const { showNudge, markSeen, hideNudge } = useQuizNudge(events.length)

  const handleToggleEvent = (eventId) => {
    const next = expandedEvent === eventId ? null : eventId
    setExpandedEvent(next)
    if (next === eventId) markSeen(eventId)
  }

  const events = [
    {
      id: 'mysore-1',
      year: '1973 CE',
      title: 'Mysore Renamed Karnataka',
      subtitle: 'Official name change',
      fullText: "On 1 November 1973 the state of Mysore was officially renamed Karnataka, seventeen years after its formation. The change, made under Chief Minister D. Devaraj Urs, shed a name that evoked only the former princely capital in favour of one embracing all Kannada-speaking regions. The date is celebrated each year as Karnataka Rajyotsava, the state's formation day.",
      category: 'Politics',
      highlights: [
        "Mysore State renamed Karnataka on 1 November 1973",
        "Came seventeen years after the 1956 reorganisation",
        "Enacted under Chief Minister D. Devaraj Urs",
        "New name embraced all Kannada-speaking regions",
        "Marked annually as Karnataka Rajyotsava",
      ],
      image: '/images/mysore-renamed/mysore-renamed-1-vidhana-soudha.jpg',
      sources: [{ label: 'Wikipedia — Karnataka', url: 'https://en.wikipedia.org/wiki/Karnataka' }],
    },
  ]

  const parentEvent = { id: 'evt15', title: 'Mysore renamed Karnataka', year: '1973 CE', category: 'Politics' }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/timeline')} className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8">
          <ArrowLeft size={20} />
          Back to Timeline
        </button>

        <div className="mb-12">
          <div className="text-primary-600 font-bold text-sm mb-2">DETAILED HISTORY</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{parentEvent.title}</h1>
          <p className="text-xl text-gray-600">The administrative and cultural reasons behind the 1973 renaming of the state to Karnataka.</p>
        </div>

        <HoverExpandTimeline events={events} onOpen={markSeen} />

        <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Name Change</h3>
          <p className="text-gray-700 leading-relaxed">Renaming Mysore to Karnataka formalised the state's identity and recognised the wider Kannada-speaking population beyond the former princely territories.</p>
        </div>

        <div className="mt-8 p-6 bg-cream-50 rounded-lg border border-gray-200">
          <h4 className="font-bold text-lg mb-3">Explore more</h4>
          <ul className="list-disc pl-5 text-primary-700">
            <li><a href="https://en.wikipedia.org/wiki/Karnataka" target="_blank" rel="noreferrer" className="underline">Karnataka — Wikipedia</a></li>
            <li><a href="https://en.wikipedia.org/wiki/State_renaming_in_India" target="_blank" rel="noreferrer" className="underline">State renaming in India — Wikipedia</a></li>
          </ul>
        </div>
      </div>

      <AiraQuizNudge show={showNudge} onClose={hideNudge} />
      <ChatBot />
    </div>
  )
}

export default MysoreRenamedTimeline
