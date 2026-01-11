import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'

const HyderAliTimeline = () => {
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [expandedEvent, setExpandedEvent] = useState(null)

  const events = [
    {
      id: 'hy-1',
      year: '1740s',
      title: 'Early Military Rise',
      subtitle: 'From soldier to commander',
      fullText: 'Hyder Ali joined Mysore\'s army as a foot soldier, quickly advancing to cavalry command through valor in campaigns against Marathas and locals. His tactical acumen impressed Nanjaraja, leading to oversight of artillery and infantry by the 1750s. This foundation showcased his adoption of European drill and rockets, transforming ragtag forces into disciplined units.',
      category: 'Military',
      highlights: ['Cavalry command achieved', 'Artillery and infantry oversight', 'European drill adopted', 'Rocket technology integrated'],
      image: 'https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?w=400&h=300&fit=crop',
    },
    {
      id: 'hy-2',
      year: '1757',
      title: 'Srirangapatna Control',
      subtitle: 'Defense and military command',
      fullText: 'Summoned to defend Srirangapatna from Hyderabad and Maratha threats, Hyder quelled army mutiny over unpaid wages and repelled invaders. He extracted concessions from Devaraja, gaining military command and fort repairs. This victory solidified his influence over Mysore\'s strategic heartland.',
      category: 'Military',
      highlights: ['Army mutiny quelled', 'Hyderabad threat repelled', 'Military command gained', 'Strategic fortress controlled'],
      image: 'https://images.unsplash.com/photo-1609920658906-8223652d5f5d?w=400&h=300&fit=crop',
    },
    {
      id: 'hy-3',
      year: '1760',
      title: 'Khande Rao Defeat',
      subtitle: 'Coup against usurping minister',
      fullText: 'When minister Khande Rao plotted usurpation and fled with treasury, Hyder pursued, shattered his leaderless army near Srirangapatam, and seized guns, infantry, and baggage. He imprisoned Rao, appointed loyalists, and assumed full military control. This coup dismantled internal rivals, paving his path to supremacy.',
      category: 'Military & Politics',
      highlights: ['Minister overthrown', 'Treasury recovered', 'Loyalists appointed', 'Military supremacy secured'],
      image: 'https://images.unsplash.com/photo-1581092162562-40038f63dd77?w=400&h=300&fit=crop',
    },
    {
      id: 'hy-4',
      year: '1761',
      title: 'De Facto Rule',
      subtitle: 'Sarvadhikari of Mysore',
      fullText: 'Hyder sidelined weak Wodeyar king Krishnaraja II, becoming Sarvadhikari (chief minister) while retaining the throne nominally. He centralized revenue, reformed administration blending Hindu-Islamic systems, and styled himself Sultan in Mughal correspondence. Mysore emerged as a unified power resisting colonial inroads.',
      category: 'Politics & Administration',
      highlights: ['Sarvadhikari title assumed', 'Revenue centralized', 'Hindu-Islamic systems blended', 'Colonial resistance strengthened'],
      image: 'https://images.unsplash.com/photo-1604420805055-aa0e0214b7e5?w=400&h=300&fit=crop',
    },
    {
      id: 'hy-5',
      year: '1767–1769',
      title: 'First Anglo-Mysore War',
      subtitle: 'Victory against British invasion',
      fullText: 'Hyder repelled British invasion from Madras, capturing Trichinopoly and forcing treaty at Madras. Employing rocket artillery and guerrilla tactics, he humbled EIC forces despite alliances crumbling. Victory enhanced prestige, expanded borders, and deterred further northern aggression temporarily.',
      category: 'Military',
      highlights: ['British invasion repelled', 'Trichinopoly captured', 'Rocket artillery deployed', 'Treaty of Madras forced'],
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop',
    },
  ]

  const parentEvent = { id: 'evt11', title: "Hyder Ali's Rise", year: 'c. 1720–1782' }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/timeline')} className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8"><ArrowLeft size={20} />Back to Timeline</button>

        <div className="mb-12">
          <div className="text-primary-600 font-bold text-sm mb-2">DETAILED HISTORY</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{parentEvent.title}</h1>
          <p className="text-xl text-gray-600">Hyder Ali's military and political ascent in Mysore.</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 via-primary-500 to-primary-700"></div>
          <div className="space-y-8">
            {events.map((event) => (
              <div key={event.id} className="relative pl-20">
                <div className="absolute left-4 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center cursor-pointer hover:shadow-xl transition-shadow" onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}>
                  <Calendar size={14} className="text-white" />
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl" onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}>
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
                      <img src={event.image} alt={event.title} className="w-full h-48 md:h-64 object-cover rounded-lg mb-4" />
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About Hyder Ali</h3>
          <p className="text-gray-700 leading-relaxed mb-6">Hyder Ali (c. 1720–1782) rose from a cavalry soldier to de facto ruler of Mysore by 1761, modernizing its army and challenging British expansion through strategic brilliance. Beginning as a foot soldier in Mysore\'s army in the 1740s, Hyder Ali's exceptional military acumen and tactical innovations transformed him into one of India\'s most formidable military commanders. By the 1750s, he had mastered modern military technology including European drill techniques and rocket artillery, innovations that would revolutionize warfare in South India. His strategic victories at Srirangapatna in 1757 and his decisive defeat of rival minister Khande Rao in 1760 consolidated his authority. As Sarvadhikari (chief minister) from 1761, he centralized Mysore\'s administration, blending Hindu and Islamic systems while maintaining the Wodeyar king nominally on the throne. His successful defense of Mysore against British invasion during the First Anglo-Mysore War (1767–1769) established Mysore as a formidable regional power. Though ultimately unsuccessful in preventing British dominance, Hyder Ali\'s military innovations and administrative reforms laid the groundwork for his son Tipu Sultan\'s continued resistance and left an indelible mark on Indian military history.</p>
        </div>

        <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
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
      <ChatBot />
    </div>
  )
}

export default HyderAliTimeline
