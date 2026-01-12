import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'
import AiraQuizNudge from '../components/AiraQuizNudge'
import useQuizNudge from '../hooks/useQuizNudge'

const MauryaTimeline = () => {
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
      description: 'Chandragupta Maurya, guided by mentor Chanakya (Kautilya), overthrew the Nanda dynasty through guerrilla warfare and civil unrest, seizing Magadha\'s capital Pataliputra.',
      fullText: 'Chandragupta Maurya, guided by mentor Chanakya (Kautilya), overthrew the Nanda dynasty through guerrilla warfare and civil unrest, seizing Magadha\'s capital Pataliputra. This victory unified northern India, establishing centralized administration via the Arthashastra treatise on governance, economy, and espionage. Chandragupta\'s coalition expelled lingering Greek forces, laying foundations for imperial expansion across the subcontinent.',
      category: 'Politics',
      highlights: ['Overthrew Nanda dynasty', 'Established centralized governance', 'Mentored by Chanakya', 'Greek forces expelled'],
      image: 'https://i.pinimg.com/736x/64/23/5f/64235f04a68e5af5cc01fcc6ff93d590.jpg',
    },
    {
      id: 'maurya-2',
      year: '305 BCE',
      title: 'Seleucid Victory',
      subtitle: 'Defeated Seleucus I Nicator',
      description: 'Chandragupta defeated Seleucus I Nicator\'s invading army, securing northwestern territories in a treaty that gained 500 elephants and diplomatic marriages.',
      fullText: 'Chandragupta defeated Seleucus I Nicator\'s invading army, securing northwestern territories in a treaty that gained 500 elephants and diplomatic marriages. This halted Hellenistic incursions, extended Mauryan borders to modern Afghanistan, and boosted military prestige. The peace fostered Indo-Greek exchanges in culture and trade, enhancing the empire\'s wealth.',
      category: 'Military',
      highlights: ['Defeated Seleucid forces', 'Secured 500 war elephants', 'Extended borders to Afghanistan', 'Promoted Indo-Greek trade'],
      image: 'https://i.pinimg.com/1200x/f9/9d/17/f99d172e9eb644565274ec070b5a778a.jpg',
    },
    {
      id: 'maurya-3',
      year: '262 BCE',
      title: 'Kalinga Conquest',
      subtitle: 'Ashoka\'s Transformation',
      description: 'Ashoka\'s brutal annexation of Kalinga killed over 100,000, shocking the emperor and leading to his conversion to Buddhism and renunciation of violence.',
      fullText: 'Ashoka\'s brutal annexation of Kalinga killed over 100,000, with massive casualties among soldiers and civilians shocking the emperor. Witnessing the bloodshed led to his conversion to Buddhism, renouncing violence for dhamma (moral law). This pivot promoted non-violence, welfare policies, and missionary spread of Buddhism across Asia.',
      category: 'Religious',
      highlights: ['100,000+ casualties', 'Ashoka\'s conversion to Buddhism', 'Adopted non-violence', 'Buddhist missionary expansion'],
      image: 'https://www.cheggindia.com/wp-content/uploads/2025/07/gk-45226-kalinga-war-v1.png',
    },
    {
      id: 'maurya-4',
      year: '260 BCE',
      title: 'Edicts Issued',
      subtitle: 'Ashoka\'s Rock and Pillar Edicts',
      description: 'Ashoka inscribed rock and pillar edicts promoting ethical governance, banning animal sacrifices, and ensuring fair justice empire-wide.',
      fullText: 'Ashoka inscribed rock and pillar edicts promoting ethical governance, banning animal sacrifices, ensuring fair justice, and environmental protections. These multilingual proclamations, found empire-wide, standardized moral codes and abolished slavery in parts. They represent early welfare state ideals, influencing later Indian ethics and global human rights concepts.',
      category: 'Governance',
      highlights: ['Multilingual edicts', 'Banned animal sacrifices', 'Standardized justice system', 'Environmental protections', 'Abolished slavery'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR22gzM6WoJQAVt0bzghgZsRrc4NbKOkchCNg&s',
    },
    {
      id: 'maurya-5',
      year: '185 BCE',
      title: 'Empire\'s Fall',
      subtitle: 'End of Mauryan Rule',
      description: 'Weak later rulers lost territories to revolts and invasions. Pushyamitra Shunga assassinated Brihadratha, founding the Shunga dynasty and ending Mauryan rule.',
      fullText: 'Weak later rulers like Brihadratha lost territories to revolts and invasions; Pushyamitra Shunga assassinated him during a parade, founding the Shunga dynasty. Internal decay from over-centralization, high taxes, and succession strife fragmented the realm. This ended Mauryan rule, ushering Hindu resurgence and regional kingdoms.',
      category: 'Politics',
      highlights: ['Over-centralization weakened state', 'High taxation caused revolts', 'Succession disputes', 'Hindu resurgence began', 'Regional kingdoms emerged'],
      image: 'https://globalprogect.weebly.com/uploads/2/4/1/7/24171316/5934518.jpg?388',
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
    <div className="min-h-screen py-12 bg-gradient-to-b from-slate-50 to-white">
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
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 via-primary-500 to-primary-700"></div>
            <div className="space-y-8">
              {mauryaEvents.map((event) => (
                <div key={event.id} className="relative pl-20">
                  <div
                    className="absolute left-4 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={() => handleToggleEvent(event.id)}
                  >
                    <Calendar size={14} className="text-white" />
                  </div>

                  <div
                    className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                    onClick={() => handleToggleEvent(event.id)}
                  >
                    <div className="p-6 cursor-pointer">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="text-primary-600 font-bold text-sm mb-1">{event.year}</div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">{event.title}</h3>
                          <p className="text-gray-600 text-sm mb-3">{event.subtitle}</p>
                          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">{event.category}</span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleFavorite(event)
                            addConfetti(e)
                          }}
                          className="p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
                        >
                          <Heart size={24} className={isFavorite(event.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'} />
                        </button>
                      </div>
                    </div>

                    {expandedEvent === event.id && (
                      <div className="border-t border-gray-200 px-6 py-6 bg-gradient-to-br from-primary-50 to-transparent">
                        <div className="mb-6">
                          <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            {event.fullText.replace(/\[\d+\]/g, '')}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">Key Highlights:</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {event.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-primary-200">
                                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button onClick={() => setExpandedEvent(null)} className="mt-6 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                          Show Less ↑
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

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
                <div className="bg-white rounded-[18px] overflow-hidden h-full flex flex-col">
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
        <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
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
