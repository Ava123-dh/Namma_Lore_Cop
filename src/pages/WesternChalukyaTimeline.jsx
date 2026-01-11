import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'

const WesternChalukyaTimeline = () => {
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [expandedEvent, setExpandedEvent] = useState(null)

  const events = [
    {
      id: 'wc-1',
      year: '973 CE',
      title: "Tailapa II's Overthrow",
      subtitle: 'Restores Chalukya lineage',
      fullText: "Tailapa II, a Rashtrakuta feudatory, exploited their decline amid Paramara invasions to defeat Karka II, reclaiming Deccan territories. He restored Chalukya lineage from Badami Chalukyas, performed Vedic sacrifices, and patronized Kannada poet Ranna. This founding revived imperial ambitions, stabilizing rule for two centuries.",
      category: 'Politics',
      highlights: ['Rashtrakuta decline exploited', 'Badami Chalukya lineage restored', 'Vedic sacrifices performed', 'Kannada literature patronized'],
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop',
    },
    {
      id: 'wc-2',
      year: '1006 CE',
      title: 'Chola Invasion Repelled',
      subtitle: 'Satyashraya checks northern expansion',
      fullText: 'Satyashraya faced Rajaraja Chola I\'s devastating raid on Kalyani but mounted counterattacks, preserving core lands. Though territories were lost temporarily, it checked Chola expansion northward. The conflict initiated prolonged Chalukya-Chola wars, shaping Deccan geopolitics.',
      category: 'Military',
      highlights: ['Rajaraja Chola I resisted', 'Core territories preserved', 'Chola expansion checked', 'Prolonged Chalukya-Chola wars began'],
      image: 'https://images.unsplash.com/photo-1609920658906-8223652d5f5d?w=400&h=300&fit=crop',
    },
    {
      id: 'wc-3',
      year: '1020s CE',
      title: 'Jayasimha II\'s Victories',
      subtitle: 'Territorial recovery and cultural patronage',
      fullText: 'Jayasimha II recaptured Kollipara from Cholas, defeated Paramara Bhoja of Malwa, and allied with Chandelas against common foes. He shifted patronage to Shaivism, building temples like those at Itagi. His reign stabilized the empire, fostering Vesara architecture and Kannada literature.',
      category: 'Military & Culture',
      highlights: ['Kollipara recaptured', 'Paramara Bhoja defeated', 'Shaivism patronized', 'Vesara architecture promoted'],
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop',
    },
    {
      id: 'wc-4',
      year: '1076 CE',
      title: 'Vikramaditya VI\'s Accession',
      subtitle: 'Golden age of scholarship',
      fullText: 'Vikramaditya VI seized the throne from brother Someshvara II, ushering a 50-year golden age with Chalukya-Vikrama era dating. He subdued rebels, raided Chola territories, and commissioned Vikramankadeva Charita chronicle. His court thrived with scholars like Bilhana and Vijnaneshvara, advancing legal texts like Mitakshara.',
      category: 'Culture & Administration',
      highlights: ['Chalukya-Vikrama era established', 'Chola territories raided', 'Vikramankadeva Charita commissioned', 'Legal texts like Mitakshara advanced'],
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    },
    {
      id: 'wc-5',
      year: '1184 CE',
      title: 'Someshvara IV\'s Resistance',
      subtitle: 'Dynasty\'s effective end',
      fullText: 'Someshvara IV fought Hoysala and Yadava incursions amid internal strife but lost Kalyani to Kalachuri Bijjala II\'s usurpation. Feudal revolts and overextension weakened defenses. This marked the dynasty\'s effective end, fragmenting into successor states.',
      category: 'Political Change',
      highlights: ['Hoysala and Yadava attacks', 'Kalyani lost to Kalachuris', 'Internal feudal revolts', 'Fragmentation into successor states'],
      image: 'https://images.unsplash.com/photo-1582719471537-41efb2d30bba?w=400&h=300&fit=crop',
    },
  ]

  const parentEvent = { id: 'evt5', title: 'Western Chalukya Revival', year: '973–1189 CE' }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/timeline')} className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8"><ArrowLeft size={20} />Back to Timeline</button>
        <div className="mb-12">
          <div className="text-primary-600 font-bold text-sm mb-2">DETAILED HISTORY</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{parentEvent.title}</h1>
          <p className="text-xl text-gray-600">The Western Chalukya revival and major events of their rule.</p>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Western Chalukya Dynasty</h3>
          <p className="text-gray-700 leading-relaxed mb-6">The Western Chalukya revival, known as the Chalukyas of Kalyani (973–1189 CE), re-established Chalukya rule after Rashtrakuta dominance, with capitals at Manyakheta and Kalyani. From their strong base in the Deccan, they engaged in prolonged conflicts with the Chola Empire and later the Hoysalas, shaping southern Indian political dynamics. The dynasty was renowned for its cultural patronage, commissioning important literary works like the Vikramankadeva Charita and advancing legal scholarship with texts like Mitakshara. Their architectural contributions, particularly in Vesara style temples, enriched the region. Though Rashtrakuta conquest in 1070 CE and increasing pressure from the Hoysalas and Kalachuris ultimately led to their fragmentation in 1189 CE, their legacy endured through successor states and cultural traditions that influenced medieval South India.</p>
        </div>

        <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
          <h4 className="font-bold text-lg mb-4">References & Further Reading</h4>
          <ul className="space-y-2">
            <li><a href="https://www.telangana360.com/2016/09/western-chalukyas-of-kalyani.html" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Telangana 360 - Western Chalukyas of Kalyani</a></li>
            <li><a href="http://chalukyandynasty.blogspot.com/2013/10/kalyani-chalukyas-history-973-1200.html" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Chalukya Dynasty Blog - Kalyani Chalukyas History</a></li>
            <li><a href="https://www.gktoday.in/western-chalukyas-and-eastern-chalukyas/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">GK Today - Western and Eastern Chalukyas</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Western_Chalukya_Empire" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Wikipedia - Western Chalukya Empire</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Chalukya_dynasty" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Wikipedia - Chalukya Dynasty</a></li>
            <li><a href="https://www.geeksforgeeks.org/social-science/chalukya-dynasty-history-significance-art-culture/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">GeeksforGeeks - Chalukya Dynasty History & Culture</a></li>
            <li><a href="https://cbc.gov.in/cbcdev/chalukyas/chalukyas.html" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Centre for Built Culture - Chalukyas</a></li>
            <li><a href="https://ignited.in/index.php/jasrae/article/download/5690/11188/27947" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Ignited Minds - Academic Research on Chalukyas</a></li>
            <li><a href="https://vajiramandravi.com/upsc-exam/chalukyas-of-badami/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Vajira Mandravi - Chalukyas of Badami UPSC</a></li>
            <li><a href="https://www.insightsonindia.com/ancient-indian-history/post-gupta-age/chalukyas/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Insights on India - Chalukyas Post-Gupta Age</a></li>
          </ul>
        </div>
      </div>
      <ChatBot />
    </div>
  )
}

export default WesternChalukyaTimeline
