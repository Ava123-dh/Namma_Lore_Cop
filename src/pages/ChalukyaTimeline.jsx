import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'
import HoverExpandTimeline from '../components/HoverExpandTimeline'
import AiraQuizNudge from '../components/AiraQuizNudge'
import useQuizNudge from '../hooks/useQuizNudge'

const ChalukyaTimeline = () => {
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [expandedEvent, setExpandedEvent] = useState(null)

  const visuals = [
    {
      id: 'chalukya-map',
      title: 'Chalukya Empire Peak',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHf44Pn-ZPUSu8o_-tDbwD9Vlidr8lfJ3N-A&s',
      credit: 'Deccan reach map',
    },
    {
      id: 'chalukya-king',
      title: 'Pulakesin II',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPuTdKuOmtpC5v7UsWi-Pw5u8OsQ7Oi8O6OA&s',
      credit: 'Iconic ruler portrait',
    },
    {
      id: 'chalukya-architecture',
      title: 'Chalukyan Architecture',
      url: 'https://www.shutterstock.com/image-photo/06-07-2008-vintage-upper-600nw-2393376145.jpg',
      credit: 'Temple craftsmanship',
    },
  ]

  const events = [
    {
      id: 'ch-1',
      year: '543 CE',
      title: "Pulakeshin I's Founding",
      subtitle: 'Badami sovereignty established',
      fullText: "Pulakeshin I founded the Chalukya dynasty in 543 CE, seizing the hill of Vatapi (modern Badami) and fortifying it as his capital. Inscriptions record that he performed the Ashvamedha (horse sacrifice) to proclaim sovereign status as the older Deccan powers waned. His consolidation of the Malaprabha valley gave the dynasty the secure base from which his successors expanded across the Deccan.",
      category: 'Politics',
      highlights: [
        'Founded the Chalukya dynasty in 543 CE',
        'Seized and fortified Vatapi (Badami) as capital',
        'Performed the Ashvamedha to assert sovereignty',
        'Consolidated the Malaprabha valley in the Deccan',
        'Set the base for later Chalukya expansion',
      ],
      image: '/images/chalukya/chalukya-1-badami-caves.jpg',
      sources: [{ label: 'Wikipedia — Chalukya dynasty', url: 'https://en.wikipedia.org/wiki/Chalukya_dynasty' }],
    },
    {
      id: 'ch-2',
      year: 'c. 618 CE',
      title: 'Narmada Victory',
      subtitle: 'Pulakeshin II halts Harshavardhana',
      fullText: "Pulakeshin II (r. 609-642), the greatest Chalukya ruler, checked the northern emperor Harshavardhana's southward advance at the Narmada River around 618 CE. The feat, celebrated in the Aihole inscription composed by his court poet Ravikirti, won him the imperial title 'Parameshvara' and fixed the Narmada as the effective boundary between north and south, securing Chalukya independence and prestige across the Deccan.",
      category: 'Military',
      highlights: [
        'Pulakeshin II reigned c. 609-642 CE',
        "Halted Harshavardhana's advance at the Narmada, c. 618 CE",
        "Assumed the imperial title 'Parameshvara'",
        'Celebrated in the Aihole inscription by the poet Ravikirti',
        'Fixed the Narmada as the north-south boundary',
      ],
      image: '/images/chalukya/chalukya-2-badami-fort.jpg',
      sources: [{ label: 'Wikipedia — Chalukya dynasty', url: 'https://en.wikipedia.org/wiki/Chalukya_dynasty' }],
    },
    {
      id: 'ch-4',
      year: 'c. 624 CE',
      title: 'Eastern Branch Founded',
      subtitle: 'Vengi given to brother Kubja Vishnuvardhana',
      fullText: "After conquering the eastern Deccan, Pulakeshin II installed his brother Kubja Vishnuvardhana as viceroy of Vengi around 621-624 CE. Within a generation this branch became the independent Eastern Chalukya dynasty, ruling the Andhra coast from Vengi. It outlasted the parent Badami line by centuries, shaping Telugu language, literature and temple architecture until it merged with the Cholas in the late 11th century.",
      category: 'Expansion',
      highlights: [
        'Kubja Vishnuvardhana made viceroy of Vengi c. 621-624 CE',
        'Grew into the independent Eastern Chalukya dynasty',
        'Ruled the Andhra coast from Vengi',
        'Fostered Telugu language, literature and temple art',
        'Endured for centuries, later merging with the Cholas',
      ],
      image: '/images/chalukya/chalukya-4-alampur.jpg',
      sources: [{ label: 'Wikipedia — Chalukya dynasty', url: 'https://en.wikipedia.org/wiki/Chalukya_dynasty' }],
    },
    {
      id: 'ch-3',
      year: 'c. 670 CE',
      title: 'Kanchi Captured',
      subtitle: 'Vikramaditya I takes the Pallava capital',
      fullText: "The Pallava king Narasimhavarman I sacked Badami in 642, and Pulakeshin II is presumed to have died fighting. His son Vikramaditya I (r. 655-680) restored Chalukya fortunes, drove the Pallavas back and around 670 CE captured their capital, Kanchipuram. He left a Kannada victory inscription on a pillar at the city's Kailasanatha temple, avenging his father and re-establishing Chalukya supremacy in the south.",
      category: 'Military',
      highlights: [
        'Pallavas under Narasimhavarman I sacked Badami in 642',
        'Vikramaditya I (r. 655-680) restored Chalukya power',
        'Captured the Pallava capital Kanchipuram c. 670 CE',
        "Left a Kannada inscription at Kanchi's Kailasanatha temple",
        "Avenged his father Pulakeshin II's death",
      ],
      image: '/images/chalukya/chalukya-3-kanchi.jpg',
      sources: [{ label: 'Wikipedia — Chalukya dynasty', url: 'https://en.wikipedia.org/wiki/Chalukya_dynasty' }],
    },
    {
      id: 'ch-5',
      year: '733-744 CE',
      title: "Vikramaditya II's Triumphs",
      subtitle: 'Military zenith and cultural flourishing',
      fullText: "Vikramaditya II (r. 733-744) repeatedly overran the Pallava capital Kanchipuram, defeating Nandivarman II, yet spared and endowed its temples. His generals also repelled Arab raids pushing into the southern Deccan around 738. To mark his triumphs his queens Lokamahadevi and Trailokyamahadevi built the Virupaksha and Mallikarjuna temples at Pattadakal, high points of early Chalukyan (Vesara) architecture and today a UNESCO World Heritage Site.",
      category: 'Military & Culture',
      highlights: [
        'Reigned 733-744 CE at the Chalukya military zenith',
        'Overran Kanchipuram and defeated Pallava Nandivarman II',
        "Spared and patronised Kanchipuram's temples",
        'Repelled Arab raids into the Deccan (c. 738)',
        'Queens built the Virupaksha & Mallikarjuna temples at Pattadakal',
      ],
      image: '/images/chalukya/chalukya-5-pattadakal-virupaksha.jpg',
      sources: [{ label: 'Wikipedia — Chalukya dynasty', url: 'https://en.wikipedia.org/wiki/Chalukya_dynasty' }],
    },
    {
      id: 'ch-6',
      year: '753 CE',
      title: 'Rashtrakuta Overthrow',
      subtitle: 'End of the Badami Chalukyas',
      fullText: "In 753 CE Dantidurga, a Rashtrakuta feudatory, overthrew the last Badami Chalukya king, Kirtivarman II, ending roughly two centuries of Chalukya rule. Prolonged wars with the Pallavas and internal strain had sapped the dynasty. Power in the Deccan passed to the Rashtrakutas of Manyakheta, though the Chalukya line would revive two centuries later as the Western (Kalyani) Chalukyas.",
      category: 'Political Change',
      highlights: [
        'Kirtivarman II, the last Badami Chalukya, overthrown in 753 CE',
        'Dantidurga founded the Rashtrakuta dynasty',
        'Ended roughly two centuries of Chalukya rule',
        'Deccan power passed to Manyakheta',
        'Line later revived as the Western (Kalyani) Chalukyas',
      ],
      image: '/images/chalukya/chalukya-6-pattadakal.jpg',
      sources: [{ label: 'Wikipedia — Chalukya dynasty', url: 'https://en.wikipedia.org/wiki/Chalukya_dynasty' }],
    },
  ]

  const { showNudge, markSeen, hideNudge } = useQuizNudge(events.length)

  const handleToggleEvent = (eventId) => {
    const next = expandedEvent === eventId ? null : eventId
    setExpandedEvent(next)
    if (next === eventId) markSeen(eventId)
  }

  const parentEvent = { id: 'evt3', title: 'Chalukya Dynasty', year: 'Badami Chalukyas onwards', category: 'Politics' }

  return (
    <div className="min-h-screen py-12 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/timeline')} className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8">
          <ArrowLeft size={20} />
          Back to Timeline
        </button>

        <div className="mb-12">
          <div className="text-primary-600 font-bold text-sm mb-2">DETAILED HISTORY</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{parentEvent.title}</h1>
          <p className="text-xl text-gray-600">Highlights from the Badami Chalukyas and their legacy.</p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start">
          <div className="space-y-10">
            <HoverExpandTimeline events={events} onOpen={markSeen} />

            <div className="p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Chalukya Dynasty</h3>
              <p className="text-gray-700 leading-relaxed mb-6">The Badami Chalukyas (543–753 CE) established a powerful Deccan empire that dominated South India, pioneering the balance of power between North and South Indian kingdoms. Their strategic military victories, particularly under Pulakesin II and Vikramaditya II, secured Chalukya independence and prestige. The dynasty's patronage led to remarkable Vesara architecture, including the famous temples at Badami, Aihole, and Pattadakal. Though their direct rule ended with the Rashtrakuta conquest, their legacy endured through the Eastern Chalukyas and later revival of the Kalyani Chalukyas.</p>
            </div>

            <div className="p-6 bg-cream-50 rounded-lg border border-gray-200">
              <h4 className="font-bold text-lg mb-4">References & Further Reading</h4>
              <ul className="space-y-2">
                <li><a href="https://lotusarise.com/chalukya-dynasty-upsc/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">LotusArise - Chalukya Dynasty UPSC Notes</a></li>
                <li><a href="https://en.wikipedia.org/wiki/Western_Chalukya_Empire" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Wikipedia - Western Chalukya Empire</a></li>
                <li><a href="https://en.wikipedia.org/wiki/Chalukya_dynasty" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Wikipedia - Chalukya Dynasty</a></li>
                <li><a href="https://www.britannica.com/topic/Chalukya-dynasty" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Britannica - Chalukya Dynasty</a></li>
                <li><a href="https://study.com/academy/lesson/chalukya-dynasty-history-rulers.html" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Study.com - Chalukya Dynasty History & Rulers</a></li>
                <li><a href="https://www.geeksforgeeks.org/social-science/chalukya-dynasty-history-significance-art-culture/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">GeeksforGeeks - Chalukya Dynasty History & Culture</a></li>
                <li><a href="https://testbook.com/ias-preparation/western-chalukyas-of-badami" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Testbook - Western Chalukyas IAS Preparation</a></li>
                <li><a href="https://byjus.com/free-ias-prep/ncert-notes-chalukya-dynasty/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">BYJU'S - NCERT Notes on Chalukya Dynasty</a></li>
                <li><a href="https://prepp.in/news/e-492-chalukyas-6th-century-to-12th-century-medieval-india-history-notes" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">PREPP - Chalukyas 6th-12th Century History Notes</a></li>
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

export default ChalukyaTimeline
