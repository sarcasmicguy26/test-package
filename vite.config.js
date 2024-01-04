import { defineConfig } from 'vite'
import path from "path"
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src/index.js"),
      name: "my-button",
      fileName: (format) => `${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  resolve: {
    preserveSymlinks: false,
    alias: {
      "vue": path.resolve('./node_modules/vue')
    }
  }
})
