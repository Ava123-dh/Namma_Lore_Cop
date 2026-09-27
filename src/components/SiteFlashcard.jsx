import { useState } from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { Heart, Navigation, RotateCcw, Info } from 'lucide-react'

/**
 * One heritage site as a card you turn over: the photograph and the name on
 * the front, where it sits on the map and what happened there on the back.
 */
const SiteFlashcard = ({ site, isFavorite, onToggleFavorite, onOpenDetails }) => {
  const [flipped, setFlipped] = useState(false)
  // Leaflet is only mounted once a card has actually been turned over, so ten
  // cards on screen don't each spin up a map nobody has looked at.
  const [mapMounted, setMapMounted] = useState(false)

  const flip = () => {
    setFlipped((prev) => !prev)
    setMapMounted(true)
  }

  const onFaceKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      flip()
    }
  }

  const stop = (e) => e.stopPropagation()

  return (
    <div className={`flashcard ${flipped ? 'is-flipped' : ''}`}>
      <div className="flashcard-inner">
        {/* --- Front: the photograph and the name --- */}
        <div
          className="flashcard-face bg-cream-50 border border-cream-200 shadow-lg"
          role="button"
          tabIndex={flipped ? -1 : 0}
          aria-hidden={flipped}
          aria-label={`${site.name}. Flip for the map and the history.`}
          onClick={flip}
          onKeyDown={onFaceKeyDown}
        >
          <img src={site.image} alt={site.name} className="min-h-0 w-full flex-1 object-cover" />

          <div className="flex flex-none flex-col p-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-bold text-gray-900">{site.name}</h3>
              <button
                onClick={(e) => { stop(e); onToggleFavorite(site) }}
                className="-mr-2 -mt-1 rounded-lg p-2 transition-colors hover:bg-cream-200"
                aria-label={isFavorite ? `Remove ${site.name} from favourites` : `Save ${site.name} to favourites`}
              >
                <Heart size={20} className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'} />
              </button>
            </div>

            <span className="mt-2 inline-block w-fit rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700">
              {site.type}
            </span>

            <span className="inline-flex items-center gap-2 pt-3 text-sm font-semibold text-primary-600">
              <RotateCcw size={16} />
              Flip for the map
            </span>
          </div>
        </div>

        {/* --- Back: where it is, and what happened there --- */}
        <div
          className="flashcard-face flashcard-back bg-cream-50 border border-cream-200 shadow-lg"
          aria-hidden={!flipped}
          onClick={flip}
        >
          <div className="flashcard-map">
            {mapMounted && (
              <MapContainer
                center={site.position}
                zoom={9}
                zoomControl={false}
                attributionControl={false}
                dragging={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
                touchZoom={false}
                keyboard={false}
                style={{ height: '100%', width: '100%' }}
                /* The card is mid-rotation when this mounts, so Leaflet gets a
                   nudge to re-measure once the flip has settled. */
                whenReady={(e) => setTimeout(() => e.target.invalidateSize(), 400)}
              >
                <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={site.position} />
              </MapContainer>
            )}
            <span className="flashcard-map-credit">© OpenStreetMap contributors</span>
          </div>

          {/* Kept deliberately thin — where it is, when it is, one line about
              what it is. Details opens the full entry and its sources. */}
          <div className="flex min-h-0 flex-1 flex-col p-5">
            <h3 className="text-xl font-bold leading-tight text-gray-900">{site.name}</h3>
            <p className="mt-1.5 text-sm font-semibold text-primary-700">{site.period}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-gray-700">{site.summary}</p>

            <div className="mt-auto flex flex-none gap-2 pt-4">
              <button
                onClick={(e) => { stop(e); onOpenDetails(site) }}
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary-500 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
              >
                <Info size={15} />
                Details
              </button>
              <button
                onClick={(e) => {
                  stop(e)
                  window.open(`https://www.google.com/maps/search/?api=1&query=${site.position[0]},${site.position[1]}`, '_blank')
                }}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border-2 border-cream-300 px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-cream"
                aria-label={`Directions to ${site.name}`}
              >
                <Navigation size={15} />
              </button>
              <button
                onClick={(e) => { stop(e); flip() }}
                tabIndex={flipped ? 0 : -1}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border-2 border-cream-300 px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-cream"
                aria-label={`Flip ${site.name} back to the photograph`}
              >
                <RotateCcw size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteFlashcard
