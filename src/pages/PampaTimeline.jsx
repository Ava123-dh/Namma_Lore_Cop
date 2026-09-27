import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Calendar } from 'lucide-react'
import { useFavorites } from '../context/FavoritesContext'
import ChatBot from '../components/Chatbot'
import HoverExpandTimeline from '../components/HoverExpandTimeline'
import AiraQuizNudge from '../components/AiraQuizNudge'
import useQuizNudge from '../hooks/useQuizNudge'

const PampaTimeline = () => {
  const navigate = useNavigate()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [expandedEvent, setExpandedEvent] = useState(null)

  const events = [
    {
      id: 'p-1',
      year: 'c. 902-955 CE',
      title: "Pampa's Vikramarjuna Vijaya",
      subtitle: 'Classical Kannada literature',
      fullText: "Pampa (c. 902-955 CE), revered as the Adikavi or pioneer poet of Kannada, composed two masterworks in the ornate champu (mixed prose-and-verse) style. His Vikramarjuna Vijaya - popularly the 'Pampa Bharata' - recast the Mahabharata to glorify his patron, the Vemulavada Chalukya chief Arikesari II, while his Jain Adipurana (completed in 941 CE) told the life of the first Tirthankara. With Ponna and Ranna he is counted among the 'three gems' of classical Kannada.",
      category: 'Arts',
      highlights: [
        "Pampa lived c. 902-955 CE",
        "Revered as the Adikavi, pioneer poet of Kannada",
        "Wrote the Vikramarjuna Vijaya ('Pampa Bharata')",
        "Also composed the Jain Adipurana (941 CE)",
        "Court poet of the Vemulavada Chalukya Arikesari II",
        "One of the 'three gems' with Ponna and Ranna",
      ],
      image: '/images/pampa/pampa-1-statue.png',
      sources: [{ label: 'Wikipedia — Pampa (poet)', url: 'https://en.wikipedia.org/wiki/Pampa_(poet)' }],
    },
  ]

  const { showNudge, markSeen, hideNudge } = useQuizNudge(events.length)

  const handleToggleEvent = (eventId) => {
    const next = expandedEvent === eventId ? null : eventId
    setExpandedEvent(next)
    if (next === eventId) markSeen(eventId)
  }

  const parentEvent = { id: 'evt6', title: "Pampa's Vikramarjuna Vijaya", year: '1000 CE' }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate('/timeline')} className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8"><ArrowLeft size={20} />Back to Timeline</button>

        <div className="mb-12">
          <div className="text-primary-600 font-bold text-sm mb-2">DETAILED HISTORY</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{parentEvent.title}</h1>
          <p className="text-xl text-gray-600">The literary milestone of Pampa and its role in Kannada culture.</p>
        </div>

        <HoverExpandTimeline events={events} onOpen={markSeen} />

        <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl border border-primary-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">About Pampa</h3>
          <p className="text-gray-700 leading-relaxed">Adikavi Pampa is celebrated as one of Kannada literature's earliest and greatest poets.</p>
        </div>

        <div className="mt-8 p-6 bg-cream-50 rounded-lg border border-gray-200">
          <h4 className="font-bold text-lg mb-3">Explore more</h4>
          <ul className="list-disc pl-5 text-primary-700"><li><a href="https://en.wikipedia.org/wiki/Pampa_(poet)" target="_blank" rel="noreferrer" className="underline">Pampa — Wikipedia</a></li></ul>
        </div>
      </div>
      <AiraQuizNudge show={showNudge} onClose={hideNudge} />
      <ChatBot />
    </div>
  )
}

export default PampaTimeline
