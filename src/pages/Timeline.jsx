import { useState } from 'react'
import { Heart, Calendar, Users, MapPin } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'

const Timeline = () => {
  const { isFavorite, toggleFavorite } = useFavorites()
  const [selectedEra, setSelectedEra] = useState('all')
  const [selectedEvent, setSelectedEvent] = useState(null)

  const timelineEvents = [
    {
      id: 'evt1',
      year: '300 BCE',
      era: 'ancient',
      title: 'Mauryan Empire in Karnataka',
      description: 'Emperor Ashoka extended Mauryan rule to Karnataka region. Rock edicts found in Sannati and other places provide evidence of Buddhist influence.',
      category: 'Politics',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop',
      details: 'The Mauryan Empire marked the beginning of organized governance in Karnataka. The famous Ashoka edicts in Brahmi script discovered in Karnataka are among the oldest written records in the region.',
    },
    {
      id: 'evt2',
      year: '350 CE',
      era: 'ancient',
      title: 'Kadamba Dynasty Founded',
      description: 'Mayurasharma established the Kadamba dynasty, the first native kingdom of Karnataka with Banavasi as its capital.',
      category: 'Politics',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop',
      details: 'The Kadambas were the first indigenous dynasty to use Kannada as an administrative language. They made significant contributions to art, architecture, and literature.',
    },
    {
      id: 'evt3',
      year: '543 CE',
      era: 'ancient',
      title: 'Chalukya Dynasty Rises',
      description: 'Pulakeshin I founded the Chalukya dynasty at Badami, which became a major power in South India.',
      category: 'Politics',
      image: 'https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?w=400&h=300&fit=crop',
      details: 'The Chalukyas built magnificent cave temples at Badami, Aihole, and Pattadakal, which are UNESCO World Heritage Sites today. They were great patrons of art and architecture.',
    },
    {
      id: 'evt4',
      year: '753 CE',
      era: 'medieval',
      title: 'Rashtrakuta Empire',
      description: 'Dantidurga established the Rashtrakuta Empire, which ruled most of the Deccan and beyond.',
      category: 'Politics',
      image: 'https://images.unsplash.com/photo-1609920658906-8223652d5f5d?w=400&h=300&fit=crop',
      details: 'The Rashtrakutas built the magnificent Kailasa temple at Ellora, considered one of the greatest architectural achievements in ancient India.',
    },
    {
      id: 'evt5',
      year: '973 CE',
      era: 'medieval',
      title: 'Western Chalukya Revival',
      description: 'Tailapa II revived the Chalukya dynasty, establishing the Western Chalukyas with Kalyani as capital.',
      category: 'Politics',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop',
      details: 'This period saw great literary development in Kannada, with poets like Ranna, Pampa, and Ponna flourishing under royal patronage.',
    },
    {
      id: 'evt6',
      year: '1000 CE',
      era: 'medieval',
      title: 'Pampa\'s Vikramarjuna Vijaya',
      description: 'The great Kannada poet Pampa wrote Vikramarjuna Vijaya, one of the greatest works in Kannada literature.',
      category: 'Arts',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
      details: 'Pampa is considered one of the greatest Kannada poets and is called "Adikavi" (First Poet). His work laid the foundation for classical Kannada literature.',
    },
    {
      id: 'evt7',
      year: '1117 CE',
      era: 'medieval',
      title: 'Hoysala Kingdom Established',
      description: 'Vishnuvardhana established the Hoysala Empire with Dwarasamudra (Halebidu) as capital.',
      category: 'Politics',
      image: 'https://images.unsplash.com/photo-1604420805055-aa0e0214b7e5?w=400&h=300&fit=crop',
      details: 'The Hoysalas are renowned for their exquisite temple architecture, featuring intricate sculptures at Belur, Halebidu, and Somanathapura.',
    },
    {
      id: 'evt8',
      year: '1336 CE',
      era: 'medieval',
      title: 'Vijayanagara Empire Founded',
      description: 'Harihara I and Bukka Raya founded the Vijayanagara Empire, which became one of the greatest empires in Indian history.',
      category: 'Politics',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=300&fit=crop',
      details: 'At its peak, Vijayanagara was one of the largest and most prosperous cities in the world. The ruins at Hampi are now a UNESCO World Heritage Site.',
    },
    {
      id: 'evt9',
      year: '1565 CE',
      era: 'medieval',
      title: 'Battle of Talikota',
      description: 'The Battle of Talikota led to the decline of the Vijayanagara Empire.',
      category: 'Politics',
      image: 'https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=400&h=300&fit=crop',
      details: 'The allied Deccan Sultanates defeated Vijayanagara, leading to the destruction of the magnificent capital city. This marked the end of an era.',
    },
    {
      id: 'evt10',
      year: '1610 CE',
      era: 'modern',
      title: 'Keladi Nayaka Kingdom',
      description: 'The Keladi Nayakas became prominent rulers of the region, with Ikkeri as their capital.',
      category: 'Politics',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop',
      details: 'Queen Chennammaji Nayaka was one of the most powerful rulers of this dynasty, successfully resisting Mughal expansion into Karnataka.',
    },
    {
      id: 'evt11',
      year: '1761 CE',
      era: 'modern',
      title: 'Hyder Ali\'s Rise',
      description: 'Hyder Ali became the de facto ruler of Mysore Kingdom, beginning a new chapter in Karnataka history.',
      category: 'Politics',
      image: 'https://images.unsplash.com/photo-1598977123118-4e30ba3c4f5b?w=400&h=300&fit=crop',
      details: 'Hyder Ali was a brilliant military strategist who modernized the Mysore army and successfully challenged British colonial expansion.',
    },
    {
      id: 'evt12',
      year: '1782 CE',
      era: 'modern',
      title: 'Tipu Sultan\'s Reign',
      description: 'Tipu Sultan became the ruler of Mysore, known for his valor and resistance against British colonialism.',
      category: 'Politics',
      image: 'https://images.unsplash.com/photo-1609920658906-8223652d5f5d?w=400&h=300&fit=crop',
      details: 'Tipu Sultan was called the "Tiger of Mysore" and was one of the few Indian rulers to defeat the British in battle. He promoted science, technology, and trade.',
    },
    {
      id: 'evt13',
      year: '1947 CE',
      era: 'modern',
      title: 'Indian Independence',
      description: 'India gained independence from British rule, and the princely states including Mysore joined the Indian Union.',
      category: 'Politics',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop',
      details: 'The Maharaja of Mysore voluntarily acceded to the Indian Union, marking the beginning of a new democratic era.',
    },
    {
      id: 'evt14',
      year: '1956 CE',
      era: 'modern',
      title: 'Formation of Karnataka',
      description: 'Karnataka state was formed by merging Kannada-speaking regions, initially named Mysore State.',
      category: 'Politics',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
      details: 'The state was reorganized based on linguistic lines, uniting all Kannada-speaking people. It was renamed Karnataka in 1973.',
    },
    {
      id: 'evt15',
      year: '1973 CE',
      era: 'modern',
      title: 'Mysore renamed Karnataka',
      description: 'The state of Mysore was officially renamed Karnataka, meaning "lofty land" in Kannada.',
      category: 'Politics',
      image: 'https://images.unsplash.com/photo-1604420805055-aa0e0214b7e5?w=400&h=300&fit=crop',
      details: 'The name Karnataka is derived from "Karunadu," meaning elevated land, reflecting the Deccan Plateau\'s geography.',
    },
  ]

  const eras = [
    { id: 'all', name: 'All Periods', color: 'gray' },
    { id: 'ancient', name: 'Ancient (300 BCE - 750 CE)', color: 'blue' },
    { id: 'medieval', name: 'Medieval (750 - 1700 CE)', color: 'purple' },
    { id: 'modern', name: 'Modern (1700 - Present)', color: 'green' },
  ]

  const filteredEvents = selectedEra === 'all' 
    ? timelineEvents 
    : timelineEvents.filter(event => event.era === selectedEra)

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Interactive Timeline
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Journey through Karnataka's fascinating history from ancient times to the modern era
          </p>
        </div>

        {/* Era Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {eras.map((era) => (
            <button
              key={era.id}
              onClick={() => setSelectedEra(era.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedEra === era.id
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-primary-50 shadow'
              }`}
            >
              {era.name}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 via-primary-500 to-primary-700"></div>

          <div className="space-y-12">
            {filteredEvents.map((event, index) => (
              <div key={event.id} className="relative pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-4 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <Calendar size={14} className="text-white" />
                </div>

                {/* Event Card */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="text-primary-600 font-bold text-sm mb-1">{event.year}</div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                            {event.category}
                          </span>
                        </div>
                        <button
                          onClick={() => toggleFavorite(event)}
                          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <Heart
                            size={24}
                            className={isFavorite(event.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}
                          />
                        </button>
                      </div>
                      <p className="text-gray-700 mb-4">{event.description}</p>
                      <button
                        onClick={() => setSelectedEvent(event)}
                        className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center"
                      >
                        Learn More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="text-primary-600 font-bold text-sm mb-2">{selectedEvent.year}</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedEvent.title}</h2>
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4">
                {selectedEvent.category}
              </span>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">{selectedEvent.details}</p>
              <div className="flex gap-4">
                <button
                  onClick={() => toggleFavorite(selectedEvent)}
                  className={`flex-1 py-3 rounded-lg font-semibold transition-all ${
                    isFavorite(selectedEvent.id)
                      ? 'bg-red-100 text-red-600 hover:bg-red-200'
                      : 'bg-primary-100 text-primary-600 hover:bg-primary-200'
                  }`}
                >
                  {isFavorite(selectedEvent.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
                <button
                  onClick={() => setSelectedEvent(null)}
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

export default Timeline
