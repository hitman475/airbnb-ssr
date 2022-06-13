<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<template>
    <div>首页</div>
    <button @click="() => router.push({name:'mine', query: {a : 1}})">跳转到个人中心</button>
    <div class="text">hhhhhhhhhhhhhhhhhhhhhhhhhhhh</div>
</template>

<style lang="scss">
@import "@/assets/scss/home/home.scss"
</style>