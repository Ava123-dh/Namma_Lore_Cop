import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'
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
      title: 'First Anglo-Mysore War End',
      subtitle: 'Treaty of Mangalore signed',
      fullText: 'Tipu inherited the war from his father Hyder Ali and signed the Treaty of Mangalore after mixed victories, restoring pre-war borders with the British East India Company. This fragile peace allowed military reorganization and rocket technology refinement. Despite setbacks like the loss at Port Novo, it preserved Mysore\'s autonomy temporarily.',
      category: 'Military',
      highlights: ['Pre-war borders restored', 'Military reorganization begun', 'Rocket technology refined', 'Mysore autonomy preserved'],
      image: 'https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?w=400&h=300&fit=crop',
    },
    {
      id: 't2',
      year: '1787',
      title: 'Maratha Conflicts Peak',
      subtitle: 'Treaty of Gajendragad',
      fullText: 'Tipu clashed with Marathas over border territories, winning sieges at Nargund and Adoni but losing Gajendragad, leading to the Treaty of Gajendragad. He ceded Badami, paid tribute, and returned captured lands, easing northern pressures. This diplomacy freed resources for British threats while fostering internal stability.',
      category: 'Military & Diplomacy',
      highlights: ['Nargund siege victory', 'Adoni siege victory', 'Badami ceded', 'Northern tensions eased'],
      image: 'https://images.unsplash.com/photo-1609920658906-8223652d5f5d?w=400&h=300&fit=crop',
    },
    {
      id: 't3',
      year: '1789',
      title: 'Travancore Invasion',
      subtitle: 'Third Anglo-Mysore War begins',
      fullText: 'Tipu attacked British ally Travancore, seizing the Nedumkotta line and prompting the Third Anglo-Mysore War declaration. His forces used iron-cased rockets effectively, but supply issues arose. The bold move aimed to preempt alliances but escalated British intervention across South India.',
      category: 'Military',
      highlights: ['Travancore attacked', 'Nedumkotta captured', 'Iron-cased rockets deployed', 'British intervention escalated'],
      image: 'https://images.unsplash.com/photo-1581092162562-40038f63dd77?w=400&h=300&fit=crop',
    },
    {
      id: 't4',
      year: '1792',
      title: 'Treaty of Seringapatam',
      subtitle: 'Third War conclusion',
      fullText: 'After defeats by Cornwallis, Tipu ceded half his territory, paid massive indemnity, and sent sons as hostages in this Third War treaty. It halved Mysore but retained core lands and spurred administrative reforms like new coinage. Rockets and scorched-earth tactics delayed invaders, buying time.',
      category: 'Political Change',
      highlights: ['Half territory ceded', 'Massive indemnity paid', 'Sons held as hostages', 'Core lands retained'],
      image: 'https://images.unsplash.com/photo-1609920658906-8223652d5f5d?w=400&h=300&fit=crop',
    },
    {
      id: 't5',
      year: '1790s',
      title: 'Rocket Innovations',
      subtitle: 'Mysorean rocket development',
      fullText: 'Tipu pioneered Mysorean rockets with iron casings reaching 2 km, used devastatingly at Pollilur (1780 legacy) and later battles, inspiring Congreve designs. He authored Fathul Mujahidin on tactics and expanded arsenals. This technological edge terrorized British forces, symbolizing indigenous innovation against colonialism.',
      category: 'Technology & Innovation',
      highlights: ['Iron-cased rockets developed', '2 km range achieved', 'Fathul Mujahidin authored', 'Congreve designs inspired'],
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop',
    },
    {
      id: 't6',
      year: '1797',
      title: 'Administrative Reforms',
      subtitle: 'Internal reorganization',
      fullText: 'Tipu implemented comprehensive reforms including new coinage system, reorganized army administration, and established military arsenals. He created the Nizam-ul-Mulk bureaucracy, reformed revenue collection, and promoted scientific and technological advancement. These reforms strengthened Mysore\'s internal structure despite external threats.',
      category: 'Administration',
      highlights: ['New coinage introduced', 'Military reorganization', 'Arsenals expanded', 'Revenue system reformed'],
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
    },
    {
      id: 't7',
      year: '1799',
      title: 'Srirangapatna Fall',
      subtitle: 'Final battle and Tipu\'s death',
      fullText: 'In the Fourth Anglo-Mysore War, a British-Nizam-Maratha coalition besieged the capital; Tipu died fighting on May 4, 1799. Mysore was partitioned, with Wodeyars restored under subsidiary alliance to British control. His defiant final stand marked the end of major Indian resistance, with rockets expended in the final defense.',
      category: 'Military & Political Change',
      highlights: ['Four-power coalition besieged capital', 'Tipu died fighting', 'Mysore partitioned', 'British subsidiary alliance imposed'],
      image: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=400&h=300&fit=crop',
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
    <div className="min-h-screen py-12 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/timeline')} className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8"><ArrowLeft size={20} />Back to Timeline</button>

        <div className="mb-12">
          <div className="text-primary-600 font-bold text-sm mb-2">DETAILED HISTORY</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{parentEvent.title}</h1>
          <p className="text-xl text-gray-600">Tipu Sultan's resistance, reforms, and final stand against the British.</p>
        </div>

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
                      <button onClick={(e) => { e.stopPropagation(); toggleFavorite(event) }} className="p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"><Heart size={24} className={isFavorite(event.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'} /></button>
                    </div>
                  </div>
                  {expandedEvent === event.id && (
                    <div className="border-t border-gray-200 px-6 py-6 bg-gradient-to-br from-primary-50 to-transparent">
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">{event.fullText}</p>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3">Key Highlights:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {event.highlights && event.highlights.map((h, i) => (
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

        <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About Tipu Sultan</h3>
          <p className="text-gray-700 leading-relaxed mb-6">Tipu Sultan (1750–1799), known as the "Tiger of Mysore," ruled from 1782–1799 and is celebrated as one of India\'s greatest resistance fighters against British colonial expansion. Inheriting from his father Hyder Ali, Tipu Sultan pursued a policy of aggressive military innovation and administrative reform while engaging in the Anglo-Mysore Wars. His reign featured four major wars with the British East India Company, each draining resources but demonstrating remarkable military ingenuity. Tipu was a pioneering military innovator who developed iron-cased Mysorean rockets capable of reaching 2 kilometers, technology that inspired the British Congreve rockets and revolutionized artillery warfare. Beyond military prowess, he implemented comprehensive administrative reforms including a new coinage system, reorganized bureaucracy, and established scientific institutions. He authored the military treatise Fathul Mujahidin and promoted Kannada and Persian literature. Despite his tactical brilliance and technological innovations, Tipu ultimately fell to a coalition of British forces, the Nizam of Hyderabad, and Maratha armies at Srirangapatna in 1799, dying in battle on May 4. Though defeated, Tipu Sultan\'s legacy as an anti-colonial fighter and military innovator remains legendary in Indian history, symbolizing indigenous resistance against colonial domination.</p>
        </div>

        <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
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
