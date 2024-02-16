import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import legacy from '@vitejs/plugin-legacy'
import progress from 'vite-plugin-progress'
import svgr from 'vite-plugin-svgr'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import { resolve } from 'path'

const root = resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@component': resolve(root, 'component'),
      '@layout': resolve(root, 'layout'),
      '@pages': resolve(root, 'pages'),
      '@assets': resolve(root, 'assets'),
    },
  },
  plugins: [react(), legacy({}), progress(), svgr(), TanStackRouterVite()],
})
