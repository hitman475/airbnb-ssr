<script setup lang="ts">
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

const store = useStore()

function testVuex() {
    store.dispatch('changeCount', 10)
}

const val = computed(() => store.state.count) 
console.log('#########',store.state.count)
</script>

<template>

    <h1>{{val}}</h1>
    <button @click="testVuex">测试vuex</button>
</template>

<style lang="scss">
@import "@/assets/scss/home/home.scss"
</style>