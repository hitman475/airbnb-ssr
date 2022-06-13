<script setup lang="ts">
import { useRouter } from 'vue-router'
import { getCurrentInstance, h } from 'vue'
import { fetchRoomList } from '@/api/index'

fetchRoomList()

const router = useRouter();

const {proxy} : any = getCurrentInstance()

proxy.$message({
  message: h('p', null, [
    h('span', null, 'Message can be '),
    h('i', { style: 'color: teal' }, 'VNode'),
  ])
})
</script>

<template>
  <button @click="() => router.push({path:'/home'})">首页</button>
  <button @click="() => router.push({path:'/mine'})">个人中心</button>
  <el-button type="primary">Primary</el-button>
  <router-view></router-view>

</template>

<style>

</style>
