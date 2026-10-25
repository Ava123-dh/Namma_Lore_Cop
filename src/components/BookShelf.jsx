// ---------------------------------------------------------------------------
// The 3D bookshelf. The book in the middle shows only its spine; the further
// a book stands from the middle, the more it turns to show its cover, so the
// row fans open towards both ends, like flicking through a crate of records
// turned on its side. Drag, scroll or use the arrow keys to move along it;
// click a book to take it down and open it.
//
// Same engine as CoverflowCarousel: one fractional position, painted straight
// onto the DOM each frame instead of going through React state.
// ---------------------------------------------------------------------------

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import BookCover from './BookCover'
import OpenBook from './OpenBook'

// How far a book turns, in degrees, `d` places from the middle. Quick at
// first, then levelling off so the far books all face out at about the same
// angle.
const MAX_TURN = 64
const turnAt = (d) => MAX_TURN * (1 - Math.exp(-d / 1.15))

// Air between neighbouring books, in px
const GAP = 8
// Steps per book in the spacing lookup below
const STEPS = 16

// `run[k]` is the distance from the middle to the spine of a book k/STEPS
// places out. Each book needs room for its spine plus however much of its
// cover is turned to the front, so the spacing widens as the books open up.
const buildRun = (count, coverWidth, spineWidth) => {
  const room = (u) => {
    const r = (turnAt(u) * Math.PI) / 180
    return spineWidth * Math.cos(r) + coverWidth * Math.sin(r) + GAP
  }
  const run = [0]
  for (let k = 1; k <= count * STEPS; k += 1) {
    // Measured half a book further out, so a book clears the whole of the
    // cover swinging in from its outer neighbour
    run.push(run[k - 1] + room((k - 0.5) / STEPS + 0.5) / STEPS)
  }
  return run
}

const offsetAt = (run, d) => {
  const x = Math.min(d * STEPS, run.length - 1)
  const i = Math.floor(x)
  return i + 1 < run.length ? run[i] + (run[i + 1] - run[i]) * (x - i) : run[i]
}

const surname = (author) => author.replace(/\s*\(ed\.\)$/, '').split(' ').pop()
const pad = (n) => String(n).padStart(2, '0')

