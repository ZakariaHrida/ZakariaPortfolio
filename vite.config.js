import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  base: '/', // This tells Vite to create relative paths in the built index.html
  plugins: [react()],
  
})
