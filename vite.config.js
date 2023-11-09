import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{
    globals:true,
    environment:'jsdom',
    setupFiles: './tests/setup.js',
    base:'https://bourqu.github.io/time-tracking-dashboard-main/'
  }
})
