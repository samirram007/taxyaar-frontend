import tailwindcss from '@tailwindcss/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// import basicSsl from "@vitejs/plugin-basic-ssl";

import tanstackRouter from '@tanstack/router-plugin/vite'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    viteReact(),
    tailwindcss(),
    // basicSsl()
  ],
  server: {
    port: 5173,
    strictPort: true
  },
  build: {
    // ssr: 'src/entry-server.tsx', // for server rendering
    // outDir: 'dist-ssr',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {

          // if (id.includes('src/features/accounts/settings')) {
          //   return 'accounts-settings'
          // }

          if (id.includes('src/features/masters/accounts')) {
            return 'accounts'
          }
        },
      },
    },
  },
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  // },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
