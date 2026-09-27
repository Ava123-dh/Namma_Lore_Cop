import { useState } from 'react'
import { Heart, Navigation, Info, MapPin, Footprints, BookOpen, ExternalLink } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'
import WalksMap from '../components/WalksMap'
import SiteFlashcard from '../components/SiteFlashcard'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const Map = () => {
  const baseUrl = import.meta.env.BASE_URL
  const { isFavorite, toggleFavorite } = useFavorites()
  const [selectedSite, setSelectedSite] = useState(null)
  const [filter, setFilter] = useState('all')
  const [mapView, setMapView] = useState('heritage')
  const [showSources, setShowSources] = useState(false)

  // Every site below is described from the sources listed with it: the
  // Archaeological Survey of India, UNESCO's World Heritage Centre, the
  // district administrations and Karnataka Tourism. Nothing here is stated
  // beyond what those pages say.
  const historicalSites = [
    {
      id: 'site1',
      name: 'Hampi',
      position: [15.3350, 76.4600],
      type: 'UNESCO World Heritage',
      period: 'Vijayanagara Empire · 14th–16th century',
      summary: "The capital of the Vijayanagara empire, in ruins on the Tungabhadra.",
      description: 'Seat of the Vijayanagara empire on the south bank of the Tungabhadra, traditionally known as Pampakshetra of Kishkindha. The ASI dates its monuments to AD 1336–1570, from Harihara I to Sadasiva Raya, with a great many royal buildings raised under Krishnadeva Raya (AD 1509–30). The site covers nearly 26 sq km and is said to be enclosed by seven lines of fortification. Inscribed by UNESCO in 1986.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFjdTNzZ5N6vlpehb4NPviNnEWEU-Tz-jNg&s',
      highlights: ['Virupaksha Temple', 'Stone Chariot', 'Vittala Temple', 'Royal Enclosure'],
      sources: [
        { label: 'ASI — World Heritage: Hampi', url: 'https://asi.nic.in/pages/WorldHeritageHampi' },
        { label: 'UNESCO — Group of Monuments at Hampi', url: 'https://whc.unesco.org/en/list/241/' },
        { label: 'Vijayanagara district — Virupaksha Temple', url: 'https://vijayanagara.nic.in/en/tourist-place/virupaksha-temple/' },
      ],
    },
    {
      id: 'site2',
      name: 'Mysore Palace',
      position: [12.3051, 76.6551],
      type: 'Palace',
      period: 'Wadiyar dynasty · 1897–1912',
      summary: "The Wadiyars' Amba Vilas Palace, in the Indo-Saracenic style.",
      description: 'Also known as the Amba Vilas Palace. A three-storeyed building in the Indo-Saracenic style, designed by the English architect Henry Irwin and built between 1897 and 1912, with square towers at the cardinal points under domes. The Durbar Hall, the Kalyana Mantapa with its stained glass and domed ceiling, the golden howdah and the jewel-encrusted golden throne shown at Dasara are among its holdings.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSemK7SgPyzFOzwUYCss3KZLTsWAMrm-ig-Ew&s',
      highlights: ['Durbar Hall', 'Kalyana Mantapa', 'Golden Howdah', 'Golden Throne'],
      sources: [
        { label: 'Mysuru district administration — Mysuru Palace', url: 'https://mysore.nic.in/en/tourist-place/mysuru-palace/' },
        { label: 'Mysuru Palace Board (Government of Karnataka)', url: 'https://mysorepalace.karnataka.gov.in/' },
      ],
    },
    {
      id: 'site3',
      name: 'Badami Caves',
      position: [15.9149, 75.6765],
      type: 'Cave Temples',
      period: 'Early Chalukya · 6th–7th century',
      summary: "Rock-cut temples at Vatapi, the first Chalukya capital.",
      description: 'Rock-cut and structural temples at Badami, the one-time Chalukya capital called Vatapi, whose foundations were laid by Pulakeshi I (535–566 AD) and which his son Kirtivarman I (567–598 AD) built up further. The caves sit near the Malaprabha, 23 km from Pattadakal and 35 km from Aihole.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/BadamiCaves87.JPG/1280px-BadamiCaves87.JPG',
      highlights: ['Cave Temple 1', 'Cave Temple 3', 'Agastya Lake', 'Sandstone Cliffs'],
      sources: [
        { label: 'Bagalkote district administration — Badami Caves', url: 'https://bagalkot.nic.in/en/tourist-place/badami/' },
        { label: 'Karnataka Tourism — Badami', url: 'https://www.karnatakatourism.org/destinations/badami/' },
      ],
    },
    {
      id: 'site4',
      name: 'Belur Chennakeshava Temple',
      position: [13.1656, 75.8658],
      type: 'Temple',
      period: 'Hoysala dynasty · 1116 AD',
      summary: "Vishnuvardhana's victory temple, carved in soapstone.",
      description: 'Belur, on the banks of the Yagachi, was a Hoysala capital, known at different times as Velapur, Velur and Belahur. The Chennakeshava temple was consecrated by Vishnuvardhana to mark his victories of 1116 AD against the Cholas and was called the Vijaya Narayana. Built in soapstone and carrying more than 80 Madanika figures, it stands on a jagati platform inside a prakara. Part of the Sacred Ensembles of the Hoysalas on the UNESCO list.',
      image: 'https://www.gudlu.in/blog/wp-content/uploads/2023/03/Feature-Image-6.jpg',
      highlights: ['Chennakeshava Temple', 'Jagati Platform', 'Madanika Figures', 'Navaranga Hall'],
      sources: [
        { label: 'Hassan district administration — Chennakeshava Temple, Belur', url: 'https://hassan.nic.in/en/tourist-place/chennakeshava-temple-belur/' },
        { label: 'UNESCO — Sacred Ensembles of the Hoysalas', url: 'https://whc.unesco.org/en/list/1670/' },
      ],
    },
    {
      id: 'site5',
      name: 'Halebidu',
      position: [13.2172, 75.9911],
      type: 'Temple Complex',
      period: 'Hoysala dynasty',
      summary: "The twin Hoysaleshwara and Kedareshwara temples of the Hoysala capital.",
      description: 'The twin temples of Hoysaleshwara and Kedareshwara at Halebidu, built under Vishnuvardhana and Ballala II. Sequences from the Ramayana, Mahabharata and Bhagavata run along the outer walls. Halebidu is 17 km from Belur and 30 km from Hassan, and is part of the Sacred Ensembles of the Hoysalas on the UNESCO list.',
      image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSpT5p0YXCJxsnhtyjUuRtUciEG_85sbx369H-1SzZVKf9yBWQTUIMSGYaZ0IYwDE-io9ICjejRhNJ8E6spSMYDd_Q&s=19',
      highlights: ['Hoysaleshwara Temple', 'Kedareshwara Temple', 'Epic Wall Friezes', 'Archaeological Museum'],
      sources: [
        { label: 'Hassan district administration — Hoysaleshwara Temple, Halebidu', url: 'https://hassan.nic.in/en/tourist-place/hoysaleshwara-temple-halebeed/' },
        { label: 'UNESCO — Sacred Ensembles of the Hoysalas', url: 'https://whc.unesco.org/en/list/1670/' },
      ],
    },
    {
      id: 'site6',
      name: 'Gol Gumbaz',
      position: [16.8302, 75.7100],
      type: 'Mausoleum',
      period: 'Adil Shahi · 17th century',
      summary: "Mohammed Adil Shah's tomb, under the second largest dome ever built.",
      description: 'The tomb of Mohammed Adil Shah at Vijayapura, and the second largest dome ever built after St Peter’s in Rome. In the central chamber every sound is echoed several times over, and in the Whispering Gallery even faint sounds carry clearly across the space. The complex also holds a mosque, a Naqqar Khana now used as a museum, and the ruins of guest houses.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Gol_Gumbaj2.JPG',
      highlights: ['Central Dome', 'Whispering Gallery', 'Naqqar Khana Museum', 'Corner Towers'],
      sources: [
        { label: 'Vijayapura district administration — Gol Gumbaz', url: 'https://vijayapura.nic.in/en/tourist-place/gol-gumbaz/' },
        { label: 'Karnataka Tourism — Vijayapura', url: 'https://www.karnatakatourism.org/destinations/vijayapura/' },
      ],
    },
    {
      id: 'site7',
      name: 'Pattadakal',
      position: [15.9462, 75.8165],
      type: 'UNESCO World Heritage',
      period: 'Chalukya dynasty · 7th–8th century',
      summary: "Chalukyan temples where northern and southern styles stand side by side.",
      description: 'A group of Chalukyan temples on the banks of the Malaprabha, 23 km from Badami and about 10 km from Aihole, where northern and southern temple styles were built side by side. Referred to as Petrigal by Ptolemy and later known as Raktapura and Pattadakal Kisuvolal. Over 150 Hindu, Jain and Buddhist monuments dating from the 4th to 10th century CE are preserved across the Pattadakal–Badami–Aihole site.',
      image: 'https://kevinstandagephotography.wordpress.com/wp-content/uploads/2015/04/pattadakal-ksp_5064.jpg',
      highlights: ['Virupaksha Temple', 'Mallikarjuna Temple', 'Papanatha Temple', 'Jain Temple'],
      sources: [
        { label: 'ASI — World Heritage: Pattadakal', url: 'https://asi.nic.in/pages/WorldHeritagePattadakal' },
        { label: 'UNESCO — Group of Monuments at Pattadakal', url: 'https://whc.unesco.org/en/list/239/' },
        { label: 'Bagalkote district administration — Pattadakal', url: 'https://bagalkot.nic.in/en/tourist-place/pattadakal/' },
      ],
    },
    {
      id: 'site8',
      name: 'Chitradurga Fort',
      position: [14.2226, 76.3986],
      type: 'Fort',
      period: 'Nayakas of Chitradurga · 17th–18th century',
      summary: "A hill fort of seven concentric ramparts, the Kallina Kote.",
      description: 'A hill fort — a giridurga — with seven concentric ramparts, built around a central hill called Tuppada Kola and ringed by seven pinnacles known as Chinmuladri. The fortified region sits about 300 m above the ground around it. The name comes from chitra, art, and durga, fort, after the boulders around it; locally it is the Kallina Kote, the stone fort.',
      image: `${baseUrl}images/chitradurga-fort.jpg`,
      highlights: ['Seven Ramparts', 'Hidimbeshwara Temple', 'Obavva\'s Kindi', 'Upper Fort (Meldurga)'],
      sources: [
        { label: 'Chitradurga district administration — Fort of Chitradurga', url: 'https://chitradurga.nic.in/en/tourist-place/fort-of-chitradurga/' },
        { label: 'Karnataka Tourism — Chitradurga', url: 'https://www.karnatakatourism.org/destinations/chitradurga/' },
      ],
    },
    {
      id: 'site9',
      name: 'Srirangapatna',
      position: [12.4180, 76.6947],
      type: 'Historical Town',
      period: 'Kingdom of Mysore · Tipu Sultan era',
      summary: "The river-island town where Tipu Sultan made his last stand.",
      description: 'A town on a river island formed by the Kaveri in Mandya district, a short drive from Mysuru. It holds temples over a thousand years old and the fort where Tipu Sultan made his last stand.',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/c9/49/0a/temple-view.jpg?w=1200&h=1200&s=1',
      highlights: ['Ranganathaswamy Temple', 'Srirangapatna Fort', 'Daria Daulat Bagh', 'Gumbaz'],
      sources: [
        { label: 'Karnataka Tourism — Srirangapatna', url: 'https://www.karnatakatourism.org/destinations/srirangapatna/' },
        { label: 'Mandya district administration — Tourist places', url: 'https://mandya.nic.in/en/tourist-places/' },
      ],
    },
    {
      id: 'site10',
      name: 'Aihole',
      position: [15.9578, 75.8049],
      type: 'Temple Complex',
      period: 'Early Chalukya · 6th–8th century',
      summary: "Called a cradle of Hindu rock architecture, on the Malaprabha.",
      description: 'Once the capital of the early Chalukyas and called a cradle of Hindu rock architecture, Aihole sits on the banks of the Malaprabha and was variously known as Ayyavole and Aryapura. Over a hundred ancient and early medieval Hindu, Jain and Buddhist monuments stand here, and there is evidence of prehistoric settlement near the Meguti hillocks.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/8th_century_Durga_temple_exterior_view%2C_Aihole_Hindu_temples_and_monuments_3.jpg',
      highlights: ['Durga Temple', 'Lad Khan Temple', 'Meguti Jain Temple', 'Ravanaphadi Cave'],
      sources: [
        { label: 'Bagalkote district administration — Aihole', url: 'https://bagalkot.nic.in/en/tourist-place/aihole/' },
        { label: 'Karnataka Tourism — Aihole', url: 'https://www.karnatakatourism.org/destinations/aihole/' },
      ],
    },
  ]

  const categories = [
    { id: 'all', name: 'All Sites' },
    { id: 'UNESCO World Heritage', name: 'UNESCO Sites' },
    { id: 'Temple', name: 'Temples' },
    { id: 'Fort', name: 'Forts' },
    { id: 'Palace', name: 'Palaces' },
  ]

  const filteredSites = filter === 'all' 
    ? historicalSites 
    : historicalSites.filter(site => site.type === filter)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {mapView === 'heritage' ? 'Heritage Map' : 'City Walks: Six Routes Through Old Bengaluru'}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {mapView === 'heritage'
                ? "Explore Karnataka's historical monuments and heritage sites"
                : "Six themed walking routes across old Bengaluru \u2014 Kempegowda's merchant town, the fort Hyder and Tipu rebuilt, the British Cantonment, and Cubbon Park"}
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <button
              onClick={() => setMapView('heritage')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 ${
                mapView === 'heritage'
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                  : 'bg-cream-50 text-gray-700 hover:bg-primary-50 border-2 border-gray-200'
              }`}
            >
              <MapPin size={18} />
              Heritage Sites
            </button>
            <button
              onClick={() => setMapView('walk')}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 ${
                mapView === 'walk'
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                  : 'bg-cream-50 text-gray-700 hover:bg-primary-50 border-2 border-gray-200'
              }`}
            >
              <Footprints size={18} />
              City Walks
            </button>
          </div>

          {/* Category Filters (heritage view only) */}
          {mapView === 'heritage' && (
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    filter === category.id
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                      : 'bg-cream-50 text-gray-700 hover:bg-primary-50 border-2 border-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* City Walks: The Pete & The Kote */}
      {mapView === 'walk' && <WalksMap baseUrl={baseUrl} />}

      {/* Heritage Sites Grid */}
      {mapView === 'heritage' && (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Heritage Sites</h2>
          <p className="mt-1 text-gray-600">Turn a card over for where it sits and what happened there.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSites.map((site) => (
            <SiteFlashcard
              key={site.id}
              site={site}
              isFavorite={isFavorite(site.id)}
              onToggleFavorite={toggleFavorite}
              onOpenDetails={setSelectedSite}
            />
          ))}
        </div>

        {/* Everything on these cards comes from somewhere; this is where */}
        <div className="mt-14 border-t border-cream-300 pt-8">
          <button
            onClick={() => setShowSources((open) => !open)}
            aria-expanded={showSources}
            className="inline-flex items-center gap-2 rounded-lg border-2 border-cream-300 bg-cream-50 px-5 py-2.5 font-semibold text-gray-700 transition-colors hover:border-primary-300 hover:bg-cream"
          >
            <BookOpen size={18} className="text-primary-600" />
            {showSources ? 'Hide sources' : 'View sources'}
          </button>

          {showSources && (
            <div className="mt-6">
              <p className="mb-5 max-w-3xl text-gray-600">
                Dates and descriptions on these cards come from the Archaeological Survey of India,
                UNESCO&rsquo;s World Heritage Centre, the district administrations and Karnataka
                Tourism. Each link below opens the page the entry was written from.
              </p>
              <ul className="grid gap-5 md:grid-cols-2">
                {historicalSites.map((site) => (
                  <li key={site.id}>
                    <h3 className="font-bold text-gray-900">{site.name}</h3>
                    <ul className="mt-1 space-y-1">
                      {site.sources.map((source) => (
                        <li key={source.url} className="text-sm">
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-start gap-1.5 text-primary-700 underline hover:text-primary-900"
                          >
                            {source.label}
                            <ExternalLink size={12} className="mt-1 flex-none" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      )}

      {/* Site Detail Modal */}
      {selectedSite && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedSite(null)}
        >
          <div
            className="bg-cream-50 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedSite.image ? (
              <img
                src={selectedSite.image}
                alt={selectedSite.name}
                className="w-full h-72 object-cover"
              />
            ) : (
              <div className="w-full h-40 bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center">
                {selectedSite.num ? (
                  <span className="text-white text-5xl font-bold">Stop {selectedSite.num}</span>
                ) : (
                  <Footprints size={56} className="text-white/90" />
                )}
              </div>
            )}
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedSite.name}</h2>
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-2">
                    {selectedSite.type}
                  </span>
                  {selectedSite.address && (
                    <p className="text-gray-500 text-sm flex items-center gap-1 mb-1">
                      <MapPin size={14} className="text-primary-500" />
                      {selectedSite.address}
                    </p>
                  )}
                  <p className="text-gray-600">{selectedSite.period}</p>
                </div>
                <button
                  onClick={() => toggleFavorite(selectedSite)}
                  className="p-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Heart
                    size={28}
                    className={isFavorite(selectedSite.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}
                  />
                </button>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{selectedSite.description}</p>
              
              <div className="bg-gradient-to-br from-primary-50 to-orange-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
                  <Info size={20} className="mr-2 text-primary-600" />
                  Key Highlights
                </h3>
                <ul className="space-y-2">
                  {selectedSite.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {selectedSite.sources && (
                <div className="mb-6 rounded-xl border border-cream-200 bg-cream p-6">
                  <h3 className="mb-3 flex items-center font-bold text-lg text-gray-900">
                    <BookOpen size={20} className="mr-2 text-primary-600" />
                    Sources
                  </h3>
                  <p className="mb-3 text-sm text-gray-600">
                    Everything above is taken from these pages.
                  </p>
                  <ul className="space-y-2">
                    {selectedSite.sources.map((source) => (
                      <li key={source.url}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-start gap-1.5 text-primary-700 underline hover:text-primary-900"
                        >
                          {source.label}
                          <ExternalLink size={13} className="mt-1 flex-none" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex gap-4">
                <button
                  onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${selectedSite.position[0]},${selectedSite.position[1]}`, '_blank')}
                  className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all inline-flex items-center justify-center"
                >
                  <Navigation size={20} className="mr-2" />
                  Get Directions
                </button>
                <button
                  onClick={() => setSelectedSite(null)}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating chat is integrated into the walk drawer, so hide it in walk view */}
      {mapView !== 'walk' && <ChatBot />}
    </div>
  )
}

export default Map
