import React from 'react'
import { Translation } from 'react-i18next'
import './Tabs.less'
import { Tabs } from 'antd-mobile'
import GameItem from './GameItem/GameItem'

export interface Iprops {
  history: any
  children?: React.ReactElement<any>
}

const tabs = [
  { title: <Translation>{t => t('home/games/hot')}</Translation>, sub: '1' },
  { title: <Translation>{t => t('home/games/new')}</Translation>, sub: '2' },
  { title: <Translation>{t => t('home/games/classify')}</Translation>, sub: '3' }
]

const games = [
  {
    name: '扫雷',
    key: 'minesweeper',
    abstract: '一款技术加运气的经典扫雷游戏，游戏目标是在找出所有非雷格子，一起来挑战吧！',
    icon: 'minesweeper.jpg',
    path: '/games/minesweeper'
  }
]

const Tab = ({ children, history }: Iprops) => {
  const AllGames = games.map(item => (
    <GameItem
      {...item}
      icon={require(`../../../../../../assets/games/icon/${item.icon}`)}
      history={history}
      key={item.key}
    />
  ))
  return (
    <div className="c-Tabs">
      <Tabs
        tabs={tabs}
        initialPage={1}
        onChange={(tab, index) => {
          console.log('onChange', index, tab)
        }}
        onTabClick={(tab, index) => {
          console.log('onTabClick', index, tab)
        }}
      >
        {AllGames}
        {AllGames}
        {AllGames}
      </Tabs>
    </div>
  )
}

export default Tab
