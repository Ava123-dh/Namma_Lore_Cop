import { useNavigate } from 'react-router-dom'

const AiraQuizNudge = ({ show, onClose, bubbleSrc = '/images/aira-bubble.png', mascotSrc = '/images/aira-mascot.png' }) => {
  const navigate = useNavigate()
  if (!show) return null

  const handleQuiz = () => {
    navigate('/quiz')
    if (onClose) onClose()
  }

  return (
    <div className="aira-nudge fixed bottom-6 right-3 md:bottom-10 md:right-10 z-50">
      <div className="aira-nudge-inner">
        <img src={mascotSrc} alt="Aira the mascot" className="aira-nudge-mascot" />
        <div className="aira-bubble-wrapper">
          <img src={bubbleSrc} alt="Speech bubble" className="aira-bubble-img" />
          <div className="aira-bubble-text">psstt do you want to take a quiz!</div>
        </div>
      </div>
      <div className="aira-nudge-actions">
        <button className="aira-nudge-primary" onClick={handleQuiz}>Yes!</button>
        <button className="aira-nudge-secondary" onClick={onClose}>Maybe later</button>
      </div>
    </div>
  )
}

export default AiraQuizNudge
