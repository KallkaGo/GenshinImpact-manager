import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    AutoImport({
      imports: ['vue'],
      dts:'src/auto-import.d.ts',
    })
  ],
  resolve: {
    alias: {
      '@':resolve(__dirname,'./src')
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:'@import "@/styles/constant.scss";'
      }
    }
  }
})
