import { defaultLanguage } from '@/config/base.ts'

export const localeConf: Record<string, object> = {
  zh: {
    key: 'zh',
    value: '中国',
    label: '中国'
    // language: undefined,
  },
  en: {
    key: 'en',
    value: 'English',
    label: 'English'
    // language: enUS,
  }
}

const locale = localeConf[defaultLanguage]

export default {
  state: {
    token: '',
    locale
  },
  reducers: {
    setTest(state: any, data: string) {
      return {
        ...state,
        token: data
      }
    },
    setLocale(state: any, data: string) {
      return {
        ...state,
        locale: localeConf[data] || locale
      }
    }
  },
  effects: (dispatch: any) => ({
    // async getTest() {}
  })
}
