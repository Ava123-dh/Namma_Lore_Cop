import { useState, useEffect, useRef, Fragment } from 'react'
import { MapContainer, TileLayer, Marker, Polyline, Polygon, useMap } from 'react-leaflet'
import {
  Heart, Navigation, MapPin, Footprints, X, ChevronLeft, ChevronRight,
  Sparkles, Compass, ListChecks, Volume2, Square, Send, Loader2, MessageCircle,
} from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import { walks } from '../data/walks'
import L from 'leaflet'

// Flat lookup of every stop, tagged with its parent walk.
const allStops = walks.flatMap((w) => w.stops.map((s) => ({ ...s, walkId: w.id, walkColor: w.color })))

const boundsOf = (stops) => {
  const lats = stops.map((s) => s.position[0])
  const lngs = stops.map((s) => s.position[1])
  const pad = 0.0025
  return [
    [Math.max(...lats) + pad, Math.min(...lngs) - pad],
    [Math.min(...lats) - pad, Math.max(...lngs) + pad],
  ]
}

// Organic shaded area that approximates the ground a walk covers: buffer each
// stop into a small ring of points, then take the convex hull of them all. The
// result is a rounded blob that hugs the route rather than a bounding box.
const hullArea = (stops, r = 0.0013) => {
  const pts = []
  const steps = 12
  for (const s of stops) {
    const [lat, lng] = s.position
    for (let i = 0; i < steps; i++) {
      const a = (Math.PI * 2 * i) / steps
      pts.push([lng + r * Math.cos(a), lat + r * Math.sin(a)]) // [x=lng, y=lat]
    }
  }
  pts.sort((p, q) => p[0] - q[0] || p[1] - q[1])
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])
  const lower = []
  for (const p of pts) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) lower.pop()
    lower.push(p)
  }
  const upper = []
  for (let i = pts.length - 1; i >= 0; i--) {
    const p = pts[i]
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) upper.pop()
    upper.push(p)
  }
  lower.pop()
  upper.pop()
  return lower.concat(upper).map(([x, y]) => [y, x]) // back to [lat, lng]
}

// Precompute each walk's shaded area once.
const walkHulls = Object.fromEntries(walks.map((w) => [w.id, hullArea(w.stops)]))

// Whole-world outer ring; walk areas become holes so everything outside dims.
const worldRing = [
  [-89, -180],
  [-89, 180],
  [89, 180],
  [89, -180],
]

// Spoken narration for a stop — fuller than the on-card bullets.
const buildNarration = (stop, walk) => {
  const parts = [
    `${stop.name}.`,
    `Stop ${stop.num} on ${walk.name}.`,
    `${stop.type}. ${stop.period}. Located at ${stop.address}.`,
    ...stop.bullets,
  ]
  if (stop.context) parts.push(`The wider view. ${stop.context}`)
  if (stop.fact) parts.push(`Here's a fun fact. ${stop.fact}`)
  return parts.join(' ')
}

// --- Make narration sound natural, especially for Indian names ---

