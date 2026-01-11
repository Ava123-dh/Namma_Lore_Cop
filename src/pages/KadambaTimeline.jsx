import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'

const KadambaTimeline = () => {
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [expandedEvent, setExpandedEvent] = useState(null)

  const kadambaEvents = [
    {
      id: 'kadamba-1',
      year: '345 CE',
      title: 'Founding',
      subtitle: 'Mayurasharma establishes Banavasi',
      fullText: "Mayurasharma, a Brahmin scholar from Talagunda, rebelled against Pallava overlord Skandavarman after a temple insult, defeating him with Ganga allies. He established Banavasi as capital, marking Karnataka's first native dynasty with Vedic rituals and land grants. This shift fostered indigenous Kannada identity and temple-building traditions.",
      category: 'Politics',
      highlights: ['First native Kannada dynasty', 'Banavasi capital', 'Vedic rituals and land grants', 'Indigenous Kannada identity'],
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
    },
    {
      id: 'kadamba-2',
      year: '435 CE',
      title: 'Kakusthavarma\'s Peak',
      subtitle: 'Expansion and cultural elevation',
      fullText: "Kakusthavarma expanded territory via alliances and wars against Gangas, Vakatakas, and Pallavas, marrying into royal families for diplomacy. He shifted capital to Kolar temporarily, patronized Jainism, and boosted trade, controlling Karnataka, Goa, and Maharashtra parts. His court poet Durvinita chronicled these conquests, elevating Kadamba cultural prestige.",
      category: 'Expansion',
      highlights: ['Regional expansion to Goa and Maharashtra', 'Patronage of Jainism', 'Trade growth', 'Cultural elevation under court poet Durvinita'],
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop',
    },
    {
      id: 'kadamba-3',
      year: '485 CE',
      title: 'Ravivarma\'s Wars',
      subtitle: 'Military campaigns and internal struggles',
      fullText: "Ravivarma clashed with Pallavas, Gangas, and internal Triparvata branch, extending north to Narmada River against Vakatakas. Ruling amid family feuds, he maintained core territories through military prowess and Shaiva temples like Banavasi's Madhukeshvara. His victories sustained the dynasty but sowed decline seeds via infighting.",
      category: 'Military',
      highlights: ['Conflicts with Pallavas and Gangas', 'Extension to Narmada River', 'Patronage of Shaiva temples', 'Internal family feuds'],
      image: 'https://images.unsplash.com/photo-1581092162562-40038f63dd77?w=400&h=300&fit=crop',
    },
    {
      id: 'kadamba-4',
      year: '540 CE',
      title: 'Chalukya Conquest',
      subtitle: 'End of independent rule',
      fullText: "Badami Chalukyas under Pulakeshin I overthrew the weakened Kadambas, reducing them to vassals after Ravivarma's successors faltered. This ended independent Kadamba rule, fragmenting the dynasty into branches in Goa, Halasi, and Hangal under larger empires. However, Kadamba legacy persisted in architecture and minor kingdoms for centuries.",
      category: 'Political Change',
      highlights: ['Chalukya conquest under Pulakeshin I', 'Reduction to vassalage', 'Fragmentation into regional branches', 'Lasting cultural legacy'],
      image: 'https://images.unsplash.com/photo-1582719471537-41efb2d30bba?w=400&h=300&fit=crop',
    },
  ]

  const parentEvent = { id: 'evt2', title: 'Kadamba Dynasty', year: 'c. 345–540 CE', category: 'Politics' }

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
          <p className="text-xl text-gray-600">Key events that shaped the Kadamba dynasty and its legacy in Karnataka.</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 via-primary-500 to-primary-700"></div>
          <div className="space-y-8">
            {kadambaEvents.map((event) => (
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
                      <button onClick={(e) => { e.stopPropagation(); toggleFavorite(event) }} className="p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0">
                        <Heart size={24} className={isFavorite(event.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'} />
                      </button>
                    </div>
                  </div>

                  {expandedEvent === event.id && (
                    <div className="border-t border-gray-200 px-6 py-6 bg-gradient-to-br from-primary-50 to-transparent">
                      <div className="mb-6">
                        <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-lg mb-4" />
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Kadamba Dynasty</h3>
          <p className="text-gray-700 leading-relaxed mb-6">The Kadamba Dynasty (c. 345–540 CE) was an early Kannada kingdom in Karnataka, founded by Mayurasharma, pioneering local rule post-Gupta era with influences on art, architecture, and Shaivism. Key events defined its rise, expansions, and vassalage under Chalukyas. The Kadambas were pioneering administrators who established Kannada as an official language and created lasting contributions to South Indian temple architecture and cultural traditions.</p>
        </div>

        <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
          <h4 className="font-bold text-lg mb-4">References & Further Reading</h4>
          <ul className="space-y-2">
            <li><a href="https://lotusarise.com/kadamba-dynasty-upsc/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">LotusArise - Kadamba Dynasty UPSC Notes</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Kadamba_dynasty" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Wikipedia - Kadamba Dynasty</a></li>
            <li><a href="https://vajiramandravi.com/current-affairs/kadamba-dynasty/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Vajira Mandravi - Kadamba Dynasty Current Affairs</a></li>
            <li><a href="https://testbook.com/ias-preparation/kadamba-dynasty" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Testbook - IAS Preparation on Kadamba Dynasty</a></li>
            <li><a href="http://historyofindia-madhunimkar.blogspot.com/2009/09/introduction-kadamba-dynasty-345-525-ce.html" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">History of India - Kadamba Dynasty Introduction</a></li>
            <li><a href="https://www.clearias.com/kadamba-dynasty/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">ClearIAS - Kadamba Dynasty</a></li>
            <li><a href="https://www.newworldencyclopedia.org/entry/Kadamba_Dynasty" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">New World Encyclopedia - Kadamba Dynasty</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Timeline_of_Karnataka" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Wikipedia - Timeline of Karnataka</a></li>
            <li><a href="https://history-maps.com/story/History-of-India/event/Kadamba-Dynasty" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">History Maps - Kadamba Dynasty History</a></li>
            <li><a href="https://ijmer.in/pdf/volume1-issue4-2012/342-349.pdf" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">IJMER - Academic Paper on Kadamba Dynasty</a></li>
          </ul>
        </div>
      </div>

      <ChatBot />
    </div>
  )
}

export default KadambaTimeline
