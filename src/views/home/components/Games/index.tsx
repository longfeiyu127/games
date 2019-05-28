import React from 'react'
import Translation from '@/components/common/Translation.tsx'
import Dice from '@/components/Dice/Dice.tsx'
import Loading, { PageLoading } from '@/components/Loading/Loading.tsx'
import LoadingPlugin from '@/components/Loading/plugin.tsx'
const showLoading = () => {
  console.log('显示')
  LoadingPlugin.show()
  setTimeout(() => {
    console.log('隐藏')
    LoadingPlugin.hide()
    setTimeout(() => {
      console.log('删除')
      LoadingPlugin.remove()
    }, 5000)
  }, 5000)
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
