<script setup lang="ts">
import { reactive } from 'vue';

import { useI18n } from 'vue-i18n';

const { t } = useI18n()

const footerMenu = reactive(  [
    {
      title: 'airbnb',
      menus: [
        {
          name: 'careers',
          link: 'https://www.airbnb.cn/careers'
        },
        {
          name: 'news',
          link: 'https://www.airbnb.cn/press/news'
        },
        {
          name: 'topic',
          link: 'https://www.airbnb.cn/help/topic/1578/法律条款'
        },
        {
          name: 'diversity',
          link: 'https://www.airbnb.cn/diversity'
        },
        {
          name: 'accessibility',
          link: 'https://www.airbnb.cn/accessibility'
        }
      ]
    },
    {
      title: 'discovery',
      menus: [
        {
          name: 'trustAndSafe',
          link: 'https://www.airbnb.cn/trust'
        },
        {
          name: 'invite',
          link: 'https://www.airbnb.cn/invite?r=6'
        },
        {
          name: 'evection',
          link: 'https://www.airbnb.cn/work?s=footer'
        },
        {
          name: 'magzine',
          link: 'https://airbnbmag.com'
        },
        {
          name: 'airbnborg',
          link: 'https://www.airbnb.org/?locale=zh'
        }
      ]
    },
    {
      title: 'rent',
      menus: [
        {
          name: 'whyRent',
          link: 'https://www.airbnb.cn/host/homes?from_footer=1'
        },
        {
          name: 'hospitality',
          link: 'https://www.airbnb.cn/hospitality'
        },
        {
          name: 'responsibleHosting',
          link: 'https://www.airbnb.cn/help/responsible-hosting'
        },
        {
          name: 'experiences',
          link: 'https://www.airbnb.cn/host/experiences?from_footer=1'
        },
        {
          name: 'resources',
          link: 'https://www.airbnb.cn/resources?traffic_source=footer'
        }
      ]
    },
    {
      title: 'service',
      menus: [
        {
          name: 'help',
          link: 'https://www.airbnb.cn/help?from=footer'
        },
        {
          name: 'neighbors',
          link: 'https://www.airbnb.cn/neighbors'
        }
      ]
    }
  ])




</script>

<template>
    <div class="common-footer">
        <div class="inner-footer">
            <ul>
            <li v-for="(item, index) in footerMenu" :key="index">
                <h4 class="title">{{ t(`footer['${item.title}']`)}}</h4>
                <a :href="link.link"  v-for="(link, index) in item.menus" :key="index">{{t(`footer['${link.name}']`)}}</a>
            </li>
        </ul>
        <div class="copyright">京ICP备16017121号 京ICP证 160773号 中国公安局标志 京公网安备 11010502032345号 安彼迎网络（北京）有限公司 中国电子营业执照标志 营业执照
© 2022 Airbnb, Inc. All rights reserved.
条款 · 隐私政策 · 网站地图 · 全国旅游投诉渠道 12301</div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@import "@/assets/scss/home/commonFooter.scss"
</style>
