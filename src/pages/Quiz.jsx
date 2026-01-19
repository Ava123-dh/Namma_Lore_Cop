import { useState } from 'react'
import { Trophy, Clock, RotateCcw, CheckCircle, XCircle, Award } from 'lucide-react'
import ChatBot from '../components/Chatbot'

const Quiz = () => {
  const baseUrl = import.meta.env.BASE_URL
  const [started, setStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [answers, setAnswers] = useState([])
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutes

  const airaMascot = `${baseUrl}images/aira-mascot.png`
  const airaBadge = `${baseUrl}images/aira-bubble.png`

  const questions = [
    {
      id: 1,
      question: 'Who founded the Kadamba Dynasty, the first native kingdom of Karnataka?',
      options: ['Mayurasharma', 'Pulakeshin I', 'Harihara I', 'Vishnuvardhana'],
      correct: 0,
      explanation: 'Mayurasharma founded the Kadamba dynasty around 345 CE, establishing the first native kingdom in Karnataka with Banavasi as its capital.'
    },
    {
      id: 2,
      question: 'Which UNESCO World Heritage Site was built by the Rashtrakutas?',
      options: ['Hampi', 'Kailasa Temple at Ellora', 'Belur Temple', 'Badami Caves'],
      correct: 1,
      explanation: 'The Kailasa Temple at Ellora is a magnificent rock-cut temple built by the Rashtrakuta king Krishna I in the 8th century.'
    },
    {
      id: 3,
      question: 'In which year was Karnataka state officially formed?',
      options: ['1947', '1950', '1956', '1973'],
      correct: 2,
      explanation: 'Karnataka was formed on November 1, 1956, following the States Reorganisation Act, initially called Mysore State.'
    },
    {
      id: 4,
      question: 'Who is known as "Adikavi" (First Poet) in Kannada literature?',
      options: ['Ranna', 'Pampa', 'Ponna', 'Basavanna'],
      correct: 1,
      explanation: 'Pampa is called "Adikavi" and is considered one of the greatest Kannada poets. His work Vikramarjuna Vijaya is a masterpiece.'
    },
    {
      id: 5,
      question: 'Which empire had Hampi as its capital?',
      options: ['Chalukya Empire', 'Hoysala Empire', 'Vijayanagara Empire', 'Rashtrakuta Empire'],
      correct: 2,
      explanation: 'The Vijayanagara Empire, founded in 1336 CE, had Hampi as its magnificent capital, which was one of the largest cities in the world at its peak.'
    },
    {
      id: 6,
      question: 'The Battle of Talikota in 1565 led to the decline of which empire?',
      options: ['Chalukya', 'Hoysala', 'Vijayanagara', 'Rashtrakuta'],
      correct: 2,
      explanation: 'The Battle of Talikota resulted in the defeat of the Vijayanagara Empire by the allied Deccan Sultanates, leading to its eventual decline.'
    },
    {
      id: 7,
      question: 'Tipu Sultan was also known as:',
      options: ['Lion of Mysore', 'Tiger of Mysore', 'Eagle of Mysore', 'Falcon of Mysore'],
      correct: 1,
      explanation: 'Tipu Sultan was called the "Tiger of Mysore" for his fierce resistance against British colonialism and his valor in battle.'
    },
    {
      id: 8,
      question: 'Which dynasty is known for the exquisite temples at Belur and Halebidu?',
      options: ['Chalukya', 'Hoysala', 'Kadamba', 'Ganga'],
      correct: 1,
      explanation: 'The Hoysala dynasty is renowned for its intricate temple architecture, particularly the magnificent temples at Belur, Halebidu, and Somanathapura.'
    },
    {
      id: 9,
      question: 'When was Mysore State renamed as Karnataka?',
      options: ['1956', '1965', '1973', '1980'],
      correct: 2,
      explanation: 'Mysore State was officially renamed Karnataka on November 1, 1973, meaning "lofty land" in Kannada.'
    },
    {
      id: 10,
      question: 'Which was the capital of the Kadamba dynasty?',
      options: ['Badami', 'Banavasi', 'Hampi', 'Halebidu'],
      correct: 1,
      explanation: 'Banavasi was the capital of the Kadamba dynasty and is one of the oldest towns in Karnataka with a rich historical heritage.'
    }
  ]

  const startQuiz = () => {
    setStarted(true)
    setCurrentQuestion(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setAnswers([])
    setTimeLeft(600)
  }

  const handleAnswer = (index) => {
    if (selectedAnswer !== null) return
    
    setSelectedAnswer(index)
    const isCorrect = index === questions[currentQuestion].correct
    
    if (isCorrect) {
      setScore(score + 1)
    }
    
    setAnswers([...answers, { question: currentQuestion, selected: index, correct: isCorrect }])
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setShowResult(true)
    }
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage === 100) return { text: 'Perfect! You\'re a Karnataka history expert! 🎉', color: 'text-green-600' }
    if (percentage >= 80) return { text: 'Excellent! You know your history well! 🌟', color: 'text-green-600' }
    if (percentage >= 60) return { text: 'Good job! Keep learning! 👍', color: 'text-blue-600' }
    if (percentage >= 40) return { text: 'Not bad! There\'s room for improvement! 📚', color: 'text-orange-600' }
    return { text: 'Keep practicing! History is fascinating! 💪', color: 'text-red-600' }
  }

  if (!started) {
    return (
      <div className="quiz-shell min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="quiz-hero aira-hero">
            <div className="aira-hero-copy">
              <div className="aira-chip">Aira-approved challenge</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                Karnataka History Quiz
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
                Test your knowledge, earn bragging rights, and learn with Aira by your side.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 text-sm font-semibold text-gray-700">
                <span className="pill-soft">10 curated questions</span>
                <span className="pill-soft">Timer: 10 mins</span>
                <span className="pill-soft">Explanations included</span>
              </div>
            </div>
            <div className="aira-hero-mascot">
              <img src={airaMascot} alt="Aira cheering" className="aira-hero-img" />
              <div className="aira-stamp">Cheer Squad</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 quiz-panel">
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Trophy className="text-primary-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">10 Questions</h3>
                  <p className="text-sm text-gray-600">Multiple choice questions about Karnataka history</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">10 Minutes</h3>
                  <p className="text-sm text-gray-600">Complete the quiz within the time limit</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Award className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Track Your Score</h3>
                  <p className="text-sm text-gray-600">Get instant feedback and learn from explanations</p>
                </div>
              </div>
            </div>

            <button
              onClick={startQuiz}
              className="w-full btn-primary text-lg shine-button"
            >
              Start Quiz
            </button>
          </div>
        </div>
        <ChatBot />
      </div>
    )
  }

  if (showResult) {
    const scoreMessage = getScoreMessage()
    
    return (
      <div className="quiz-shell min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center quiz-panel">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-6">
              <Trophy className="text-white" size={48} />
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quiz Completed!</h2>
            <p className={`text-2xl font-semibold mb-8 ${scoreMessage.color}`}>
              {scoreMessage.text}
            </p>
            
            <div className="bg-gradient-to-br from-primary-50 to-orange-50 rounded-xl p-8 mb-8 relative overflow-hidden">
              <div className="aira-confetti"></div>
              <div className="text-6xl font-bold text-primary-600 mb-2">
                {score}/{questions.length}
              </div>
              <div className="text-xl text-gray-700">
                You answered {score} out of {questions.length} questions correctly
              </div>
              <div className="text-lg text-gray-600 mt-2">
                Score: {Math.round((score / questions.length) * 100)}%
              </div>
            </div>

            <div className="space-y-4 mb-8 text-left">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Review Your Answers</h3>
              {questions.map((question, index) => {
                const userAnswer = answers.find(a => a.question === index)
                return (
                  <div key={question.id} className="bg-gray-50 rounded-lg p-4 quiz-review-card">
                    <div className="flex items-start space-x-3 mb-2">
                      {userAnswer?.correct ? (
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                      ) : (
                        <XCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
                      )}
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 mb-2">{question.question}</p>
                        <p className="text-sm text-gray-600 mb-1">
                          Your answer: <span className={userAnswer?.correct ? 'text-green-600' : 'text-red-600'}>
                            {question.options[userAnswer?.selected]}
                          </span>
                        </p>
                        {!userAnswer?.correct && (
                          <p className="text-sm text-gray-600 mb-2">
                            Correct answer: <span className="text-green-600">{question.options[question.correct]}</span>
                          </p>
                        )}
                        <p className="text-sm text-gray-700 italic">{question.explanation}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex gap-4">
              <button
                onClick={startQuiz}
                className="flex-1 btn-primary shine-button"
              >
                <RotateCcw size={20} className="inline mr-2" />
                Try Again
              </button>
              <button
                onClick={() => setStarted(false)}
                className="flex-1 btn-secondary"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
        <ChatBot />
      </div>
    )
  }

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  const getCheer = () => {
    if (selectedAnswer === null) return 'Try this one—Aira is cheering for you!'
    const correct = selectedAnswer === question.correct
    if (correct) return 'Boom! Trumpets up—great job!'
    return 'Close! Aira says keep going, you got this.'
  }

  const showCornerAira = selectedAnswer !== null && selectedAnswer !== question.correct

  return (
    <div className="quiz-shell min-h-screen py-12">
      {showCornerAira && (
        <div className="aira-flyer" aria-hidden="true" key={`fly-${currentQuestion}-${selectedAnswer}`}>
          <img src={airaMascot} alt="Aira cheering" className="aira-flyer-mascot" />
          <div className="aira-flyer-inner">
            <img src={airaBadge} alt="Aira speech bubble" className="aira-flyer-bubble" />
            <div className="aira-flyer-text">{getCheer()}</div>
          </div>
        </div>
      )}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-semibold text-gray-600">
              Score: {score}/{currentQuestion + (selectedAnswer !== null ? 1 : 0)}
            </span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 quiz-panel question-panel">
          <div className="flex flex-col gap-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {question.question}
            </h2>
            <div className="aira-cheer-inline">
              <div className="aira-cheer aira-cheer-pop">
                <img src={airaMascot} alt="Aira cheering" className="aira-cheer-img" />
                <div className="aira-cheer-bubble">{getCheer()}</div>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrect = index === question.correct
              const showAnswer = selectedAnswer !== null

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full text-left p-6 rounded-xl font-semibold transition-all duration-300 quiz-option ${
                    !showAnswer
                      ? 'bg-gray-50 hover:bg-primary-50 hover:border-primary-500 border-2 border-gray-200'
                      : isSelected && isCorrect
                      ? 'bg-green-100 border-2 border-green-500 text-green-800'
                      : isSelected && !isCorrect
                      ? 'bg-red-100 border-2 border-red-500 text-red-800'
                      : isCorrect
                      ? 'bg-green-100 border-2 border-green-500 text-green-800'
                      : 'bg-gray-50 border-2 border-gray-200 text-gray-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showAnswer && isCorrect && (
                      <CheckCircle className="text-green-600" size={24} />
                    )}
                    {showAnswer && isSelected && !isCorrect && (
                      <XCircle className="text-red-600" size={24} />
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {selectedAnswer !== null && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6 aira-tip">
              <div className="aira-tip-head">Aira says</div>
              <p className="text-gray-800">{question.explanation}</p>
            </div>
          )}

          {selectedAnswer !== null && (
            <button
              onClick={nextQuestion}
              className="w-full btn-primary"
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          )}
        </div>
      </div>
      <ChatBot />
    </div>
  )
}

export default Quiz
