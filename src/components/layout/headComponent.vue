<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import {saveLanguageApi, fetchLanguageApi} from "@/api/layout/index"

import DB from '@/utils/indexedDB'



const activeIndex = ref('order')

const handleSelect = function(e) {
    console.log(e)
    // 切换语言包
    if (e === 'zh') {
        emit('changeLang', zhCn);
        saveLanguage('zh')
    } else if (e === 'en') {
        emit('changeLang', en)
        saveLanguage('en')
    }
}
// 派发changeLamng事件
const emit = defineEmits<{
    (e:'changeLang', language: any):void
}>()

// mock接口保存语言包
function saveLanguage(lang: any) {
   saveLanguageApi(lang).then(res => {
        const { success } = res
        if (success) {
            console.log('Head C : 操作成功')
        }
   })
}


// mock接口获取语言包
function getLanguage() {
    fetchLanguageApi().then(res => {
        const { success, result} = res
        const { name } = result
        if (success) {
            if (name === 'zh') {
                emit('changeLang', zhCn);
            } else if (name === 'en') {
                emit('changeLang', en)
            }
        }
    })
}
getLanguage()
</script>

<template>
  <div class="head-common">
    <img src="@/assets/images/layout/logo.jpg" alt="爱此迎" />
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
    >
        <el-menu-item index="order">房屋订单中心</el-menu-item>
        <el-menu-item index="records">历史足迹</el-menu-item>
        <el-sub-menu index="language">
        <template #title>切换语言</template>
        <el-menu-item index="zh">中文</el-menu-item>
        <el-menu-item index="en">英文</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="avatar">
            <img class="avatar" src="@/assets/images/layout/avatar.jpg" alt="">
        </el-menu-item>
    </el-menu>
  </div>

</template>

<style lang="scss" scoped>
@import "@/assets/scss/home/headComponent.scss"
</style>
