
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { saveLanguageApi } from '@/api/layout/index'
import { InjectionKey } from 'vue'

export interface AllStateTypes {
    locale: string,
    userStatus: number
}

// 定义 injection key
export const key: InjectionKey<Store<AllStateTypes>> = Symbol('storeKey')

// 重新封装以下 useStore方法，这样就不用每次都在使用 useStore的时候传入key了
export function useStore() {
    return baseUseStore(key)
}

export const store = createStore<AllStateTypes>({
    state: {
        locale: 'zh', // 语言包
        userStatus: 0 // 用户登录态
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
        changeLanguage({ commit }, lang) {
            saveLanguageApi(lang).then(res => {
                const { success } = res
                if (success) {
                    commit('setLanguage', lang.name)
                }
           })
        },
        changeUserStatus({ commit }, status) {
            commit('setUserStatus', status)
        }
    }
})
