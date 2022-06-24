<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import headerComponent from '@/components/layout/commonHeader.vue'
import footerComponent from '@/components/layout/commonFooter.vue'
import { useStore } from '@/store/index'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const store = useStore()
const { locale } = useI18n()

const showCommonComponent = computed(() => route.path.indexOf('/login') === -1)
const languageV = computed(() => { return store.state.locale })

function changeLang(lang: any) {
  store.dispatch('changeLanguage', lang)
  locale.value = lang.name
}

</script>

<template>
  <!-- 控制全局element-plus语言的组件 -->
  <el-config-provider :locale="languageV">
    <!-- 头部 -->
    <header-component v-show="showCommonComponent" @changeLang="changeLang"></header-component>
    <!-- 主体 -->
    <div class="container">
          <router-view></router-view>
    </div>
    <!-- 底部 -->
    <footer-component  v-show="showCommonComponent"></footer-component>
  </el-config-provider>

</template>

<style>

</style>