const BookShelf = ({ books, start = 3 }) => {
  const count = books.length
  const first = Math.min(start, count - 1)

  const stageRef = useRef(null)
  const bookRefs = useRef([])
  const posRef = useRef(first)
  const targetRef = useRef(first)
  const runRef = useRef(null)
  const rafRef = useRef(null)
  const dragRef = useRef(null)
  /** Set once a drag really moves, so the click at the end of it doesn't
      open whichever book the pointer happened to finish on. */
  const movedRef = useRef(false)
  const wheelTimerRef = useRef(null)
  /** The book a run of wheel events started from */
  const wheelFromRef = useRef(null)
  const selectedRef = useRef(first)

  const [selected, setSelected] = useState(first)
  const [openIndex, setOpenIndex] = useState(null)

  const clamp = useCallback((pos) => Math.max(0, Math.min(count - 1, pos)), [count])

  // Only re-render when the book in the middle actually changes
  const select = useCallback((index) => {
    if (index === selectedRef.current) return
    selectedRef.current = index
    setSelected(index)
  }, [])

  const paint = useCallback(() => {
    const run = runRef.current
    if (!run) return
    const pos = posRef.current
    bookRefs.current.forEach((book, index) => {
      if (!book) return
      const offset = index - pos
      const distance = Math.abs(offset)
      const side = Math.sign(offset)
      // Left of the middle a book turns its front cover to the right, and
      // right of it the back cover to the left: both turn towards you.
      book.style.transform =
        `translateX(${side * offsetAt(run, distance)}px) rotateY(${side * turnAt(distance)}deg)`
      book.style.zIndex = String(1000 - Math.round(distance * 10))
    })
  }, [])

  const stopSettling = () => {
    if (rafRef.current === null) return
    cancelAnimationFrame(rafRef.current)
    rafRef.current = null
  }

  const settle = useCallback(
    (target) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      targetRef.current = target
      select(Math.round(target))

      const step = () => {
        const remaining = target - posRef.current
        if (Math.abs(remaining) < 0.0004) {
          posRef.current = target
          paint()
          rafRef.current = null
          return
        }
        // Exponential ease-out, same as the carousel
        posRef.current += remaining * 0.14
        paint()
        rafRef.current = requestAnimationFrame(step)
      }
      rafRef.current = requestAnimationFrame(step)
    },
    [paint, select],
  )

  const goTo = useCallback((index) => settle(clamp(index)), [clamp, settle])

  // Moving with the keys or the arrow buttons; returns where it landed
  const nudge = (by) => {
    const next = clamp(Math.round(targetRef.current) + by)
    settle(next)
    return next
  }

  // Follows the pointer directly while dragging, without settling
  const scrub = (pos) => {
    posRef.current = clamp(pos)
    targetRef.current = posRef.current
    select(Math.round(posRef.current))
    paint()
  }

  // Pixels of drag or scroll that move the shelf by one book
  const pitch = () => offsetAt(runRef.current, 1)

  const onPointerDown = (event) => {
    if (event.button !== 0) return
    movedRef.current = false
    dragRef.current = { id: event.pointerId, x: event.clientX, pos: posRef.current, v: 0, t: 0, held: false }
  }

  const onPointerMove = (event) => {
    const drag = dragRef.current
    if (!drag || drag.id !== event.pointerId || !runRef.current) return

    if (!drag.held) {
      if (Math.abs(event.clientX - drag.x) < 6) return
      // Only take the pointer once it's clearly a drag, so a plain tap still
      // reaches the book under it as a click
      drag.held = true
      movedRef.current = true
      stopSettling()
      drag.x = event.clientX
      drag.pos = posRef.current
      drag.t = performance.now()
      stageRef.current.setPointerCapture(event.pointerId)
    }

    const now = performance.now()
    const previous = posRef.current
    scrub(drag.pos - (event.clientX - drag.x) / pitch())
    // Books per second, for the throw
    drag.v = ((posRef.current - previous) / Math.max(now - drag.t, 1)) * 1000
    drag.t = now
  }

  const endDrag = (event) => {
    const drag = dragRef.current
    if (!drag || drag.id !== event.pointerId) return
    dragRef.current = null
    if (!drag.held) return
    // A flick carries on, but never more than three books
    const carried = Math.max(-3, Math.min(3, drag.v * 0.2))
    settle(clamp(Math.round(posRef.current + carried)))
    // The drag's own click has been swallowed by now; let the next one through
    setTimeout(() => {
      movedRef.current = false
    }, 0)
  }

  const onKeyDown = (event) => {
    let next = null
    if (event.key === 'ArrowLeft') next = nudge(-1)
    else if (event.key === 'ArrowRight') next = nudge(1)
    else if (event.key === 'Home') next = nudge(-count)
    else if (event.key === 'End') next = nudge(count)
    if (next === null) return
    event.preventDefault()
    bookRefs.current[next]?.focus({ preventScroll: true })
  }

  const openBook = (index) => {
    if (movedRef.current) return
    goTo(index)
    setOpenIndex(index)
  }

  const closeBook = () => {
    bookRefs.current[openIndex]?.focus({ preventScroll: true })
    setOpenIndex(null)
  }

  // Scrolling moves along the shelf, either way the wheel turns. At the
  // first or last book it lets go, so the page can scroll on past.
  const onWheel = (event) => {
    if (!runRef.current) return
    const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? stageRef.current.clientWidth : 1
    const dx = event.deltaX * unit
    const dy = event.deltaY * unit
    const delta = Math.abs(dx) > Math.abs(dy) ? dx : dy
    const pos = posRef.current
    if (!delta || (delta < 0 && pos <= 0) || (delta > 0 && pos >= count - 1)) return

    event.preventDefault()
    if (wheelFromRef.current === null) wheelFromRef.current = Math.round(targetRef.current)
    stopSettling()
    scrub(pos + delta / pitch())
    clearTimeout(wheelTimerRef.current)
    wheelTimerRef.current = setTimeout(() => {
      const from = wheelFromRef.current
      const moved = posRef.current - from
      wheelFromRef.current = null
      // One click of a mouse wheel is less than a book's width; rather than
      // sliding back where it was, the shelf moves on a book the way it went
      let target = Math.round(posRef.current)
      if (target === from && Math.abs(moved) > 0.05) target += Math.sign(moved)
      settle(clamp(target))
    }, 140)
  }

  // React listens for wheel passively, and this one has to be able to stop
  // the page scrolling, so it's attached by hand. The ref keeps it current.
  const wheelRef = useRef(onWheel)
  wheelRef.current = onWheel
  useEffect(() => {
    const stage = stageRef.current
    const listener = (event) => wheelRef.current(event)
    stage.addEventListener('wheel', listener, { passive: false })
    return () => stage.removeEventListener('wheel', listener)
  }, [])

  // The book's size comes from the stylesheet, so read it off a rendered
  // book and rebuild the spacing whenever the shelf changes width
  useLayoutEffect(() => {
    const stage = stageRef.current
    const measure = () => {
      const book = bookRefs.current[0]
      const cover = book?.querySelector('.shelf-face-front')
      if (!cover) return
      runRef.current = buildRun(count, cover.offsetWidth, book.offsetWidth)
      paint()
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(stage)
    return () => observer.disconnect()
  }, [count, paint])

  useEffect(
    () => () => {
      stopSettling()
      clearTimeout(wheelTimerRef.current)
    },
    [],
  )

  const current = books[selected]

  return (
    <div className="shelf-wrap">
      <div className="shelf" role="region" aria-roledescription="carousel" aria-label="Bookshelf">
        <div
          ref={stageRef}
          className="shelf-stage"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onKeyDown={onKeyDown}
        >
          {books.map((book, index) => (
            // A div that behaves as a button, so the faces' 3D passes through
            // a plain box rather than a form control's own rendering
            <div
              key={book.id}
              ref={(node) => {
                bookRefs.current[index] = node
              }}
              role="button"
              tabIndex={0}
              className="shelf-book"
              style={{ '--spine': book.spine, '--spine-ink': book.ink, '--aspect': book.aspect }}
              aria-label={`${book.title}, by ${book.author}. Open it`}
              onClick={() => openBook(index)}
              onKeyDown={(event) => {
                if (event.key !== 'Enter' && event.key !== ' ') return
                event.preventDefault()
                openBook(index)
              }}
              onFocus={(event) => {
                // Tabbing along the shelf brings each book to the middle; a
                // mouse press focuses the book too, but mustn't move anything
                if (event.currentTarget.matches(':focus-visible')) goTo(index)
              }}
            >
              <span className="shelf-book-body" aria-hidden="true">
                <span className="shelf-spine">
                  <span
                    className="shelf-spine-title"
                    style={{ '--spine-scale': book.short.length > 14 ? 0.7 : 1 }}
                  >
                    {book.short}
                  </span>
                  <span className="shelf-spine-author">{surname(book.author)}</span>
                </span>
                <span className="shelf-face shelf-face-front">
                  <BookCover book={book} />
                </span>
                <span className="shelf-face shelf-face-back">
                  <BookCover book={book} />
                </span>
              </span>
            </div>
          ))}
        </div>
        <div className="shelf-plank" aria-hidden="true" />
      </div>

      <div className="shelf-caption">
        <button
          type="button"
          className="shelf-nav"
          onClick={() => nudge(-1)}
          disabled={selected === 0}
          aria-label="Previous book"
        >
          <ChevronLeft size={22} strokeWidth={2.6} />
        </button>
        <p className="shelf-now" aria-live="polite">
          <span className="shelf-now-n">
            {pad(selected + 1)} / {pad(count)}
          </span>
          <span className="shelf-now-title">{current.title}</span>
          <span className="shelf-now-by">
            {current.author} · {current.year}
          </span>
        </p>
        <button
          type="button"
          className="shelf-nav"
          onClick={() => nudge(1)}
          disabled={selected === count - 1}
          aria-label="Next book"
        >
          <ChevronRight size={22} strokeWidth={2.6} />
        </button>
      </div>

      {openIndex !== null && <OpenBook book={books[openIndex]} onClose={closeBook} />}
    </div>
  )
}

export default BookShelf
