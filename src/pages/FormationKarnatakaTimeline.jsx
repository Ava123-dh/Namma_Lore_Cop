import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'
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
      subtitle: 'Formation of Karnataka State',
      fullText: 'Karnataka state was formed in 1956 by merging Kannada-speaking regions from neighbouring provinces, initially named Mysore State. This reorganisation united Kannada-speaking people under one administrative unit and later led to the name change to Karnataka in 1973.',
      category: 'Politics',
      highlights: ['Linguistic reorganisation', 'Unification of Kannada regions', 'Basis for modern Karnataka'],
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=600&fit=crop',
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
    <div className="min-h-screen py-12 bg-gradient-to-b from-slate-50 to-white">
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About Formation</h3>
          <p className="text-gray-700 leading-relaxed">The 1956 linguistic reorganisation brought together Kannada-speaking areas into a single state, forming the basis of present-day Karnataka.</p>
        </div>

        <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
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
