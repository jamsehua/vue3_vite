import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock';
import path from 'path'

export default {
  extensions: ['.vue', '.js', '.ts', '.jsx', '.tsx', '.json'],
  alias: {
    "@": path.resolve(__dirname, "src")
  },
  plugins: [
    vue(), 
    vueJsx(),
    viteMockServe({
      supportTs: false
    })
  ],
  server: {
    port: '8000',
    cors: true
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  },
}