import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative asset paths keep the built site portable across static hosts,
  // including subdirectory deployments. No hosting service is configured here.
  base: './',
  plugins: [react()],
})
