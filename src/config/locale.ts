import enUS from 'antd-mobile/lib/locale-provider/en_US'
import ruRU from 'antd-mobile/lib/locale-provider/ru_RU'

export const localeConf: Record<string, object> = {
  zh: {
    key: 'zh',
    value: '简体中文',
    label: '简体中文',
    language: undefined
  },
  en: {
    key: 'en',
    value: 'English',
    label: 'English',
    language: enUS
  }
  // ru: {
  //   key: 'ru',
  //   value: 'Русский',
  //   label: 'Русский',
  //   language: ruRU
  // }
}
// 默认语言
export const defaultLanguage = 'zh'
