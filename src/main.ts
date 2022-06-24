import { createSSRApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import ElementPlus, { ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'
// 国际化插件
import i18n from '@/language/i18n'
import { store, key } from './store'

export function createApp() {
    // 实例的挂载在 client-entry 或者 server-entry中执行
    const app = createSSRApp(App)
    app.config.globalProperties.$message = ElMessage
    app.use(ElementPlus)
    app.use(router)
    app.use(i18n)
    app.use(store, key)

    return { app, router }
}
