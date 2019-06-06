import React from 'react'
import './CutImgMan.less'
import cutImgMan from '@/assets/images/developers/cutImg-man.jpg'
import HeaderImg from '../HeaderImg/HeaderImg'

const CutImgMan = () => (
  <div className="c-cutImgMan">
    <HeaderImg img={cutImgMan} />
    <div className="start-box">
      <div className="radiation radiation1" />
      <div className="radiation radiation2" />
      <div className="radiation radiation3" />
      <div className="radiation radiation4" />
      <div className="radiation radiation5" />
      <div className="radiation radiation6" />
      <div className="radiation radiation7" />
      <div className="radiation radiation8" />
      <div className="star">
        <div className="sunspots sunspots" />
      </div>
    </div>
  </div>
)

export default CutImgMan
