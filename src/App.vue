<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n'
import headerComponent from '@/components/layout/commonHeader.vue';
import footerComponent from '@/components/layout/commonFooter.vue'
import { useStore } from 'vuex';

const route = useRoute()
const store = useStore()

const showCommonComponent = computed(() => route.path.indexOf('/login') === -1)
const languageV = computed(() => { return  store.state.locale })

</script>

<template>
  <!-- 控制全局element-plus语言的组件 -->
  <el-config-provider :locale="languageV">
    <!-- 头部 -->
    <header-component v-show="showCommonComponent"></header-component>
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
