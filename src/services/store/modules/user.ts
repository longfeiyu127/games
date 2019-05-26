import { defaultLanguage, localeConf } from '@/config/locale.ts'

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
