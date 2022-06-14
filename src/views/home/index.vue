<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

</script>

<template>
    {{ t('message.home') }}

</template>

<style lang="scss">
@import "@/assets/scss/home/home.scss"
</style>