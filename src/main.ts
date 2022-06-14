import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import ElementPlus, { ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'
// 国际化插件
import i18n from '@/language/i18n'

const app = createApp(App)

app.config.globalProperties.$message = ElMessage
app.use(ElementPlus)
app.use(router)
app.use(i18n)

app.mount('#app')
