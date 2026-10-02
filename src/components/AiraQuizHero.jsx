// ---------------------------------------------------------------------------
// Quiz opening screen.
//
// One screen, no scrolling: Aira sits in the middle of a badge, the title
// curls around her on two arcs, and the stickers are scattered over the
// background as though someone slapped them on.
// ---------------------------------------------------------------------------

// Hand-placed rather than randomised so nothing ever lands on Aira or on the
// chat button in the bottom-right corner. The rotations do the "stuck on in a
// hurry" work.
const STICKERS = [
  {
    file: 'auto.png',
    alt: 'Auto rickshaw',
    pos: { top: '5%', left: '5%' },
    size: 'clamp(118px, 18vw, 250px)',
    rotate: -14,
    delay: '0s',
  },
  {
    file: 'glass-house.png',
    alt: 'Lalbagh Glass House',
    pos: { top: '2%', right: '10%' },
    size: 'clamp(128px, 20vw, 278px)',
    rotate: 7,
    delay: '0.6s',
  },
  {
    file: 'dosa.png',
    alt: 'Masala dosa',
    pos: { top: '37%', left: '1%' },
    size: 'clamp(108px, 16vw, 224px)',
    rotate: 18,
    delay: '1.2s',
    hideOnPhone: true,
  },
  {
    file: 'filter-coffee.png',
    alt: 'Filter coffee',
    pos: { top: '29%', right: '2%' },
    size: 'clamp(98px, 14vw, 204px)',
    rotate: -19,
    delay: '0.3s',
    hideOnPhone: true,
  },
  {
    file: 'fort.png',
    alt: 'Chitradurga fort',
    pos: { bottom: '3%', left: '11%' },
    size: 'clamp(124px, 19vw, 264px)',
    rotate: 5,
    delay: '0.9s',
  },
  {
    file: 'vidhana-soudha.png',
    alt: 'Vidhana Soudha',
    pos: { bottom: '16%', right: '6%' },
    // On a phone the Start button reaches further right than the badge does,
    // so this one drops into the bottom band beside the fort.
    phonePos: { bottom: '4%', right: '21%' },
    size: 'clamp(118px, 18vw, 254px)',
    rotate: -9,
    delay: '1.5s',
  },
]

// viewBox geometry for the badge. Both arcs run left-to-right across the same
// circle: sweep 1 goes over the top (letters upright), sweep 0 goes under the
// bottom (letters facing in), which is how a seal reads.
const BOX = 420
const C = BOX / 2
const R = 168
const ARC_TOP = `M ${C - R},${C} A ${R},${R} 0 0 1 ${C + R},${C}`
const ARC_BOTTOM = `M ${C - R},${C} A ${R},${R} 0 0 0 ${C + R},${C}`

const AiraQuizHero = ({ baseUrl, onStart }) => (
  <section className="quiz-open">
    <div className="quiz-open-stickers" aria-hidden="true">
      {STICKERS.map((sticker) => (
        <img
          key={sticker.file}
          src={`${baseUrl}images/stickers/${sticker.file}`}
          alt=""
          data-sticker={sticker.file.replace('.png', '')}
          className={`quiz-sticker${sticker.hideOnPhone ? ' quiz-sticker-wide' : ''}`}
          style={{
            // Position goes through custom properties rather than top/left
            // directly: an inline top/right would outrank the stylesheet, so
            // the phone layout below could never move a sticker.
            '--s-top': sticker.pos.top,
            '--s-right': sticker.pos.right,
            '--s-bottom': sticker.pos.bottom,
            '--s-left': sticker.pos.left,
            '--s-top-phone': sticker.phonePos?.top,
            '--s-right-phone': sticker.phonePos?.right,
            '--s-bottom-phone': sticker.phonePos?.bottom,
            '--s-left-phone': sticker.phonePos?.left,
            '--sticker-size': sticker.size,
            '--sticker-rotate': `${sticker.rotate}deg`,
            '--sticker-delay': sticker.delay,
          }}
        />
      ))}
    </div>

    <div className="quiz-open-inner">
      <h1 className="sr-only">Karnataka history quiz — ten questions, ten minutes</h1>

      <div className="quiz-badge">
        <svg className="quiz-badge-ring" viewBox={`0 0 ${BOX} ${BOX}`} aria-hidden="true">
          <defs>
            <path id="quizArcTop" d={ARC_TOP} fill="none" />
            <path id="quizArcBottom" d={ARC_BOTTOM} fill="none" />
          </defs>

          {/* Cream disc so Aira, who is pale blue, has something to sit on */}
          <circle cx={C} cy={C} r="133" className="quiz-badge-disc" />

          <text className="quiz-arc quiz-arc-top">
            <textPath href="#quizArcTop" startOffset="50%" textAnchor="middle">
              HISTORY QUIZ
            </textPath>
          </text>
          <text className="quiz-arc quiz-arc-bottom">
            <textPath href="#quizArcBottom" startOffset="50%" textAnchor="middle">
              10 QUESTIONS · 10 MINUTES
            </textPath>
          </text>

          {/* Full stops where the two arcs meet */}
          <circle cx={C - R - 4} cy={C} r="7" className="quiz-badge-dot" />
          <circle cx={C + R + 4} cy={C} r="7" className="quiz-badge-dot" />
        </svg>

        <img
          src={`${baseUrl}images/aira-mascot.png`}
          alt="Aira, the Namma Lore elephant"
          className="quiz-badge-aira"
        />
      </div>

      <button type="button" onClick={onStart} className="quiz-start-btn">
        Start the quiz
      </button>
    </div>
  </section>
)

export default AiraQuizHero
