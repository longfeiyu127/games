import React from 'react'
import './GameItem.less'

interface Iprops {
  abstract: string
  name: string
  path: string
  icon: any
  history: any
}

const GameItem = ({ name, abstract, path, icon, history }: Iprops) => {
  return (
    <div className="c-TabItem">
      <img className="TabItem-banner" src={icon} alt="icon" />
      <div className="TabItem-content">
        <h5 className="title">{name}</h5>
        <p>{abstract}</p>
      </div>
      <div className="TabItem-button" onClick={() => history.push(path)}>
        打开
      </div>
    </div>
  )
}

export default GameItem
