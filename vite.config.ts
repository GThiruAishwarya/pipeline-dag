// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: '.', // ensure root is current directory
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  publicDir: 'public', // tell Vite where public/index.html is
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
