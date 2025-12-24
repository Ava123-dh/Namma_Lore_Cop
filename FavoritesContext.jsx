import { createContext, useContext, useState, useEffect } from 'react'

const FavoritesContext = createContext()

export const useFavorites = () => {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites must be used within FavoritesProvider')
  }
  return context
}

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('nammaLoreFavorites')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('nammaLoreFavorites', JSON.stringify(favorites))
  }, [favorites])

  const addFavorite = (item) => {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.id === item.id)) {
        return prev
      }
      return [...prev, { ...item, addedAt: new Date().toISOString() }]
    })
  }

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== id))
  }

  const isFavorite = (id) => {
    return favorites.some((fav) => fav.id === id)
  }

  const toggleFavorite = (item) => {
    if (isFavorite(item.id)) {
      removeFavorite(item.id)
    } else {
      addFavorite(item)
    }
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

