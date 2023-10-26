import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
  }

  if (command === 'build') {
    return {
      ...config, 
      base: "/toc-fonts-on-cdn/",
    }
  } 

  return config;
})