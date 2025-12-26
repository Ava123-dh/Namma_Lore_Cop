# Namma Lore - Karnataka History Learning Platform

A modern, interactive web application designed to make learning the history of Karnataka fun, engaging, and accessible for both students and tourists.

## 🎯 Purpose

Namma Lore bridges cultural education and technology, making history interactive and moving beyond traditional textbooks. The platform provides verified, accessible content where students can deepen their understanding of local history and tourists can discover significant monuments and events.

## ✨ Features

### 🕐 Interactive Timeline
- Explore historical events from ancient times to the modern era
- Filter by different periods (Ancient, Medieval, Modern)
- Click on events to learn detailed information
- Beautiful visual timeline with images and descriptions
- Save favorite events for later reference

### 📚 MCQ Quizzes
- Test your knowledge with 10 curated questions
- Multiple-choice format with instant feedback
- Detailed explanations for each answer
- Track your score and progress
- Review all answers at the end

### 🗺️ Heritage Map
- Interactive map showing historical sites across Karnataka
- Filter by type: UNESCO Sites, Temples, Forts, Palaces
- Click markers to see detailed information
- Get directions to visit locations
- Save favorite places

### 🤖 AI Chatbot
- Ask questions about Karnataka history
- Get instant answers about dynasties, monuments, and rulers
- Quick question suggestions
- Always available to help

### ❤️ Favorites System
- Bookmark historical events and places
- All favorites saved locally in browser
- Easy access to saved content
- Manage and organize your learning journey

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:3000`

### Environment variables & security

- Copy the example env into a local `.env` file and fill in your provider keys. Never commit `.env` or real API keys to the repository.
```bash
cp .env.example .env
# then edit .env and add your real keys
```

- Required environment variables (place in your local `.env`):
  - `GOOGLE_API_KEY` — Google Generative Language / Gemini API key
  - `ANTHROPIC_API_KEY` — Anthropic API key (if you want to use Claude)
  - `PORT` — Optional server port (default `4000`)

- Start the backend proxy (run this in a separate terminal):
```bash
npm run server
```

- Security recommendations:
  - If an API key was exposed, rotate/revoke it immediately from the provider console.
  - Do not commit `.env` or secrets. This repository includes a `.gitignore` entry for `.env`.
  - To remove accidentally committed secrets from the last commit:
```bash
git rm --cached .env
git commit -m "Remove leaked env file"
git push
```
  - To purge secrets from history (use with caution; rewriting history affects collaborators), use `bfg` or `git filter-repo`.


### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling and design
- **React Router** - Navigation
- **Leaflet & React-Leaflet** - Interactive maps
- **Lucide React** - Beautiful icons
- **LocalStorage** - Data persistence

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar
│   └── ChatBot.jsx         # AI assistant
├── context/
│   └── FavoritesContext.jsx # Favorites management
├── pages/
│   ├── Home.jsx            # Landing page
│   ├── Timeline.jsx        # Historical timeline
│   ├── Quiz.jsx            # MCQ quiz section
│   ├── Map.jsx             # Heritage map
│   └── Favorites.jsx       # Saved items
├── App.jsx                 # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles
```

## 🎨 Key Features in Detail

### Timeline
- 15+ historical events from 300 BCE to 1973 CE
- Covers major dynasties: Mauryan, Kadamba, Chalukya, Rashtrakuta, Hoysala, Vijayanagara
- Filter by era with beautiful UI
- Modal view for detailed information
- Save to favorites functionality

### Quiz
- 10 comprehensive questions covering:
  - Dynasties and empires
  - Historical monuments
  - Important rulers and personalities
  - Dates and events
- Instant feedback with explanations
- Score tracking and performance review
- Beautiful result screen with all answers

### Map
- 10+ heritage sites with exact coordinates
- High-quality images and descriptions
- Interactive markers with popups
- Detailed modal view for each site
- Integration with Google Maps for directions
- Filter by category

### ChatBot
- Knowledge base covering major topics
- Natural conversation flow
- Quick question suggestions
- Context-aware responses
- Beautiful chat interface

## 🌟 Design Highlights

- Modern gradient-based color scheme
- Smooth animations and transitions
- Responsive design for all devices
- Card-based layouts
- Beautiful typography
- Intuitive navigation
- Accessibility features

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔄 Future Enhancements

- User accounts and authentication
- More historical content
- Multilingual support (Kannada, English, Hindi)
- Advanced quiz types
- Social sharing features
- Offline mode with PWA
- Virtual tours of monuments
- Audio guides

## 📄 License

This project is created for educational purposes.

## 👥 Contributing

This is an educational project. Feel free to fork and enhance!

## 📞 Support

For questions or feedback, please open an issue on GitHub.

---

Made with ❤️ for Karnataka's rich heritage
