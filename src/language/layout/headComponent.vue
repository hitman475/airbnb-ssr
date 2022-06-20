<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
const activeIndex = ref('order')

const handleSelect = function(e) {
    console.log(e)
    if (e === 'zh') {
        emit('changeLang', zhCn);
    } else if (e === 'en') {
        emit('changeLang', en)
    }
}

const emit = defineEmits<{
    (e:'changeLang', language: any):void
}>()

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
