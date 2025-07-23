import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://marketing-crawlers.onrender.com', // backend server
        changeOrigin: true,
        secure: false,
      },
      '/uploads': 'https://marketing-crawlers.onrender.com',
    },
  },
})
