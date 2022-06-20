<script setup lang="ts">
// import { useRouter } from 'vue-router'
import { ref } from 'vue'
// import { fetchRoomList } from '@/api/index'
// import zh from 'element-plus/lib/locale/lang/zh-cn'
// import en from 'element-plus/lib/locale/lang/en'
import { useI18n } from 'vue-i18n'
import headComponent from '@/components/layout/headComponent.vue';
import home from '@/views/home/index.vue'

// fetchRoomList()

// const router = useRouter();
// const { proxy } : any = getCurrentInstance()
// // 国际化功能部分
const lang = ref(null)
const { locale } = useI18n()
const changeLanguage = (language:any) => {
  lang.value = language
  locale.value = language.name
}

// proxy.$message({
//   message: h('p', null, [
//     h('span', null, 'Message can be '),
//     h('i', { style: 'color: teal' }, 'VNode'),
//   ])
// })

</script>

<template>
  <!-- 控制全局element-plus语言的组件 -->
  <el-config-provider :locale="lang">
    <!-- <button @click="() => router.push({path:'/home'})">首页</button>
    <button @click="() => router.push({path:'/mine'})">个人中心</button>

    <button @click="changeLanguage(zh)">切换为中文</button>
    <button @click="changeLanguage(en)">切换为英文</button>

    <el-button type="primary">Primary</el-button>
    <router-view></router-view> -->

    <!-- 头部 -->
    <head-component @changeLang="changeLanguage"></head-component>
    <!-- 主体 -->
    <home></home>
  </el-config-provider>

</template>

<style>

</style>
