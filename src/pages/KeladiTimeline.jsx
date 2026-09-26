import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'
import HoverExpandTimeline from '../components/HoverExpandTimeline'
import AiraQuizNudge from '../components/AiraQuizNudge'
import useQuizNudge from '../hooks/useQuizNudge'

const KeladiTimeline = () => {
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [expandedEvent, setExpandedEvent] = useState(null)

  const events = [
    {
      id: 'kel-1',
      year: '1499 CE',
      title: 'Founding by Chaudappa',
      subtitle: 'Keladi established in the Malnad',
      fullText: "The Keladi (or Ikkeri/Bednur) Nayaka dynasty was founded around 1499 by Chaudappa Nayaka - born Chauda Gowda of Pallibailu village near Keladi in the Malnad hills of Shivamogga. Beginning as a local chief under the Vijayanagara Empire, he laid the foundation of a line that would rule the Malnad and the Karnataka coast for over two and a half centuries.",
      category: 'Politics',
      highlights: [
        "Founded c. 1499 by Chaudappa Nayaka",
        "Born Chauda Gowda of Pallibailu, near Keladi",
        "Based in the Malnad hills of Shivamogga",
        "Began as a local chief under Vijayanagara",
        "Line endured for over 250 years",
      ],
      image: '/images/keladi/keladi-1-rameshwara.jpg',
      sources: [{ label: 'Wikipedia — Keladi Nayaka', url: 'https://en.wikipedia.org/wiki/Keladi_Nayaka' }],
    },
    {
      id: 'kel-2',
      year: '1530 CE',
      title: "Sadashiva's Expansion",
      subtitle: 'Capital moved to Ikkeri',
      fullText: "Under Sadashiva Nayaka (r. 1530-1566), a loyal Vijayanagara vassal, the Keladi realm expanded across the Malnad and brought the coastal provinces of Karnataka under direct rule. He shifted the capital about 20 km from Keladi to Ikkeri, which gave the dynasty its alternative name and its finest temple, the Aghoreshwara.",
      category: 'Expansion',
      highlights: [
        "Sadashiva Nayaka reigned 1530-1566",
        "Expanded across the Malnad as a Vijayanagara vassal",
        "Brought coastal Karnataka under direct rule",
        "Moved the capital from Keladi to Ikkeri",
        "Ikkeri became the site of the Aghoreshwara temple",
      ],
      image: '/images/keladi/keladi-2-ikkeri.jpg',
      sources: [{ label: 'Wikipedia — Keladi Nayaka', url: 'https://en.wikipedia.org/wiki/Keladi_Nayaka' }],
    },
    {
      id: 'kel-3',
      year: '1586 CE',
      title: "Venkatappa's Independence",
      subtitle: 'Breaking from Vijayanagara',
      fullText: "After Vijayanagara's collapse at Talikota, Hiriya Venkatappa Nayaka (r. 1582-1629) steadily threw off its overlordship, ceasing tribute to the rump court at Penukonda by about 1613 and declaring full independence. He repulsed rivals and Portuguese pressure on the coast, turning Keladi into a sovereign Nayaka kingdom.",
      category: 'Politics',
      highlights: [
        "Venkatappa Nayaka I reigned c. 1582-1629",
        "Threw off Vijayanagara overlordship after Talikota",
        "Stopped tribute to Penukonda by c. 1613",
        "Declared full independence",
        "Resisted rivals and Portuguese pressure on the coast",
      ],
      image: '/images/keladi/keladi-3-ikkeri-nandi.jpg',
      sources: [{ label: 'Wikipedia — Keladi Nayaka', url: 'https://en.wikipedia.org/wiki/Keladi_Nayaka' }],
    },
    {
      id: 'kel-4',
      year: '1645-1660 CE',
      title: "Shivappa Nayaka's Reforms",
      subtitle: 'Revenue and administration',
      fullText: "Shivappa Nayaka (r. 1645-1660), the dynasty's ablest ruler, overhauled the economy from his capital at Bidnur (Bednur/Nagara). He promoted agriculture and reorganised the collection of land revenue into a systematic assessment long remembered in Karnataka, while expanding trade and driving the Portuguese from several coastal forts.",
      category: 'Administration',
      highlights: [
        "Shivappa Nayaka reigned c. 1645-1660",
        "Ruled from the capital Bidnur (Bednur/Nagara)",
        "Promoted agriculture across the kingdom",
        "Reorganised land-revenue assessment systematically",
        "Expanded trade and pushed back the Portuguese",
      ],
      image: '/images/keladi/keladi-4-palace.jpg',
      sources: [{ label: 'Wikipedia — Keladi Nayaka', url: 'https://en.wikipedia.org/wiki/Keladi_Nayaka' }],
    },
    {
      id: 'kel-5',
      year: '1672 CE',
      title: "Queen Chennamma's Defence",
      subtitle: 'Sheltering Rajaram from the Mughals',
      fullText: "Queen Keladi Chennamma (r. 1672-1697) is the dynasty's most celebrated ruler. Around 1689 she famously gave refuge to the Maratha king Rajaram as he fled Aurangzeb's armies, then withstood the Mughal reprisal that followed - defending her small kingdom's independence against the era's greatest power.",
      category: 'Politics & War',
      highlights: [
        "Queen Chennamma reigned 1672-1697",
        "Sheltered the Maratha king Rajaram (c. 1689)",
        "Protected him from Aurangzeb's pursuing army",
        "Withstood the ensuing Mughal reprisal",
        "Kept Keladi independent against Mughal power",
      ],
      image: '/images/keladi/keladi-5-chennamma.jpg',
      sources: [{ label: 'Wikipedia — Keladi Nayaka', url: 'https://en.wikipedia.org/wiki/Keladi_Nayaka' }],
    },
    {
      id: 'kel-6',
      year: '1763 CE',
      title: 'Hyder Ali Conquest',
      subtitle: 'End of the Keladi dynasty',
      fullText: "In 1763 Hyder Ali of Mysore stormed the Keladi capital Bidnur (Bednur), then held by the last ruler Queen Virammaji, and absorbed the kingdom into Mysore - renaming the city Haidernagar and seizing its famed treasury. After more than 260 years, the Keladi Nayaka dynasty came to an end.",
      category: 'Political Change',
      highlights: [
        "Hyder Ali conquered Keladi in 1763",
        "Stormed the capital Bidnur (Bednur/Nagara)",
        "Last ruler was Queen Virammaji",
        "Kingdom absorbed into Mysore",
        "Ended the 260-year Keladi dynasty",
      ],
      image: '/images/keladi/keladi-6-nagara-fort.jpg',
      sources: [{ label: 'Wikipedia — Keladi Nayaka', url: 'https://en.wikipedia.org/wiki/Keladi_Nayaka' }],
    },
  ]

  const { showNudge, markSeen, hideNudge } = useQuizNudge(events.length)

  const handleToggleEvent = (eventId) => {
    const next = expandedEvent === eventId ? null : eventId
    setExpandedEvent(next)
    if (next === eventId) markSeen(eventId)
  }

  const parentEvent = { id: 'evt10', title: 'Keladi Nayaka Kingdom', year: '1499–1763 CE' }

  return (
    <div className="min-h-screen py-12 bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/timeline')} className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8"><ArrowLeft size={20} />Back to Timeline</button>

        <div className="mb-12">
          <div className="text-primary-600 font-bold text-sm mb-2">DETAILED HISTORY</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{parentEvent.title}</h1>
          <p className="text-xl text-gray-600">Overview of Keladi Nayaka rulers and key reforms.</p>
        </div>

        <HoverExpandTimeline events={events} onOpen={markSeen} />

        <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Keladi Nayaka Kingdom</h3>
          <p className="text-gray-700 leading-relaxed mb-6">The Keladi Nayaka Kingdom (1499–1763 CE), a Vijayanagara feudatory that gained independence post-1565, ruled Karnataka\'s Malnad and coastal regions with Virashaiva patronage, forts, and trade. Established by Chaudappa Nayaka in the Shimoga region, the kingdom blended Vokkaliga agricultural traditions with military prowess and administrative innovation. The reign of Shivappa Nayaka marked an administrative zenith with the implementation of the Ashta Bhaga revenue system, ensuring efficient taxation and sustained prosperity. Notably, Queen Chennamaji I demonstrated exceptional diplomatic acumen in defending against multiple invasions while maintaining trade relations with European powers. The kingdom was renowned for its administrative reforms, fortifications, and patronage of Kannada literature and Veerashaiva religious traditions. Though the kingdom fell to Hyder Ali\'s Mysore in 1763 after treasury exhaustion and succession disputes, its 264-year legacy enriched Karnataka\'s history with institutional innovations and cultural contributions.</p>
        </div>

        <div className="mt-8 p-6 bg-cream-50 rounded-lg border border-gray-200">
          <h4 className="font-bold text-lg mb-4">References & Further Reading</h4>
          <ul className="space-y-2">
            <li><a href="https://www.poojn.in/post/22227/keladi-nayakas-lineage-legacy-and-history" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">POOJN - Keladi Nayakas Lineage, Legacy & History</a></li>
            <li><a href="https://aksharasurya.com/index.php/latest/article/download/460/484/971" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Akshara Surya - Keladi Dynasty Research</a></li>
            <li><a href="https://www.poojn.in/post/22224/the-keladi-nayakas-history-politics-and-administration-of-their-dynasty" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">POOJN - Keladi Nayakas History & Administration</a></li>
            <li><a href="https://www.facebook.com/groups/461218178453749/posts/1526937321881824/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Facebook Heritage Group - Keladi Discussion</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Keladi_Nayaka" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Wikipedia - Keladi Nayaka</a></li>
            <li><a href="https://tulupedia.com/home/history/period-of-keladi-nayakas/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Tulupedia - Period of Keladi Nayakas</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Nayakas_of_Keladi" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Wikipedia - Nayakas of Keladi</a></li>
            <li><a href="https://www.scribd.com/document/833331058/Chapter-5-outline-keladi" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Scribd - Chapter 5 Outline: Keladi</a></li>
            <li><a href="http://indiabackpacker.blogspot.com/2011/05/rameswara-temple-keladi.html" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">India Backpacker - Rameshwara Temple Keladi</a></li>
            <li><a href="https://itihasaacademy.wordpress.com/tag/keladi/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Itihasa Academy - Keladi Archive</a></li>
          </ul>
        </div>
      </div>
      <AiraQuizNudge show={showNudge} onClose={hideNudge} />
      <ChatBot />
    </div>
  )
}

export default KeladiTimeline
