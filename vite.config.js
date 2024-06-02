import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  homepage: "/testing/#",
  base: "./",
  version: "1.0.0",
})
