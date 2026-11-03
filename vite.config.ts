import process from 'node:process'
import type { Connect } from 'vite'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { isCrawlerUserAgent } from './crawlerGuard.ts'

const pagesBase = process.env.GITHUB_PAGES === 'true' ? '/gatchaman-crowds-archive/' : '/'

function rejectCrawlers(): Plugin {
  const deny: Connect.NextHandleFunction = (req, res, next) => {
    const path = (req.url ?? '').split('?')[0] ?? ''
    if (path.endsWith('/robots.txt')) {
      next()
      return
    }
    if (!isCrawlerUserAgent(req.headers['user-agent'])) {
      next()
      return
    }
    res.statusCode = 403
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet, noimageindex')
    res.setHeader('Cache-Control', 'no-store')
    res.end('爬蟲請求已拒絕。\n')
  }
  return {
    name: 'reject-crawlers',
    configureServer(server) { server.middlewares.use(deny) },
    configurePreviewServer(server) { server.middlewares.use(deny) },
  }
}

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? pagesBase,
  plugins: [rejectCrawlers(), react(), tailwindcss()],
  build: { rollupOptions: { output: { manualChunks: (id: string) => {
    if (id.includes('node_modules') && (id.includes('/three/') || id.includes('@react-three'))) return 'three'
    if (id.includes('node_modules') && (id.includes('/gsap/') || id.includes('/lenis/'))) return 'motion'
  } } } },
})
