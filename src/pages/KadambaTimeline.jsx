import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'
import HoverExpandTimeline from '../components/HoverExpandTimeline'
import AiraQuizNudge from '../components/AiraQuizNudge'
import useQuizNudge from '../hooks/useQuizNudge'

const KadambaTimeline = () => {
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [expandedEvent, setExpandedEvent] = useState(null)

  const kadambaVisuals = [
    {
      id: 'kadamba-map',
      title: 'Kadamba Empire Reach',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Indian_Kadamba_Empire_map.svg/250px-Indian_Kadamba_Empire_map.svg.png',
      credit: 'Map of Kadamba influence',
    },
    {
      id: 'kadamba-mayurasharma',
      title: 'Mayurasharma',
      url: 'https://trenddingtopics.wordpress.com/wp-content/uploads/2018/12/img_20181225_1621481176357015.jpg',
      credit: 'Founder depiction',
    },
    {
      id: 'kadamba-emblem',
      title: 'Kadamba Lion Emblem',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTsg2q4NYKR-scdGT7iyYzKMrrgPlfgpRfeQ&s',
      credit: 'Royal emblem',
    },
  ]

  const kadambaEvents = [
    {
      id: 'kadamba-1',
      year: '345 CE',
      title: 'Founding',
      subtitle: 'Mayurasharma establishes Banavasi',
      fullText: "According to the Talagunda inscription, Mayurasharma - a Brahmin student slighted at the Pallava court in Kanchi - abandoned his studies, took up arms, and around 345 CE carved out an independent kingdom based at Banavasi. The Kadambas were the first indigenous dynasty to use Kannada, 'the language of the soil', for administration; their Halmidi inscription (c. 450 CE) is the earliest known Kannada inscription.",
      category: 'Politics',
      highlights: [
        "Founded c. 345 CE by Mayurasharma at Banavasi",
        "Sparked by a quarrel at the Pallava court in Kanchi",
        "First native kingdom of Karnataka",
        "First to use Kannada for administration",
        "Left the Halmidi inscription (c. 450 CE), earliest in Kannada",
      ],
      image: null,
      sources: [{ label: 'Wikipedia — Kadamba dynasty', url: 'https://en.wikipedia.org/wiki/Kadamba_dynasty' }],
    },
    {
      id: 'kadamba-2',
      year: '435 CE',
      title: "Kakusthavarma's Zenith",
      subtitle: 'Expansion and cultural elevation',
      fullText: "Under Kakusthavarma (c. 435-455 CE) the Kadamba kingdom reached its zenith. So prestigious was the dynasty that he married his daughters into the imperial Guptas and the Vakatakas, and the celebrated Talagunda inscription dates to his era. His reign is remembered as a high point of early Karnataka statehood and of Sanskrit and Kannada culture.",
      category: 'Culture & Diplomacy',
      highlights: [
        "Kakusthavarma reigned c. 435-455 CE",
        "The dynasty reached its zenith under him",
        "Married daughters into the Gupta and Vakataka houses",
        "The Talagunda inscription dates to his era",
        "A high point of early Karnataka culture",
      ],
      image: 'https://www.poojn.in/wp-content/uploads/2025/04/Kakusthavarmas-Reign-An-Exploration.jpeg.jpg',
      sources: [{ label: 'Wikipedia — Kadamba dynasty', url: 'https://en.wikipedia.org/wiki/Kadamba_dynasty' }],
    },
    {
      id: 'kadamba-3',
      year: 'c. 497-537 CE',
      title: "Ravivarma's Campaigns",
      subtitle: 'Warfare and internal struggles',
      fullText: "Ravivarma (c. 497-537 CE) restored Kadamba fortunes through near-constant warfare. His many inscriptions record victories against the Pallavas and the Western Gangas and the suppression of rival family branches - he killed Vishnuvarma of the Triparvata line and put down the revolt at Ucchangi. Yet the succession disputes he fought would resurface fatally after his death.",
      category: 'Military',
      highlights: [
        "Ravivarma reigned c. 497-537 CE",
        "Fought the Pallavas and the Western Gangas",
        "Suppressed rival Kadamba branches",
        "Killed Vishnuvarma of the Triparvata line",
        "Left the dynasty riven by succession disputes",
      ],
      image: null,
      sources: [{ label: 'Wikipedia — Kadamba dynasty', url: 'https://en.wikipedia.org/wiki/Kadamba_dynasty' }],
    },
    {
      id: 'kadamba-4',
      year: '540 CE',
      title: 'Chalukya Conquest',
      subtitle: 'End of independent rule',
      fullText: "Around 540 CE the Chalukyas of Badami - once vassals of the Kadambas - conquered the entire kingdom and reduced the Kadambas to feudatory status, ending roughly two centuries of independent rule. The dynasty's legacy endured, however, in the Kannada administrative tradition it pioneered and in later Kadamba branches at Goa and Hangal.",
      category: 'Political Change',
      highlights: [
        "Badami Chalukyas conquered the Kadambas c. 540 CE",
        "The Chalukyas had once been Kadamba vassals",
        "Ended roughly two centuries of independent rule",
        "Kadambas reduced to feudatory status",
        "Legacy survived in later Goa and Hangal branches",
      ],
      image: null,
      sources: [{ label: 'Wikipedia — Kadamba dynasty', url: 'https://en.wikipedia.org/wiki/Kadamba_dynasty' }],
    },
  ]

  const { showNudge, markSeen, hideNudge } = useQuizNudge(kadambaEvents.length)

  const handleToggleEvent = (eventId) => {
    const next = expandedEvent === eventId ? null : eventId
    setExpandedEvent(next)
    if (next === eventId) markSeen(eventId)
  }

  const parentEvent = { id: 'evt2', title: 'Kadamba Dynasty', year: 'c. 345–540 CE', category: 'Politics' }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/timeline')} className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8">
          <ArrowLeft size={20} />
          Back to Timeline
        </button>

        <div className="mb-12">
          <div className="text-primary-600 font-bold text-sm mb-2">DETAILED HISTORY</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{parentEvent.title}</h1>
          <p className="text-xl text-gray-600">Key events that shaped the Kadamba dynasty and its legacy in Karnataka.</p>
        </div>
        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start">
          <div className="space-y-10">
            <HoverExpandTimeline events={kadambaEvents} onOpen={markSeen} />

            <div className="p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Kadamba Dynasty</h3>
              <p className="text-gray-700 leading-relaxed mb-6">The Kadamba Dynasty (c. 345–540 CE) was an early Kannada kingdom in Karnataka, founded by Mayurasharma, pioneering local rule post-Gupta era with influences on art, architecture, and Shaivism. Key events defined its rise, expansions, and vassalage under Chalukyas. The Kadambas were pioneering administrators who established Kannada as an official language and created lasting contributions to South Indian temple architecture and cultural traditions.</p>
            </div>

            <div className="p-6 bg-cream-50 rounded-lg border border-gray-200">
              <h4 className="font-bold text-lg mb-4">References & Further Reading</h4>
              <ul className="space-y-2">
                <li><a href="https://lotusarise.com/kadamba-dynasty-upsc/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">LotusArise - Kadamba Dynasty UPSC Notes</a></li>
                <li><a href="https://en.wikipedia.org/wiki/Kadamba_dynasty" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Wikipedia - Kadamba Dynasty</a></li>
                <li><a href="https://vajiramandravi.com/current-affairs/kadamba-dynasty/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Vajira Mandravi - Kadamba Dynasty Current Affairs</a></li>
                <li><a href="https://testbook.com/ias-preparation/kadamba-dynasty" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Testbook - IAS Preparation on Kadamba Dynasty</a></li>
                <li><a href="http://historyofindia-madhunimkar.blogspot.com/2009/09/introduction-kadamba-dynasty-345-525-ce.html" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">History of India - Kadamba Dynasty Introduction</a></li>
                <li><a href="https://www.clearias.com/kadamba-dynasty/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">ClearIAS - Kadamba Dynasty</a></li>
                <li><a href="https://www.newworldencyclopedia.org/entry/Kadamba_Dynasty" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">New World Encyclopedia - Kadamba Dynasty</a></li>
                <li><a href="https://en.wikipedia.org/wiki/Timeline_of_Karnataka" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Wikipedia - Timeline of Karnataka</a></li>
                <li><a href="https://history-maps.com/story/History-of-India/event/Kadamba-Dynasty" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">History Maps - Kadamba Dynasty History</a></li>
                <li><a href="https://ijmer.in/pdf/volume1-issue4-2012/342-349.pdf" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">IJMER - Academic Paper on Kadamba Dynasty</a></li>
              </ul>
            </div>
          </div>

          <aside className="hidden lg:block sticky top-24 space-y-6">
            {kadambaVisuals.map((visual) => (
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

export default KadambaTimeline
