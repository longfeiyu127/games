import React from 'react'
import { Translation } from 'react-i18next'
import './Tabs.less'
import { Tabs } from 'antd-mobile'

export interface Iprops {
  children?: React.ReactElement<any>
}

const tabs = [
  { title: <Translation>{t => t('home/games/hot')}</Translation>, sub: '1' },
  { title: <Translation>{t => t('home/games/new')}</Translation>, sub: '2' },
  { title: <Translation>{t => t('home/games/classify')}</Translation>, sub: '3' }
]

const Tab = ({ children }: Iprops) => {
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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '150px',
            backgroundColor: '#fff'
          }}
        >
          Content of first tab
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '150px',
            backgroundColor: '#fff'
          }}
        >
          Content of second tab
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '150px',
            backgroundColor: '#fff'
          }}
        >
          Content of third tab
        </div>
      </Tabs>
    </div>
  )
}

export default Tab
