import React from 'react'
import Firmament from './components/firmament/firmament'
import CutImgMan from './components/header/CutImgMan/CutImgMan'
import Pentagram from './components/header/pentagram/pentagram'
import githubImg from '@/assets/images/icon/github.svg'
import juejinImg from '@/assets/images/icon/juejin.svg'
import './developers.less'

const pentagramPositon = [
  { top: '100px', left: '60px' },
  { top: '20px', left: '230px' },
  { top: '300px', left: '80px' },
  { top: '400px', left: '280px' }
]

const githubUrl = 'https://github.com/longfeiyu127/games'
const juejinUrl = 'https://juejin.im/post/5ce20787e51d4510b35001ca'

export default () => {
  const creatPentagram = pentagramPositon.map((item, index) => <Pentagram {...item} key={index} />)
  return (
    <div className="v-developers">
      <Firmament />
      <div className="header-box">
        {creatPentagram}
        <CutImgMan />
      </div>
      <Pentagram top="60px" left="340px" img={githubImg} onClick={() => (window.location.href = githubUrl)} />
      <Pentagram top="180px" left="340px" img={juejinImg} onClick={() => (window.location.href = juejinUrl)} />
      <div className="project-box">
        <p className="narrator">以游戏为载体，探求前端图形学技术边界，如果你也有兴趣，就一起加入吧！</p>
        <p className="signature">----- 我是cv切图仔，我为自己打码！</p>
      </div>
    </div>
  )
}
