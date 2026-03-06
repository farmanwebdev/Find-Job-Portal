import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',   // For Vercel deployment

    // ========For GitHub Pages deployment==========//
    //  base: '/Find-Job-Portal/',
})