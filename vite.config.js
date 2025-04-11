import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
// import typography from '@tailwindcss/typography'

export default defineConfig({
  plugins: [react(),
  tailwindcss(),
  ],

  server: {
    proxy: {
      '/api': {

        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  }
})
