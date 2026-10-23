// ---------------------------------------------------------------------------
// Spin-the-wheel quiz picker. One slice per quiz; the pointer sits at the top,
// so the slice that stops under it is the quiz you get.
// ---------------------------------------------------------------------------

import { useRef, useState } from 'react'

const BOX = 400
const C = BOX / 2
const R = 190

// Angles run clockwise from 12 o'clock, in degrees.
const point = (deg, r) => {
  const rad = (deg * Math.PI) / 180
  return [C + r * Math.sin(rad), C - r * Math.cos(rad)]
}

const slicePath = (from, to) => {
  const [x1, y1] = point(from, R)
  const [x2, y2] = point(to, R)
  return `M ${C},${C} L ${x1},${y1} A ${R},${R} 0 0 1 ${x2},${y2} Z`
}

const QuizWheel = ({ quizzes, onPicked }) => {
  const slice = 360 / quizzes.length
  const [rotation, setRotation] = useState(0)
  const [spinning, setSpinning] = useState(false)
  const [picked, setPicked] = useState(null)
  const pendingRef = useRef(null)

  const spin = () => {
    if (spinning) return
    const index = Math.floor(Math.random() * quizzes.length)
    // Land somewhere inside the slice, not dead centre, so it feels random.
    const jitter = (Math.random() - 0.5) * slice * 0.7
    const target = (360 - (index * slice + slice / 2) + jitter + 360) % 360
    const current = ((rotation % 360) + 360) % 360
    const delta = (target - current + 360) % 360
    pendingRef.current = index
    setPicked(null)
    setSpinning(true)
    setRotation(rotation + 360 * 5 + delta)
  }

  const handleSpinEnd = (e) => {
    if (e.target !== e.currentTarget || pendingRef.current === null) return
    setSpinning(false)
    setPicked(pendingRef.current)
    pendingRef.current = null
  }

  const quiz = picked !== null ? quizzes[picked] : null

  return (
    <section className="quiz-open quiz-wheel-screen">
      <div className="quiz-open-inner">
        <h1 className="quiz-wheel-title">Spin for your quiz</h1>

        <div className="quiz-wheel">
          <div className="quiz-wheel-pointer" aria-hidden="true" />
          <svg
            className="quiz-wheel-disc"
            viewBox={`0 0 ${BOX} ${BOX}`}
            style={{ transform: `rotate(${rotation}deg)` }}
            onTransitionEnd={handleSpinEnd}
            aria-hidden="true"
          >
            {quizzes.map((q, i) => {
              const from = i * slice
              const mid = from + slice / 2
              const [lx, ly] = point(mid, R * 0.6)
              return (
                <g key={q.id}>
                  <path d={slicePath(from, from + slice)} fill={q.color} className="quiz-wheel-slice" />
                  <text
                    x={lx}
                    y={ly}
                    transform={`rotate(${mid} ${lx} ${ly})`}
                    textAnchor="middle"
                    className="quiz-wheel-label"
                  >
                    <tspan x={lx} dy="-0.2em">{q.short[0]}</tspan>
                    <tspan x={lx} dy="1.15em">{q.short[1]}</tspan>
                  </text>
                </g>
              )
            })}
            <circle cx={C} cy={C} r={R} className="quiz-wheel-rim" />
          </svg>
          <button
            type="button"
            className="quiz-wheel-hub"
            onClick={spin}
            disabled={spinning}
          >
            {spinning ? '…' : 'SPIN'}
          </button>
        </div>

        <div className="quiz-wheel-result" aria-live="polite">
          {quiz ? (
            <>
              <p className="quiz-wheel-picked">
                The wheel picked <span style={{ color: quiz.color }}>{quiz.title}</span>
              </p>
              <button type="button" className="quiz-start-btn" onClick={() => onPicked(picked)}>
                Start this quiz
              </button>
            </>
          ) : (
            <p className="quiz-wheel-hint">
              {spinning ? 'Round and round it goes…' : 'Five quizzes. Tap SPIN and let the wheel choose.'}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default QuizWheel
