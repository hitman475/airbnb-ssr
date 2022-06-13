
import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/home/index.vue'
import Mine from '@/views/mine/index.vue'


const routes = [
    {
        path:'/home',
        component:Home,
        name: 'home',
        meta: {
            title: '',
        }
    },
    {
        path:'/mine',
        component:Mine,
        name: 'mine',
        meta: {
            title: '',
        }
    }
]


const router = createRouter({
    history:createWebHistory(),     // 这个参数相当于vue2中的 是否有hash值，也就是选择路由模式
    routes
})

export default router;