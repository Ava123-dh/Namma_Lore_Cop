import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'
import HoverExpandTimeline from '../components/HoverExpandTimeline'
import AiraQuizNudge from '../components/AiraQuizNudge'
import useQuizNudge from '../hooks/useQuizNudge'

const WesternChalukyaTimeline = () => {
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [expandedEvent, setExpandedEvent] = useState(null)

  const visuals = [
    {
      id: 'western-chalukya-map',
      title: 'Western Chalukya Reach',
      url: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Indian_Western_Chalukya_Empire_map.svg',
      credit: 'Empire extent',
    },
    {
      id: 'western-chalukya-temple',
      title: 'Siddesvara Shrine, Haveri',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Siddesvara_Temple_Shrine_at_Haveri.JPG/250px-Siddesvara_Temple_Shrine_at_Haveri.JPG',
      credit: 'Vesara craft',
    },
    {
      id: 'western-chalukya-tailapa',
      title: 'Tailapa II',
      url: 'https://pbs.twimg.com/media/GlMeIMTWAAA8qxU.jpg',
      credit: 'Dynastic ruler',
    },
  ]

  const events = [
    {
      id: 'wc-1',
      year: '973 CE',
      title: "Tailapa II's Overthrow",
      subtitle: 'Revives the Chalukya line',
      fullText: "In 973 CE Tailapa II, a Chalukya feudatory of the Rashtrakutas based at Tardavadi in the Bijapur region, exploited the chaos of a Paramara invasion to overthrow his overlords and revive the Chalukya line as the Western (Kalyani) Chalukyas. Ruling first from Manyakheta - the capital was later shifted to Kalyani (modern Basavakalyan) - he restored Chalukya power over the Deccan and patronised the great Kannada poet Ranna.",
      category: 'Politics',
      highlights: [
        'Overthrew the Rashtrakutas in 973 CE',
        'Revived the Chalukya line as the Western (Kalyani) Chalukyas',
        'Rose from a feudatory base at Tardavadi (Bijapur region)',
        'Capital at Manyakheta, later shifted to Kalyani',
        'Patronised the Kannada poet Ranna',
      ],
      image: '/images/western-chalukya/western-chalukya-1-lakkundi.jpg',
      sources: [{ label: 'Wikipedia — Western Chalukya Empire', url: 'https://en.wikipedia.org/wiki/Western_Chalukya_Empire' }],
    },
    {
      id: 'wc-2',
      year: 'c. 1007 CE',
      title: 'Chola Invasion Repelled',
      subtitle: 'Satyashraya holds the Deccan',
      fullText: "Around 1007 CE the Cholas under crown-prince Rajendra (son of Rajaraja I) invaded the Western Chalukya realm, clashing with emperor Satyashraya at Donur in the Bijapur district. The Cholas overran Gangavadi and Nolambavadi to the south, but Satyashraya held his core territory and capital. The campaign opened more than a century of Chalukya-Chola warfare over the Tungabhadra doab and Vengi.",
      category: 'Military',
      highlights: [
        'Chola invasion led by crown-prince Rajendra, c. 1007 CE',
        'Battle against emperor Satyashraya at Donur (Bijapur district)',
        'Cholas overran Gangavadi and Nolambavadi',
        'Satyashraya retained his core lands and capital',
        'Began over a century of Chalukya-Chola wars',
      ],
      image: '/images/western-chalukya/western-chalukya-2-itagi.jpg',
      sources: [{ label: 'Wikipedia — Western Chalukya Empire', url: 'https://en.wikipedia.org/wiki/Western_Chalukya_Empire' }],
    },
    {
      id: 'wc-3',
      year: '1015-1042 CE',
      title: "Jayasimha II's Reign",
      subtitle: 'Consolidation and patronage',
      fullText: "Jayasimha II (r. 1015-1042) stabilised the empire after Satyashraya. He fought the Cholas along the Tungabhadra around 1020-21 and about 1024 checked the Paramara ruler Bhoja of Malwa to the north. His reign consolidated Chalukya control of the Deccan and sustained the temple-building and Kannada literary culture for which the dynasty is known.",
      category: 'Military & Culture',
      highlights: [
        'Reigned 1015-1042 CE',
        'Fought the Cholas along the Tungabhadra c. 1020-21',
        'Checked the Paramara Bhoja of Malwa c. 1024',
        'Stabilised Chalukya control of the Deccan',
        'Sustained temple-building and Kannada literary patronage',
      ],
      image: '/images/western-chalukya/western-chalukya-3-brahma-jinalaya.jpg',
      sources: [{ label: 'Wikipedia — Western Chalukya Empire', url: 'https://en.wikipedia.org/wiki/Western_Chalukya_Empire' }],
    },
    {
      id: 'wc-4',
      year: '1076-1126 CE',
      title: "Vikramaditya VI's Golden Age",
      subtitle: 'Scholarship and the Chalukya-Vikrama era',
      fullText: "Vikramaditya VI (r. 1076-1126) presided over the dynasty's golden age. He took the throne from his brother Someshvara II and inaugurated the 'Chalukya-Vikrama' calendar era. His court produced two landmark works: Bilhana's biographical poem Vikramankadeva Charita and Vijnaneshwara's Mitakshara, still among the most influential treatises in Hindu law. His long reign saw prolific temple-building at Lakkundi, Itagi, Gadag and Dambal.",
      category: 'Culture & Administration',
      highlights: [
        'Ruled c. 1076-1126, the dynasty\'s golden age',
        "Founded the 'Chalukya-Vikrama' era for dating",
        "Court poet Bilhana wrote the Vikramankadeva Charita",
        'Jurist Vijnaneshwara composed the Mitakshara law text',
        'Temple-building at Lakkundi, Itagi, Gadag and Dambal',
      ],
      image: '/images/western-chalukya/western-chalukya-4-dambal.jpg',
      sources: [{ label: 'Wikipedia — Western Chalukya Empire', url: 'https://en.wikipedia.org/wiki/Western_Chalukya_Empire' }],
    },
    {
      id: 'wc-5',
      year: '1184-1200 CE',
      title: "Someshvara IV's Last Stand",
      subtitle: "Dynasty's effective end",
      fullText: "Someshvara IV (r. 1184-1200) made a last bid to restore the dynasty, briefly recapturing Kalyani from the usurping Kalachuris around 1183. But hemmed in by the rising Hoysala, Seuna (Yadava) and Kakatiya powers, he was driven into exile at Banavasi by about 1189. With him the Western Chalukya empire effectively ended, and its lands were partitioned among those successor states.",
      category: 'Political Change',
      highlights: [
        'Reigned c. 1184-1200, the dynasty\'s last ruler',
        'Briefly recaptured Kalyani from the Kalachuris (c. 1183)',
        'Overwhelmed by Hoysalas, Seunas and Kakatiyas',
        'Driven into exile at Banavasi by c. 1189',
        'Empire\'s lands partitioned among successor states',
      ],
      image: '/images/western-chalukya/western-chalukya-5-gadag.jpg',
      sources: [{ label: 'Wikipedia — Western Chalukya Empire', url: 'https://en.wikipedia.org/wiki/Western_Chalukya_Empire' }],
    },
  ]

  const { showNudge, markSeen, hideNudge } = useQuizNudge(events.length)

  const handleToggleEvent = (eventId) => {
    const next = expandedEvent === eventId ? null : eventId
    setExpandedEvent(next)
    if (next === eventId) markSeen(eventId)
  }

  const parentEvent = { id: 'evt5', title: 'Western Chalukya Revival', year: '973–1189 CE' }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/timeline')} className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8"><ArrowLeft size={20} />Back to Timeline</button>
        <div className="mb-12">
          <div className="text-primary-600 font-bold text-sm mb-2">DETAILED HISTORY</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{parentEvent.title}</h1>
          <p className="text-xl text-gray-600">The Western Chalukya revival and major events of their rule.</p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start">
          <div className="space-y-10">
            <HoverExpandTimeline events={events} onOpen={markSeen} />

            <div className="p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Western Chalukya Dynasty</h3>
              <p className="text-gray-700 leading-relaxed mb-6">The Western Chalukya revival, known as the Chalukyas of Kalyani (973–1189 CE), re-established Chalukya rule after Rashtrakuta dominance, with capitals at Manyakheta and Kalyani. From their strong base in the Deccan, they engaged in prolonged conflicts with the Chola Empire and later the Hoysalas, shaping southern Indian political dynamics. The dynasty was renowned for its cultural patronage, commissioning important literary works like the Vikramankadeva Charita and advancing legal scholarship with texts like Mitakshara. Their architectural contributions, particularly in Vesara style temples, enriched the region. Though Rashtrakuta conquest in 1070 CE and increasing pressure from the Hoysalas and Kalachuris ultimately led to their fragmentation in 1189 CE, their legacy endured through successor states and cultural traditions that influenced medieval South India.</p>
            </div>

            <div className="p-6 bg-cream-50 rounded-lg border border-gray-200">
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

          <aside className="hidden lg:block sticky top-24 space-y-6">
            {visuals.map((visual) => (
              <div key={visual.id} className="rounded-2xl overflow-hidden shadow-xl border border-primary-100 bg-cream-50">
                <div className="relative aspect-[4/5] bg-gray-100">
                  <img
                    src={visual.url}
                    alt={visual.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white drop-shadow-md">
                    <div className="text-sm font-semibold">{visual.title}</div>
                    <div className="text-xs text-white/80">{visual.credit}</div>
                  </div>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </div>
      <AiraQuizNudge show={showNudge} onClose={hideNudge} />
      <ChatBot />
    </div>
  )
}

export default WesternChalukyaTimeline
