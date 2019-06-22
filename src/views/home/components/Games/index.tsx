import React from 'react'
import Search from './components/Search/Search'
import Tabs from './components/Tabs/Tabs.tsx'
import userApi from '@/services/api/modules/user.ts'
const showLoading = async () => {
  await userApi.login()
}

interface Iprops {
  history: any
}

const HomeGames = ({ history }: Iprops) => (
  <div>
    <Search />
    <Tabs history={history} />
  </div>
)

export default HomeGames
