import { useState, useEffect } from 'react'

const STORAGE_KEY = 'namma_lore_favorites'

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch (error) {
      console.error('Error loading favorites:', error)
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
    } catch (error) {
      console.error('Error saving favorites:', error)
    }
  }, [favorites])

  const isFavorite = (type, id) => {
    return favorites.some(fav => fav.type === type && fav.id === id)
  }

  const addFavorite = (type, data) => {
    const newFavorite = {
      id: data.id,
      type,
      data,
      addedAt: new Date().toISOString()
    }
    setFavorites(prev => [...prev, newFavorite])
  }

  const removeFavorite = (type, id) => {
    setFavorites(prev => prev.filter(fav => !(fav.type === type && fav.id === id)))
  }

  const toggleFavorite = (type, data) => {
    if (isFavorite(type, data.id)) {
      removeFavorite(type, data.id)
    } else {
      addFavorite(type, data)
    }
  }

  return {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite
  }
}

