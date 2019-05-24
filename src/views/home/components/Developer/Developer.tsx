import React from 'react'
import { useTranslation } from 'react-i18next'
import BlankLayout from '@/layouts/BlankLayout.tsx'
import './Developer.less'

const headerImg =
  'https://user-gold-cdn.xitu.io/2019/5/19/16ad00cf10c86e43?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1'

const HomeDeveloper = () => {
  const { t, i18n } = useTranslation()
  return (
    <BlankLayout className="HomeDeveloper">
      <div className="banner-box">
        <div className="banner">
          <header className="header">
            <div className="center">
              <img src={headerImg} alt="header" />
            </div>
          </header>
        </div>
      </div>
    </BlankLayout>
  )
}

export default HomeDeveloper
