import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'
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
      subtitle: 'End of British Rule',
      fullText: 'India gained independence from British rule in 1947. The princely states including Mysore acceded to the Indian Union, beginning a new democratic era and major political reorganisation across the subcontinent.',
      category: 'Politics',
      highlights: ['End of colonial rule', 'Integration of princely states', 'Start of democratic republic'],
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=600&fit=crop',
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
    <div className="min-h-screen py-12 bg-gradient-to-b from-slate-50 to-white">
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

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 via-primary-500 to-primary-700"></div>
          <div className="space-y-8">
            {events.map((event) => (
              <div key={event.id} className="relative pl-20">
                <div className="absolute left-4 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:shadow-xl transition-shadow" onClick={() => handleToggleEvent(event.id)}>
                  <Calendar size={14} className="text-white" />
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl" onClick={() => handleToggleEvent(event.id)}>
                  <div className="p-6 cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="text-primary-600 font-bold text-sm mb-1">{event.year}</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{event.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{event.subtitle}</p>
                        <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">{event.category}</span>
                      </div>
                      <button onClick={(e) => { e.stopPropagation(); toggleFavorite(event) }} className="p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0">
                        <Heart size={24} className={isFavorite(event.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'} />
                      </button>
                    </div>
                  </div>

                  {expandedEvent === event.id && (
                    <div className="border-t border-gray-200 px-6 py-6 bg-gradient-to-br from-primary-50 to-transparent">
                      <div className="mb-6">
                        <p className="text-gray-700 text-lg leading-relaxed mb-4">{event.fullText}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Key Highlights:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {event.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-primary-200"><div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div><span className="text-gray-700">{h}</span></li>
                          ))}
                        </ul>
                      </div>
                      <button onClick={() => setExpandedEvent(null)} className="mt-6 text-primary-600 font-semibold hover:text-primary-700">Show Less ↑</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About Independence</h3>
          <p className="text-gray-700 leading-relaxed">India's independence in 1947 ended British colonial rule and led to a major reorganisation of political boundaries and governance structures across the subcontinent.</p>
        </div>

        <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
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
