import { Link } from 'react-router-dom'
import { Clock, BookOpen, MapPin, Sparkles, Users, Award } from 'lucide-react'
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

  const stats = [
    { icon: Users, value: '10,000+', label: 'Active Learners' },
    { icon: Clock, value: '500+', label: 'Historical Events' },
    { icon: Award, value: '100+', label: 'Quiz Questions' },
    { icon: MapPin, value: '200+', label: 'Heritage Sites' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-karnataka-red/10 via-primary-100/20 to-karnataka-yellow/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md mb-6">
              <Sparkles className="text-karnataka-red" size={20} />
              <span className="text-sm font-semibold text-gray-700">Discover Karnataka's Rich Heritage</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-karnataka-red via-primary-600 to-karnataka-yellow bg-clip-text text-transparent">
                Namma Lore
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
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
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg mb-3">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore History Your Way
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your learning path and discover Karnataka's fascinating history through multiple interactive experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Link
                  key={index}
                  to={feature.link}
                  className="bg-white rounded-2xl p-8 shadow-lg card-hover"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl mb-6`}>
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
      <section className="py-20 bg-gradient-to-br from-primary-50 to-orange-50">
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
              <div className="bg-white rounded-2xl shadow-2xl p-8">
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
