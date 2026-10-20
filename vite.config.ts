import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const pagesBase = process.env.GITHUB_PAGES === 'true' ? '/gatchaman-crowds-archive/' : '/'

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? pagesBase,
  plugins: [react(), tailwindcss()],
  build: { rollupOptions: { output: { manualChunks: (id: string) => {
    if (id.includes('node_modules') && (id.includes('/three/') || id.includes('@react-three'))) return 'three'
    if (id.includes('node_modules') && (id.includes('/gsap/') || id.includes('/lenis/'))) return 'motion'
  } } } },
})
