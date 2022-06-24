import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import ElementPlus, { ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'
// 国际化插件
import i18n from '@/language/i18n'
import airbnb from '@/db/index'
import store from './store'


const app = createApp(App)

router.beforeEach((to, from, next) => {
    airbnb.airbnbDB.openStore({
        ...airbnb.languageObjectStore,
        ...airbnb.userObjectStore
    }).then((res:any) => {
        console.log('所有仓库初始化完璧', res)
        next()
    })
})



app.config.globalProperties.$message = ElMessage
app.use(ElementPlus)
app.use(router)
app.use(i18n)
app.use(store)

app.mount('#app')
