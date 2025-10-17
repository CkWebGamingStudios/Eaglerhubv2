import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Eaglerhubv2/', // 👈 make sure this matches your REPO NAME exactly (case-sensitive)
  plugins: [react()],
})
