import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
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
