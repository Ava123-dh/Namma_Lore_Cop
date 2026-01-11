import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'

const KeladiTimeline = () => {
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [expandedEvent, setExpandedEvent] = useState(null)

  const events = [
    {
      id: 'kel-1',
      year: '1499 CE',
      title: 'Founding by Chaudappa',
      subtitle: 'Keladi established by Chaudappa Nayaka',
      fullText: 'Chaudappa Nayaka (Chauda Gowda), from Pallibailu near Keladi, rose from farmer to Vijayanagara vassal, establishing rule over Shimoga-area territories. He fortified Keladi as capital, blending agriculture with military control amid imperial decline. This laid foundations for a dynasty blending Vokkaliga roots and Veerashaiva faith.',
      category: 'Politics',
      highlights: ['Keladi fortified as capital', 'Vokkaliga origins', 'Vijayanagara vassal status', 'Veerashaiva faith adopted'],
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop',
    },
    {
      id: 'kel-2',
      year: '1530 CE',
      title: 'Sadashiva\'s Consolidation',
      subtitle: 'Malnad expansion and culture',
      fullText: 'Sadashiva Nayaka expanded domains, defeating local chieftains and securing Malnad hills. He shifted capital briefly for defense, fostering rice-pepper trade routes. His reign solidified autonomy, building temples like Rameshwara and promoting Kannada literature.',
      category: 'Military & Trade',
      highlights: ['Malnad hills secured', 'Local chieftains defeated', 'Rice-pepper trade fostered', 'Rameshwara Temple constructed'],
      image: 'https://images.unsplash.com/photo-1609920658906-8223652d5f5d?w=400&h=300&fit=crop',
    },
    {
      id: 'kel-3',
      year: '1586 CE',
      title: 'Venkatappa I\'s Independence',
      subtitle: 'Breaking from Vijayanagara overlordship',
      fullText: 'Hiriya Venkatappa Nayaka broke Vijayanagara overlordship post-Talikota, conquering coastal Kanara to Tungabhadra plains. He defeated Gerusoppa\'s Bhairadevi, curbed Portuguese advances, and erected Hangal victory pillar. Multi-faith temple constructions marked cultural zenith.',
      category: 'Military & Diplomacy',
      highlights: ['Vijayanagara independence declared', 'Coastal Kanara conquered', 'Portuguese advances curbed', 'Hangal victory pillar erected'],
      image: 'https://images.unsplash.com/photo-1581092162562-40038f63dd77?w=400&h=300&fit=crop',
    },
    {
      id: 'kel-4',
      year: '1629 CE',
      title: 'Shivappa Nayaka\'s Reforms',
      subtitle: 'Administrative consolidation',
      fullText: 'Shivappa expanded to Mysore borders, codifying land revenue (Ashta Bhaga system) for efficient taxation. He built forts like Bhuvanagiri, suppressed rebellions, and patronized arts despite wars. His administrative innovations sustained prosperity amid Bijapur threats.',
      category: 'Governance & Defense',
      highlights: ['Ashta Bhaga system implemented', 'Bhuvanagiri Fort constructed', 'Mysore borders reached', 'Art patronage continued'],
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop',
    },
    {
      id: 'kel-5',
      year: '1672 CE',
      title: 'Chennamma\'s Regency',
      subtitle: 'Queen Chennamaji I defends kingdom',
      fullText: 'Queen Chennamaji I defended against Bijapur invasions, allying with Marathas for survival. She constructed Ikkeri palace complexes and promoted trade with Europeans. Her diplomacy preserved the kingdom during Mughal pressures.',
      category: 'Diplomacy & Defense',
      highlights: ['Bijapur invasions repelled', 'Maratha alliances formed', 'Ikkeri palace expanded', 'European trade promoted'],
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
    },
    {
      id: 'kel-6',
      year: '1763 CE',
      title: 'Hyder Ali Conquest',
      subtitle: 'End of Keladi dynasty',
      fullText: 'Hyder Ali of Mysore overran Keladi, dethroning Queen Virammaji after draining wars with Marathas and locals. Treasury exhaustion and succession disputes ended the dynasty. Territories integrated into Mysore, closing a 264-year era of regional power.',
      category: 'Political Change',
      highlights: ['Hyder Ali conquest', 'Queen Virammaji dethroned', 'Succession disputes ended', 'Integration into Mysore Kingdom'],
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop',
    },
  ]

  const parentEvent = { id: 'evt10', title: 'Keladi Nayaka Kingdom', year: '1499–1763 CE' }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/timeline')} className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8"><ArrowLeft size={20} />Back to Timeline</button>

        <div className="mb-12">
          <div className="text-primary-600 font-bold text-sm mb-2">DETAILED HISTORY</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{parentEvent.title}</h1>
          <p className="text-xl text-gray-600">Overview of Keladi Nayaka rulers and key reforms.</p>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Keladi Nayaka Kingdom</h3>
          <p className="text-gray-700 leading-relaxed mb-6">The Keladi Nayaka Kingdom (1499–1763 CE), a Vijayanagara feudatory that gained independence post-1565, ruled Karnataka\'s Malnad and coastal regions with Virashaiva patronage, forts, and trade. Established by Chaudappa Nayaka in the Shimoga region, the kingdom blended Vokkaliga agricultural traditions with military prowess and administrative innovation. The reign of Shivappa Nayaka marked an administrative zenith with the implementation of the Ashta Bhaga revenue system, ensuring efficient taxation and sustained prosperity. Notably, Queen Chennamaji I demonstrated exceptional diplomatic acumen in defending against multiple invasions while maintaining trade relations with European powers. The kingdom was renowned for its administrative reforms, fortifications, and patronage of Kannada literature and Veerashaiva religious traditions. Though the kingdom fell to Hyder Ali\'s Mysore in 1763 after treasury exhaustion and succession disputes, its 264-year legacy enriched Karnataka\'s history with institutional innovations and cultural contributions.</p>
        </div>

        <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
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
      <ChatBot />
    </div>
  )
}

export default KeladiTimeline
