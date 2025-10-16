import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Add this:
export default defineConfig({
  base: '/Eaglerhubv2/', // 👈 your GitHub repo name
  plugins: [react()],
})
