import React from 'react'
import { connect } from 'react-redux'
import { List, Modal } from 'antd-mobile'
import { useTranslation } from 'react-i18next'
import BlankLayout from '@/layouts/BlankLayout.tsx'
import { localeConf } from '@/config/locale.ts'
import Dice from '@/components/Dice/Dice.tsx'
import './Me.less'

export interface Iprops {
  changeLanguage: (key: number) => void
  history: any
}

const operation = Modal.operation

const headerImg =
  'https://user-gold-cdn.xitu.io/2019/5/19/16ad00cf10c86e43?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1'

const HomeMe = (props: Iprops) => {
  const { changeLanguage, history } = props
  const { t, i18n } = useTranslation()
  const languageArr = Object.keys(localeConf).map(key => {
    const { label, key: localeKey } = localeConf[key]
    return {
      text: label,
      onPress: () => {
        i18n.changeLanguage(localeKey)
        changeLanguage(localeKey)
      }
    }
  })
  return (
    <BlankLayout className="HomeMe">
      <div className="banner-box">
        <div className="banner">
          <div className="dice-box">{/* <Dice /> */}</div>
          <header className="header">
            <div className="center">
              <img src={headerImg} alt="header" />
            </div>
          </header>
        </div>
        <div className="info-box">
          <div className="main">
            <h3 className="name">cv切图仔</h3>
            <p className="title">前端切图仔 @招商金科</p>
            <p className="motto">业精于勤荒于嬉,行成于思毁于随</p>
          </div>
        </div>
        <div className="list-box">
          <List>
            <List.Item arrow="horizontal">{t('me/myGames')}</List.Item>
            <List.Item arrow="horizontal">{t('me/myAchievements')}</List.Item>
          </List>
        </div>
        <div className="list-box">
          <List>
            <List.Item arrow="horizontal" onClick={() => operation(languageArr)}>
              {t('me/language')}
            </List.Item>
            <List.Item arrow="horizontal" onClick={() => history.push('/developers')}>
              {t('me/developer')}
            </List.Item>
            <List.Item arrow="horizontal">{t('me/feedback')}</List.Item>
          </List>
        </div>
      </div>
    </BlankLayout>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  changeLanguage: dispatch.base.changeLanguage
})

export default connect(
  null,
  mapDispatchToProps
)(HomeMe)