// Phonetic respellings so generic voices don't mangle proper nouns. Compound
// names are listed before their roots so the longer match wins.
const PRONUNCIATION = [
  ['attara kacheri', 'Attaara Kacheri'],
  ['kacheri', 'Kacheri'],
  ['vidhana soudha', 'Vidhaana Soudha'],
  ['vikasa soudha', 'Vikaasa Soudha'],
  ['soudha', 'Soudha'],
  ['chamarajendra', 'Chaama-raajendra'],
  ['venkatappa', 'Venkat-appa'],
  ['halmidi', 'Halmidi'],
  ['sillubande', 'Sillu-banday'],
  ['ringwood', 'Ring-wood'],
  ['krumbiegel', 'Kroom-beegel'],
  ['marochetti', 'Maro-ketti'],
  ['narrainswamy', 'Narain-swaamy'],
  ['mudaliar', 'Mudali-yaar'],
  ['hesaraghatta', 'Hesara-ghatta'],
  ['shivanasamudram', 'Shivana-samudram'],
  ['seshadripuram', 'Shay-shaadri-puram'],
  ['nijalingappa', 'Nija-lingappa'],
  ['abanindranath', 'Abanindra-naath'],
  ['hebbar', 'Hebbaar'],
  ['begur', 'Baygooru'],
  ['kasturba', 'Kastoorba'],
  ['cubbon', 'Cubb-on'],
  ['chunam', 'chunaam'],
  ['dharmaraya', 'Dharma-raaya'],
  ['thigalarpet', 'Thigalar-pait'],
  ['vahnikula', 'Vahni-kula'],
  ['tawakkal', 'Tawakkal'],
  ['kalasipalyam', 'Kalasi-paalyam'],
  ['chamarajpet', 'Chaama-raaj-pait'],
  ['basavanagudi', 'Basava-na-gudi'],
  ['malleswaram', 'Malleesh-waram'],
  ['kempambudhi', 'Kempaam-budhi'],
  ['ganigarapet', 'Ganigara-pait'],
  ['tharagupet', 'Tharagu-pait'],
  ['nagarthpet', 'Nagarth-pait'],
  ['cubbonpet', 'Cubbon-pait'],
  ['balepet', 'Baalay-pait'],
  ['akkipet', 'Akki-pait'],
  ['puttanna', 'Puttanna'],
  ['mutyalapete', 'Mutyaala-paytay'],
  ['panchangas', 'panchaangas'],
  ['pathashala', 'paatha-shaala'],
  ['sringeri', 'Shringeri'],
  ['melkote', 'Mel-koh-tay'],
  ['hanumanthaiah', 'Hanumanth-aiah'],
  ['vidhana soudha', 'Vidhaana Soudha'],
  ['shivamogga', 'Shiva-mogga'],
  ['halasuru', 'Halasooru'],
  ['yudhishthira', 'Yudhish-thira'],
  ['draupadi', 'Droupadi'],
  ['karaga', 'Kaaraga'],
  ['ranganathaswamy', 'Ranga-naatha-swaamy'],
  ['ranganatha', 'Ranga-naatha'],
  ['venkataramanaswamy', 'Venkata-ramana-swaamy'],
  ['venkataramana', 'Venkata-ramana'],
  ['kempegowda', 'Kempay-gowda'],
  ['chikkadevaraja', 'Chikka-dayva-raaja'],
  ['krishnarajendra', 'Krishna-raajendra'],
  ['krishnaraja', 'Krishna-raaja'],
  ['chamarajendra', 'Chaama-raajendra'],
  ['chamaraja', 'Chaama-raaja'],
  ['visvesvaraya', 'Vishwesh-wa-raya'],
  ['lakshminarasappa', 'Lakshmi-nara-sappa'],
  ['doddapete', 'Dodda-paytay'],
  ['chickpete', 'Chick-paytay'],
  ['mutyalapete', 'Mutyaala-paytay'],
  ['cottonpete', 'Cotton-paytay'],
  ['kumbarpet', 'Kumbar-pait'],
  ['yelahanka', 'Yela-haanka'],
  ['anjaneya', 'Un-ja-naya'],
  ['vijayanagara', 'Vijaya-nagara'],
  ['srirangapatna', 'Sri-ranga-patna'],
  ['sivasamudram', 'Shiva-samudram'],
  ['seshadri', 'Shay-shaadri'],
  ['sannidhana', 'Sanni-dhaana'],
  ['vanivilas', 'Vaani-vilaas'],
  ['vani vilas', 'Vaani Vilaas'],
  ['shivappa nayaka', 'Shivappa Naayaka'],
  ['suharwady', 'Suhar-waardy'],
  ['gandabherunda', 'Ganda-bhay-runda'],
  ['siddikatte', 'Siddi-kattay'],
  ['nenapu', 'Nay-napu'],
  ['karaga', 'Kaaraga'],
  ['killedar', 'killay-daar'],
  ['dargah', 'dar-gaah'],
  ['mastan', 'Mastaan'],
  ['wodeyars', 'Wo-day-yars'],
  ['wodeyar', 'Wo-day-yar'],
  ['bengaluru', 'Bengalooru'],
  ['kote', 'koh-tay'],
  ['pete', 'paytay'],
]

const ONES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const TENS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
const twoDigitWords = (n) => (n < 20 ? ONES[n] : `${TENS[Math.floor(n / 10)]}${n % 10 ? '-' + ONES[n % 10] : ''}`)

// Speak years the way people say them: 1791 -> "seventeen ninety-one".
const yearToWords = (y) => {
  const hi = Math.floor(y / 100)
  const lo = y % 100
  if (lo === 0) return `${twoDigitWords(hi)} hundred`
  if (lo < 10) return `${twoDigitWords(hi)} oh ${ONES[lo]}`
  return `${twoDigitWords(hi)} ${twoDigitWords(lo)}`
}

const naturalizeYears = (text) => text.replace(/\b(1[5-9]\d\d|20\d\d)\b/g, (m) => yearToWords(parseInt(m, 10)))

// Full clean-up for the browser's built-in voice (needs the phonetic help).
const sanitizeForSpeech = (text) => {
  let out = text
  for (const [word, say] of PRONUNCIATION) {
    out = out.replace(new RegExp(`\\b${word}\\b`, 'gi'), say)
  }
  return naturalizeYears(out)
}

