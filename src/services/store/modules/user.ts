export default {
  state: {
    token: ''
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
    async getTest() {}
  })
}
