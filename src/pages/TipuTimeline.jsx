import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'
import HoverExpandTimeline from '../components/HoverExpandTimeline'
import AiraQuizNudge from '../components/AiraQuizNudge'
import useQuizNudge from '../hooks/useQuizNudge'

const TipuTimeline = () => {
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [expandedEvent, setExpandedEvent] = useState(null)

  const events = [
    {
      id: 't1',
      year: '1784',
      title: 'Second War Ends',
      subtitle: 'Treaty of Mangalore, 1784',
      fullText: "The Second Anglo-Mysore War, inherited from his father Hyder Ali, ended with the Treaty of Mangalore in 1784. Negotiated on relatively equal terms, it restored captured territories and was one of the last occasions on which an Indian power dictated terms to the British East India Company. It confirmed Tipu Sultan, who had succeeded Hyder in 1782, as a formidable rival to Company power in the south.",
      category: 'Military & Diplomacy',
      highlights: [
        "Ended the Second Anglo-Mysore War in 1784",
        "Sealed by the Treaty of Mangalore",
        "Negotiated on largely equal terms with the Company",
        "Restored territories captured during the war",
        "Tipu had succeeded Hyder Ali in 1782",
      ],
      image: '/images/tipu/tipu-1-portrait.jpg',
      sources: [{ label: 'Wikipedia — Tipu Sultan', url: 'https://en.wikipedia.org/wiki/Tipu_Sultan' }],
    },
    {
      id: 't2',
      year: '1787',
      title: 'Peace with the Marathas',
      subtitle: 'Treaty of Gajendragad',
      fullText: "Tipu's northern wars with the Maratha Empire were settled by the Treaty of Gajendragad in March 1787. Tipu returned the territory he had taken and agreed to pay an annual tribute; in return the Marathas recognised his rule. The peace freed him to concentrate on the western coast and the looming confrontation with the British.",
      category: 'Military & Diplomacy',
      highlights: [
        "Settled the Maratha-Mysore war in March 1787",
        "Sealed by the Treaty of Gajendragad",
        "Tipu returned captured territory to the Marathas",
        "Agreed to pay an annual tribute",
        "Marathas recognised Tipu's authority",
      ],
      image: '/images/tipu/tipu-2-gajendragad.jpg',
      sources: [{ label: 'Wikipedia — Tipu Sultan', url: 'https://en.wikipedia.org/wiki/Tipu_Sultan' }],
    },
    {
      id: 't3',
      year: '1789',
      title: 'Travancore Invasion',
      subtitle: 'Third Anglo-Mysore War begins',
      fullText: "On 28 December 1789 Tipu attacked the fortified Lines of Travancore, a British ally, after massing his troops at Coimbatore. The assault drew in the East India Company and triggered the Third Anglo-Mysore War, pitting Tipu against a grand alliance of the Company, the Marathas and the Nizam of Hyderabad.",
      category: 'Military',
      highlights: [
        "Attacked the Lines of Travancore on 28 December 1789",
        "Massed his troops at Coimbatore beforehand",
        "Travancore was an ally of the British",
        "Triggered the Third Anglo-Mysore War",
        "Faced the Company, Marathas and Nizam in alliance",
      ],
      image: '/images/tipu/tipu-3-daria-daulat.jpg',
      sources: [{ label: 'Wikipedia — Tipu Sultan', url: 'https://en.wikipedia.org/wiki/Tipu_Sultan' }],
    },
    {
      id: 't4',
      year: '1792',
      title: 'Treaty of Seringapatam',
      subtitle: 'Third War conclusion',
      fullText: "The Third Anglo-Mysore War ended with the Treaty of Seringapatam in 1792. Defeated by Cornwallis's alliance, Tipu was forced to cede about half his territory to the victors, pay an indemnity of over three crore rupees, and hand over two of his sons as hostages until it was paid - a humiliation famously depicted in British paintings of the period.",
      category: 'Military & Diplomacy',
      highlights: [
        "Ended the Third Anglo-Mysore War in 1792",
        "Tipu ceded roughly half his territory",
        "Paid an indemnity of over three crore rupees",
        "Surrendered two sons as hostages to Cornwallis",
        "Hostages held until the indemnity was paid",
      ],
      image: '/images/tipu/tipu-4-hostages.jpg',
      sources: [{ label: 'Wikipedia — Tipu Sultan', url: 'https://en.wikipedia.org/wiki/Tipu_Sultan' }],
    },
    {
      id: 't5',
      year: '1780s-1790s',
      title: 'Mysorean Rockets',
      subtitle: 'Iron-cased rocket warfare',
      fullText: "Mysore's armies pioneered the iron-cased rocket - a metal-cylinder rocket with far greater range and force than earlier powder rockets. Deployed in their thousands, most devastatingly at the Battle of Pollilur in 1780, they were organised into a dedicated corps under Tipu. Examples captured by the British were taken to Woolwich and shaped William Congreve's later rocket designs.",
      category: 'Military Innovation',
      highlights: [
        "Mysore developed iron-cased war rockets",
        "Far greater range and force than earlier rockets",
        "Used in thousands, notably at Pollilur (1780)",
        "Tipu organised a dedicated rocket corps",
        "Influenced Britain's later Congreve rockets",
      ],
      image: '/images/tipu/tipu-5-rockets.jpg',
      sources: [{ label: 'Wikipedia — Tipu Sultan', url: 'https://en.wikipedia.org/wiki/Tipu_Sultan' }],
    },
    {
      id: 't6',
      year: '1782-1799',
      title: 'Administrative Reforms',
      subtitle: 'A centralising state',
      fullText: "Across his reign (1782-1799) Tipu ran an ambitious, centralising state. He introduced a new Mauludi luni-solar calendar and a fresh coinage with Persian names, reformed land revenue, and promoted commerce and industry - most famously establishing Mysore sericulture by sending experts to learn silk cultivation. He also built a state trading enterprise and dispatched embassies abroad.",
      category: 'Administration',
      highlights: [
        "Ruled a centralised state from 1782 to 1799",
        "Introduced the Mauludi calendar and new coinage",
        "Reformed land-revenue administration",
        "Founded Mysore's silk (sericulture) industry",
        "Ran state trading ventures and foreign embassies",
      ],
      image: '/images/tipu/tipu-6-tiger.jpg',
      sources: [{ label: 'Wikipedia — Tipu Sultan', url: 'https://en.wikipedia.org/wiki/Tipu_Sultan' }],
    },
    {
      id: 't7',
      year: '1799',
      title: 'Fall of Srirangapatna',
      subtitle: 'Final battle and death',
      fullText: "Tipu Sultan died sword in hand on 4 May 1799, defending his island capital Srirangapatna when a British-led force stormed it in the Fourth Anglo-Mysore War. His death ended Mysore's resistance; the East India Company restored the Wodeyar dynasty as subsidiary rulers and annexed much of the kingdom. Tipu was buried the next day beside his father at the Gumbaz.",
      category: 'Military',
      highlights: [
        "Died in battle on 4 May 1799",
        "Killed defending Srirangapatna against the British storm",
        "Fell in the Fourth Anglo-Mysore War",
        "His death ended Mysore's resistance to the Company",
        "Buried beside Hyder Ali at the Gumbaz",
      ],
      image: '/images/tipu/tipu-7-seringapatam.jpg',
      sources: [{ label: 'Wikipedia — Tipu Sultan', url: 'https://en.wikipedia.org/wiki/Tipu_Sultan' }],
    },
  ]

  const { showNudge, markSeen, hideNudge } = useQuizNudge(events.length)

  const handleToggleEvent = (eventId) => {
    const next = expandedEvent === eventId ? null : eventId
    setExpandedEvent(next)
    if (next === eventId) markSeen(eventId)
  }

  const parentEvent = { id: 'evt12', title: "Tipu Sultan's Reign", year: '1782–1799' }

  return (
    <div className="min-h-screen py-12 bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/timeline')} className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8"><ArrowLeft size={20} />Back to Timeline</button>

        <div className="mb-12">
          <div className="text-primary-600 font-bold text-sm mb-2">DETAILED HISTORY</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{parentEvent.title}</h1>
          <p className="text-xl text-gray-600">Tipu Sultan's resistance, reforms, and final stand against the British.</p>
        </div>

        <HoverExpandTimeline events={events} onOpen={markSeen} />

        <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About Tipu Sultan</h3>
          <p className="text-gray-700 leading-relaxed mb-6">Tipu Sultan (1750–1799), known as the "Tiger of Mysore," ruled from 1782–1799 and is celebrated as one of India\'s greatest resistance fighters against British colonial expansion. Inheriting from his father Hyder Ali, Tipu Sultan pursued a policy of aggressive military innovation and administrative reform while engaging in the Anglo-Mysore Wars. His reign featured four major wars with the British East India Company, each draining resources but demonstrating remarkable military ingenuity. Tipu was a pioneering military innovator who developed iron-cased Mysorean rockets capable of reaching 2 kilometers, technology that inspired the British Congreve rockets and revolutionized artillery warfare. Beyond military prowess, he implemented comprehensive administrative reforms including a new coinage system, reorganized bureaucracy, and established scientific institutions. He authored the military treatise Fathul Mujahidin and promoted Kannada and Persian literature. Despite his tactical brilliance and technological innovations, Tipu ultimately fell to a coalition of British forces, the Nizam of Hyderabad, and Maratha armies at Srirangapatna in 1799, dying in battle on May 4. Though defeated, Tipu Sultan\'s legacy as an anti-colonial fighter and military innovator remains legendary in Indian history, symbolizing indigenous resistance against colonial domination.</p>
        </div>

        <div className="mt-8 p-6 bg-cream-50 rounded-lg border border-gray-200">
          <h4 className="font-bold text-lg mb-4">References & Further Reading</h4>
          <ul className="space-y-2">
            <li><a href="https://prepp.in/news/e-492-tipu-sultan-1782-99-modern-india-history-notes" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">PREPP - Tipu Sultan Modern India History Notes</a></li>
            <li><a href="https://byjus.com/free-ias-prep/tipu-sultan/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">BYJU\'S - Tipu Sultan IAS Preparation</a></li>
            <li><a href="https://www.britannica.com/biography/Tipu-Sultan" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Britannica - Tipu Sultan Biography</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Tipu_Sultan" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Wikipedia - Tipu Sultan</a></li>
            <li><a href="https://www.nam.ac.uk/explore/tipu-sultans-war-turban" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">National Army Museum - Tipu Sultan\'s War Turban</a></li>
            <li><a href="https://vajiramandravi.com/upsc-exam/tipu-sultan/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Vajira Mandravi - Tipu Sultan UPSC</a></li>
            <li><a href="https://www.vedantu.com/biography/tipu-sultan-biography" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Vedantu - Tipu Sultan Biography</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Kingdom_of_Mysore" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Wikipedia - Kingdom of Mysore</a></li>
            <li><a href="https://testbook.com/ias-preparation/tipu-sultan" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Testbook - Tipu Sultan IAS Preparation</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Anglo-Mysore_wars" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Wikipedia - Anglo-Mysore Wars</a></li>
          </ul>
        </div>
      </div>
      <AiraQuizNudge show={showNudge} onClose={hideNudge} />
      <ChatBot />
    </div>
  )
}

export default TipuTimeline
