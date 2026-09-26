/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        karnataka: {
          red: '#DC143C',
          yellow: '#FFD700',
        },
        // Paper palette shared with the landing page: `cream` is the page
        // surface, `cream-50` the card sitting on top of it, `cream-200` the
        // hairline between them.
        cream: {
          DEFAULT: '#fdf4e3',
          50: '#fffbf0',
          100: '#fdf4e3',
          200: '#f5e8d1',
          300: '#ecdab9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Bagel Fat One', 'Fredoka', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
