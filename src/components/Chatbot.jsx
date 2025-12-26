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
  // Default to Gemini 2.5 Flash (Google Generative Language API - has free tier)
  const [model, setModel] = useState('gemini-2.5-flash')
  const [isFullScreen, setIsFullScreen] = useState(false)

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
    setMessages((prev) => [...prev, placeholder])

    // Call backend for AI-generated response. In dev use the backend port directly.
    const baseUrl = import.meta.env.DEV ? 'http://localhost:4000' : ''
    // Call backend proxy for AI-generated response
    fetch(`${baseUrl}/api/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // send `short: true` when NOT full-screen so backend returns concise answers
      body: JSON.stringify({ model, prompt: input, short: !isFullScreen })
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
      })
      .catch((err) => {
        console.error('AI call failed:', err)
        const botMessage = { id: placeholderId, text: `Error: Unable to generate response. ${err.message}`, sender: 'bot', timestamp: new Date() }
        setMessages((prev) => prev.map((m) => (m.id === placeholderId ? botMessage : m)))
      })
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
        <div
          className={
            `fixed z-50 flex flex-col bg-white shadow-2xl ` +
            (isFullScreen
              ? 'inset-0 m-0 p-6 rounded-none'
              : 'bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-2rem)] rounded-2xl')
          }
        >
          {/* Header */}
          <div className={`bg-gradient-to-r from-primary-500 to-primary-600 text-white flex justify-between items-center ${isFullScreen ? 'p-6 rounded-none' : 'p-4 rounded-t-2xl'}`}>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={24} />
              </div>
              <div>
                <h3 className="font-bold">History Assistant</h3>
                <p className="text-xs text-white/80">Always here to help</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsFullScreen((s) => !s)}
                className="text-xs px-2 py-1 bg-white/20 rounded-md hover:bg-white/30"
                title={isFullScreen ? 'Exit full screen' : 'Full screen (longer answers)'}
              >
                {isFullScreen ? 'Exit' : 'Full'}
              </button>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="text-xs rounded-md p-1 bg-white/20 text-white"
                title="Choose between Gemini (free) or Claude (paid)"
              >
                <option value="gemini-2.5-flash">Gemini 2.5 Flash (Free)</option>
                <option value="gemini-2.5-pro">Gemini 2.5 Pro (Free)</option>
                <option value="claude-haiku-4.5">Claude Haiku 4.5</option>
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
          <div className={`flex-1 overflow-y-auto ${isFullScreen ? 'p-6 space-y-6' : 'p-4 space-y-4'}`}>
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
          <div className={`${isFullScreen ? 'p-6 border-t border-gray-200' : 'p-4 border-t border-gray-200'}`}>
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
