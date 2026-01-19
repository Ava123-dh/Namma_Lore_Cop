import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Namma_Lore_Cop/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})

