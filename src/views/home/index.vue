<script setup lang="ts">
import IndexDB from '@/utils/indexedDB.ts'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const indexDB = new IndexDB('aribnb')
indexDB.openStore('elephant', 'id', ['nose', 'ear'])

// 增加数据
function addDB(storeName:string) {
    indexDB.updateItem(storeName, {
        nose: '55m',
        ear: 'small'
    })
}

// 修改数据
function updateDB(storeName:string) {
    indexDB.updateItem(storeName, {
        id: 1,
        nose: '55m',
        ear: 'small'
    })
}

// 删除数据
function deleteDB(storeName:string, key: number | string) {
    indexDB.deletItem(storeName, key)
}

// 查询所有数据
function getDBAllData(storeName:string) {
    indexDB.getList(storeName)
}

// 查询单条数据
function getSingleData(storeName:string, key:number|string) {
    indexDB.getItem(storeName, key)
}

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