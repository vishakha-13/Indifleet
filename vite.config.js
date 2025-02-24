import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Fix for __dirname in Vite (ESM environment)
const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Using __dirname equivalent
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1500,
  },
});
