import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss(),
  ],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
})

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       colors: {
//         'custom-blue': 'oklch(54.6% 0.245 262.881)',
//       }
//     }
//   },
  // ... other config
// }
