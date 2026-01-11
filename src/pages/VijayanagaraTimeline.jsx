import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'

const VijayanagaraTimeline = () => {
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [expandedEvent, setExpandedEvent] = useState(null)

  const events = [
    {
      id: 'v-1',
      year: '1336 CE',
      title: 'Empire Founded',
      subtitle: 'Harihara I & Bukka Raya I establish Vijayanagara',
      fullText: 'Harihara I and Bukka Raya I, former Hoysala feudatories, established Vijayanagara on Tungabhadra\'s southern banks after escaping Tughlaq captivity and reconverting to Hinduism under sage Vidyaranya. They unified fragmented Hindu kingdoms, building Hampi as a fortified capital. This countered northern invasions, fostering Dravidian revival in arts and administration.',
      category: 'Politics',
      highlights: ['Tungabhadra capital site', 'Hampi fortification', 'Hindu kingdoms unified', 'Dravidian revival initiated'],
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=300&fit=crop',
    },
    {
      id: 'v-2',
      year: '1370s CE',
      title: 'Bukka\'s Conquests',
      subtitle: 'Expansion and military consolidation',
      fullText: 'Bukka Raya I expanded borders by defeating Madurai Sultanate, Kondavidu Reddis, and Arcot chiefs, controlling eastern seas to Goa. He promoted Shaivism, constructed temples, and centralized taxation for military strength. These victories secured trade routes, boosting economy through ports like Bhatkal.',
      category: 'Military',
      highlights: ['Madurai Sultanate defeated', 'Eastern seas to Goa controlled', 'Shaivism patronized', 'Trade routes secured'],
      image: 'https://images.unsplash.com/photo-1609920658906-8223652d5f5d?w=400&h=300&fit=crop',
    },
    {
      id: 'v-3',
      year: '1509 CE',
      title: 'Krishnadevaraya Crowned',
      subtitle: 'Golden age of empire',
      fullText: 'Krishnadevaraya ascended, launching campaigns that crushed Gajapati Odisha, Bijapur Adil Shahis, and Ummattur Nayaks, annexing Raichur Doab. His Amuktamalyada epic and Vitthala Temple patronage epitomized Telugu literature and Vijayanagara architecture. Reign marked empire\'s golden age in prosperity and military invincibility.',
      category: 'Military & Culture',
      highlights: ['Gajapati Odisha defeated', 'Raichur Doab annexed', 'Amuktamalyada epic composed', 'Vitthala Temple patronized'],
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop',
    },
    {
      id: 'v-4',
      year: '1520 CE',
      title: 'Battle of Raichur',
      subtitle: 'Krishnadevaraya\'s decisive victory',
      fullText: 'Krishnadevaraya decisively defeated Bijapur\'s Ismail Adil Shah at Raichur Doab, capturing strategic fortress despite artillery superiority. This preserved southern frontiers, yielded massive loot including diamonds, and reinforced Vijayanagara hegemony. Portuguese accounts praise his tactical genius with war elephants and infantry.',
      category: 'Military',
      highlights: ['Ismail Adil Shah defeated', 'Strategic fortress captured', 'Massive loot obtained', 'Southern frontiers preserved'],
      image: 'https://images.unsplash.com/photo-1581092162562-40038f63dd77?w=400&h=300&fit=crop',
    },
    {
      id: 'v-5',
      year: '1565 CE',
      title: 'Talikota Defeat',
      subtitle: 'Sultanates alliance crushes Vijayanagara',
      fullText: 'Alliance of Deccan Sultanates (Bijapur, Ahmadnagar, Golconda, Bidar) crushed Vijayanagara forces at Rakshasa-Tangadi (Talikota), killing Ramaraya. Hampi was sacked for months, temples desecrated, irrigation ruined. This shattered the empire, fragmenting it into Nayak principalities while ending centralized Hindu power.',
      category: 'Military & Political Change',
      highlights: ['Sultanate alliance formed', 'Ramaraya killed in battle', 'Hampi sacked for months', 'Empire fragmented into Nayak principalities'],
      image: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=400&h=300&fit=crop',
    },
  ]

  const parentEvent = { id: 'evt8', title: 'Vijayanagara Empire', year: '1336–1646 CE' }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/timeline')} className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8"><ArrowLeft size={20} />Back to Timeline</button>

        <div className="mb-12">
          <div className="text-primary-600 font-bold text-sm mb-2">DETAILED HISTORY</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{parentEvent.title}</h1>
          <p className="text-xl text-gray-600">Key events of Vijayanagara's rise and fall.</p>
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
                      <img src={event.image} alt={event.title} className="w-full h-48 md:h-64 object-cover rounded-lg mb-4" />
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Vijayanagara Empire</h3>
          <p className="text-gray-700 leading-relaxed mb-6">The Vijayanagara Empire (1336–1646 CE), founded by Harihara I and Bukka Raya I amid Delhi Sultanate incursions, became South India\'s bulwark against Muslim expansions. With its capital at Hampi on the Tungabhadra River, Vijayanagara unified fragmented Hindu kingdoms and emerged as one of the most powerful empires in medieval India. The reign of Krishnadevaraya (1509–1529 CE) marked the empire\'s golden age, characterized by unprecedented military victories, extensive territorial control, and flourishing arts and literature. The empire was renowned for its magnificent architecture, including the iconic Vitthala Temple at Hampi with its ornate stone carvings. However, the catastrophic defeat at the Battle of Talikota in 1565 CE by the allied Deccan Sultanates shattered the centralized empire, fragmenting it into Nayak principalities. Though political unity dissolved, Vijayanagara\'s cultural and architectural legacy endured, influencing South Indian traditions for centuries.</p>
        </div>

        <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
          <h4 className="font-bold text-lg mb-4">References & Further Reading</h4>
          <ul className="space-y-2">
            <li><a href="https://vijayanagara.nic.in/en/history/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Official Vijayanagara History</a></li>
            <li><a href="https://www.nextias.com/blog/vijayanagara-empire/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Next IAS - Vijayanagara Empire</a></li>
            <li><a href="https://vijayanagara.nic.in/history/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Vijayanagara NIC History Portal</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Origin_of_the_Vijayanagara_Empire" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Wikipedia - Origin of Vijayanagara Empire</a></li>
            <li><a href="https://byjus.com/free-ias-prep/the-vijayanagar-empire/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">BYJU\'S - The Vijayanagar Empire</a></li>
            <li><a href="https://testbook.com/question-answer/vijayanagara-empire-was-founded-by--5f02d729526ac6285b8803f3" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Testbook - Vijayanagara Empire Questions</a></li>
            <li><a href="https://vajiramandravi.com/upsc-exam/vijayanagara-empire/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Vajira Mandravi - Vijayanagara Empire UPSC</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Vijayanagara_Empire" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Wikipedia - Vijayanagara Empire</a></li>
            <li><a href="https://www.britannica.com/place/India/The-Vijayanagar-empire-1336-1646" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Britannica - The Vijayanagar Empire</a></li>
            <li><a href="https://ebooks.inflibnet.ac.in/icp01/chapter/the-vijayanagara-empire/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">InflibreNet - The Vijayanagara Empire (eBook)</a></li>
          </ul>
        </div>
      </div>
      <ChatBot />
    </div>
  )
}

export default VijayanagaraTimeline
