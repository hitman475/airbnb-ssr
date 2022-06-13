<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<template>
    <div>个人中心</div>
    <button @click="()=> router.push({name:'home', params: {b: 2}})">跳转到首页</button>
</template>

<style>

</style>