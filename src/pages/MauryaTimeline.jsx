import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'
import HoverExpandTimeline from '../components/HoverExpandTimeline'
import AiraQuizNudge from '../components/AiraQuizNudge'
import useQuizNudge from '../hooks/useQuizNudge'

const MauryaTimeline = () => {
  const baseUrl = import.meta.env.BASE_URL
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [expandedEvent, setExpandedEvent] = useState(null)
  const [confetti, setConfetti] = useState([])

  const mauryaEvents = [
    {
      id: 'maurya-1',
      year: '322 BCE',
      title: 'Founding',
      subtitle: 'Rise of Chandragupta Maurya',
      fullText: "Around 322 BCE Chandragupta Maurya, guided by his Brahmin strategist Chanakya (Kautilya), overthrew the Nanda dynasty and seized their capital Pataliputra, founding the Maurya Empire. From this Magadhan base he unified most of the Indian subcontinent under a single, centrally administered state for the first time - the framework of statecraft, economy and espionage later codified in Chanakya's Arthashastra.",
      category: 'Politics',
      highlights: [
        "Chandragupta Maurya founded the empire c. 322 BCE",
        "Guided by his strategist Chanakya (Kautilya)",
        "Overthrew the Nanda dynasty of Magadha",
        "Ruled from the capital Pataliputra",
        "First unification of most of the subcontinent",
      ],
      image: `${baseUrl}images/mauryan.jpg`,
      sources: [{ label: 'Wikipedia — Maurya Empire', url: 'https://en.wikipedia.org/wiki/Maurya_Empire' }],
    },
    {
      id: 'maurya-2',
      year: '305 BCE',
      title: 'Seleucid Victory',
      subtitle: 'Treaty with Seleucus I Nicator',
      fullText: "Around 305-303 BCE Chandragupta clashed with Seleucus I Nicator, a successor of Alexander, over the north-west. The war ended in a treaty: Seleucus ceded the eastern satrapies (including Gandhara and Arachosia) and gave a marriage alliance, while Chandragupta presented 500 war elephants. The settlement fixed the Mauryan frontier near the Hindu Kush and opened Indo-Greek diplomatic and cultural exchange.",
      category: 'Military',
      highlights: [
        "War with Seleucus I Nicator, c. 305-303 BCE",
        "Treaty ceded the eastern satrapies to the Mauryas",
        "Sealed by a marriage alliance",
        "Chandragupta gave Seleucus 500 war elephants",
        "Extended the empire toward the Hindu Kush",
      ],
      image: 'https://i.pinimg.com/1200x/f9/9d/17/f99d172e9eb644565274ec070b5a778a.jpg',
      sources: [{ label: 'Wikipedia — Maurya Empire', url: 'https://en.wikipedia.org/wiki/Maurya_Empire' }],
    },
    {
      id: 'maurya-3',
      year: '262 BCE',
      title: 'Kalinga Conquest',
      subtitle: "Ashoka's transformation",
      fullText: "Around 262-261 BCE the emperor Ashoka waged a brutal war to annex Kalinga (coastal Odisha), in which perhaps 100,000 people were killed and many more deported. Revolted by the carnage, Ashoka embraced Buddhism, renounced war, and adopted the policy of dhamma (moral law) - a transformation he later described in his own edicts and which reshaped the empire's ethos.",
      category: 'Religious',
      highlights: [
        "Ashoka conquered Kalinga c. 262-261 BCE",
        "The war killed on the order of 100,000 people",
        "Its bloodshed turned Ashoka to Buddhism",
        "He renounced war for the policy of dhamma",
        "A turning point recorded in his own edicts",
      ],
      image: 'https://www.cheggindia.com/wp-content/uploads/2025/07/gk-45226-kalinga-war-v1.png',
      sources: [{ label: 'Wikipedia — Maurya Empire', url: 'https://en.wikipedia.org/wiki/Maurya_Empire' }],
    },
    {
      id: 'maurya-4',
      year: '260 BCE',
      title: 'Edicts Issued',
      subtitle: "Ashoka's rock and pillar edicts",
      fullText: "From about 260 BCE Ashoka had his messages carved onto rocks and polished sandstone pillars across the empire - the Edicts of Ashoka. Written mostly in Prakrit (a few in Greek and Aramaic), they proclaimed dhamma, welfare, tolerance and non-violence. Found from Afghanistan to south India, they are among the earliest deciphered records of Indian history, and several edict sites lie within Karnataka.",
      category: 'Governance',
      highlights: [
        "Ashoka's edicts carved from c. 260 BCE",
        "Inscribed on rocks and polished sandstone pillars",
        "Mostly in Prakrit, some in Greek and Aramaic",
        "Proclaimed dhamma, welfare and tolerance",
        "Several edict sites lie within Karnataka",
      ],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR22gzM6WoJQAVt0bzghgZsRrc4NbKOkchCNg&s',
      sources: [{ label: 'Wikipedia — Maurya Empire', url: 'https://en.wikipedia.org/wiki/Maurya_Empire' }],
    },
    {
      id: 'maurya-5',
      year: '185 BCE',
      title: "Empire's Fall",
      subtitle: 'End of Mauryan rule',
      fullText: "The empire declined under weaker successors, and around 185 BCE its last ruler, Brihadratha, was assassinated by his own commander-in-chief, Pushyamitra Shunga, who founded the Shunga dynasty. Over-extension, a costly bureaucracy and provincial revolts had already fragmented Mauryan authority, ending the subcontinent's first great empire and ushering in an age of regional kingdoms.",
      category: 'Politics',
      highlights: [
        "Last emperor Brihadratha killed c. 185 BCE",
        "Assassinated by his general Pushyamitra Shunga",
        "Pushyamitra founded the Shunga dynasty",
        "Over-extension and revolts had weakened the state",
        "Ended the subcontinent's first great empire",
      ],
      image: 'https://globalprogect.weebly.com/uploads/2/4/1/7/24171316/5934518.jpg?388',
      sources: [{ label: 'Wikipedia — Maurya Empire', url: 'https://en.wikipedia.org/wiki/Maurya_Empire' }],
    },
  ]

  const { showNudge, markSeen, hideNudge } = useQuizNudge(mauryaEvents.length)

  const addConfetti = (evt) => {
    const rect = evt.currentTarget.getBoundingClientRect()
    const originX = rect.left + rect.width / 2
    const originY = rect.top + rect.height / 2
    const colors = ['#f97316', '#f43f5e', '#fb923c', '#ef4444']
    const burst = Array.from({ length: 14 }).map((_, i) => {
      const id = `${Date.now()}-${i}`
      const angle = (Math.random() * Math.PI * 2)
      const speed = 40 + Math.random() * 40
      return {
        id,
        x: originX,
        y: originY,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed * 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
      }
    })

    setConfetti((prev) => [...prev, ...burst])
    setTimeout(() => {
      const ids = new Set(burst.map((b) => b.id))
      setConfetti((prev) => prev.filter((p) => !ids.has(p.id)))
    }, 800)
  }

  const handleToggleEvent = (eventId) => {
    const next = expandedEvent === eventId ? null : eventId
    setExpandedEvent(next)
    if (next === eventId) markSeen(eventId)
  }

  const parentEvent = {
    id: 'evt1',
    title: 'Mauryan Empire in Karnataka',
    year: '300 BCE',
    category: 'Politics',
  }

  return (
    <div className="min-h-screen py-12 bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/timeline')}
          className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Timeline
        </button>

        {/* Header */}
        <div className="mb-12">
          <div className="text-primary-600 font-bold text-sm mb-2">DETAILED HISTORY</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {parentEvent.title}
          </h1>
          <p className="text-xl text-gray-600">
            Explore the key events and transformations of the Mauryan Empire era.
          </p>
        </div>

        <div className="relative grid lg:grid-cols-[1fr,320px] gap-8 items-start">
          <HoverExpandTimeline events={mauryaEvents} onOpen={markSeen} />

          {/* Right rail visuals */}
          <div className="hidden lg:block space-y-4 sticky top-6">
            {[
              {
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm5HSySMx4lMP5edsAgrEjNAXa-A4kji_imA&s',
                caption: 'Mauryan Empire at its peak',
              },
              {
                src: 'https://cdn.britannica.com/52/142552-050-F75BD366/Pillar-Ashoka-Vaishali-Bihar-India.jpg',
                caption: 'Ashoka pillar edict — Vaishali',
              },
              {
                src: 'https://www.poojn.in/wp-content/uploads/2025/04/Chandragupta-Mauryas-Military-Prowess-The-Rise-of-the-Mauryan-Empire.jpeg.jpg',
                caption: 'Chandragupta Maurya — rise to power',
              },
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl p-[2px] bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 shadow-lg">
                <div className="bg-cream-50 rounded-[18px] overflow-hidden h-full flex flex-col">
                  <img src={item.src} alt={item.caption} className="h-32 w-full object-cover" />
                  <div className="p-3 text-center text-sm font-semibold text-gray-800 bg-gradient-to-r from-orange-50 to-amber-50">
                    {item.caption}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Mauryan Empire</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Mauryan Empire (322–185 BCE) was one of the largest empires in ancient India. Founded by Chandragupta Maurya, it encompassed most of the Indian subcontinent and extended to modern-day Afghanistan. The empire reached its zenith under Emperor Ashoka, who transformed it from a militaristic empire to a civilization based on Buddhist principles of non-violence and welfare governance.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The Mauryan period saw significant developments in administration, law, economics, and culture. The famous edicts of Ashoka, inscribed on rocks and pillars, are among the earliest written records of governance in Indian history and continue to influence modern concepts of human rights and environmental protection.
          </p>
        </div>

        {/* Explore links */}
        <div className="mt-8 p-6 bg-cream-50 rounded-lg border border-gray-200">
          <h4 className="font-bold text-lg mb-3">Explore more</h4>
          <ul className="list-disc pl-5 text-primary-700">
            <li><a href="https://www.worldhistory.org/Mauryan_Empire/" target="_blank" rel="noreferrer" className="underline">World History — Mauryan Empire</a></li>
            <li><a href="https://www.britannica.com/place/Mauryan-Empire" target="_blank" rel="noreferrer" className="underline">Britannica — Mauryan Empire</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Maurya_Empire" target="_blank" rel="noreferrer" className="underline">Wikipedia — Maurya Empire</a></li>
          </ul>
        </div>
      </div>

      <AiraQuizNudge show={showNudge} onClose={hideNudge} />
      {confetti.length > 0 && (
        <div className="confetti-layer">
          {confetti.map((p) => (
            <span
              key={p.id}
              className="confetti-particle"
              style={{ left: p.x, top: p.y, background: p.color, '--dx': `${p.dx}px`, '--dy': `${p.dy}px` }}
            />
          ))}
        </div>
      )}
      <ChatBot />
    </div>
  )
}

export default MauryaTimeline
