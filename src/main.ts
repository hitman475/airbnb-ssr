import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import ElementPlus, { ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);

app.config.globalProperties.$message = ElMessage;

app.use(ElementPlus)
app.use(router);
app.mount('#app')
