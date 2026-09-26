import { useEffect, useRef, useState } from 'react'
import { Heart, ChevronDown, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'

// Tiny classnames helper — same pattern the CoverflowCarousel port uses,
// so we don't drag in `@/lib/utils` cn() from the original shadcn source.
const cn = (...classes) => classes.filter(Boolean).join(' ')

/**
 * Vertical hover-expand timeline. Ported from the Skiper "HoverExpand"
 * concept to plain JSX (no framer-motion / swiper) to match this codebase.
 *
 * Collapsed cards are thin bars showing the event date + title. Hovering
 * (desktop) or tapping (touch) expands a card to reveal its image behind a
 * gradient wash, with the DATE rendered large over a blurred glass panel.
 * A "Read the story" toggle reveals the full narrative + highlights, so the
 * rich content from the old accordion is preserved. When an event has no
 * image, a gradient date-card stands in — the date itself becomes the art.
 *
 * events: [{ id, year, title, subtitle?, category?, fullText?/description?, highlights?, image? }]
 * onOpen(id): fires when a card becomes active (used to feed the quiz nudge).
 */
export default function HoverExpandTimeline({ events = [], onOpen }) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const [active, setActive] = useState(0)
  const [story, setStory] = useState(null)
  const cardsRef = useRef([])

  // Scroll-reveal: fade each card up as it scrolls into view, once.
  useEffect(() => {
    const nodes = cardsRef.current.filter(Boolean)
    if (typeof IntersectionObserver === 'undefined') {
      nodes.forEach((node) => node.classList.add('hx-inview'))
      return undefined
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('hx-inview')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [events])

  const activate = (index, id) => {
    if (active !== index) {
      setActive(index)
      setStory(null)
      onOpen?.(id)
    }
  }

  // Click on the already-open card toggles its story; otherwise it opens.
  const handleClick = (index, id) => {
    if (active === index) setStory((current) => (current === index ? null : index))
    else activate(index, id)
  }

  return (
    <div className="flex w-full flex-col items-stretch gap-2.5">
      {events.map((event, index) => {
        const isActive = active === index
        const isStory = isActive && story === index
        const fav = isFavorite(event.id)
        const body = (event.fullText || event.description || '').replace(/\[\d+\]/g, '')
        const hasHighlights = Array.isArray(event.highlights) && event.highlights.length > 0
        const height = isStory ? '27rem' : isActive ? '24rem' : '3.75rem'

        return (
          <div
            key={event.id}
            ref={(node) => { cardsRef.current[index] = node }}
            className="hx-card"
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <div
              role="button"
              tabIndex={0}
              aria-expanded={isActive}
              onMouseEnter={() => activate(index, event.id)}
              onClick={() => handleClick(index, event.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleClick(index, event.id)
                }
              }}
              style={{ height }}
              className={cn(
                'group relative w-full cursor-pointer select-none overflow-hidden rounded-3xl shadow-lg outline-none',
                'transition-[height,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                'focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2',
                isActive ? 'shadow-2xl' : 'hover:shadow-xl',
              )}
            >
              {/* Backdrop: the event image, or a gradient date-card if missing */}
              {event.image ? (
                <img
                  src={event.image}
                  alt={event.title}
                  draggable={false}
                  className={cn(
                    'absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out',
                    isActive ? 'scale-100' : 'scale-110',
                  )}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-orange-500 to-amber-600" />
              )}

              {/* Gradient wash — deepens toward whichever edge holds the text */}
              <div
                className={cn(
                  'absolute inset-0 transition-opacity duration-500',
                  isActive
                    ? 'bg-gradient-to-t from-black/85 via-black/35 to-black/20'
                    : 'bg-gradient-to-r from-black/75 via-black/40 to-black/10',
                )}
              />

              {/* Collapsed bar */}
              {!isActive && (
                <div className="absolute inset-0 flex items-center justify-between gap-3 px-5">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="whitespace-nowrap text-sm font-extrabold tracking-wide text-amber-300">
                      {event.year}
                    </span>
                    <span className="truncate text-sm font-semibold text-white/90">{event.title}</span>
                  </div>
                  <ChevronDown size={18} className="shrink-0 text-white/70 transition-transform group-hover:translate-y-0.5" />
                </div>
              )}

              {/* Active content */}
              {isActive && (
                <>
                  {/* Big blurred date — the "date is the image" moment */}
                  <div className="pointer-events-none absolute left-5 top-4">
                    <div className="flex items-center gap-2 text-amber-300">
                      <Calendar size={15} />
                      <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em]">On the timeline</span>
                    </div>
                    <div className="mt-1 text-4xl font-black text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.65)] sm:text-5xl">
                      {event.year}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); toggleFavorite(event) }}
                    aria-label={fav ? 'Remove from favourites' : 'Add to favourites'}
                    className="absolute right-4 top-4 rounded-full bg-black/30 p-2 backdrop-blur-md transition hover:bg-black/50"
                  >
                    <Heart size={20} className={fav ? 'fill-red-500 text-red-500' : 'text-white'} />
                  </button>

                  {/* Bottom glass panel */}
                  <div
                    className={cn(
                      'absolute inset-x-0 bottom-0 border-t border-white/15 bg-white/10 px-5 pb-5 pt-4 backdrop-blur-md',
                      isStory && 'max-h-[80%] overflow-y-auto',
                    )}
                  >
                    <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">{event.title}</h3>
                    {event.subtitle && <p className="mt-0.5 text-sm text-white/80">{event.subtitle}</p>}
                    {event.category && (
                      <span className="mt-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
                        {event.category}
                      </span>
                    )}

                    {body && (
                      <p className={cn('mt-3 text-sm leading-relaxed text-white/85', !isStory && 'line-clamp-2')}>
                        {body}
                      </p>
                    )}

                    {isStory && hasHighlights && (
                      <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {event.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs text-white/90"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}

                    {(body || hasHighlights) && (
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setStory(isStory ? null : index) }}
                        className="mt-3 text-xs font-bold uppercase tracking-wider text-amber-300 transition hover:text-amber-200"
                      >
                        {isStory ? 'Show less ↑' : 'Read the story ↓'}
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
