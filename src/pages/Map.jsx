import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Heart, Navigation, Info } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'
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
  const { isFavorite, toggleFavorite } = useFavorites()
  const [selectedSite, setSelectedSite] = useState(null)
  const [filter, setFilter] = useState('all')

  const historicalSites = [
    {
      id: 'site1',
      name: 'Hampi',
      position: [15.3350, 76.4600],
      type: 'UNESCO World Heritage',
      period: 'Vijayanagara Empire (14th-16th century)',
      description: 'The magnificent ruins of Hampi, capital of the Vijayanagara Empire. Home to stunning temples, royal palaces, and ancient bazaars.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFjdTNzZ5N6vlpehb4NPviNnEWEU-Tz-jNg&s',
      highlights: ['Virupaksha Temple', 'Stone Chariot', 'Vittala Temple', 'Royal Enclosure'],
    },
    {
      id: 'site2',
      name: 'Mysore Palace',
      position: [12.3051, 76.6551],
      type: 'Palace',
      period: 'Wadiyar Dynasty (1912)',
      description: 'The official residence of the Wadiyar dynasty and seat of the Kingdom of Mysore. An architectural marvel blending Hindu, Muslim, Rajput, and Gothic styles.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSemK7SgPyzFOzwUYCss3KZLTsWAMrm-ig-Ew&s',
      highlights: ['Durbar Hall', 'Kalyana Mantapa', 'Royal Court', 'Golden Throne'],
    },
    {
      id: 'site3',
      name: 'Badami Caves',
      position: [15.9149, 75.6765],
      type: 'Cave Temples',
      period: 'Chalukya Dynasty (6th century)',
      description: 'Rock-cut cave temples showcasing ancient Indian architecture. Four main caves dedicated to Hindu and Jain faiths.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/BadamiCaves87.JPG/1280px-BadamiCaves87.JPG',
      highlights: ['Cave Temple 1', 'Cave Temple 3', 'Agastya Lake', 'Sandstone Cliffs'],
    },
    {
      id: 'site4',
      name: 'Belur Chennakeshava Temple',
      position: [13.1656, 75.8658],
      type: 'Temple',
      period: 'Hoysala Dynasty (1117 CE)',
      description: 'A masterpiece of Hoysala architecture with intricate sculptures and detailed carvings. Built to commemorate victory over the Cholas.',
      image: 'https://www.gudlu.in/blog/wp-content/uploads/2023/03/Feature-Image-6.jpg',
      highlights: ['Chennakeshava Temple', 'Star-shaped Platform', 'Darpana Sundari', 'Navaranga Hall'],
    },
    {
      id: 'site5',
      name: 'Halebidu',
      position: [13.2172, 75.9911],
      type: 'Temple Complex',
      period: 'Hoysala Dynasty (12th century)',
      description: 'Former capital of the Hoysala Empire, famous for the Hoysaleswara Temple with its exquisite sculptures and friezes.',
      image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSpT5p0YXCJxsnhtyjUuRtUciEG_85sbx369H-1SzZVKf9yBWQTUIMSGYaZ0IYwDE-io9ICjejRhNJ8E6spSMYDd_Q&s=19',
      highlights: ['Hoysaleswara Temple', 'Kedareshwara Temple', 'Jain Basadi', 'Archaeological Museum'],
    },
    {
      id: 'site6',
      name: 'Gol Gumbaz',
      position: [16.8302, 75.7100],
      type: 'Mausoleum',
      period: 'Adil Shahi Dynasty (1656)',
      description: 'Tomb of Mohammed Adil Shah with the second largest pre-modern dome in the world. Famous for its whispering gallery.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Gol_Gumbaj2.JPG',
      highlights: ['Central Dome', 'Whispering Gallery', 'Corner Towers', 'Archaeological Museum'],
    },
    {
      id: 'site7',
      name: 'Pattadakal',
      position: [15.9462, 75.8165],
      type: 'UNESCO World Heritage',
      period: 'Chalukya Dynasty (7th-8th century)',
      description: 'A harmonious blend of architectural styles from northern and southern India. A UNESCO World Heritage Site.',
      image: 'https://kevinstandagephotography.wordpress.com/wp-content/uploads/2015/04/pattadakal-ksp_5064.jpg',
      highlights: ['Virupaksha Temple', 'Mallikarjuna Temple', 'Papanatha Temple', 'Jain Temple'],
    },
    {
      id: 'site8',
      name: 'Chitradurga Fort',
      position: [14.2226, 76.3986],
      type: 'Fort',
      period: 'Nayakas of Chitradurga (17th-18th century)',
      description: 'A stone fortress built in stages between 11th and 18th centuries. Known for its seven concentric fortification walls.',
      image: 'https://miro.medium.com/1*prqzJby5Mz8BIZeQCF8j-Q.jpeg',
      highlights: ['Seven Walls', 'Hidimbeshwara Temple', 'Obavva\'s Kindi', 'Upper Fort'],
    },
    {
      id: 'site9',
      name: 'Srirangapatna',
      position: [12.4180, 76.6947],
      type: 'Historical Town',
      period: 'Tipu Sultan Era (18th century)',
      description: 'Historic town and former capital of Tipu Sultan. Site of several battles during the Anglo-Mysore Wars.',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/c9/49/0a/temple-view.jpg?w=1200&h=1200&s=1',
      highlights: ['Tipu Sultan\'s Summer Palace', 'Ranganathaswamy Temple', 'Daria Daulat Bagh', 'Gumbaz'],
    },
    {
      id: 'site10',
      name: 'Aihole',
      position: [15.9578, 75.8049],
      type: 'Temple Complex',
      period: 'Chalukya Dynasty (5th-8th century)',
      description: 'Cradle of Hindu temple architecture with over 125 temples. Experimental ground for architectural styles.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/8th_century_Durga_temple_exterior_view%2C_Aihole_Hindu_temples_and_monuments_3.jpg',
      highlights: ['Durga Temple', 'Lad Khan Temple', 'Meguti Jain Temple', 'Ravanaphadi Cave'],
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
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Heritage Map
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore Karnataka's historical monuments and heritage sites
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50 border-2 border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative">
        <div className="h-[600px] w-full">
          <MapContainer
            center={[15.3173, 75.7139]}
            zoom={7}
            style={{ height: '100%', width: '100%' }}
            className="z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {filteredSites.map((site) => (
              <Marker key={site.id} position={site.position}>
                <Popup>
                  <div className="p-2" style={{ minWidth: '200px' }}>
                    <h3 className="font-bold text-lg mb-2">{site.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{site.type}</p>
                    <button
                      onClick={() => setSelectedSite(site)}
                      className="text-primary-600 font-semibold text-sm hover:text-primary-700"
                    >
                      Learn More →
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      {/* Sites Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Heritage Sites</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSites.map((site) => (
            <div key={site.id} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
              <img
                src={site.image}
                alt={site.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{site.name}</h3>
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                      {site.type}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleFavorite(site)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Heart
                      size={20}
                      className={isFavorite(site.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}
                    />
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-3">{site.period}</p>
                <p className="text-gray-700 mb-4 line-clamp-3">{site.description}</p>
                <button
                  onClick={() => setSelectedSite(site)}
                  className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center"
                >
                  View Details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Site Detail Modal */}
      {selectedSite && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedSite(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedSite.image}
              alt={selectedSite.name}
              className="w-full h-72 object-cover"
            />
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedSite.name}</h2>
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-2">
                    {selectedSite.type}
                  </span>
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

      <ChatBot />
    </div>
  )
}

export default Map
