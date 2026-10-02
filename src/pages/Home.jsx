import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ChatBot from '../components/Chatbot'

// WebKit (Safari, and every browser on iOS) plays WebM but ignores its alpha
// channel, so the clip shows up on a cream box. Those browsers get an HEVC
// copy with alpha instead; everyone else keeps the smaller WebM.
const isWebKitOnly = (() => {
  if (typeof navigator === 'undefined') return false
  const ua = navigator.userAgent
  const iOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  const desktopSafari = /Safari/.test(ua) && !/Chrome|Chromium|Edg|OPR|Firefox|Android/.test(ua)
  return iOS || desktopSafari
})()

const DYNASTIES = [
  'Kadambas', 'Chalukyas', 'Rashtrakutas', 'Hoysalas',
  'Vijayanagara', 'Keladi', 'Mysore', 'Tipu',
]

const PLACES = [
  'Banavasi', 'Badami', 'Ellora', 'Belur',
  'Hampi', 'Talikota', 'Srirangapatna', 'Bengaluru',
]

const INDEX_ROWS = [
  {
    n: '01',
    name: 'Timeline',
    kn: 'ಕಾಲರೇಖೆ',
    blurb: '345 CE to 1973, in one scroll',
    to: '/timeline',
    img: 'vijayanagara/vijayanagara-1-virupaksha.jpg',
  },
  {
    n: '02',
    name: 'Quiz',
    kn: 'ಪ್ರಶ್ನೋತ್ತರ',
    blurb: 'Ten questions, no googling',
    to: '/quiz',
    img: 'chitradurga-fort.jpg',
  },
  {
    n: '03',
    name: 'Map',
    kn: 'ನಕ್ಷೆ',
    blurb: "What's still standing near you",
    to: '/map',
    img: 'hoysala/hoysala-1-belur-founding.jpg',
  },
  {
    n: '04',
    name: "B'lore Walks",
    kn: 'ಬೆಂಗಳೂರು ನಡಿಗೆ',
    blurb: 'Six routes through the old city, on foot',
    to: '/walks',
    img: 'hyder-ali/hyder-ali-3-bangalore-fort.jpg',
  },
  {
    n: '05',
    name: 'Favourites',
    kn: 'ಇಷ್ಟಗಳು',
    blurb: 'Everything you pinned along the way',
    to: '/favorites',
    img: 'rashtrakuta/rashtrakuta-1-ellora.jpg',
  },
]

// One band of scrolling text. The list is rendered twice inside the track and
// the animation travels exactly half its width, so the seam never shows.
const Marquee = ({ items, reverse, tone }) => (
  <div className={`marquee marquee-${tone}${reverse ? ' marquee-reverse' : ''}`}>
    <div className="marquee-track">
      {[0, 1].map((copy) => (
        <ul key={copy} className="marquee-set" aria-hidden={copy === 1}>
          {items.map((item) => (
            <li key={item}>
              {item}
              <span className="marquee-star">✦</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
)

const Home = () => {
  const baseUrl = import.meta.env.BASE_URL
  const sticker = (file) => `${baseUrl}images/stickers/${file}`

  // Scroll cue under the hero clip: there on arrival, gone once the page moves
  const [showCue, setShowCue] = useState(true)
  const bandsRef = useRef(null)
  useEffect(() => {
    const onScroll = () => setShowCue(window.scrollY < 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="home">
      <section className="home-hero">
        <video
          className="home-hero-video"
          src={`${baseUrl}video/namma-bengaluru-hero.${isWebKitOnly ? 'mov' : 'webm'}?v=2`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />

        {/* Each word is a two-row window; hovering rolls it over to Kannada.
            The Kannada rows are hidden from screen readers so the heading
            still reads as "Namma Lore". */}
        <h1 className="home-wordmark">
          <span className="wordmark-word wordmark-namma" tabIndex={0}>
            <span className="wordmark-roll">
              <span className="wordmark-item">Namma</span>
              <span className="wordmark-item wordmark-kn" aria-hidden="true">ನಮ್ಮ</span>
            </span>
          </span>

          <img
            src={`${baseUrl}images/karnataka-flag-map-muted.png`}
            alt=""
            className="wordmark-map"
          />

          <span className="wordmark-word wordmark-lore" tabIndex={0}>
            <span className="wordmark-roll">
              <span className="wordmark-item">Lore</span>
              <span className="wordmark-item wordmark-kn" aria-hidden="true">ಲೋರ್</span>
            </span>
          </span>
        </h1>

        <button
          type="button"
          className={`home-scroll-cue${showCue ? '' : ' is-hidden'}`}
          onClick={() => bandsRef.current?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Scroll down"
          tabIndex={showCue ? 0 : -1}
        >
          <span className="home-scroll-cue-label" aria-hidden="true">Scroll</span>
          <span className="home-scroll-cue-ring" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path d="M6 9.5l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </section>

      {/* Two bands, tilted against each other and running opposite ways */}
      <section className="home-bands" aria-hidden="true" ref={bandsRef}>
        <Marquee items={DYNASTIES} tone="orange" />
        <Marquee items={PLACES} tone="lime" reverse />
      </section>

      <section className="home-index">
        <div className="home-index-head">
          <span className="home-index-label">The index</span>
          <span className="home-index-rule" aria-hidden="true" />
          <span className="home-index-count">{String(INDEX_ROWS.length).padStart(2, '0')}</span>
        </div>

        <ul className="index-list">
          {INDEX_ROWS.map((row) => (
            <li key={row.n}>
              <Link to={row.to} className="index-row">
                <span className="index-n">{row.n}</span>
                {/* A one-line window over two stacked rows, like the hero
                    wordmark; the Kannada row is hidden from screen readers */}
                <span className="index-name">
                  <span className="index-name-roll">
                    <span className="index-name-item">{row.name}</span>
                    <span className="index-name-item index-name-kn" aria-hidden="true">{row.kn}</span>
                  </span>
                </span>
                <span className="index-kn">{row.kn}</span>
                <span className="index-blurb">{row.blurb}</span>
                <img src={`${baseUrl}images/${row.img}`} alt="" className="index-peek" />
                <span className="index-arrow" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="home-outro">
        <img src={`${baseUrl}images/aira-mascot.png`} alt="Aira" className="home-outro-aira" />
        <p>
          Stuck on something? <strong>Aira</strong> is in the corner down there, and she
          has read all of it.
        </p>
        <img src={sticker('dosa.png')} alt="" className="home-sticker home-sticker-dosa" />
      </section>

      <ChatBot />
    </div>
  )
}

export default Home
