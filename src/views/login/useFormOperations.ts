import { useRouter } from "vue-router"
import { IResultOr } from "@/api/interface"
import { userSignApi, userLoginApi } from '@/api/login/index'
import { IRuleForm } from '@/assets/ts/interface'
import { useStore } from "vuex"


export default function useFormOperations(proxy: any) {

    const router = useRouter()
    const store = useStore()

    // 用户注册接口
    async function userSign(params:IRuleForm) {
        const response:IResultOr = await userSignApi(params)
        const { success, message } = response
        if (success) {
            proxy.$message.success(message)
        } else {
            proxy.$message.error(message)
        }
    }

    // 用户登录接口
    async function userLogin(params:IRuleForm) {
        const response:IResultOr = await userLoginApi(params)
        const { success, message, result } = response
        console.log('####', response)
        if (success) {
            const { status } = result
            proxy.$message.success(message)
            // localStorage.setItem('userStatus', status)
            store.dispatch('changeUserStatus', 1)
            router.push({name:'home'})
        } else {
            proxy.$message.error(message)
        }
    }

    return {
        userSign,
        userLogin
    }
}