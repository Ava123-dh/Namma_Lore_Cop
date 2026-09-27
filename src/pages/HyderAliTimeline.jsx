import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'
import HoverExpandTimeline from '../components/HoverExpandTimeline'
import AiraQuizNudge from '../components/AiraQuizNudge'
import useQuizNudge from '../hooks/useQuizNudge'

const HyderAliTimeline = () => {
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [expandedEvent, setExpandedEvent] = useState(null)

  const events = [
    {
      id: 'hy-1',
      year: '1740s',
      title: 'Early Military Rise',
      subtitle: 'From sepoy to commander',
      fullText: "Born around 1720 at Budikote in the Kolar region, Hyder Ali rose from sepoy to soldier of fortune in the service of the Wodeyar rulers of Mysore and their dalavai (commander-in-chief) Devaraja. He distinguished himself at the eight-month siege of Devanahalli in 1749, and by 1755 commanded thousands of troops as faujdar of Dindigul, where he hired French officers to train his artillery on European lines.",
      category: 'Military',
      highlights: [
        "Born c. 1720 at Budikote in the Kolar region",
        "Rose through Mysore's army under the dalavai Devaraja",
        "Distinguished himself at the 1749 siege of Devanahalli",
        "Faujdar of Dindigul by 1755",
        "Hired French officers to modernise his artillery",
      ],
      image: '/images/hyder-ali/hyder-ali-1-portrait.jpg',
      sources: [{ label: 'Wikipedia — Hyder Ali', url: 'https://en.wikipedia.org/wiki/Hyder_Ali' }],
    },
    {
      id: 'hy-2',
      year: '1757',
      title: 'Srirangapatna Command',
      subtitle: 'Steadies the Mysore army',
      fullText: "Summoned to the Mysore capital Srirangapatna in 1757, Hyder Ali steadied a mutinous army and shored up the dalavai against Maratha and Hyderabad threats. In 1758 he forced the Marathas to lift their siege of Bangalore and took the city. His French-trained arsenal at Dindigul and his growing personal following made him the most powerful military figure in the kingdom.",
      category: 'Military',
      highlights: [
        "Called to Srirangapatna in 1757 to steady the army",
        "Quelled a mutiny and backed the dalavai",
        "Forced the Marathas to lift the siege of Bangalore (1758)",
        "Captured Bangalore",
        "Built a French-trained arsenal at Dindigul",
      ],
      image: '/images/hyder-ali/hyder-ali-2-srirangapatna.jpg',
      sources: [{ label: 'Wikipedia — Hyder Ali', url: 'https://en.wikipedia.org/wiki/Hyder_Ali' }],
    },
    {
      id: 'hy-3',
      year: '1760',
      title: 'Khande Rao Defeated',
      subtitle: 'Coup against the chief minister',
      fullText: "In 1760 the chief minister Khande Rao, allied with the queen mother, briefly ousted Hyder Ali and confined his family. Hyder regrouped, and after the Marathas' rout at Panipat in January 1761 he turned Khande Rao's own commanders against him with forged letters, surrounded Srirangapatna, and emerged in near-total military control of Mysore.",
      category: 'Politics',
      highlights: [
        "Chief minister Khande Rao ousted Hyder in 1760",
        "Hyder's family briefly placed under house arrest",
        "Regrouped after the Marathas' defeat at Panipat (Jan 1761)",
        "Turned Khande Rao's commanders with forged letters",
        "Seized near-total military control of Mysore",
      ],
      image: '/images/hyder-ali/hyder-ali-3-bangalore-fort.jpg',
      sources: [{ label: 'Wikipedia — Hyder Ali', url: 'https://en.wikipedia.org/wiki/Hyder_Ali' }],
    },
    {
      id: 'hy-4',
      year: '1761',
      title: 'De Facto Ruler',
      subtitle: 'Sarvadhikari of Mysore',
      fullText: "By July 1761 Hyder Ali was the de facto ruler of Mysore, keeping the Wodeyar king Krishnaraja Wodeyar II as a figurehead confined to his palace while he governed as Sarvadhikari. He expanded aggressively, taking Sira from the Marathas and capturing Ikkeri (Bednur), the Keladi capital, in 1763 - renaming it Haidernagar and seizing its treasury.",
      category: 'Politics',
      highlights: [
        "De facto ruler of Mysore from July 1761",
        "Kept Krishnaraja Wodeyar II as a palace figurehead",
        "Governed as Sarvadhikari (supreme authority)",
        "Took Sira from the Marathas",
        "Captured Ikkeri/Bednur in 1763, renamed Haidernagar",
      ],
      image: '/images/hyder-ali/hyder-ali-4-equestrian.jpg',
      sources: [{ label: 'Wikipedia — Hyder Ali', url: 'https://en.wikipedia.org/wiki/Hyder_Ali' }],
    },
    {
      id: 'hy-5',
      year: '1767-1769',
      title: 'First Anglo-Mysore War',
      subtitle: 'Treaty of Madras, 1769',
      fullText: "In the First Anglo-Mysore War (1767-1769) Hyder Ali, briefly allied with the Nizam of Hyderabad, marched on the Carnatic and repeatedly outmanoeuvred the British East India Company, at one point threatening Madras itself. The war ended on 29 March 1769 with the Treaty of Madras, which restored the pre-war status quo and bound the Company to a mutual-defence pact - terms strikingly favourable to Mysore.",
      category: 'Military',
      highlights: [
        "Fought the East India Company in 1767-1769",
        "Allied briefly with the Nizam of Hyderabad",
        "Threatened Madras with a rapid advance",
        "Ended by the Treaty of Madras, 29 March 1769",
        "Treaty restored the status quo and a mutual-defence pact",
      ],
      image: '/images/hyder-ali/hyder-ali-5-pollilur.jpg',
      sources: [{ label: 'Wikipedia — Hyder Ali', url: 'https://en.wikipedia.org/wiki/Hyder_Ali' }],
    },
  ]

  const { showNudge, markSeen, hideNudge } = useQuizNudge(events.length)

  const handleToggleEvent = (eventId) => {
    const next = expandedEvent === eventId ? null : eventId
    setExpandedEvent(next)
    if (next === eventId) markSeen(eventId)
  }

  const parentEvent = { id: 'evt11', title: "Hyder Ali's Rise", year: 'c. 1720–1782' }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/timeline')} className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8"><ArrowLeft size={20} />Back to Timeline</button>

        <div className="mb-12">
          <div className="text-primary-600 font-bold text-sm mb-2">DETAILED HISTORY</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{parentEvent.title}</h1>
          <p className="text-xl text-gray-600">Hyder Ali's military and political ascent in Mysore.</p>
        </div>

        <HoverExpandTimeline events={events} onOpen={markSeen} />

        <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About Hyder Ali</h3>
          <p className="text-gray-700 leading-relaxed mb-6">Hyder Ali (c. 1720–1782) rose from a cavalry soldier to de facto ruler of Mysore by 1761, modernizing its army and challenging British expansion through strategic brilliance. Beginning as a foot soldier in Mysore\'s army in the 1740s, Hyder Ali's exceptional military acumen and tactical innovations transformed him into one of India\'s most formidable military commanders. By the 1750s, he had mastered modern military technology including European drill techniques and rocket artillery, innovations that would revolutionize warfare in South India. His strategic victories at Srirangapatna in 1757 and his decisive defeat of rival minister Khande Rao in 1760 consolidated his authority. As Sarvadhikari (chief minister) from 1761, he centralized Mysore\'s administration, blending Hindu and Islamic systems while maintaining the Wodeyar king nominally on the throne. His successful defense of Mysore against British invasion during the First Anglo-Mysore War (1767–1769) established Mysore as a formidable regional power. Though ultimately unsuccessful in preventing British dominance, Hyder Ali\'s military innovations and administrative reforms laid the groundwork for his son Tipu Sultan\'s continued resistance and left an indelible mark on Indian military history.</p>
        </div>

        <div className="mt-8 p-6 bg-cream-50 rounded-lg border border-gray-200">
          <h4 className="font-bold text-lg mb-4">References & Further Reading</h4>
          <ul className="space-y-2">
            <li><a href="https://www.gktoday.in/hyder-ali/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">GK Today - Hyder Ali</a></li>
            <li><a href="https://prepp.in/news/e-492-haider-ali-1761-1782-modern-india-history-notes" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">PREPP - Hyder Ali Modern India History Notes</a></li>
            <li><a href="https://www.ijrar.org/papers/IJRAR19D5877.pdf" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">IJRAR - Academic Research on Hyder Ali</a></li>
            <li><a href="https://byjus.com/free-ias-prep/hyder-ali/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">BYJU\'S - Hyder Ali IAS Preparation</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Hyder_Ali" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Wikipedia - Hyder Ali</a></li>
            <li><a href="https://www.britannica.com/biography/Hyder-Ali" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Britannica - Hyder Ali Biography</a></li>
            <li><a href="https://www.nextias.com/blog/anglo-mysore-war/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Next IAS - Anglo-Mysore War</a></li>
            <li><a href="https://www.ebsco.com/research-starters/history/hyder-ali" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">EBSCO - Hyder Ali Research Starter</a></li>
            <li><a href="https://www.youtube.com/watch?v=msXWLOj6m-Y" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">YouTube - Hyder Ali Documentary</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Kingdom_of_Mysore" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Wikipedia - Kingdom of Mysore</a></li>
          </ul>
        </div>
      </div>
      <AiraQuizNudge show={showNudge} onClose={hideNudge} />
      <ChatBot />
    </div>
  )
}

export default HyderAliTimeline
