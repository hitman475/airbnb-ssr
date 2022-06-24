// 这里取代之前 main.ts 中的作用
import { createApp } from './main'
import { renderToString } from 'vue/server-renderer'

export async function render(url: string) {
    const { app, router } = createApp()
    // 因为 entry-server.ts 是运行在服务端，所以我们需要将每次发起页面请求的时候，需要将url
    // 传递给vue应用，并且在客户端和服务端中复用相同的路由配置，这是同步渲染的关键。
    await router.push(url)
    await router.isReady()
    // 使用 renderToString 将vue实例渲染成一个html字符串
    const html = renderToString(app)
    return html
}