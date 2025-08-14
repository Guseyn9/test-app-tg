import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'Cache-Control': 'no-store'
    },
    watch: {
      usePolling: true, // Обновление даже если файловая система не триггерит событие
    },
    hmr: {
      overlay: true // Показывать оверлей ошибок
    }
  }
})
