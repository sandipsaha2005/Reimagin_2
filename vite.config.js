import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// vite.config.js
export default {
  css: {
    modules: {
      localsConvention: 'camelCase',
    }
  },
  assetsInclude: [
    "**/*.glb",
    // other patterns...
  ]
}

