import React from 'react'
import { connect } from 'react-redux'
import PropTypes, { string } from 'prop-types'
import Translation from '@/components/common/Translation.tsx'
import { TabBar } from 'antd-mobile'
import Icon from '@/components/icon/index.tsx'
import HomeGames from './components/Games.tsx'
import HomeRanks from './components/Ranks.tsx'
import HomeDeveloper from './components/Developer.tsx'

export interface Istatus {
  selectedTab: string
  hidden: boolean
}
const tabConf = [
  {
    title: '游戏库',
    icon: 'games',
    key: 'games',
    components: HomeGames
  },
  {
    title: '排行榜',
    icon: 'ranks',
    key: 'ranks',
    components: HomeRanks
  },
  {
    title: '开发者',
    icon: 'games',
    key: 'developer',
    components: HomeDeveloper
  }
]

class Home extends React.Component {
  public static propTypes = {
    // eslint-disable-next-line
    history: PropTypes.object.isRequired
  }
  public state: Istatus = {
    selectedTab: 'games',
    hidden: false
  }
  constructor(props: any) {
    super(props)
  }
  public render() {
    console.log(this.props)
    // console.log(this.props.history);
    // console.log(routes)
    // tslint:disable-next-line
    // const { history } = this.props
    // tslint:disable-next-line
    const { hidden, selectedTab } = this.state
    const TabBarItem = tabConf.map(item => {
      return (
        <TabBar.Item
          title={item.title}
          key={item.key}
          icon={<Icon type={item.icon} />}
          selectedIcon={<Icon type={item.icon} className="icon-selected" />}
          selected={selectedTab === item.key}
          onPress={() => {
            this.setState({ selectedTab: item.key })
          }}
        >
          {<item.components />}
        </TabBar.Item>
      )
    })
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          // unselectedTintColor="#949494"
          tintColor="#108ee9"
          barTintColor="white"
          tabBarPosition="bottom"
          hidden={hidden}
          prerenderingSiblingsNumber={0}
        >
          {TabBarItem}
        </TabBar>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  locale: state.user.locale
})

const mapDispatchToProps = (dispatch: any) => ({
  // onClick: dispatch.Tictactoe.setChess
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
