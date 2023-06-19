/*
 * @Author: xiaohu
 * @Date: 2023-06-19 19:54:28
 * @LastEditors: xiaohu
 * @LastEditTime: 2023-06-19 20:53:28
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
      entry: "src/main.tsx",
      name: 'yeyu-low-code.core',
      fileName: (format) =>  `index.${format}.js`
    },
    rollupOptions: {
      // NOTE 不太理解为啥要排除
      // 因为core是个类库提供给其他人使用的所以不需要把react打包进去
      external: [
        'react',
        'react-dom'
      ],
      output: {
        // NOTE rollup默认打包之后就会生成es和umd两种格式的吗？
        // rollup的打包策略是什么呢？
        // 告诉rollup react和react-dom是外部依赖
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        minifyInternalExports: true
      },
    }
  },
})
