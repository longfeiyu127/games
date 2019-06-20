import React from 'react'
import Search from './components/Search/Search'
import Tabs from './components/Tabs/Tabs.tsx'
import userApi from '@/services/api/modules/user.ts'
const showLoading = async () => {
  await userApi.login()
}

class HomeGames extends React.Component {
  public state = {
    data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    imgHeight: 176
  }
  public render() {
    return (
      <div>
        <Search />
        <Tabs />
      </div>
    )
  }
}

export default HomeGames
