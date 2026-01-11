import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'

const RashtrakutaTimeline = () => {
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [expandedEvent, setExpandedEvent] = useState(null)

  const events = [
    {
      id: 'r-1',
      year: '753 CE',
      title: 'Founding by Dantidurga',
      subtitle: 'End of Badami Chalukyas',
      fullText: 'Dantidurga, a Chalukya feudatory, defeated Kirtivarman II, seizing Badami and performing Hiranya Garbha ritual to claim Kshatriya status. He fixed Manyakheta as capital, conquering Malwa, Kalinga, and Kosala. This ended Chalukya rule, establishing Rashtrakuta power across Maharashtra and beyond.',
      category: 'Politics',
      highlights: ['Hiranya Garbha ritual performed', 'Manyakheta capital established', 'Conquered Malwa and Kalinga', 'Kshatriya status claimed'],
      image: 'https://images.unsplash.com/photo-1609920658906-8223652d5f5d?w=400&h=300&fit=crop',
    },
    {
      id: 'r-2',
      year: '756–774 CE',
      title: 'Krishna I\'s Conquests',
      subtitle: 'Kailasa temple and expansion',
      fullText: 'Krishna I subdued Gangas, conquered Konkan, and accepted Eastern Chalukya submission without battle. His reign saw the Kailasa Temple\'s construction at Ellora, a monolithic marvel. Victories expanded territory to Godavari, blending military might with Shaivite devotion.',
      category: 'Military & Culture',
      highlights: ['Kailasa Temple constructed', 'Gangas subdued', 'Konkan conquered', 'Shaivite devotion fostered'],
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop',
    },
    {
      id: 'r-3',
      year: '780–793 CE',
      title: 'Dhruva Dharavarsha\'s Rise',
      subtitle: 'Entry into northern politics',
      fullText: 'Dhruva quelled brothers\' rebellions, defeated Nagabhata II of Kannauj, and subjugated Malwa, Vengi, and Pallavas. He humbled Pratiharas and Palas in the tripartite struggle\'s onset. His campaigns marked Rashtrakuta entry into northern politics, peaking imperial prestige.',
      category: 'Military',
      highlights: ['Internal rebellions quelled', 'Nagabhata II defeated', 'Northern politics entered', 'Tripartite struggle initiated'],
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
    },
    {
      id: 'r-4',
      year: '793–814 CE',
      title: 'Govinda III\'s Peak',
      subtitle: 'Territorial zenith',
      fullText: 'Govinda III crushed Pratiharas, annexed Malwa, Kosala, and Kalinga, then raided south to Rameshwaram, erecting a victory pillar. He fostered alliances via marriages and quelled Vengi revolts. This era epitomized territorial zenith from Narmada to Tamil lands.',
      category: 'Military',
      highlights: ['Pratiharas crushed', 'Rameshwaram raided', 'Victory pillar erected', 'Narmada to Tamil control'],
      image: 'https://images.unsplash.com/photo-1581092162562-40038f63dd77?w=400&h=300&fit=crop',
    },
    {
      id: 'r-5',
      year: '916 CE',
      title: 'Indra III\'s Kannauj Capture',
      subtitle: 'Northern influence restored',
      fullText: 'Indra III sacked Kannauj from Pratiharas, advancing to Ganges-Yamuna doab and defeating Palas. He restored Rashtrakuta northern influence amid weak successors. Victories over Malwa and Vengi bolstered the dynasty temporarily.',
      category: 'Military',
      highlights: ['Kannauj sacked', 'Pratiharas defeated', 'Ganges-Yamuna doab reached', 'Northern influence restored'],
      image: 'https://images.unsplash.com/photo-1609920658906-8223652d5f5d?w=400&h=300&fit=crop',
    },
    {
      id: 'r-6',
      year: '939–967 CE',
      title: 'Krishna III\'s Southern Push',
      subtitle: 'Final southern expansion',
      fullText: 'Krishna III conquered Tondaimandalam, occupied Kanchi, and extracted Ceylon tribute, stretching rule to Kaveri. He built Jain temples and supported literature. Internal foes united post-death, sacking Manyakheta in 972 CE, hastening decline.',
      category: 'Military & Culture',
      highlights: ['Kanchi occupied', 'Ceylon tribute extracted', 'Kaveri boundary reached', 'Jain temples built'],
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop',
    },
  ]

  const parentEvent = { id: 'evt4', title: 'Rashtrakuta Empire', year: '753 CE', category: 'Politics' }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/timeline')} className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8"><ArrowLeft size={20} />Back to Timeline</button>

        <div className="mb-12">
          <div className="text-primary-600 font-bold text-sm mb-2">DETAILED HISTORY</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{parentEvent.title}</h1>
          <p className="text-xl text-gray-600">Key Rashtrakuta rulers and achievements.</p>
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
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Key Highlights:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {event.highlights && event.highlights.map((h, i) => (
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Rashtrakuta Empire</h3>
          <p className="text-gray-700 leading-relaxed mb-6">The Rashtrakuta Empire (753–982 CE) was a major Deccan power that dominated South India and periodically expanded into North India, engaging in the tripartite struggle with the Pratiharas and Palas. From their capital at Manyakheta, the Rashtrakutas controlled vast territories spanning from the Narmada River to the Tamil lands. Renowned for their architectural patronage, including the iconic Kailasa Temple at Ellora and numerous Jain temples, they were also great supporters of literature and learning. Though their direct rule ended in 982 CE with the rise of the Chalukyas of Kalyani, their cultural and architectural legacy profoundly influenced subsequent South Indian dynasties.</p>
        </div>

        <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
          <h4 className="font-bold text-lg mb-4">References & Further Reading</h4>
          <ul className="space-y-2">
            <li><a href="https://www.worldhistory.org/timeline/Rashtrakuta_Dynasty/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">World History Encyclopedia - Rashtrakuta Dynasty Timeline</a></li>
            <li><a href="https://www.drishtiias.com/to-the-points/paper1/rashtrakutas" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Drishti IAS - Rashtrakutas</a></li>
            <li><a href="https://testbook.com/ias-preparation/ncert-notes-rashtrakutas" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Testbook - NCERT Notes on Rashtrakutas</a></li>
            <li><a href="https://www.worldhistory.org/Rashtrakuta_Dynasty/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">World History Encyclopedia - Rashtrakuta Dynasty</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Rashtrakuta_Empire" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Wikipedia - Rashtrakuta Empire</a></li>
            <li><a href="https://www.britannica.com/topic/Rashtrakuta-dynasty" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Britannica - Rashtrakuta Dynasty</a></li>
            <li><a href="https://byjus.com/free-ias-prep/ncert-notes-rashtrakutas/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">BYJU'S - NCERT Notes on Rashtrakutas</a></li>
            <li><a href="https://prepp.in/news/e-492-rashtrakutas-750-900-ce-medieval-india-history-notes" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">PREPP - Rashtrakutas 750-900 CE History Notes</a></li>
            <li><a href="https://study.com/academy/lesson/rashtrakuta-dynasty-founder-empire.html" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Study.com - Rashtrakuta Dynasty Founder & Empire</a></li>
            <li><a href="https://vajiramandravi.com/upsc-exam/rashtrakutas/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Vajira Mandravi - Rashtrakutas UPSC</a></li>
          </ul>
        </div>
      </div>
      <ChatBot />
    </div>
  )
}

export default RashtrakutaTimeline
