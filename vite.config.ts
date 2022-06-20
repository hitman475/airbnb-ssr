import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],

  css: {
    preprocessorOptions: {
      // 配置sass
      scss: {
        additionalData: `@import "@/assets/scss/variable.scss"; @import "@/assets/scss/main.scss";`
      },
    }
  },

  resolve: {
      alias: {
          "@": resolve(__dirname, 'src'), // 路径别名
      },
      extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己 增减
  }

})


