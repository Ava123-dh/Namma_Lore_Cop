// ---------------------------------------------------------------------------
// A book taken down off the shelf. It arrives closed, then the cover swings
// open: the synopsis is printed inside the cover and the reviews on the page
// facing it. Once it's open, clicking the book again goes to Goodreads (or,
// for a book Goodreads doesn't have yet, to its publisher).
//
// On wide screens the cover is hinged on the left like a book. On a phone
// there's no room for two pages side by side, so it's hinged at the top like
// a notepad and the pages stack.
// ---------------------------------------------------------------------------

import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import BookCover from './BookCover'

// How long the cover takes to swing, in ms; matches .ob-leaf in index.css
const SWING_MS = 900

const Stars = ({ count }) => (
  <span className="ob-stars" role="img" aria-label={`${count} out of 5 stars`}>
    {'★'.repeat(count)}
    <span className="ob-stars-off">{'★'.repeat(5 - count)}</span>
  </span>
)

const OpenBook = ({ book, onClose }) => {
  // 'shut' while it lands, then 'open', then 'leaving' on the way out
  const [phase, setPhase] = useState('shut')
  // Clicks only go through to Goodreads once the cover is fully open
  const [ready, setReady] = useState(false)
  const dialogRef = useRef(null)
  const titleId = useId()

  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  const close = () => {
    setReady(false)
    setPhase('leaving')
  }

  // Let the closed book land before the cover swings
  useEffect(() => {
    const timer = setTimeout(() => setPhase((p) => (p === 'shut' ? 'open' : p)), 420)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (phase === 'open') {
      const timer = setTimeout(() => setReady(true), SWING_MS)
      return () => clearTimeout(timer)
    }
    if (phase === 'leaving') {
      const timer = setTimeout(() => onCloseRef.current(), 420)
      return () => clearTimeout(timer)
    }
  }, [phase])

  // While it's open: hold the page still, take focus, close on Escape and
  // keep Tab inside the book
  useEffect(() => {
    const root = document.documentElement
    const overflow = root.style.overflow
    root.style.overflow = 'hidden'
    dialogRef.current?.focus()

    const onKey = (event) => {
      if (event.key === 'Escape') {
        close()
        return
      }
      if (event.key !== 'Tab') return
      const stops = dialogRef.current?.closest('.ob')?.querySelectorAll('button, a[href]')
      if (!stops?.length) return
      const firstStop = stops[0]
      const lastStop = stops[stops.length - 1]
      if (event.shiftKey && (document.activeElement === firstStop || document.activeElement === dialogRef.current)) {
        event.preventDefault()
        lastStop.focus()
      } else if (!event.shiftKey && document.activeElement === lastStop) {
        event.preventDefault()
        firstStop.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      root.style.overflow = overflow
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  // Goodreads, or for a book Goodreads doesn't list yet, its publisher
  const more = book.goodreads ? { name: 'Goodreads', url: book.goodreads } : book.elsewhere

  const onBookClick = (event) => {
    if (event.target.closest('a')) return
    if (phase === 'shut') setPhase('open')
    else if (ready) window.open(more.url, '_blank', 'noopener,noreferrer')
  }

  // Clicking the dark space around the book puts it back
  const onBackdropClick = (event) => {
    if (event.target === event.currentTarget || event.target === dialogRef.current) close()
  }

  const isOpen = phase === 'open'

  let hint = ' '
  if (ready) hint = `Tap the book again to see it on ${more.name}`
  else if (phase === 'shut') hint = 'Opening…'

  // The page underneath carries the cascade's leftover transform, which would
  // pin a fixed overlay to it instead of the screen, so this renders on body
  return createPortal(
    <div className={`ob ob-${phase}`} onClick={onBackdropClick}>
      <button type="button" className="ob-close" onClick={close} aria-label="Close the book">
        <X size={22} strokeWidth={2.6} />
      </button>

      <div
        ref={dialogRef}
        className="ob-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
      >
        <div
          className={`ob-book${isOpen ? ' is-open' : ''}`}
          style={{ '--aspect': book.aspect }}
          onClick={onBookClick}
        >
          <div className="ob-paper ob-page-reviews">
            <div className="ob-paper-inner">
              <p className="ob-label">Reviews</p>
              {book.rating !== null && (
                <p className="ob-rating">
                  <span className="ob-rating-num">{book.rating.toFixed(2)}</span>
                  <span className="ob-rating-of">
                    average of {book.ratings} {book.ratings === 1 ? 'rating' : 'ratings'} on Goodreads
                  </span>
                </p>
              )}

              {book.due ? (
                <p className="ob-empty">
                  Out in {book.due}, so nobody has had a chance to review it yet.
                </p>
              ) : book.reviews.length > 0 ? (
                <ul className="ob-reviews">
                  {book.reviews.map((review) => (
                    <li key={review.by} className="ob-review">
                      <Stars count={review.stars} />
                      <blockquote className="ob-review-text">{review.text}</blockquote>
                      <p className="ob-review-by">{review.by}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="ob-empty">
                  Nobody has written a review on Goodreads yet, only star ratings. Yours could be
                  the first.
                </p>
              )}

              <a className="ob-goodreads" href={more.url} target="_blank" rel="noopener noreferrer">
                Open on {more.name} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="ob-leaf">
            <div className="ob-leaf-face ob-leaf-front">
              <BookCover book={book} large />
            </div>
            <div className="ob-leaf-face ob-leaf-back ob-paper">
              <div className="ob-paper-inner">
                <p className="ob-label">Synopsis</p>
                <h2 id={titleId} className="ob-title">
                  {book.title}
                </h2>
                <p className="ob-byline">
                  {book.author} · {book.year}
                </p>
                <p className="ob-synopsis">{book.synopsis}</p>
              </div>
            </div>
          </div>
        </div>

        <p className="ob-hint" aria-live="polite">
          {hint}
        </p>
      </div>
    </div>,
    document.body,
  )
}

export default OpenBook
