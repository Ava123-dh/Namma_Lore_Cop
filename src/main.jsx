import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const baseUrl = import.meta.env.BASE_URL
document.documentElement.style.setProperty('--base-url', baseUrl)
document.documentElement.style.setProperty('--hero-bg-url', `url(${baseUrl}images/karnataka-hero.jpg)`)
document.documentElement.style.setProperty('--aira-mascot-url', `url(${baseUrl}images/aira-mascot.png)`)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
