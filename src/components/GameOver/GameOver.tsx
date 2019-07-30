import React from 'react'
import Firework from '../common/Firework/Firework'
import { GameState } from '@/services/store/modules/games/minesweeper/index.ts'
import './GameOver.less'

export interface Iprops {
  gamedState: any
  children?: React.ReactElement<any>
}

const GameOver = ({ children, gamedState }: Iprops) => {
  if (gamedState !== GameState.start) {
    return (
      <div className="c-GameOver">
        {gamedState === GameState.victory ? <Firework /> : ''}
        <div className="children">{children ? children : ''}</div>
      </div>
    )
  }
  return <div />
}

export default GameOver
