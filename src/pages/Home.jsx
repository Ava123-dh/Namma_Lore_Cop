import { Link } from 'react-router-dom'
import { Clock, BookOpen, MapPin, Sparkles } from 'lucide-react'
import ChatBot from '../components/Chatbot'

const Home = () => {
  const features = [
    {
      icon: Clock,
      title: 'Interactive Timeline',
      description: 'Explore Karnataka\'s rich history through an engaging timeline of events, dynasties, and cultural milestones.',
      link: '/timeline',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BookOpen,
      title: 'Fun Quizzes',
      description: 'Test your knowledge with interactive MCQ quizzes covering various aspects of Karnataka\'s history.',
      link: '/quiz',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: MapPin,
      title: 'Heritage Map',
      description: 'Discover historical monuments and sites near you with our interactive location-based map.',
      link: '/map',
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden namma-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b2c]/75 via-[#ff914d]/60 to-[#ffd199]/48"></div>
        <div className="absolute inset-0 hero-aurora"></div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-orb orb-one"></div>
          <div className="floating-orb orb-two"></div>
          <div className="floating-orb orb-three"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center max-w-5xl mx-auto section-reveal">
            <div className="inline-flex items-center space-x-2 bg-white/85 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mb-6">
              <Sparkles className="text-karnataka-red" size={20} />
              <span className="text-sm font-semibold text-gray-700">Discover Karnataka's Rich Heritage</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 hero-title-shadow drop-shadow-2xl group">
              <span className="inline-flex items-center gap-3 bg-clip-text text-transparent">
                <span className="bg-gradient-to-r from-white via-karnataka-yellow to-white bg-clip-text text-transparent block group-hover:hidden">Namma</span>
                <span className="bg-gradient-to-r from-white via-karnataka-yellow to-white bg-clip-text text-transparent hidden group-hover:inline-flex items-center whitespace-nowrap leading-[1.4] px-2 py-1 translate-y-[1px]">ನಮ್ಮ</span>
                <img
                  src="/images/karnataka-flag-map.png"
                  alt="Karnataka map"
                  className="h-20 md:h-24 w-auto object-contain opacity-70 drop-shadow-lg"
                />
                <span className="bg-gradient-to-r from-[#ff2d2d] via-[#ff6b2c] to-[#ff9248] bg-clip-text text-transparent">Lore</span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white drop-shadow-[0_12px_32px_rgba(0,0,0,0.6)] mb-10 max-w-3xl mx-auto hero-subtitle-shadow">
              Making history fun, engaging, and accessible for students and tourists through interactive timelines, quizzes, and maps.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/timeline" className="btn-primary">
                Start Exploring
              </Link>
              <Link to="/quiz" className="btn-secondary">
                Take a Quiz
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm font-semibold text-gray-800 hero-badges">
              <span className="badge-soft">Fresh drops weekly</span>
              <span className="badge-soft">AI tutor built-in</span>
              <span className="badge-soft">Made for explorers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 section-reveal delay-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore History Your Way
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your learning path and discover Karnataka's fascinating history through multiple interactive experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 feature-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Link
                  key={index}
                  to={feature.link}
                  className="bg-white rounded-2xl p-8 shadow-lg card-hover feature-card"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl mb-6 icon-glow`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <span className="text-primary-600 font-semibold inline-flex items-center">
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-orange-50 section-reveal delay-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Namma Lore?
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Namma Lore bridges the gap between traditional learning and modern technology, making Karnataka's history accessible and engaging for everyone.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-2">✓</span>
                    <span><strong>Verified Content:</strong> All historical data is cross-checked and curated for accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-2">✓</span>
                    <span><strong>Interactive Learning:</strong> Move beyond textbooks with engaging timelines and quizzes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-2">✓</span>
                    <span><strong>Tourist Friendly:</strong> Discover monuments and sites based on your location</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-2">✓</span>
                    <span><strong>Track Progress:</strong> Save favorites and monitor your learning journey</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 about-card tilt-hover">
                <img 
                  src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&h=400&fit=crop" 
                  alt="Karnataka Heritage" 
                  className="rounded-xl w-full h-64 object-cover mb-4"
                />
                <div className="text-center">
                  <p className="text-gray-600 italic">
                    "Exploring history has never been this engaging!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ChatBot */}
      <ChatBot />
    </div>
  )
}

export default Home
