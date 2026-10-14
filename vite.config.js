import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: './' hace que funcione en GitHub Pages tanto en
// MaicolDSC.github.io como en MaicolDSC.github.io/portafolio
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
})
