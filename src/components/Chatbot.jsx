import { useState, useRef, useEffect } from 'react'
import { X, Send, MessageCircle } from 'lucide-react'

let CHATBOT_CLAIMED = false

// Mascot image URL - local file in public/images
const MASCOT_SRC = '/images/aira-mascot.png'
const PROMPT_PREFIX = `You are Aira, a peppy, friendly mascot guide for Karnataka history. Keep replies concise but complete (2-4 short sentences), upbeat, and easy to skim. Avoid markdown lists unless the user asks. Keep tone energetic but informative.`

const ChatBot = ({ primary = false }) => {
  const [isActive, setIsActive] = useState(() => {
    if (primary) {
      CHATBOT_CLAIMED = true
      return true
    }
    if (CHATBOT_CLAIMED) return false
    CHATBOT_CLAIMED = true
    return true
  })

  useEffect(() => {
    if (!isActive || primary) return
    return () => {
      CHATBOT_CLAIMED = false
    }
  }, [isActive, primary])

  if (!isActive) return null
  const [isOpen, setIsOpen] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(true)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey hey! I'm Aira, your peppy Karnataka guide. Ask me anything and I'll keep it snappy!",
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')
  const [model, setModel] = useState('gemini-2.5-flash')
  const [isThinking, setIsThinking] = useState(false)
  const [speakingId, setSpeakingId] = useState(1)
  const lastBotIdRef = useRef(messages[0].id)

  // Open chatbot in full-screen immediately
  const handleOpenChat = () => {
    setIsOpen(true)
    setIsFullScreen(true)
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

    // Insert a placeholder bot message while waiting for AI
    const placeholderId = messages.length + 2
    const placeholder = { id: placeholderId, text: 'Thinking...', sender: 'bot', timestamp: new Date() }
    setIsThinking(true)
    setMessages((prev) => [...prev, placeholder])

    // Call backend for AI-generated response. In dev use the backend port directly.
    const baseUrl = import.meta.env.DEV
      ? (import.meta.env.VITE_SERVER_URL || 'http://localhost:4000')
      : ''
    // Call backend proxy for AI-generated response
    fetch(`${baseUrl}/api/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // send `short: true` when NOT full-screen so backend returns concise answers
      body: JSON.stringify({ model, prompt: `${PROMPT_PREFIX}\n\nUser: ${input}\nAira:`, short: false })
    })
      .then(async (r) => {
        if (!r.ok) throw new Error(await r.text())
        return r.json()
      })
      .then((data) => {
        // Strip any asterisks from responses and normalize text
        const raw = (data.text || '')
        const cleaned = raw.replace(/\*/g, '')
        const botMessage = { id: placeholderId, text: cleaned, sender: 'bot', timestamp: new Date() }
        setMessages((prev) => prev.map((m) => (m.id === placeholderId ? botMessage : m)))
        setIsThinking(false)
      })
      .catch((err) => {
        console.error('AI call failed:', err)
        const botMessage = { id: placeholderId, text: `Error: Unable to generate response. ${err.message}`, sender: 'bot', timestamp: new Date() }
        setMessages((prev) => prev.map((m) => (m.id === placeholderId ? botMessage : m)))
        setIsThinking(false)
      })
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  // Scroll to bottom when messages update
  const scrollRef = useRef(null)
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isFullScreen])

  // Keep the mascot "speaking" for a beat whenever a new bot message appears or while thinking
  useEffect(() => {
    let timer
    const botMessages = messages.filter((m) => m.sender === 'bot')
    const latest = botMessages[botMessages.length - 1]
    if (!latest) return () => {}

    if (latest.id !== lastBotIdRef.current || isThinking) {
      lastBotIdRef.current = latest.id
      setSpeakingId(latest.id)
      timer = setTimeout(() => setSpeakingId(null), 1600)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [messages, isThinking])

  const quickQuestions = [
    "Tell me about Hampi",
    "Who was Tipu Sultan?",
    "What is the Hoysala dynasty?",
    "Show me the timeline",
  ]

  const renderBotWords = (text) => {
    const parts = text.split(/(\s+)/)
    return parts.map((part, idx) => {
      if (part.trim() === '') return <span key={`space-${idx}`}>{part}</span>
      return (
        <span
          key={`word-${idx}-${part}`}
          className="word-speak"
          style={{ animationDelay: `${idx * 60}ms` }}
        >
          {part}
        </span>
      )
    })
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={handleOpenChat}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-110 z-[120] flex items-center justify-center pointer-events-auto"
          title="Chat with Aira"
          aria-label="Open Aira chat"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Full-screen Chat Window only */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex bg-gradient-to-br from-blue-50 via-white to-blue-100 m-0 p-0">
          <div className="flex flex-col w-full h-full">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white flex justify-between items-center p-6 shadow-lg">
              <div>
                <h3 className="font-bold text-xl">Aira — Peppy History Buddy</h3>
                <p className="text-xs text-white/80">Short, snappy answers about Karnataka</p>
              </div>
              <div className="flex items-center space-x-3">
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="text-xs rounded-md p-2 bg-white/20 text-white"
                >
                  <option value="gemini-2.5-flash">Gemini 2.5 Flash</option>
                  <option value="gemini-2.5-pro">Gemini 2.5 Pro</option>
                </select>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-10 pb-8 pt-6 space-y-6 w-full">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-end gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender === 'bot' && (() => {
                    const isActiveBot = message.id === speakingId || (isThinking && message.text === 'Thinking...')
                    return (
                      <>
                        <img
                          src={MASCOT_SRC}
                          alt="Aira the mascot"
                          className={`w-24 h-24 object-contain drop-shadow-md mascot-pop ${isActiveBot ? 'mascot-talk' : 'mascot-idle'}`}
                          style={{ marginBottom: '2px' }}
                        />
                        <div className="relative max-w-[76ch] message-reveal">
                          <div className={`bg-white text-gray-900 p-5 rounded-[28px] rounded-tl-[12px] shadow-lg border border-blue-200 ${isActiveBot ? 'speech-pulse-active' : 'speech-pulse-idle'}`}>
                            <p className="text-sm leading-relaxed message-text">
                              {message.text === 'Thinking...' ? (
                                <span className="typing-dots" aria-label="Thinking">
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                </span>
                              ) : (
                                renderBotWords(message.text)
                              )}
                            </p>
                            {/* Speech bubble pointer */}
                            <div className="absolute -left-3 top-6 w-5 h-5 bg-white border-l border-b border-blue-200 transform -rotate-45 rounded-bl-lg"></div>
                          </div>
                        </div>
                      </>
                    )
                  })()}
                  {message.sender === 'user' ? (
                    <div className="bg-primary-500 text-white px-4 py-3 rounded-2xl max-w-[70%] shadow-md text-sm leading-relaxed">
                      {message.text}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="px-10 pb-8 w-full">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask Aira anything about Karnataka history..."
                  className="flex-1 px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                />
                <button
                  onClick={handleSend}
                  className="px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!input.trim()}
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatBot
