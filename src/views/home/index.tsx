import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import PropTypes, { string } from 'prop-types'
import { Translation } from 'react-i18next'
import { TabBar } from 'antd-mobile'
import Icon from '@/components/icon/index.tsx'
const HomeGames = React.lazy(() => import('./components/Games.tsx'))
const HomeRanks = React.lazy(() => import('./components/Ranks.tsx'))
const HomeDeveloper = React.lazy(() => import('./components/Developer.tsx'))

export interface Iprops {
  selectedTab: string
  hiddenTab: boolean
  setSelectedTab: Function
}
const tabConf = [
  {
    title: 'home/games',
    icon: 'games',
    key: 'games',
    components: HomeGames
  },
  {
    title: 'home/ranks',
    icon: 'ranks',
    key: 'ranks',
    components: HomeRanks
  },
  {
    title: 'home/developer',
    icon: 'developer',
    key: 'developer',
    components: HomeDeveloper
  }
]

class Home extends React.Component<Iprops> {
  public translation(t: any) {
    const { selectedTab, setSelectedTab } = this.props
    return tabConf.map(item => {
      return (
        <TabBar.Item
          title={t(item.title)}
          key={item.key}
          icon={<Icon type={item.icon} />}
          selectedIcon={<Icon type={item.icon} className="icon-selected" />}
          selected={selectedTab === item.key}
          onPress={() => setSelectedTab(item.key)}
        >
          {
            <Suspense fallback={null}>
              <item.components />
            </Suspense>
          }
        </TabBar.Item>
      )
    })
  }

  public render() {
    // console.log(routes)
    const { hiddenTab } = this.props
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <Translation>
          {t => (
            <TabBar
              // unselectedTintColor="#949494"
              tintColor="#108ee9"
              barTintColor="white"
              tabBarPosition="bottom"
              hidden={hiddenTab}
              prerenderingSiblingsNumber={0}
            >
              {this.translation(t)}
            </TabBar>
          )}
        </Translation>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  selectedTab: state.home.selectedTab,
  hiddenTab: state.home.hiddenTab
})

const mapDispatchToProps = (dispatch: any) => ({
  setSelectedTab: dispatch.home.setSelectedTab
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
