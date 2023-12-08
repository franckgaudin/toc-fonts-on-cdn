import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => {
  const config = {
    optimizeDeps: {
      include: ['react/jsx-runtime'],
    },
    plugins: [react({
      jsxRuntime: "automatic"
    })],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        react: path.resolve(__dirname, "node_modules/react"),
      }
    },
  }

  if (command === 'build') {
    return {
      ...config, 
      base: "/toc-fonts-on-cdn/",
    }
  } 

  return config;
})