const AI_BASE = (import.meta.env.VITE_SERVER_URL || '').replace(/\/$/, '')

// Google Cloud neural voices (Indian English). 'system' uses the browser voice.
const HD_VOICES = [
  { id: 'en-IN-Neural2-A', label: '🇮🇳 Indian English — Neural (female)' },
  { id: 'en-IN-Neural2-B', label: '🇮🇳 Indian English — Neural (male)' },
  { id: 'en-IN-Neural2-C', label: '🇮🇳 Indian English — Neural (male 2)' },
  { id: 'en-IN-Neural2-D', label: '🇮🇳 Indian English — Neural (female 2)' },
  { id: 'en-IN-Wavenet-D', label: '🇮🇳 Indian English — WaveNet (female)' },
]

const base64ToBlob = (b64, type) => {
  const bin = atob(b64)
  const arr = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i)
  return new Blob([arr], { type })
}

// Rank available voices, strongly preferring Indian English, then any that
// look like modern neural/natural voices.
const scoreVoice = (v) => {
  let s = 0
  if (/en[-_]IN/i.test(v.lang)) s += 100
  else if (/^en/i.test(v.lang)) s += 20
  if (/natural|neural|premium|enhanced/i.test(v.name)) s += 40
  if (/google/i.test(v.name)) s += 25
  if (/\b(rishi|veena|heera|isha|prabhat|kavya|aditi)\b/i.test(v.name)) s += 30
  return s
}
const pickBestVoice = (voices) =>
  voices.slice().sort((a, b) => scoreVoice(b) - scoreVoice(a))[0] || null

// Numbered teardrop marker, coloured per walk and enlarged when active.
const createNumberedIcon = (num, color, active, dim) =>
  L.divIcon({
    className: 'walk-marker',
    html: `<div class="walk-pin${active ? ' walk-pin-active' : ''}${dim ? ' walk-pin-dim' : ''}" style="--pin:${color}">
      <span>${num}</span>
    </div>`,
    iconSize: active ? [38, 38] : [30, 30],
    iconAnchor: active ? [19, 38] : [15, 30],
  })

function MapController({ focusStops, activeStop }) {
  const map = useMap()
  // Leaflet measures its container once, at mount. On phones the box often
  // settles later (page cascade animation, browser chrome collapsing, rotation),
  // which leaves a grey map with only a corner of tiles. Re-measure whenever
  // the container actually changes size.
  useEffect(() => {
    const el = map.getContainer()
    const refit = () => map.invalidateSize()
    const t = setTimeout(refit, 250)
    const ro = new ResizeObserver(refit)
    ro.observe(el)
    return () => {
      clearTimeout(t)
      ro.disconnect()
    }
  }, [map])
  useEffect(() => {
    map.fitBounds(boundsOf(focusStops), { padding: [30, 30] })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusStops])
  useEffect(() => {
    if (activeStop) map.flyTo(activeStop.position, 17, { duration: 0.7 })
  }, [activeStop, map])
  return null
}

// Per-stop image: tries a local file, falls back to a styled gradient banner.
function StopImage({ stop, baseUrl, color, className }) {
  const [failed, setFailed] = useState(false)
  const src = `${baseUrl}images/pete/${stop.id}.jpg`
  if (failed) {
    return (
      <div className={`walk-img-fallback ${className || ''}`} style={{ background: `linear-gradient(135deg, ${color}, #1f2937)` }}>
        <span className="walk-img-num">{stop.num}</span>
        <span className="walk-img-name">{stop.name}</span>
      </div>
    )
  }
  return <img src={src} alt={stop.name} className={className} onError={() => setFailed(true)} />
}

// Touch screens (phones, tablets): one finger scrolls the page, two fingers
// move and zoom the map, so the map never traps a swipe down the page.
const isTouchScreen =
  typeof window !== 'undefined' && window.matchMedia?.('(pointer: coarse)').matches

