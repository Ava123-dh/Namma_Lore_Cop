import { Heart, Calendar, MapPin, Trash2, ExternalLink } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import { Link } from 'react-router-dom'

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites()

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-500 to-pink-500 rounded-full mb-6">
              <Heart className="text-white" size={48} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Favorites</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              You haven't saved any favorites yet. Start exploring Karnataka's history and save your favorite events and places!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/timeline" className="btn-primary">
                Explore Timeline
              </Link>
              <Link to="/map" className="btn-secondary">
                Discover Places
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const timelineFavorites = favorites.filter(fav => fav.year)
  const placeFavorites = favorites.filter(fav => fav.position)

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl mb-6">
            <Heart className="text-white fill-white" size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Favorites
          </h1>
          <p className="text-xl text-gray-600">
            {favorites.length} {favorites.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>

        {/* Timeline Events Section */}
        {timelineFavorites.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Calendar className="text-primary-600 mr-3" size={28} />
              <h2 className="text-3xl font-bold text-gray-900">Historical Events</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {timelineFavorites.map((event) => (
                <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-6">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="text-primary-600 font-bold text-sm mb-1">{event.year}</div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                            {event.category}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 line-clamp-3">{event.description}</p>
                      <div className="flex gap-2">
                        <Link
                          to="/timeline"
                          className="flex-1 text-center px-4 py-2 bg-primary-100 text-primary-600 rounded-lg font-semibold hover:bg-primary-200 transition-all inline-flex items-center justify-center"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          View in Timeline
                        </Link>
                        <button
                          onClick={() => removeFavorite(event.id)}
                          className="px-4 py-2 bg-red-100 text-red-600 rounded-lg font-semibold hover:bg-red-200 transition-all"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Heritage Sites Section */}
        {placeFavorites.length > 0 && (
          <div>
            <div className="flex items-center mb-6">
              <MapPin className="text-green-600 mr-3" size={28} />
              <h2 className="text-3xl font-bold text-gray-900">Heritage Sites</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {placeFavorites.map((site) => (
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
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                          {site.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{site.period}</p>
                    <p className="text-gray-700 mb-4 line-clamp-3">{site.description}</p>
                    <div className="flex gap-2">
                      <Link
                        to="/map"
                        className="flex-1 text-center px-4 py-2 bg-green-100 text-green-600 rounded-lg font-semibold hover:bg-green-200 transition-all inline-flex items-center justify-center"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        View on Map
                      </Link>
                      <button
                        onClick={() => removeFavorite(site.id)}
                        className="px-4 py-2 bg-red-100 text-red-600 rounded-lg font-semibold hover:bg-red-200 transition-all"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Clear All Button */}
        {favorites.length > 0 && (
          <div className="text-center mt-12">
            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to clear all favorites?')) {
                  favorites.forEach(fav => removeFavorite(fav.id))
                }
              }}
              className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all shadow-lg inline-flex items-center"
            >
              <Trash2 size={20} className="mr-2" />
              Clear All Favorites
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Favorites
