import React, { Suspense } from 'react'
import { connect } from 'react-redux'
import { Translation } from 'react-i18next'
import { TabBar } from 'antd-mobile'
import HomeLayout from '@/layouts/HomeLayout.tsx'
import Icon from '@/components/Icon/index.tsx'
const HomeGames = React.lazy(() => import('./components/Games/index.tsx'))
const HomeRanks = React.lazy(() => import('./components/Ranks/index.tsx'))
const HomeMe = React.lazy(() => import('./components/Me/Me.tsx'))

export interface Iprops {
  selectedTab: string
  hiddenTab: boolean
  setSelectedTab: (index: number) => void
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
    title: 'home/me',
    icon: 'me',
    key: 'me',
    components: HomeMe
  }
]

class Home extends React.Component<Iprops> {
  public translation(t: any) {
    const { selectedTab, setSelectedTab } = this.props
    return tabConf.map((item: any) => {
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
      <HomeLayout>
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
      </HomeLayout>
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
