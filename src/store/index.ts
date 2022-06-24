
import { createStore } from "vuex";
import { saveLanguageApi } from "@/api/layout/index"


const store = createStore({
    state: {
        locale: 'zh', // 语言包
        userStatus: 0,  // 用户登录态
    },
    mutations: {
        setLanguage(state, lang) {
            state.locale = lang
        },
        setUserStatus(state, status) {
            state.userStatus = status
        }
    },
    actions: {
        changeLanguage({commit}, lang) {
            saveLanguageApi(lang).then(res => {
                const { success } = res
                if (success) {
                    
                    commit('setLanguage', lang.name)
                }
           })
        },
        changeUserStatus({commit}, status) {
            commit('setUserStatus', status)
        }
    }
})

export default store