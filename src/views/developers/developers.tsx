import React from 'react'
import firmament from './components/firmament'
import './developers.less'

export default () => {
  return (
    <div className="v-developers">
      {firmament()}
      <div className="header-box">
        <div className="header">
          <div className="header-center">
            <div className="item">chengyuan</div>
          </div>
        </div>
      </div>
      <div className="Members-box">成员介绍</div>
      <div className="project-box">项目介绍</div>
    </div>
  )
}
