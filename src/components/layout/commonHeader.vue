<script setup lang="ts">
import { ref, defineEmits, getCurrentInstance, computed, onMounted } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import { fetchLanguageApi } from '@/api/layout/index'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { userLogoutApi } from '@/api/login/index'
import { IResultOr } from '@/api/interface'
import { useStore } from '@/store/index'


const router = useRouter()
const { proxy } : any = getCurrentInstance()
const { t } = useI18n()
const activeIndex = ref('order')
// 获取登录状态
// const status = localStorage.getItem('userStatus')
const status = computed(() => {
   console.log('store.state.userStatus: ', store.state.userStatus)
   return store.state.userStatus === 1
})
const store = useStore()

// 修改自定义语言包的变量
const { locale } = useI18n()

// 顶部栏触发事件
const handleSelect = function(e : any) {
    console.log(e)
    // 切换语言包
    if (e === 'zh') {
        emit('changeLang', zhCn);
        store.dispatch('changeLanguage', zhCn)
        locale.value = zhCn.name
    } else if (e === 'en') {
        emit('changeLang', en)
        store.dispatch('changeLanguage', en)
        locale.value = en.name
    } else if (e === 'login') {
        router.push({ name: 'login' })
    } else if (e === 'logout') {
        userLogout()
    }
}
// 派发changeLamng事件
const emit = defineEmits<{
    (e:'changeLang', language: any):void
}>()

// 获取语言包
function getLanguage() {
  fetchLanguageApi().then(res => {
    const { success, result } = res
    let { name } = result || {}
    name = name.name
    if (success) {
      if (name === 'zh') {
         emit('changeLang', zhCn)
      } else if (name === 'en') {
         emit('changeLang', en)
      }
      console.log('获取当前语言包成功')
    }
  })
}

// 延迟获取一下，防止IndexDB 找不到 transcation
// setTimeout(() => {
//     getLanguage()
// }, 200)

onMounted(() => {
     getLanguage()
})

// 用户登出接口
async function userLogout() {
    const response:IResultOr = await userLogoutApi()
    const { success, message } = response
    if (success) {
        proxy.$message.success(message)
        router.push({ name:'login' })
        // localStorage.setItem('userStatus', '0')
        store.dispatch('changeUserStatus', 0)
    } else {
        proxy.$message.error(message)
    }
}
</script>

<template>
  <div class="common-header">
    <img class="logo" src="@/assets/images/layout/logo.png" alt="爱此迎" />
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
    >
        <el-menu-item index="order">{{t('header.orders')}}</el-menu-item>
        <el-menu-item index="records">{{t('header.records')}}</el-menu-item>
        <el-sub-menu index="language">
            <template #title>{{t('header.language')}}</template>
            <el-menu-item index="zh">中文</el-menu-item>
            <el-menu-item index="en">English</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="mine" v-if="status">
            <template #title>
                <img class="avatar" src="@/assets/images/layout/avatar.jpg" alt="" />
            </template>
            <el-menu-item index="logout">{{t('login.logout')}}</el-menu-item>
        </el-sub-menu>

        <el-menu-item index="login" v-else>
            <el-menu-item index="records">{{t('login.loginTab')}}/{{t('login.signTab')}}</el-menu-item>
        </el-menu-item>
    </el-menu>
  </div>

</template>

<style lang="scss" scoped>
@import "@/assets/scss/home/commonHeader.scss"
</style>
