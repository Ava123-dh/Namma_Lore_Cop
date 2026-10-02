import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', path: '/', kn: 'ಮುಖಪುಟ' },
  { name: 'Timeline', path: '/timeline', kn: 'ಕಾಲರೇಖೆ' },
  { name: 'Quiz', path: '/quiz', kn: 'ಪ್ರಶ್ನೋತ್ತರ' },
  { name: 'Map', path: '/map', kn: 'ನಕ್ಷೆ' },
  { name: "B'lore Walks", path: '/walks', kn: 'ಬೆಂಗಳೂರು ನಡಿಗೆ' },
  { name: 'Favorites', path: '/favorites', kn: 'ಇಷ್ಟಗಳು' },
  { name: 'Contact', path: '/contact', kn: 'ಸಂಪರ್ಕ' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>
          {/* The wordmark is inside the artwork, so the link carries the name
              for anyone who can't see it */}
          <img
            src={`${import.meta.env.BASE_URL}images/nammalore-logo.svg?v=2`}
            alt="Namma Lore"
            className="nav-logo-mark"
          />
        </Link>

        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link${isActive(item.path) ? ' nav-link-active' : ''}`}
            >
              {/* Two lines stacked in a one-line window: hovering rolls the
                  English up and the Kannada in. The column takes the width of
                  the wider of the two, so nothing shifts as it turns. */}
              <span className="nav-roll">
                <span className="nav-roll-track">
                  <span className="nav-roll-item">{item.name}</span>
                  <span className="nav-roll-item nav-roll-kn">{item.kn}</span>
                </span>
              </span>
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="nav-toggle"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="nav-sheet">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`nav-sheet-link${isActive(item.path) ? ' nav-sheet-link-active' : ''}`}
            >
              <span>{item.name}</span>
              <span className="nav-sheet-kn">{item.kn}</span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
