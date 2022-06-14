// 创建一个 i18n 的实例，然后将所有的语言包放在这里，最后挂载到app上

import { createI18n } from 'vue-i18n'
import en from './en.ts'
import zh from './zh.ts'

const i18n = createI18n({
    locale: 'zh',
    messages: {
        zh,
        en
    }
})

export default i18n