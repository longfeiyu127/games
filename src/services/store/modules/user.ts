/**
 * {
    key: 'zh',
    value: '中国',
    label: '中国',
    language: undefined,
  },
  {
    key: 'en',
    value: 'English',
    label: 'English',
    language: enUS,
  }
 */

export default {
  state: {
    token: '',
    locale: {
      key: 'zh',
      value: '中国',
      label: '中国',
      language: undefined
    }
  },
  reducers: {
    setTest(state: any, data: string) {
      return {
        ...state,
        token: data
      }
    }
  },
  effects: (dispatch: any) => ({
    // async getTest() {}
  })
}
