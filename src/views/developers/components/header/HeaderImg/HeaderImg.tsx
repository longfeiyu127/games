import React from 'react'
import './HeaderImg.less'

const HeaderImg = ({ img, children, rotate }: any) => (
  <div className="c-header-img" style={rotate ? { transform: `rotate(${rotate})` } : {}}>
    {children ? children : <img src={img} alt="header" />}
  </div>
)

export default HeaderImg
