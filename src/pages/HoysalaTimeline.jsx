import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'
import HoverExpandTimeline from '../components/HoverExpandTimeline'
import AiraQuizNudge from '../components/AiraQuizNudge'
import useQuizNudge from '../hooks/useQuizNudge'

const HoysalaTimeline = () => {
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [expandedEvent, setExpandedEvent] = useState(null)

  const events = [
    {
      id: 'h-1',
      year: '1026 CE',
      title: "Nripa Kama II's Founding",
      subtitle: 'Early consolidation in the Malnad hills',
      fullText: "The Hoysalas began as hill chieftains in the Malnad, first attested around 950 CE with the chief Arekalla and consolidated under Nripa Kama II (r. 1026-1047). Vassals of the Western Chalukyas, they built up a compact power base in the Western Ghats from which their successors would later expand onto the Deccan plains.",
      category: 'Politics',
      highlights: [
        "Nripa Kama II ruled c. 1026-1047 CE",
        "Hoysala family attested from c. 950 CE (chief Arekalla)",
        "Rose as chieftains in the Malnad hills",
        "Served as vassals of the Western Chalukyas",
        "Built the base for later expansion",
      ],
      image: '/images/hoysala/hoysala-1-belur-founding.jpg',
      sources: [{ label: 'Wikipedia — Hoysala Empire', url: 'https://en.wikipedia.org/wiki/Hoysala_Empire' }],
    },
    {
      id: 'h-2',
      year: '1047 CE',
      title: "Vinayaditya's Reign",
      subtitle: 'A long, stabilising rule',
      fullText: "Vinayaditya (r. 1047-1098) gave the young dynasty a long, stabilising reign of half a century. Still nominally subordinate to the Western Chalukyas, he strengthened Hoysala authority over the Malnad and the surrounding hill country, setting the stage for the dramatic expansion that would come under his grandson Vishnuvardhana.",
      category: 'Politics',
      highlights: [
        "Vinayaditya reigned c. 1047-1098 CE",
        "A stabilising reign of about fifty years",
        "Remained subordinate to the Western Chalukyas",
        "Consolidated Hoysala power in the Malnad",
        "Set the stage for Vishnuvardhana's expansion",
      ],
      image: '/images/hoysala/hoysala-2-emblem.jpg',
      sources: [{ label: 'Wikipedia — Hoysala Empire', url: 'https://en.wikipedia.org/wiki/Hoysala_Empire' }],
    },
    {
      id: 'h-3',
      year: '1116 CE',
      title: 'Talakad Victory',
      subtitle: 'Vishnuvardhana defeats the Cholas',
      fullText: "In 1116 CE Vishnuvardhana (r. c. 1108-1152) defeated the Cholas at Talakad, wresting Gangavadi from them and earning the title 'Talakadugonda'. Converted to Vaishnavism under the philosopher Ramanuja, he commissioned the exquisite Chennakesava temple at Belur (begun 1117), launching the golden age of Hoysala temple architecture now inscribed by UNESCO.",
      category: 'Military & Religion',
      highlights: [
        "Vishnuvardhana beat the Cholas at Talakad in 1116",
        "Captured Gangavadi and took the title 'Talakadugonda'",
        "Converted to Vaishnavism under Ramanuja",
        "Commissioned the Chennakesava temple at Belur (1117)",
        "Began the golden age of Hoysala architecture",
      ],
      image: '/images/hoysala/hoysala-3-belur-chennakesava.jpg',
      sources: [{ label: 'Wikipedia — Hoysala Empire', url: 'https://en.wikipedia.org/wiki/Hoysala_Empire' }],
    },
    {
      id: 'h-4',
      year: '1193 CE',
      title: "Ballala II's Sovereignty",
      subtitle: 'Hoysala independence declared',
      fullText: "Veera Ballala II (r. 1173-1220) threw off Chalukya overlordship and declared full Hoysala sovereignty in 1193, defeating the Seunas (Yadavas) and other rivals. Ruling from the capital Dwarasamudra (Halebidu), he raised the Hoysalas to a major Deccan power at the height of their territorial reach and cultural patronage.",
      category: 'Politics & Culture',
      highlights: [
        "Veera Ballala II reigned c. 1173-1220 CE",
        "Declared Hoysala independence in 1193",
        "Defeated the Seunas (Yadavas) and other rivals",
        "Ruled from Dwarasamudra (Halebidu)",
        "Raised the Hoysalas to a major Deccan power",
      ],
      image: '/images/hoysala/hoysala-4-halebidu.jpg',
      sources: [{ label: 'Wikipedia — Hoysala Empire', url: 'https://en.wikipedia.org/wiki/Hoysala_Empire' }],
    },
    {
      id: 'h-5',
      year: 'c. 1311-1327 CE',
      title: 'Hoysala-Pandya Wars',
      subtitle: 'Resilience amid Deccan struggles',
      fullText: "Under Veera Ballala III (r. 1292-1343) the Hoysalas were caught between the Pandyas to the south and the expanding Delhi Sultanate to the north. The campaigns of Malik Kafur and his successors sacked the capital Halebidu twice, in 1311 and 1327, forcing Ballala III to shift his base south toward Tiruvannamalai even as he resisted with remarkable tenacity.",
      category: 'Military',
      highlights: [
        "Veera Ballala III reigned 1292-1343 CE",
        "Squeezed between the Pandyas and the Delhi Sultanate",
        "Halebidu sacked twice, in 1311 and 1327",
        "Shifted his base south toward Tiruvannamalai",
        "Resisted the Sultanate with great tenacity",
      ],
      image: '/images/hoysala/hoysala-5-halebidu-relief.jpg',
      sources: [{ label: 'Wikipedia — Hoysala Empire', url: 'https://en.wikipedia.org/wiki/Hoysala_Empire' }],
    },
    {
      id: 'h-6',
      year: '1343 CE',
      title: 'Final Fall',
      subtitle: 'End of Hoysala rule',
      fullText: "Veera Ballala III was killed fighting the Madurai Sultanate in 1343, and with him Hoysala rule effectively ended. Their territories were absorbed by the newly founded Vijayanagara Empire - whose founder Harihara I had served the Hoysalas. Their legacy endures in the temples of Belur, Halebidu and Somanathapura, jointly inscribed as UNESCO World Heritage in 2023.",
      category: 'Political Change',
      highlights: [
        "Veera Ballala III killed at Madurai in 1343",
        "His death ended effective Hoysala rule",
        "Territories absorbed by the Vijayanagara Empire",
        "Vijayanagara's Harihara I had served the Hoysalas",
        "Belur, Halebidu & Somanathapura made UNESCO sites (2023)",
      ],
      image: '/images/hoysala/hoysala-6-somanathapura.jpg',
      sources: [{ label: 'Wikipedia — Hoysala Empire', url: 'https://en.wikipedia.org/wiki/Hoysala_Empire' }],
    },
  ]

  const { showNudge, markSeen, hideNudge } = useQuizNudge(events.length)

  const handleToggleEvent = (eventId) => {
    const next = expandedEvent === eventId ? null : eventId
    setExpandedEvent(next)
    if (next === eventId) markSeen(eventId)
  }

  const parentEvent = { id: 'evt7', title: 'Hoysala Kingdom', year: '1026–1343 CE' }

  return (
    <div className="min-h-screen py-12 bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/timeline')} className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8"><ArrowLeft size={20} />Back to Timeline</button>
        <div className="mb-12">
          <div className="text-primary-600 font-bold text-sm mb-2">DETAILED HISTORY</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{parentEvent.title}</h1>
          <p className="text-xl text-gray-600">Major Hoysala events and cultural achievements.</p>
        </div>
        <HoverExpandTimeline events={events} onOpen={markSeen} />

        <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Hoysala Kingdom</h3>
          <p className="text-gray-700 leading-relaxed mb-6">The Hoysala Kingdom (c. 1026–1343 CE), originating as Chalukya feudatories in Karnataka's Malnad hills, rose to prominence through military prowess and Vesara temple architecture. From their capitals at Belur and later Halebidu (Dwarasamudra), they navigated complex regional politics amid Chola, Kalachuri, and Pandya conflicts. The Hoysalas are celebrated for their exquisite temple architecture featuring intricate stone carvings, exemplified by the renowned Chennakesava Temple at Belur and Hoysaleswara Temple at Halebidu, both now UNESCO World Heritage sites. Their reign marked a golden age of Kannada literature and administrative innovation. Though their direct rule ended in 1343 CE when Veera Ballala III fell to the Madurai Sultanate, their territories were absorbed by the rising Vijayanagara Empire, and their architectural and cultural legacy profoundly influenced subsequent South Indian dynasties.</p>
        </div>

        <div className="mt-8 p-6 bg-cream-50 rounded-lg border border-gray-200">
          <h4 className="font-bold text-lg mb-4">References & Further Reading</h4>
          <ul className="space-y-2">
            <li><a href="https://en.wikipedia.org/wiki/Hoysala_Kingdom" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Wikipedia - Hoysala Kingdom</a></li>
            <li><a href="https://vajiramandravi.com/upsc-exam/hoysala-dynasty/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Vajira Mandravi - Hoysala Dynasty UPSC</a></li>
            <li><a href="https://testbook.com/ugc-net-history/hoysala-dynasty" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Testbook - Hoysala Dynasty UGC-NET History</a></li>
            <li><a href="https://www.newworldencyclopedia.org/entry/Hoysala_Empire" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">New World Encyclopedia - Hoysala Empire</a></li>
            <li><a href="https://study.com/academy/lesson/hoysala-empire-history-founder.html" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Study.com - Hoysala Empire History & Founder</a></li>
            <li><a href="https://www.clearias.com/hoysala-dynasty/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">ClearIAS - Hoysala Dynasty</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Hoysala_administration" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Wikipedia - Hoysala Administration</a></li>
            <li><a href="https://www.britannica.com/topic/Hoysala-dynasty" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Britannica - Hoysala Dynasty</a></li>
            <li><a href="https://jmc.edu/econtent/ug/2062_MEDIEVAL%20INDIAN%20HISTORY%20II.pdf" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">JMC Academic Content - Medieval Indian History II</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Society_of_the_Hoysala_Kingdom" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Wikipedia - Society of the Hoysala Kingdom</a></li>
          </ul>
        </div>
      </div>
      <AiraQuizNudge show={showNudge} onClose={hideNudge} />
      <ChatBot />
    </div>
  )
}

export default HoysalaTimeline
