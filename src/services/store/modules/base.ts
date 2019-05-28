import { defaultLanguage, localeConf } from '@/config/locale.ts'

const defaultLocale = localeConf[defaultLanguage]

interface Ititle {
  zh: string
  en: string
}

interface Ilocale {
  key: string
  label: string
  value: string
}

export interface Istate {
  title: Ititle
  locale: Ilocale
}

const setDocumentTitle = (title: string) => {
  document.title = title
}

export default {
  state: {
    locale: defaultLocale,
    title: {
      zh: '游戏圈',
      en: 'Games'
    }
  },
  reducers: {
    setTitle(state: Istate, title: any) {
      const { key } = state.locale
      setDocumentTitle(title[key])
      return {
        ...state,
        title
      }
    },
    setLocale(state: any, locale: any) {
      return {
        ...state,
        locale
      }
    }
  },
  effects: (dispatch: any) => ({
    async changeLanguage(data: any, store: any) {
      const locale = localeConf[data] || defaultLocale
      const { payload } = await dispatch.base.setLocale(locale)
      const title = store.base.title[payload.key]
      setDocumentTitle(title)
      // @ts-ignore
      // console.log(...arguments, locale)
    }
  })
}
