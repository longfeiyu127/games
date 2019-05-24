export interface Istate {
  selectedTab: string
  hiddenTab: boolean
}

export default {
  state: {
    selectedTab: 'games',
    hiddenTab: false
  },
  reducers: {
    setSelectedTab(state: Istate, data: string) {
      return {
        ...state,
        selectedTab: data
      }
    },
    setHiddenTab(state: Istate, data: boolean) {
      return {
        ...state,
        hiddenTab: data
      }
    }
  }
}
