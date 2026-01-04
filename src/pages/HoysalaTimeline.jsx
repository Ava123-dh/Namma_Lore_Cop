import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'

const HoysalaTimeline = () => {
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [expandedEvent, setExpandedEvent] = useState(null)

  const events = [
    { id: 'h-1', year: '1026 CE', title: "Nripa Kama II's Founding", subtitle: 'Early consolidation', fullText: 'Nripa Kama II consolidated hill territories, laying early administrative foundations for the Hoysala rise.', category: 'Politics', highlights: ['Consolidation', 'Temple foundations'], image: 'https://images.unsplash.com/photo-1604420805055-aa0e0214b7e5?w=400&h=300&fit=crop' },
    { id: 'h-2', year: '1116 CE', title: 'Talakad Victory', subtitle: 'Vishnuvardhana defeats Cholas', fullText: 'Vishnuvardhana defeated Chola forces at Talakad and commissioned the Chennakesava Temple at Belur, marking Hoysala ascendancy.', category: 'Military', highlights: ['Talakad victory', 'Chennakesava Temple'], image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop' },
  ]

  const parentEvent = { id: 'evt7', title: 'Hoysala Kingdom', year: '1026–1343 CE' }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/timeline')} className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8"><ArrowLeft size={20} />Back to Timeline</button>
        <div className="mb-12">
          <div className="text-primary-600 font-bold text-sm mb-2">DETAILED HISTORY</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{parentEvent.title}</h1>
          <p className="text-xl text-gray-600">Major Hoysala events and cultural achievements.</p>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 via-primary-500 to-primary-700"></div>
          <div className="space-y-8">
            {events.map((event) => (
              <div key={event.id} className="relative pl-20">
                <div className="absolute left-4 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}>
                  <Calendar size={14} className="text-white" />
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl" onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}>
                  <div className="p-6 cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="text-primary-600 font-bold text-sm mb-1">{event.year}</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{event.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{event.subtitle}</p>
                        <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">{event.category}</span>
                      </div>
                      <button onClick={(e) => { e.stopPropagation(); toggleFavorite(event) }} className="p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"><Heart size={24} className={isFavorite(event.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'} /></button>
                    </div>
                  </div>
                  {expandedEvent === event.id && (
                    <div className="border-t border-gray-200 px-6 py-6 bg-gradient-to-br from-primary-50 to-transparent">
                      <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">{event.fullText}</p>
                      <button onClick={() => setExpandedEvent(null)} className="mt-6 text-primary-600 font-semibold hover:text-primary-700">Show Less ↑</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About</h3>
          <p className="text-gray-700 leading-relaxed">The Hoysala period produced exquisite temple architecture and a flowering of Kannada literature.</p>
        </div>

        <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
          <h4 className="font-bold text-lg mb-3">Explore more</h4>
          <ul className="list-disc pl-5 text-primary-700"><li><a href="https://en.wikipedia.org/wiki/Hoysala_Kingdom" target="_blank" rel="noreferrer" className="underline">Hoysala Kingdom — Wikipedia</a></li></ul>
        </div>
      </div>
      <ChatBot />
    </div>
  )
}

export default HoysalaTimeline
