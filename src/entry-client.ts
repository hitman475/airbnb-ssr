// 这里取代之前 main.ts 中的作用
import { createApp } from './main'
import airbnb from '@/db/index'

const { app, router } = createApp()
router.beforeEach((to, from, next) => {
    airbnb.airbnbDB.openStore({
        ...airbnb.languageObjectStore,
        ...airbnb.userObjectStore
    }).then((res:any) => {
        console.log('所有仓库初始化完璧', res)
        next()
    })
})
// app获得之后需要挂载，注意挂载的时机
// 最好的时机是 router准备完成之后
router.isReady().then(res => {
    app.mount('#app')
})
