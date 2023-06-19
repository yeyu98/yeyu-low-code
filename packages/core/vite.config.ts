/*
 * @Author: xiaohu
 * @Date: 2023-06-19 19:54:28
 * @LastEditors: xiaohu
 * @LastEditTime: 2023-06-19 20:05:18
 * @FilePath: \yeyu-low-code\packages\core\vite.config.ts
 * @Description: 
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: "src/index.ts",
      fileName: (format) =>  `index.${format}.js`
    }
  }
})
