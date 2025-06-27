import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  },
    proxy: {
        '/api': {
        target: 'http://backend:8000',
        changeOrigin: true
        }
    }
});
