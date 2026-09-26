import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'
import HoverExpandTimeline from '../components/HoverExpandTimeline'
import AiraQuizNudge from '../components/AiraQuizNudge'
import useQuizNudge from '../hooks/useQuizNudge'

const RashtrakutaTimeline = () => {
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [expandedEvent, setExpandedEvent] = useState(null)

  const visuals = [
    {
      id: 'rashtrakuta-map',
      title: 'Rashtrakuta Empire Map',
      url: 'https://lotusarise.com/wp-content/uploads/2023/11/Rashtrakuta-Dynasty-Rashtrakutas-906x1024.png',
      credit: 'Extent of rule',
    },
    {
      id: 'rashtrakuta-monument',
      title: 'Rashtrakuta Monument',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdgse-BrySBH4tuyGRGdc_ePNNCgOtQSI3wQ&s',
      credit: 'Dynastic craftsmanship',
    },
    {
      id: 'rashtrakuta-kailasa',
      title: 'Kailasa Temple, Ellora',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxIeHDoFoayBA8Wmhe9dIJOxt8sRVgrCzQtQ&s',
      credit: 'Monolithic marvel',
    },
  ]

  const events = [
    {
      id: 'r-1',
      year: '753 CE',
      title: 'Founding by Dantidurga',
      subtitle: 'End of the Badami Chalukyas',
      fullText: "In 753 CE Dantidurga overthrew the Badami Chalukya king Kirtivarman II, as recorded in his Samangadh copper-plate grant, and founded the Rashtrakuta dynasty. Rising from Achalapura (modern Elichpur) in the Berar region, he performed the Hiranyagarbha ceremony to affirm royal status and seized the northern Deccan. His successors made Manyakheta the imperial capital, from which the Rashtrakutas dominated the Deccan for two centuries.",
      category: 'Politics',
      highlights: [
        'Overthrew Chalukya Kirtivarman II in 753 CE',
        'Founding recorded in the Samangadh copper-plate grant',
        'Rose from Achalapura (Elichpur) in Berar',
        'Performed the Hiranyagarbha ceremony to claim kingship',
        'Manyakheta became the imperial capital',
      ],
      image: '/images/rashtrakuta/rashtrakuta-1-ellora.jpg',
      sources: [{ label: 'Wikipedia — Rashtrakuta dynasty', url: 'https://en.wikipedia.org/wiki/Rashtrakuta_dynasty' }],
    },
    {
      id: 'r-2',
      year: '756-773 CE',
      title: "Krishna I & the Kailasa Temple",
      subtitle: 'A monolith carved from a cliff',
      fullText: "Krishna I (r. 756-773) expanded the young empire, subduing the Gangas of Talakad and the Konkan and accepting the submission of the Eastern Chalukyas. He is immortalised as the patron of the Kailasa temple at Ellora - a single, colossal temple carved top-down from one basalt cliff, among the greatest achievements of rock-cut architecture and dedicated to Shiva.",
      category: 'Military & Culture',
      highlights: [
        'Reigned c. 756-773 CE',
        'Subdued the Gangas of Talakad and the Konkan',
        "Received the Eastern Chalukyas' submission",
        'Commissioned the monolithic Kailasa temple at Ellora',
        'The temple was carved top-down from a single cliff',
      ],
      image: '/images/rashtrakuta/rashtrakuta-2-kailasa.jpg',
      sources: [{ label: 'Wikipedia — Rashtrakuta dynasty', url: 'https://en.wikipedia.org/wiki/Rashtrakuta_dynasty' }],
    },
    {
      id: 'r-3',
      year: '780-793 CE',
      title: "Dhruva Dharavarsha's Rise",
      subtitle: 'Into the northern tripartite struggle',
      fullText: "Dhruva Dharavarsha (r. 780-793) turned the Rashtrakuta kingdom into a pan-Indian empire. After putting down a succession struggle, he marched north into the Gangetic plains and defeated both the Pratihara king Vatsaraja and the Pala king Dharmapala - the first Rashtrakuta intervention in the great tripartite struggle for Kannauj. His campaigns extended influence from the Kaveri deep into central and northern India.",
      category: 'Military',
      highlights: [
        'Reigned c. 780-793 CE',
        'Secured the throne after a succession struggle',
        'Marched north into the Gangetic plains',
        'Defeated the Pratihara Vatsaraja and Pala Dharmapala',
        'Entered the tripartite struggle for Kannauj',
      ],
      image: '/images/rashtrakuta/rashtrakuta-3-kailasa-elephant.jpg',
      sources: [{ label: 'Wikipedia — Rashtrakuta dynasty', url: 'https://en.wikipedia.org/wiki/Rashtrakuta_dynasty' }],
    },
    {
      id: 'r-4',
      year: '793-814 CE',
      title: "Govinda III's Peak",
      subtitle: 'Territorial zenith',
      fullText: "Govinda III (r. 793-814) carried the empire to its territorial zenith. His Sanjan inscription boasts that his horses drank from Himalayan streams and his elephants from the Ganges. He crushed a confederacy of rival kings, humbled the Pratiharas and campaigned as far south as Kanchi, so that Rashtrakuta power stretched from Kannauj and Banaras in the north to the Tamil country and Bharuch.",
      category: 'Military',
      highlights: [
        "Reigned c. 793-814 CE at the empire's peak",
        'Sanjan inscription records campaigns to the Himalayas and Ganges',
        'Humbled the Pratiharas and a confederacy of rivals',
        'Campaigned south to Kanchi',
        'Empire spanned Kannauj-Banaras to the Tamil country',
      ],
      image: '/images/rashtrakuta/rashtrakuta-4-kuknur.jpg',
      sources: [{ label: 'Wikipedia — Rashtrakuta dynasty', url: 'https://en.wikipedia.org/wiki/Rashtrakuta_dynasty' }],
    },
    {
      id: 'r-5',
      year: 'c. 916 CE',
      title: "Indra III's Kannauj Sack",
      subtitle: 'Rashtrakuta power peaks in the north',
      fullText: "Indra III (r. 914-929) revived Rashtrakuta fortunes in the north. Around 915-916 CE he swept into the Gangetic doab and sacked Kannauj, the Pratihara capital, temporarily driving out Mahipala I - the high-water mark of Rashtrakuta power in the north. The Arab geographer Al-Masudi, writing in 944, ranked the Rashtrakuta empire among the four greatest powers of the contemporary world.",
      category: 'Military',
      highlights: [
        'Reigned c. 914-929 CE',
        'Sacked the Pratihara capital Kannauj c. 915-916',
        'Temporarily expelled the Pratihara Mahipala I',
        'Marked the peak of Rashtrakuta power in the north',
        "Al-Masudi (944) ranked the empire among the world's greatest",
      ],
      image: '/images/rashtrakuta/rashtrakuta-5-jain-narayana.jpg',
      sources: [{ label: 'Wikipedia — Rashtrakuta dynasty', url: 'https://en.wikipedia.org/wiki/Rashtrakuta_dynasty' }],
    },
    {
      id: 'r-6',
      year: '939-967 CE',
      title: "Krishna III's Southern Push",
      subtitle: 'The last great Rashtrakuta',
      fullText: "Krishna III (r. 939-967), the last great Rashtrakuta, pushed the empire's reach from the Narmada to the Kaveri. He campaigned deep into the Tamil country, occupying Tondaimandalam and Kanchi and levying tribute on the king of Ceylon, while patronising Jain temples and Kannada letters. After his death the empire quickly unravelled; the Paramaras sacked the capital Manyakheta in 972, and the Kalyani Chalukyas soon supplanted the dynasty.",
      category: 'Military & Culture',
      highlights: [
        'Reigned c. 939-967 CE, the last great Rashtrakuta',
        'Extended power from the Narmada to the Kaveri',
        'Occupied Tondaimandalam and Kanchi in the Tamil country',
        'Levied tribute on the king of Ceylon',
        'After his death, Manyakheta was sacked in 972',
      ],
      image: '/images/rashtrakuta/rashtrakuta-6-kailasa-nandi.jpg',
      sources: [{ label: 'Wikipedia — Rashtrakuta dynasty', url: 'https://en.wikipedia.org/wiki/Rashtrakuta_dynasty' }],
    },
  ]

  const { showNudge, markSeen, hideNudge } = useQuizNudge(events.length)

  const handleToggleEvent = (eventId) => {
    const next = expandedEvent === eventId ? null : eventId
    setExpandedEvent(next)
    if (next === eventId) markSeen(eventId)
  }

  const parentEvent = { id: 'evt4', title: 'Rashtrakuta Empire', year: '753 CE', category: 'Politics' }

  return (
    <div className="min-h-screen py-12 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/timeline')} className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8"><ArrowLeft size={20} />Back to Timeline</button>

        <div className="mb-12">
          <div className="text-primary-600 font-bold text-sm mb-2">DETAILED HISTORY</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{parentEvent.title}</h1>
          <p className="text-xl text-gray-600">Key Rashtrakuta rulers and achievements.</p>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start">
          <div className="space-y-10">
            <HoverExpandTimeline events={events} onOpen={markSeen} />

            <div className="p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Rashtrakuta Empire</h3>
              <p className="text-gray-700 leading-relaxed mb-6">The Rashtrakuta Empire (753–982 CE) was a major Deccan power that dominated South India and periodically expanded into North India, engaging in the tripartite struggle with the Pratiharas and Palas. From their capital at Manyakheta, the Rashtrakutas controlled vast territories spanning from the Narmada River to the Tamil lands. Renowned for their architectural patronage, including the iconic Kailasa Temple at Ellora and numerous Jain temples, they were also great supporters of literature and learning. Though their direct rule ended in 982 CE with the rise of the Chalukyas of Kalyani, their cultural and architectural legacy profoundly influenced subsequent South Indian dynasties.</p>
            </div>

            <div className="p-6 bg-cream-50 rounded-lg border border-gray-200">
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

export default RashtrakutaTimeline