const WalksMap = ({ baseUrl }) => {
  const [showTwoFingerHint, setShowTwoFingerHint] = useState(false)
  const hintTimer = useRef(null)
  useEffect(() => () => clearTimeout(hintTimer.current), [])
  const onMapTouchMove = (e) => {
    if (!isTouchScreen || e.touches.length !== 1) return
    setShowTwoFingerHint(true)
    clearTimeout(hintTimer.current)
    hintTimer.current = setTimeout(() => setShowTwoFingerHint(false), 1400)
  }
  const { isFavorite, toggleFavorite } = useFavorites()
  const [activeWalkId, setActiveWalkId] = useState('all') // 'all' | walk id
  const [activeStopId, setActiveStopId] = useState(null)
  const [speakingId, setSpeakingId] = useState(null)
  const [audioLoadingId, setAudioLoadingId] = useState(null)
  const [voices, setVoices] = useState([])
  const [ttsChoice, setTtsChoice] = useState(() => {
    if (typeof localStorage === 'undefined') return AI_BASE ? HD_VOICES[0].id : 'system'
    return localStorage.getItem('walkTts') || (AI_BASE ? HD_VOICES[0].id : 'system')
  })
  const [chats, setChats] = useState({}) // { [stopId]: [{ sender, text }] }
  const [chatInput, setChatInput] = useState('')
  const [chatBusy, setChatBusy] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const detailRef = useRef(null)
  const chatScrollRef = useRef(null)
  const audioRef = useRef(null) // current HTMLAudioElement
  const audioCacheRef = useRef(new Map()) // `${stopId}|${voice}` -> object URL

  const activeStop = allStops.find((s) => s.id === activeStopId) || null
  const activeStopWalk = activeStop ? walks.find((w) => w.id === activeStop.walkId) : null

  // Which walk provides the map focus + drawer list.
  const focusWalk = activeStop
    ? activeStopWalk
    : activeWalkId === 'all'
    ? null
    : walks.find((w) => w.id === activeWalkId)
  const focusStops = focusWalk ? focusWalk.stops : allStops

  const goTo = (walk, index) => {
    const list = walk.stops
    setActiveStopId(list[(index + list.length) % list.length].id)
  }

  useEffect(() => {
    if (activeStop && detailRef.current) detailRef.current.scrollTop = 0
  }, [activeStopId, activeStop])

  const selectWalk = (id) => {
    setActiveStopId(null)
    setActiveWalkId(id)
  }

  // --- Audio narration (Web Speech API) ---
  const ttsSupported = typeof window !== 'undefined' && 'speechSynthesis' in window

  // Load the device's voices (they arrive asynchronously in most browsers).
  useEffect(() => {
    if (!ttsSupported) return
    const load = () => {
      const list = window.speechSynthesis.getVoices()
      if (list.length) setVoices(list)
    }
    load()
    window.speechSynthesis.onvoiceschanged = load
    return () => {
      window.speechSynthesis.onvoiceschanged = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const useHdVoice = ttsChoice !== 'system' && !!AI_BASE

  const stopSpeaking = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }
    if (ttsSupported) window.speechSynthesis.cancel()
    setSpeakingId(null)
    setAudioLoadingId(null)
  }

  // Browser's built-in voice — the fallback path.
  const speakSystem = (stop, walk) => {
    if (!ttsSupported) return
    window.speechSynthesis.cancel()
    const voice = pickBestVoice(voices)
    const text = sanitizeForSpeech(buildNarration(stop, walk))
    // Sentence-by-sentence: friendlier prosody, and it dodges the Chrome bug
    // that cuts long single utterances off mid-way.
    const sentences = text.match(/[^.!?]+[.!?]*/g) || [text]
    setSpeakingId(stop.id)
    sentences.forEach((sentence, i) => {
      const u = new SpeechSynthesisUtterance(sentence.trim())
      if (voice) u.voice = voice
      u.lang = voice?.lang || 'en-IN'
      u.rate = 0.9
      u.pitch = 1.0
      if (i === sentences.length - 1) u.onend = () => setSpeakingId(null)
      u.onerror = () => setSpeakingId(null)
      window.speechSynthesis.speak(u)
    })
  }

  // Google Cloud neural voice — the high-quality path (falls back on failure).
  const speakGoogle = async (stop, walk, voiceId) => {
    const cacheKey = `${stop.id}|${voiceId}`
    setAudioLoadingId(stop.id)
    try {
      let url = audioCacheRef.current.get(cacheKey)
      if (!url) {
        const text = naturalizeYears(buildNarration(stop, walk))
        const res = await fetch(`${AI_BASE}/api/tts`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text, voice: voiceId }),
        })
        const data = await res.json().catch(() => ({}))
        if (!res.ok || !data.audioContent) throw new Error(data.error || 'TTS failed')
        url = URL.createObjectURL(base64ToBlob(data.audioContent, 'audio/mpeg'))
        audioCacheRef.current.set(cacheKey, url)
      }
      const audio = new Audio(url)
      audioRef.current = audio
      audio.onended = () => {
        setSpeakingId(null)
        audioRef.current = null
      }
      audio.onerror = () => {
        setSpeakingId(null)
        audioRef.current = null
      }
      setAudioLoadingId(null)
      setSpeakingId(stop.id)
      await audio.play()
    } catch {
      // Neural voice unavailable — fall back to the browser voice.
      setAudioLoadingId(null)
      speakSystem(stop, walk)
    }
  }

  const toggleSpeak = (stop, walk) => {
    if (speakingId === stop.id || audioLoadingId === stop.id) {
      stopSpeaking()
      return
    }
    stopSpeaking()
    if (useHdVoice) speakGoogle(stop, walk, ttsChoice)
    else speakSystem(stop, walk)
  }

  const changeTtsChoice = (value) => {
    setTtsChoice(value)
    if (typeof localStorage !== 'undefined') localStorage.setItem('walkTts', value)
    stopSpeaking()
  }

  // Stop narration on unmount and free any cached audio URLs.
  useEffect(() => {
    const cache = audioCacheRef.current
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) window.speechSynthesis.cancel()
      if (audioRef.current) audioRef.current.pause()
      cache.forEach((url) => URL.revokeObjectURL(url))
      cache.clear()
    }
  }, [])
  useEffect(() => {
    stopSpeaking()
    setChatOpen(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStopId])

  // Hide the global floating chat bubble while the walks view is mounted —
  // the walks have their own integrated Aira chat.
  useEffect(() => {
    document.body.classList.add('walks-active')
    return () => document.body.classList.remove('walks-active')
  }, [])

  // --- Integrated Aira chat ---
  useEffect(() => {
    if (chatScrollRef.current) chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight
  }, [chats, activeStopId, chatBusy, chatOpen])

  const askAira = async (stop, walk, question) => {
    const q = question.trim()
    if (!q || chatBusy) return
    setChatOpen(true)
    setChatInput('')
    setChats((prev) => ({ ...prev, [stop.id]: [...(prev[stop.id] || []), { sender: 'user', text: q }] }))

    if (!AI_BASE) {
      setChats((prev) => ({
        ...prev,
        [stop.id]: [
          ...(prev[stop.id] || []),
          { sender: 'bot', text: "I can't reach my brain right now — the AI backend isn't configured for this build." },
        ],
      }))
      return
    }

    setChatBusy(true)
    const context =
      `You are Aira, a warm, knowledgeable guide for Bengaluru's heritage walks. ` +
      `The visitor is on "${walk.name}" and is looking at this stop:\n` +
      `Name: ${stop.name}\nType: ${stop.type}\nPeriod: ${stop.period}\nLocation: ${stop.address}\n` +
      `Known notes: ${stop.bullets.join(' ')}${stop.context ? ' Wider context: ' + stop.context : ''}${stop.fact ? ' Fun fact: ' + stop.fact : ''}\n\n` +
      `Answer the visitor's question about this stop, the walk, or related Bengaluru and Karnataka history. ` +
      `Give an accurate, in-depth answer of one or two short paragraphs. If you are unsure, say so honestly rather than inventing facts.`
    try {
      const res = await fetch(`${AI_BASE}/api/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: 'gemini-2.5-flash', prompt: `${context}\n\nVisitor: ${q}\nAira:`, short: false }),
      })
      const raw = await res.text()
      let payload
      try {
        payload = JSON.parse(raw)
      } catch {
        payload = { error: raw }
      }
      if (!res.ok) throw new Error(payload?.error || payload?.detail || 'Request failed')
      const text = (payload.text || '').replace(/\*/g, '').trim() || 'Hmm, I got an empty answer — try asking again!'
      setChats((prev) => ({ ...prev, [stop.id]: [...(prev[stop.id] || []), { sender: 'bot', text }] }))
    } catch (err) {
      const overloaded = /overloaded|resource_exhausted|429|503/i.test(err.message)
      setChats((prev) => ({
        ...prev,
        [stop.id]: [
          ...(prev[stop.id] || []),
          { sender: 'bot', text: overloaded ? 'I’m a bit overloaded right now — give me a moment and ask again!' : `Sorry, I couldn't answer that: ${err.message}` },
        ],
      }))
    } finally {
      setChatBusy(false)
    }
  }

  return (
    <div className="walk-explorer">
      {/* Map */}
      <div className="walk-map" onTouchMove={onMapTouchMove}>
        <MapContainer
          center={[12.9662, 77.5772]}
          zoom={15}
          dragging={!isTouchScreen}
          touchZoom
          style={{ height: '100%', width: '100%' }}
          className="z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapController focusStops={focusStops} activeStop={activeStop} />

          {/* Shaded area + outside dimming appear only once a walk is chosen.
              The overview map stays clean so all four routes read at once. */}
          {focusWalk && (
            <Fragment key={`area-${focusWalk.id}`}>
              <Polygon
                positions={walkHulls[focusWalk.id]}
                pathOptions={{
                  color: focusWalk.color,
                  weight: 1.5,
                  opacity: 0.9,
                  fillColor: focusWalk.color,
                  fillOpacity: 0.18,
                }}
                interactive={false}
              />
              <Polygon
                positions={[worldRing, walkHulls[focusWalk.id]]}
                pathOptions={{ stroke: false, fillColor: '#1f2937', fillOpacity: 0.4 }}
                interactive={false}
              />
            </Fragment>
          )}

          {walks.map((walk) => {
            // When a specific walk is in focus, fade the others.
            const dim = focusWalk && focusWalk.id !== walk.id
            return (
              <Fragment key={walk.id}>
                <Polyline
                  positions={walk.stops.map((s) => s.position)}
                  pathOptions={{
                    color: walk.color,
                    weight: 4,
                    opacity: dim ? 0.2 : 0.8,
                    dashArray: '8, 10',
                  }}
                />
                {walk.stops.map((stop) => (
                  <Marker
                    key={stop.id}
                    position={stop.position}
                    icon={createNumberedIcon(stop.num, walk.color, stop.id === activeStopId, dim)}
                    eventHandlers={{
                      click: () => {
                        setActiveWalkId(walk.id)
                        setActiveStopId(stop.id)
                      },
                    }}
                  />
                ))}
              </Fragment>
            )
          })}
        </MapContainer>

        <div className={`walk-map-hint${showTwoFingerHint ? ' is-shown' : ''}`} aria-hidden="true">
          Use two fingers to move the map
        </div>

        {/* Walk selector chips */}
        <div className="walk-chips">
          <button
            onClick={() => selectWalk('all')}
            className={`walk-chip ${activeWalkId === 'all' && !activeStop ? 'walk-chip-on' : ''}`}
            style={{ '--chip': '#6b7280' }}
          >
            <Footprints size={15} />
            All walks
          </button>
          {walks.map((walk) => (
            <button
              key={walk.id}
              onClick={() => selectWalk(walk.id)}
              className={`walk-chip ${(focusWalk && focusWalk.id === walk.id) ? 'walk-chip-on' : ''}`}
              style={{ '--chip': walk.color }}
            >
              <span className="walk-chip-dot" style={{ background: walk.color }} />
              {walk.short}
            </button>
          ))}
        </div>
      </div>

      {/* Side drawer */}
      <aside className={`walk-drawer ${activeStop ? 'walk-drawer-detail' : ''}`}>
        {!activeStop ? (
          <div className="walk-overview">
            <div className="walk-aira-greet">
              <img src={`${baseUrl}images/aira-mascot.png`} alt="Aira" className="walk-aira-img mascot-idle" />
              <div className="walk-aira-bubble">
                <p className="font-bold text-gray-900">Hi, I'm Aira!</p>
                <p className="text-sm text-gray-600">
                  {focusWalk
                    ? `Tap a stop to explore ${focusWalk.short} with me.`
                    : "Pick a walk, or tap any numbered stop to explore the old Pete and Kote with me."}
                </p>
              </div>
            </div>

            <div className="walk-stop-list">
              {(focusWalk ? [focusWalk] : walks).map((walk) => (
                <div key={walk.id} className="walk-group">
                  <div className="walk-group-head" style={{ color: walk.color }}>
                    <span className="walk-chip-dot" style={{ background: walk.color }} />
                    {walk.name}
                    <span className="walk-group-meta">{walk.stops.length} stops · {walk.distance}</span>
                  </div>
                  {walk.intro && <p className="walk-group-intro">{walk.intro}</p>}

                  {/* Things to do — only once a single walk is chosen, so the
                      overview list stays scannable across all four routes. */}
                  {focusWalk && walk.todo?.length > 0 && (
                    <div className="walk-todo">
                      <div className="walk-todo-head" style={{ color: walk.color }}>
                        <ListChecks size={15} />
                        <span>Things to do on this walk</span>
                      </div>
                      <ul className="walk-todo-list">
                        {walk.todo.map((item, i) => (
                          <li key={i} className="walk-todo-item">
                            <span className="walk-todo-tag" style={{ background: `${walk.color}1a`, color: walk.color }}>
                              {item.tag}
                            </span>
                            <span className="walk-todo-text">
                              <span className="walk-todo-title">{item.title}</span>
                              <span className="walk-todo-detail">{item.detail}</span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {walk.stops.map((stop) => (
                    <button
                      key={stop.id}
                      onClick={() => {
                        setActiveWalkId(walk.id)
                        setActiveStopId(stop.id)
                      }}
                      className="walk-stop-item"
                    >
                      <span className="walk-stop-num" style={{ background: walk.color }}>{stop.num}</span>
                      <span className="walk-stop-text">
                        <span className="walk-stop-name">{stop.name}</span>
                        <span className="walk-stop-type" style={{ color: walk.color }}>{stop.type}</span>
                      </span>
                      <ChevronRight size={18} className="text-gray-400 flex-shrink-0" />
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="walk-detail" key={activeStop.id} ref={detailRef}>
            <div className="walk-detail-imgwrap">
              <StopImage stop={activeStop} baseUrl={baseUrl} color={activeStop.walkColor} className="walk-detail-img" />
              <button onClick={() => setActiveStopId(null)} className="walk-detail-close" aria-label="Back to all stops">
                <X size={20} />
              </button>
              <span className="walk-detail-badge" style={{ background: activeStop.walkColor }}>
                {activeStopWalk.short} · Stop {activeStop.num} of {activeStopWalk.stops.length}
              </span>
            </div>

            <div className="walk-detail-body">
              <div className="flex justify-between items-start gap-3">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight">{activeStop.name}</h3>
                  <span
                    className="inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full"
                    style={{ background: `${activeStop.walkColor}1a`, color: activeStop.walkColor }}
                  >
                    {activeStop.type}
                  </span>
                </div>
                <button
                  onClick={() => toggleFavorite({ ...activeStop, description: activeStop.bullets[0] })}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
                >
                  <Heart size={22} className={isFavorite(activeStop.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'} />
                </button>
              </div>

              {/* Audio narration */}
              {(ttsSupported || AI_BASE) && (
                <div className="walk-audio mt-3">
                  <button
                    onClick={() => toggleSpeak(activeStop, activeStopWalk)}
                    className="walk-listen-btn"
                    style={
                      speakingId === activeStop.id
                        ? { background: activeStop.walkColor, color: '#fff', borderColor: activeStop.walkColor }
                        : { color: activeStop.walkColor, borderColor: `${activeStop.walkColor}55` }
                    }
                  >
                    {audioLoadingId === activeStop.id ? (
                      <>
                        <Loader2 size={16} className="walk-spin" />
                        Preparing audio…
                      </>
                    ) : speakingId === activeStop.id ? (
                      <>
                        <Square size={15} className="fill-current" />
                        Stop narration
                        <span className="walk-audio-bars" aria-hidden="true"><i /><i /><i /><i /></span>
                      </>
                    ) : (
                      <>
                        <Volume2 size={16} />
                        {useHdVoice ? 'Listen (HD voice)' : 'Listen to the full story'}
                      </>
                    )}
                  </button>
                  <select
                    className="walk-voice-select"
                    value={ttsChoice}
                    onChange={(e) => changeTtsChoice(e.target.value)}
                    title="Choose a narration voice — the HD Indian-English voices say the names best"
                  >
                    {AI_BASE && (
                      <optgroup label="HD voices (Google)">
                        {HD_VOICES.map((v) => (
                          <option key={v.id} value={v.id}>{v.label}</option>
                        ))}
                      </optgroup>
                    )}
                    {ttsSupported && (
                      <optgroup label="Device voice">
                        <option value="system">System voice (offline)</option>
                      </optgroup>
                    )}
                  </select>
                </div>
              )}

              <p className="text-sm text-gray-500 mt-3 flex items-center gap-1">
                <MapPin size={14} className="text-primary-500 flex-shrink-0" />
                {activeStop.address}
              </p>
              <p className="text-sm text-gray-500 mb-4">{activeStop.period}</p>

              <ul className="walk-bullets">
                {activeStop.bullets.map((b, i) => (
                  <li key={i}>
                    <span className="walk-bullet-dot" style={{ background: activeStop.walkColor }} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {activeStop.context && (
                <div className="walk-context">
                  <div className="walk-context-head">
                    <Compass size={16} />
                    <span>The wider view</span>
                  </div>
                  <p>{activeStop.context}</p>
                </div>
              )}

              {activeStop.fact && (
                <div className="walk-fact">
                  <div className="walk-fact-head">
                    <Sparkles size={16} />
                    <span>Fun fact</span>
                  </div>
                  <p>{activeStop.fact}</p>
                </div>
              )}

              <div className="flex gap-3 mt-5">
                <button
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/search/?api=1&query=${activeStop.position[0]},${activeStop.position[1]}`,
                      '_blank'
                    )
                  }
                  className="flex-1 bg-green-600 text-white py-2.5 rounded-2xl font-semibold hover:bg-green-700 transition-all inline-flex items-center justify-center text-sm"
                >
                  <Navigation size={18} className="mr-2" />
                  Directions
                </button>
                <button
                  onClick={() => setActiveStopId(null)}
                  className="px-4 bg-gray-100 text-gray-700 py-2.5 rounded-2xl font-semibold hover:bg-gray-200 transition-all text-sm"
                >
                  All stops
                </button>
              </div>

              {/* Ask Aira — compact trigger; the conversation opens full-screen */}
              <button
                className="walk-ask-trigger"
                onClick={() => setChatOpen(true)}
                style={{ borderColor: `${activeStop.walkColor}44` }}
              >
                <img src={`${baseUrl}images/aira-mascot.png`} alt="Aira" className="walk-ask-aira mascot-idle" />
                <span className="walk-ask-text">
                  <span className="walk-ask-title">Ask Aira about this stop</span>
                  <span className="walk-ask-sub">
                    {(chats[activeStop.id] || []).length
                      ? `Continue your chat (${chats[activeStop.id].length})`
                      : 'Deeper questions welcome — history, people, stories'}
                  </span>
                </span>
                <MessageCircle size={18} style={{ color: activeStop.walkColor }} className="flex-shrink-0" />
              </button>
            </div>

            <div className="walk-detail-nav">
              <button
                onClick={() => goTo(activeStopWalk, activeStopWalk.stops.findIndex((s) => s.id === activeStop.id) - 1)}
                className="walk-nav-btn"
              >
                <ChevronLeft size={18} />
                Prev
              </button>
              <span className="walk-aira-mini">
                <img src={`${baseUrl}images/aira-mascot.png`} alt="Aira" className="mascot-idle" />
              </span>
              <button
                onClick={() => goTo(activeStopWalk, activeStopWalk.stops.findIndex((s) => s.id === activeStop.id) + 1)}
                className="walk-nav-btn"
              >
                Next
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </aside>

      {/* Full-screen Ask-Aira chat */}
      {chatOpen && activeStop && (
        <div className="walk-chat-overlay" onClick={() => setChatOpen(false)}>
          <div className="walk-chat-card" onClick={(e) => e.stopPropagation()}>
            <div className="walk-chat-topbar" style={{ background: activeStop.walkColor }}>
              <img src={`${baseUrl}images/aira-mascot.png`} alt="Aira" className="walk-chat-topaira mascot-idle" />
              <div className="walk-chat-titles">
                <p className="walk-chat-title">Ask Aira</p>
                <p className="walk-chat-subtitle">
                  {activeStop.name} · {activeStopWalk.short}
                </p>
              </div>
              <button onClick={() => setChatOpen(false)} className="walk-chat-x" aria-label="Close chat">
                <X size={22} />
              </button>
            </div>

            <div className="walk-chat-body" ref={chatScrollRef}>
              {!(chats[activeStop.id] || []).length && !chatBusy && (
                <div className="walk-chat-welcome">
                  <img src={`${baseUrl}images/aira-mascot.png`} alt="Aira" className="walk-chat-welcome-aira mascot-idle" />
                  <p className="walk-chat-welcome-text">
                    Hi! Ask me anything about <strong>{activeStop.name}</strong> — the people, the stories,
                    or how it fits into Bengaluru’s history. Here are a few ideas:
                  </p>
                  <div className="walk-chat-suggest">
                    {[
                      `Tell me more about ${activeStop.name}.`,
                      `What happened here during the 1791 battle?`,
                      `Who built this, and why does it matter today?`,
                    ].map((q) => (
                      <button key={q} onClick={() => askAira(activeStop, activeStopWalk, q)} className="walk-suggest-chip">
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {(chats[activeStop.id] || []).map((m, i) => (
                <div key={i} className={`walk-cmsg-row ${m.sender === 'user' ? 'is-user' : 'is-bot'}`}>
                  {m.sender === 'bot' && (
                    <img src={`${baseUrl}images/aira-mascot.png`} alt="Aira" className="walk-cmsg-aira" />
                  )}
                  <div className={`walk-cmsg ${m.sender === 'user' ? 'walk-cmsg-user' : 'walk-cmsg-bot'}`}>{m.text}</div>
                </div>
              ))}
              {chatBusy && (
                <div className="walk-cmsg-row is-bot">
                  <img src={`${baseUrl}images/aira-mascot.png`} alt="Aira" className="walk-cmsg-aira mascot-talk" />
                  <div className="walk-cmsg walk-cmsg-bot">
                    <span className="typing-dots" aria-label="Aira is thinking"><span></span><span></span><span></span></span>
                  </div>
                </div>
              )}
            </div>

            <div className="walk-chat-footer">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') askAira(activeStop, activeStopWalk, chatInput)
                }}
                placeholder="Ask Aira anything…"
                className="walk-chat-field"
                autoFocus
              />
              <button
                onClick={() => askAira(activeStop, activeStopWalk, chatInput)}
                disabled={!chatInput.trim() || chatBusy}
                className="walk-chat-send"
                style={{ background: activeStop.walkColor }}
                aria-label="Send question"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default WalksMap
