import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom']
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        // Ensure proper format for GitHub Pages
        format: 'es'
      }
    },
    target: 'es2018',
    minify: 'esbuild',
    // Generate legacy fallback for older browsers
    cssCodeSplit: true,
    // Ensure proper module format
    lib: undefined
  },
  server: {
    port: 3000,
    open: true
  },
  preview: {
    port: 4173
  }
})
