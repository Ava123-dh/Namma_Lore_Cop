import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'
import HoverExpandTimeline from '../components/HoverExpandTimeline'
import AiraQuizNudge from '../components/AiraQuizNudge'
import useQuizNudge from '../hooks/useQuizNudge'

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
      fullText: 'The brothers Harihara I and Bukka Raya I founded the Vijayanagara Empire in 1336, launching the Sangama dynasty. They rose in the wake of the Delhi Sultanate\'s destruction of the Yadava, Kakatiya and Pandya kingdoms and the collapse of the local Kampili chiefdom around 1327–28. Their first capital was Anegundi on the north bank of the Tungabhadra, soon shifted across the river to the more defensible Vijayanagara (Hampi). By tradition the sage Vidyaranya of Sringeri inspired the venture, though historians regard his exact role as uncertain. The new state grew into South India\'s bulwark against further Sultanate expansion.',
      category: 'Politics',
      highlights: [
        'Founded in 1336 by brothers Harihara I and Bukka Raya I',
        'Launched the Sangama dynasty, first of four ruling houses',
        'First capital at Anegundi, then Vijayanagara (Hampi) across the Tungabhadra',
        'Rose amid the collapse of the Kampili chiefdom (c. 1327–28)',
        'By tradition inspired by sage Vidyaranya of Sringeri (role debated)',
        'Became South India\'s bulwark against Delhi Sultanate expansion',
      ],
      image: '/images/vijayanagara/vijayanagara-1-virupaksha.jpg',
      sources: [
        { label: 'Wikipedia — Vijayanagara Empire', url: 'https://en.wikipedia.org/wiki/Vijayanagara_Empire' },
      ],
    },
    {
      id: 'v-2',
      year: '1356–1377 CE',
      title: 'Bukka\'s Conquests',
      subtitle: 'Expansion and military consolidation',
      fullText: 'Bukka Raya I (reigned 1356–1377) succeeded his brother Harihara I and turned the young kingdom into an empire. By about 1360 he had subdued the Shambuvaraya chiefs of Arcot and the Reddis of Kondavidu and annexed the region around Penukonda. In 1371 his forces destroyed the Madurai Sultanate and advanced south to Rameswaram, and by 1374 he wrested the Tungabhadra–Krishna doab from the Bahmanis and captured Goa. He exacted tribute from the Jaffna kingdom of Ceylon and the Zamorins of Malabar, and is said to have sent a diplomatic mission to China. He patronised the scholars Vidyaranya and Sayana.',
      category: 'Military',
      highlights: [
        'Reigned 1356–1377, succeeding founder Harihara I',
        'Destroyed the Madurai Sultanate in 1371, reaching Rameswaram',
        'Took the Tungabhadra–Krishna doab from the Bahmanis and captured Goa by 1374',
        'Subdued Arcot\'s Shambuvaraya chiefs and the Kondavidu Reddis',
        'Exacted tribute from Jaffna (Ceylon) and the Zamorins of Malabar',
        'Reputedly sent a diplomatic mission to China',
      ],
      image: '/images/vijayanagara/vijayanagara-2-vittala.jpg',
      sources: [
        { label: 'Wikipedia — Bukka Raya I', url: 'https://en.wikipedia.org/wiki/Bukka_Raya_I' },
      ],
    },
    {
      id: 'v-3',
      year: '1509 CE',
      title: 'Krishnadevaraya Crowned',
      subtitle: 'Golden age of empire',
      fullText: 'Krishnadevaraya, third ruler of the Tuluva dynasty, acceded in 1509 (crowned in January 1510) and reigned until 1529 over the empire\'s political and cultural zenith. He captured the forts of Udayagiri (1512) and Kondaveedu (1513), subdued the Gajapatis of Odisha (1514), and won the Battle of Raichur in 1520. His court hosted the Ashtadiggajas, eight celebrated Telugu poets including Allasani Peddana, and he himself composed the Telugu epic Amuktamalyada as well as Sanskrit works. He cultivated friendly ties with the Portuguese at Goa from 1510, importing firearms and Arabian horses. Babur reckoned him the most powerful ruler in India.',
      category: 'Military & Culture',
      highlights: [
        'Third Tuluva ruler; acceded 1509, crowned January 1510, reigned to 1529',
        'Captured the forts of Udayagiri (1512) and Kondaveedu (1513)',
        'Subdued the Gajapatis of Odisha in 1514',
        'Won the decisive Battle of Raichur in 1520',
        'Hosted the Ashtadiggajas and wrote the Telugu epic Amuktamalyada',
        'Allied with the Portuguese at Goa for firearms and horses (1510)',
      ],
      image: '/images/vijayanagara/vijayanagara-3-krishnadevaraya.jpg',
      sources: [
        { label: 'Wikipedia — Krishnadevaraya', url: 'https://en.wikipedia.org/wiki/Krishnadevaraya' },
      ],
    },
    {
      id: 'v-4',
      year: '1520 CE',
      title: 'Battle of Raichur',
      subtitle: 'Krishnadevaraya\'s decisive victory',
      fullText: 'On 19 May 1520 Krishnadevaraya defeated Ismail Adil Shah of Bijapur in a battle for control of the fertile Raichur doab. The clash was triggered when Seyed Maraikar, sent to Goa with money to buy horses, defected to the Adil Shah and Bijapur refused to return him. A Portuguese contingent under Cristóvão de Figueiredo used arquebuses to help storm the fortress; the Bijapur army, which relied more heavily on cannon, was routed and Vijayanagara briefly occupied Bijapur itself. The victory marked the military high-water mark of Krishnadevaraya\'s reign.',
      category: 'Military',
      highlights: [
        'Fought on 19 May 1520 for the fertile Raichur doab',
        'Krishnadevaraya (Vijayanagara) vs Ismail Adil Shah (Bijapur)',
        'Sparked by the defection of the horse-buyer Seyed Maraikar',
        'Portuguese arquebusiers under Cristóvão de Figueiredo aided the assault',
        'Decisive Vijayanagara victory; Bijapur city briefly occupied',
        'Military high point of Krishnadevaraya\'s reign',
      ],
      image: '/images/vijayanagara/vijayanagara-4-raichur.jpg',
      sources: [
        { label: 'Wikipedia — Battle of Raichur', url: 'https://en.wikipedia.org/wiki/Battle_of_Raichur' },
      ],
    },
    {
      id: 'v-5',
      year: '1565 CE',
      title: 'Talikota Defeat',
      subtitle: 'Sultanates alliance crushes Vijayanagara',
      fullText: 'On 23 January 1565 the combined armies of four Deccan sultanates — Bijapur, Ahmadnagar, Golconda and Bidar — routed Vijayanagara at Talikota, a battle also known as Rakshasi-Tangadi. The aged regent Aliya Rama Raya was captured and beheaded on the field, and his army collapsed. The victors marched on the capital and plundered Vijayanagara (Hampi) largely unopposed, wrecking its temples and waterworks. The battle broke the centralised empire, which fragmented into Nayaka principalities and declined over the following decades.',
      category: 'Military & Political Change',
      highlights: [
        'Fought on 23 January 1565; also known as Rakshasi-Tangadi',
        'Alliance of the Bijapur, Ahmadnagar, Golconda and Bidar sultanates',
        'Regent Aliya Rama Raya captured and beheaded on the field',
        'Capital Vijayanagara (Hampi) sacked and largely destroyed',
        'Shattered central authority; empire fragmented into Nayaka states',
      ],
      image: '/images/vijayanagara/vijayanagara-5-narasimha.jpg',
      sources: [
        { label: 'Wikipedia — Battle of Talikota', url: 'https://en.wikipedia.org/wiki/Battle_of_Talikota' },
      ],
    },
  ]

  const { showNudge, markSeen, hideNudge } = useQuizNudge(events.length)

  const handleToggleEvent = (eventId) => {
    const next = expandedEvent === eventId ? null : eventId
    setExpandedEvent(next)
    if (next === eventId) markSeen(eventId)
  }

  const parentEvent = { id: 'evt8', title: 'Vijayanagara Empire', year: '1336–1646 CE' }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/timeline')} className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8"><ArrowLeft size={20} />Back to Timeline</button>

        <div className="mb-12">
          <div className="text-primary-600 font-bold text-sm mb-2">DETAILED HISTORY</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{parentEvent.title}</h1>
          <p className="text-xl text-gray-600">Key events of Vijayanagara's rise and fall.</p>
        </div>

        <HoverExpandTimeline events={events} onOpen={markSeen} />

        <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Vijayanagara Empire</h3>
          <p className="text-gray-700 leading-relaxed mb-6">The Vijayanagara Empire (1336–1646 CE), founded by Harihara I and Bukka Raya I amid Delhi Sultanate incursions, became South India\'s bulwark against Muslim expansions. With its capital at Hampi on the Tungabhadra River, Vijayanagara unified fragmented Hindu kingdoms and emerged as one of the most powerful empires in medieval India. The reign of Krishnadevaraya (1509–1529 CE) marked the empire\'s golden age, characterized by unprecedented military victories, extensive territorial control, and flourishing arts and literature. The empire was renowned for its magnificent architecture, including the iconic Vitthala Temple at Hampi with its ornate stone carvings. However, the catastrophic defeat at the Battle of Talikota in 1565 CE by the allied Deccan Sultanates shattered the centralized empire, fragmenting it into Nayak principalities. Though political unity dissolved, Vijayanagara\'s cultural and architectural legacy endured, influencing South Indian traditions for centuries.</p>
        </div>

        <div className="mt-8 p-6 bg-cream-50 rounded-lg border border-gray-200">
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
      <AiraQuizNudge show={showNudge} onClose={hideNudge} />
      <ChatBot />
    </div>
  )
}

export default VijayanagaraTimeline
