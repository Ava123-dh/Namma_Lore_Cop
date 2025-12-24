import { useState } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your Karnataka History assistant. I can help you learn about historical events, dynasties, monuments, and more. What would you like to know?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')

  const knowledgeBase = {
    greetings: [
      "Hello! I'm here to help you learn about Karnataka's fascinating history.",
      "Hi there! Ready to explore Karnataka's heritage?",
      "Namaskara! How can I help you learn about Karnataka today?",
    ],
    dynasties: {
      kadamba: "The Kadamba Dynasty (345-540 CE) was the first native kingdom of Karnataka, founded by Mayurasharma. They established their capital at Banavasi and were the first to use Kannada as an administrative language.",
      chalukya: "The Chalukya Dynasty had two major periods: Early Chalukyas (543-753 CE) with capital at Badami, and Western Chalukyas (973-1189 CE) with capital at Kalyani. They were great patrons of art and architecture.",
      hoysala: "The Hoysala Empire (1026-1343 CE) is renowned for its exquisite temple architecture. Famous temples at Belur, Halebidu, and Somanathapura showcase intricate sculptures and detailed carvings.",
      vijayanagara: "The Vijayanagara Empire (1336-1646 CE) was one of the greatest empires in Indian history. At its peak, the capital at Hampi was one of the largest and most prosperous cities in the world.",
      rashtrakuta: "The Rashtrakuta Empire (753-982 CE) ruled most of the Deccan. They built the magnificent Kailasa temple at Ellora, considered one of the greatest architectural achievements in ancient India.",
    },
    places: {
      hampi: "Hampi is a UNESCO World Heritage Site and was the capital of the Vijayanagara Empire. The ruins include magnificent temples, royal palaces, and ancient bazaars spanning over 4,100 hectares.",
      mysore: "Mysore Palace is the official residence of the Wadiyar dynasty. Built in 1912, it's an architectural marvel blending Hindu, Muslim, Rajput, and Gothic styles.",
      badami: "Badami was the capital of the Early Chalukyas. The rock-cut cave temples here showcase ancient Indian architecture with four main caves dedicated to Hindu and Jain faiths.",
      belur: "Belur's Chennakeshava Temple is a masterpiece of Hoysala architecture built in 1117 CE to commemorate victory over the Cholas. It features intricate sculptures and detailed carvings.",
      halebidu: "Halebidu was the capital of the Hoysala Empire. The Hoysaleswara Temple here is famous for its exquisite sculptures depicting Hindu mythology and daily life.",
    },
    figures: {
      tipu: "Tipu Sultan (1751-1799), known as the 'Tiger of Mysore,' was a brave ruler who resisted British colonialism. He promoted science, technology, and trade, and was one of the few Indian rulers to defeat the British in battle.",
      krishnadevaraya: "Krishnadevaraya (1509-1529) was the greatest ruler of the Vijayanagara Empire. Under his rule, the empire reached its zenith in military power, wealth, and cultural achievements.",
      pampa: "Pampa (902-975 CE), known as 'Adikavi' (First Poet), is one of the greatest Kannada poets. His work Vikramarjuna Vijaya laid the foundation for classical Kannada literature.",
    },
  }

  const generateResponse = (userMessage) => {
    const message = userMessage.toLowerCase()

    // Greetings
    if (message.match(/^(hi|hello|hey|namaste|namaskara)/)) {
      return knowledgeBase.greetings[Math.floor(Math.random() * knowledgeBase.greetings.length)]
    }

    // Dynasties
    if (message.includes('kadamba')) return knowledgeBase.dynasties.kadamba
    if (message.includes('chalukya')) return knowledgeBase.dynasties.chalukya
    if (message.includes('hoysala')) return knowledgeBase.dynasties.hoysala
    if (message.includes('vijayanagara') || message.includes('vijayanagar')) return knowledgeBase.dynasties.vijayanagara
    if (message.includes('rashtrakuta')) return knowledgeBase.dynasties.rashtrakuta

    // Places
    if (message.includes('hampi')) return knowledgeBase.places.hampi
    if (message.includes('mysore palace')) return knowledgeBase.places.mysore
    if (message.includes('badami')) return knowledgeBase.places.badami
    if (message.includes('belur')) return knowledgeBase.places.belur
    if (message.includes('halebidu') || message.includes('halebid')) return knowledgeBase.places.halebidu

    // Historical Figures
    if (message.includes('tipu sultan') || message.includes('tipu')) return knowledgeBase.figures.tipu
    if (message.includes('krishnadevaraya') || message.includes('krishna devaraya')) return knowledgeBase.figures.krishnadevaraya
    if (message.includes('pampa')) return knowledgeBase.figures.pampa

    // General questions
    if (message.includes('quiz') || message.includes('test')) {
      return "I'd love to help you test your knowledge! Visit our Quiz section to take an interactive quiz about Karnataka's history. You can navigate there from the menu."
    }
    if (message.includes('timeline')) {
      return "Check out our Interactive Timeline to explore Karnataka's history from ancient times to the modern era. You can filter by different periods and save your favorite events!"
    }
    if (message.includes('map') || message.includes('places') || message.includes('visit')) {
      return "Visit our Heritage Map to discover historical monuments and sites across Karnataka. You can find places near you and get directions to visit them!"
    }
    if (message.includes('favorite') || message.includes('save')) {
      return "You can save any historical event or place to your Favorites by clicking the heart icon. Access all your saved items from the Favorites section in the menu."
    }

    // Default responses
    const defaultResponses = [
      "That's an interesting question! I can tell you about dynasties like Chalukya, Hoysala, and Vijayanagara, or places like Hampi, Mysore Palace, and Badami. What would you like to know?",
      "I'm here to help! You can ask me about historical dynasties, famous monuments, important rulers, or use our Timeline, Quiz, and Map features to learn more.",
      "I'd love to help you learn about Karnataka's history! Try asking about specific dynasties (like Hoysala or Vijayanagara), monuments (like Hampi or Mysore Palace), or historical figures (like Tipu Sultan).",
    ]
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages([...messages, userMessage])
    setInput('')

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: generateResponse(input),
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const quickQuestions = [
    "Tell me about Hampi",
    "Who was Tipu Sultan?",
    "What is the Hoysala dynasty?",
    "Show me the timeline",
  ]

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-110 z-40 flex items-center justify-center"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-2rem)] bg-white rounded-2xl shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-bold">History Assistant</h3>
                <p className="text-xs text-white/80">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`flex items-start space-x-2 max-w-[80%] ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user'
                        ? 'bg-primary-500'
                        : 'bg-gradient-to-br from-primary-500 to-primary-600'
                    }`}
                  >
                    {message.sender === 'user' ? (
                      <User size={18} className="text-white" />
                    ) : (
                      <Bot size={18} className="text-white" />
                    )}
                  </div>
                  <div
                    className={`p-3 rounded-xl ${
                      message.sender === 'user'
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setInput(question)
                      setTimeout(() => handleSend(), 100)
                    }}
                    className="text-xs px-3 py-2 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about Karnataka history..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!input.trim()}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatBot
