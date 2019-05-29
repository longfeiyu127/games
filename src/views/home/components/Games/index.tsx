import React from 'react'
import Translation from '@/components/common/Translation.tsx'
import Dice from '@/components/Dice/Dice.tsx'
// import Loading, { PageLoading } from '@/components/Loading/Loading.tsx'
import userApi from '@/services/api/modules/user.ts'
const showLoading = async () => {
  await userApi.login()
}
const HomeGames = () => (
  <h2>
    <Translation>home/games</Translation>
    <div>
      {/* <Loading /> */}
      {/* <div style={{ height: 200, position: 'relative' }}>
        <PageLoading />
      </div> */}
      <div style={{ height: 200, position: 'relative' }}>
        <Dice />
      </div>
      <div>
        <button onClick={() => showLoading()}>showloading</button>
      </div>
    </div>
  </h2>
)

export default HomeGames
