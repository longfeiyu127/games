import React from 'react'
import './setting.less'

interface Iprops {
  children: string
}

function Setting({ children }: Iprops) {
  return (
    <div className="c-Setting">
      <h5 className="descreption">111</h5>
    </div>
  )
}

export default Setting
