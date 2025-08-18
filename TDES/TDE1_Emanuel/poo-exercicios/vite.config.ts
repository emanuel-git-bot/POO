import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: [],
    },
  },
  optimizeDeps: {
    include: [],
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
}); 