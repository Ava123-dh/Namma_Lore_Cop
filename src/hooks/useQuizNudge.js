import { useCallback, useEffect, useState } from 'react'

const useQuizNudge = (totalEvents = 0, delayMs = 700) => {
  const [seenIds, setSeenIds] = useState(() => new Set())
  const [showNudge, setShowNudge] = useState(false)
  const [hasFired, setHasFired] = useState(false)

  const markSeen = useCallback((id) => {
    if (!id) return
    setSeenIds((prev) => {
      if (prev.has(id)) return prev
      const next = new Set(prev)
      next.add(id)
      return next
    })
  }, [])

  const hideNudge = useCallback(() => {
    setShowNudge(false)
  }, [])

  useEffect(() => {
    if (hasFired || totalEvents === 0) return undefined
    if (seenIds.size >= totalEvents) {
      const timer = setTimeout(() => {
        setShowNudge(true)
        setHasFired(true)
      }, delayMs)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [seenIds, totalEvents, hasFired, delayMs])

  return { showNudge, markSeen, hideNudge }
}

export default useQuizNudge
