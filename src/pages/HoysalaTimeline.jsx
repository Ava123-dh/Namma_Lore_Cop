import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'

const HoysalaTimeline = () => {
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [expandedEvent, setExpandedEvent] = useState(null)

  const events = [
    {
      id: 'h-1',
      year: '1026 CE',
      title: "Nripa Kama II's Founding",
      subtitle: 'Early consolidation in Malnad hills',
      fullText: 'Nripa Kama II, titled "Permanadi," established Hoysala rule by consolidating hill territories and allying with Western Gangas and Chalukyas. He built early temples like those at Belur, marking the dynasty\'s emergence as regional chieftains. This laid administrative foundations, blending Kannada culture with Vaishnava and Jaina patronage.',
      category: 'Politics',
      highlights: ['Malnad territories consolidated', 'Belur temples founded', 'Kannada culture promoted', 'Multi-faith patronage established'],
      image: 'https://images.unsplash.com/photo-1604420805055-aa0e0214b7e5?w=400&h=300&fit=crop',
    },
    {
      id: 'h-2',
      year: '1047 CE',
      title: 'Vinayaditya\'s Expansion',
      subtitle: 'Rise to imperial power',
      fullText: 'Vinayaditya solidified power by defeating Chalukya rivals and expanding into Karnataka plains, earning imperial titles. His 50-year reign fostered military reforms and land grants, boosting economy via agriculture. Belur became the nascent capital, symbolizing Hoysala ascent post-Chalukya turbulence.',
      category: 'Military',
      highlights: ['Imperial titles earned', 'Plains expansion achieved', 'Military reforms implemented', 'Agricultural economy boosted'],
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop',
    },
    {
      id: 'h-3',
      year: '1116 CE',
      title: 'Talakad Victory',
      subtitle: 'Vishnuvardhana defeats Cholas',
      fullText: 'Vishnuvardhana crushed Chola forces at Talakad, annexing Gangavadi and renaming himself "Bitti Deva." Inspired by Ramanuja, he converted to Vaishnavism, commissioning Chennakesava Temple at Belur. This battle ended Chola dominance in Karnataka, elevating Hoysalas to major powers.',
      category: 'Military & Religion',
      highlights: ['Talakad victory won', 'Gangavadi annexed', 'Conversion to Vaishnavism', 'Chennakesava Temple commissioned'],
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    },
    {
      id: 'h-4',
      year: '1193 CE',
      title: 'Ballala II\'s Independence',
      subtitle: 'Hoysala sovereignty declared',
      fullText: 'Veera Ballala II declared sovereignty after defeating Yadavas and Kadambas, shifting capital to Dwarasamudra (Halebidu). He campaigned against Seunas and Pandyas, expanding to Tamil borders. His rule marked peak territorial control and Hoysala cultural zenith with ornate temples.',
      category: 'Politics & Culture',
      highlights: ['Full independence declared', 'Halebidu capital established', 'Tamil borders reached', 'Cultural zenith achieved'],
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
    },
    {
      id: 'h-5',
      year: '1318 CE',
      title: 'Hoysala-Pandya War',
      subtitle: 'Resilience amid Deccan struggles',
      fullText: 'Veera Ballala III allied with Kampili against Delhi Sultanate but faced Pandyas, sacking Madurai temporarily. Chronic wars drained resources amid four-way Deccan struggles. This highlighted Hoysala resilience yet foreshadowed fragmentation from invasions.',
      category: 'Military',
      highlights: ['Kampili alliance formed', 'Madurai temporarily sacked', 'Four-way Deccan struggles', 'Resource depletion evident'],
      image: 'https://images.unsplash.com/photo-1581092162562-40038f63dd77?w=400&h=300&fit=crop',
    },
    {
      id: 'h-6',
      year: '1343 CE',
      title: 'Final Fall',
      subtitle: 'End of Hoysala rule',
      fullText: 'Veera Ballala III died fighting Madurai Sultanate at Tiruvadi, ending Hoysala rule. Territories merged into Vijayanagara under Harihara I, a possible Hoysala commander. Legacy endured in architecture at Belur-Halebidu UNESCO sites and Kannada literature.',
      category: 'Political Change',
      highlights: ['Veera Ballala III died fighting', 'Territories absorbed by Vijayanagara', 'UNESCO heritage sites remain', 'Kannada literary legacy endured'],
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop',
    },
  ]

  const parentEvent = { id: 'evt7', title: 'Hoysala Kingdom', year: '1026–1343 CE' }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/timeline')} className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8"><ArrowLeft size={20} />Back to Timeline</button>
        <div className="mb-12">
          <div className="text-primary-600 font-bold text-sm mb-2">DETAILED HISTORY</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{parentEvent.title}</h1>
          <p className="text-xl text-gray-600">Major Hoysala events and cultural achievements.</p>
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
                      <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-lg mb-4" />
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">{event.fullText}</p>
                      <button onClick={() => setExpandedEvent(null)} className="mt-6 text-primary-600 font-semibold hover:text-primary-700">Show Less ↑</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About the Hoysala Kingdom</h3>
          <p className="text-gray-700 leading-relaxed mb-6">The Hoysala Kingdom (c. 1026–1343 CE), originating as Chalukya feudatories in Karnataka's Malnad hills, rose to prominence through military prowess and Vesara temple architecture. From their capitals at Belur and later Halebidu (Dwarasamudra), they navigated complex regional politics amid Chola, Kalachuri, and Pandya conflicts. The Hoysalas are celebrated for their exquisite temple architecture featuring intricate stone carvings, exemplified by the renowned Chennakesava Temple at Belur and Hoysaleswara Temple at Halebidu, both now UNESCO World Heritage sites. Their reign marked a golden age of Kannada literature and administrative innovation. Though their direct rule ended in 1343 CE when Veera Ballala III fell to the Madurai Sultanate, their territories were absorbed by the rising Vijayanagara Empire, and their architectural and cultural legacy profoundly influenced subsequent South Indian dynasties.</p>
        </div>

        <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
          <h4 className="font-bold text-lg mb-4">References & Further Reading</h4>
          <ul className="space-y-2">
            <li><a href="https://en.wikipedia.org/wiki/Hoysala_Kingdom" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Wikipedia - Hoysala Kingdom</a></li>
            <li><a href="https://vajiramandravi.com/upsc-exam/hoysala-dynasty/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Vajira Mandravi - Hoysala Dynasty UPSC</a></li>
            <li><a href="https://testbook.com/ugc-net-history/hoysala-dynasty" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Testbook - Hoysala Dynasty UGC-NET History</a></li>
            <li><a href="https://www.newworldencyclopedia.org/entry/Hoysala_Empire" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">New World Encyclopedia - Hoysala Empire</a></li>
            <li><a href="https://study.com/academy/lesson/hoysala-empire-history-founder.html" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Study.com - Hoysala Empire History & Founder</a></li>
            <li><a href="https://www.clearias.com/hoysala-dynasty/" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">ClearIAS - Hoysala Dynasty</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Hoysala_administration" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Wikipedia - Hoysala Administration</a></li>
            <li><a href="https://www.britannica.com/topic/Hoysala-dynasty" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Britannica - Hoysala Dynasty</a></li>
            <li><a href="https://jmc.edu/econtent/ug/2062_MEDIEVAL%20INDIAN%20HISTORY%20II.pdf" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">JMC Academic Content - Medieval Indian History II</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Society_of_the_Hoysala_Kingdom" target="_blank" rel="noreferrer" className="text-primary-700 underline hover:text-primary-900">Wikipedia - Society of the Hoysala Kingdom</a></li>
          </ul>
        </div>
      </div>
      <ChatBot />
    </div>
  )
}

export default HoysalaTimeline
