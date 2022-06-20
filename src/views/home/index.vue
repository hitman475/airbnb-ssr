<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { fetchElephant, fetchRoomList } from '@/api/index'

const { t } = useI18n()

// 真实接口
function getRoomList() {
    const result = fetchRoomList()
    console.log('roomList', result)
}

// mock 接口
function getElephant() {
    const result = fetchElephant()
    console.log('elephant', result)
}
getRoomList()
getElephant()

</script>

<template>
    {{ t('message.home') }}
    <el-button @click="addDB('elephant')">增</el-button>
    <el-button @click="updateDB('elephant')">改</el-button>
    <el-button @click="deleteDB('elephant', 2)">删除</el-button>
    <el-button @click="getDBAllData('elephant')">查所有</el-button>
    <el-button @click="getSingleData('elephant', 1)">查</el-button>
</template>

<style lang="scss">
@import "@/assets/scss/home/home.scss"
</style>