
import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/home/index.vue'
import Mine from '@/views/mine/index.vue'
import Login from '@/views/login/index.vue'

const routes = [
    {
        path:'/home',
        name: 'home',
        component:Home,
        meta: {
            title: '',
        }
    },
    {
        path:'/mine',
        name: 'mine',
        component:Mine,
        meta: {
            title: '',
        }
    },
    {
        path:'/login',
        name: 'login',
        component:Login,
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