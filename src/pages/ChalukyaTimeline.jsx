import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'
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
      title: 'Pulakesin I\'s Founding',
      subtitle: 'Badami sovereignty established',
      fullText: "Pulakesin I established Chalukya sovereignty by fortifying Badami (Vatapi) as capital and performing Ashvamedha yajna, asserting imperial status. He defeated local Kadambas, Nalas, and Mauryas, laying foundations for Deccan dominance. This marked the dynasty's emergence post-Gupta decline, blending martial prowess with Vaishnava devotion.",
      category: 'Politics',
      highlights: ['Badami capital fortified', 'Ashvamedha yajna performed', 'Defeated Kadambas and Nalas', 'Post-Gupta dominance established'],
      image: 'https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?w=400&h=300&fit=crop',
    },
    {
      id: 'ch-2',
      year: '618 CE',
      title: 'Narmada Victory',
      subtitle: 'Pulakesin II halts Harshavardhana',
      fullText: 'Pulakesin II halted Harshavardhana\'s southern expansion at the Narmada River, earning the title Satyashraya. This preserved Chalukya independence, boosted prestige, and fixed northern borders. The Aihole inscription celebrates it as a pivotal check on North Indian hegemony.',
      category: 'Military',
      highlights: ['Northern border secured', 'Title Satyashraya earned', 'Chalukya independence preserved', 'Aihole inscription recorded'],
      image: 'https://images.unsplash.com/photo-1609920658906-8223652d5f5d?w=400&h=300&fit=crop',
    },
    {
      id: 'ch-3',
      year: '631 CE',
      title: 'Kanchi Plunder',
      subtitle: 'Vikramaditya I sacks Pallava capital',
      fullText: 'Vikramaditya I sacked Pallava capital Kanchipuram, avenging his father\'s defeat by Narasimhavarman I. He installed a victory pillar at Kailasanatha Temple with Kannada inscription. This reversed Pallava gains, affirming Chalukya supremacy in South India temporarily.',
      category: 'Military',
      highlights: ['Kanchipuram sacked', 'Victory pillar installed', 'Pallava power reversed', 'Kannada inscription commissioned'],
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
    },
    {
      id: 'ch-4',
      year: '624 CE',
      title: 'Eastern Branch Independence',
      subtitle: 'Vengi granted to brother Kubja Vishnuvardhana',
      fullText: 'Pulakesin II granted Vengi to brother Kubja Vishnuvardhana, founding Eastern Chalukyas stretching to Andhra coasts. This split fostered bilingual administration and alliances against common foes. It endured until 1070 CE, influencing Telugu culture and temple arts.',
      category: 'Expansion',
      highlights: ['Eastern Chalukya dynasty founded', 'Bilingual administration', 'Andhra coast control', 'Influence until 1070 CE'],
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop',
    },
    {
      id: 'ch-5',
      year: '740 CE',
      title: 'Vikramaditya II\'s Triumphs',
      subtitle: 'Military zenith and cultural flourishing',
      fullText: 'Vikramaditya II overran Kanchipuram thrice, decisively crushing Pallavas and repelling Arab incursions in Gujarat. His victories ended Pallava power, promoted Vesara architecture like Virupaksha Temple. The reign epitomized Chalukya military zenith and cultural flourishing.',
      category: 'Military',
      highlights: ['Kanchipuram conquered thrice', 'Arab incursions repelled', 'Pallava power ended', 'Vesara architecture promoted'],
      image: 'https://images.unsplash.com/photo-1581092162562-40038f63dd77?w=400&h=300&fit=crop',
    },
    {
      id: 'ch-6',
      year: '753 CE',
      title: 'Rashtrakuta Overthrow',
      subtitle: 'End of Badami Chalukyas',
      fullText: 'Dantidurga, a feudatory, defeated Kirtivarman II, ending Badami Chalukyas and founding Rashtrakutas. Internal weaknesses, prolonged wars, and overextension caused fragmentation. This shifted Deccan power, though Kalyani Chalukyas later revived the line.',
      category: 'Political Change',
      highlights: ['Internal weaknesses led to decline', 'Rashtrakutas founded', 'Deccan power shifted', 'Kalyani Chalukyas later revived line'],
      image: 'https://images.unsplash.com/photo-1582719471537-41efb2d30bba?w=400&h=300&fit=crop',
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
    <div className="min-h-screen py-12 bg-gradient-to-b from-slate-50 to-white">
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
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 via-primary-500 to-primary-700"></div>
              <div className="space-y-8">
                {events.map((event) => (
                  <div key={event.id} className="relative pl-20">
                    <div className="absolute left-4 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:shadow-xl transition-shadow" onClick={() => handleToggleEvent(event.id)}>
                      <Calendar size={14} className="text-white" />
                    </div>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl" onClick={() => handleToggleEvent(event.id)}>
                      <div className="p-6 cursor-pointer">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="text-primary-600 font-bold text-sm mb-1">{event.year}</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">{event.title}</h3>
                            <p className="text-gray-600 text-sm mb-3">{event.subtitle}</p>
                            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">{event.category}</span>
                          </div>
                          <button onClick={(e) => { e.stopPropagation(); toggleFavorite(event) }} className="p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0">
                            <Heart size={24} className={isFavorite(event.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'} />
                          </button>
                        </div>
                      </div>

                      {expandedEvent === event.id && (
                        <div className="border-t border-gray-200 px-6 py-6 bg-gradient-to-br from-primary-50 to-transparent">
                          <div className="mb-6">
                            <p className="text-gray-700 text-lg leading-relaxed mb-4">{event.fullText}</p>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-3">Key Highlights:</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {event.highlights.map((h, i) => (
                                <li key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-primary-200"><div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div><span className="text-gray-700">{h}</span></li>
                              ))}
                            </ul>
                          </div>
                          <button onClick={() => setExpandedEvent(null)} className="mt-6 text-primary-600 font-semibold hover:text-primary-700">Show Less ↑</button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Chalukya Dynasty</h3>
              <p className="text-gray-700 leading-relaxed mb-6">The Badami Chalukyas (543–753 CE) established a powerful Deccan empire that dominated South India, pioneering the balance of power between North and South Indian kingdoms. Their strategic military victories, particularly under Pulakesin II and Vikramaditya II, secured Chalukya independence and prestige. The dynasty's patronage led to remarkable Vesara architecture, including the famous temples at Badami, Aihole, and Pattadakal. Though their direct rule ended with the Rashtrakuta conquest, their legacy endured through the Eastern Chalukyas and later revival of the Kalyani Chalukyas.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
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
              <div key={visual.id} className="rounded-2xl overflow-hidden shadow-xl border border-primary-100 bg-white">
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
