import React from 'react'
import { connect } from 'react-redux'
import './minesweeper.less'
import GameLayout from '@/layouts/GameLayout/GameLayout.tsx'
import GameOver from '@/components/GameOver/GameOver.tsx'
import Board from './components/board/board'
import Cell from './components/cell/cell'
import { GameState } from '@/services/store/modules/games/minesweeper.ts'

interface Iprops {
  MarkedState: boolean
  gamedState: any
  resetBoard: () => {}
  switchMarkedState: () => {}
}

export function Minesweeper({ resetBoard, gamedState, MarkedState, switchMarkedState }: Iprops) {
  return (
    <GameLayout>
      <div className="c-Minesweeper">
        <div className="Minesweeper">
          <div className="header">
            <Cell type="🔄" onClick={resetBoard} cols={-1} rows={-1} key={-1} />
          </div>
          <Board />
          <div className="footer">
            <Cell type={MarkedState ? '🚩' : '🔍'} onClick={switchMarkedState} cols={-2} rows={-2} key={-2} />
          </div>
        </div>
      </div>
      <GameOver gamedState={gamedState}>
        <div className="gameover">
          <Cell type="🔄" onClick={resetBoard} cols={-1} rows={-1} key={-1} />
        </div>
      </GameOver>
    </GameLayout>
  )
}

const mapStateToProps = (state: any) => ({
  MarkedState: state.minesweeper.MarkedState,
  gamedState: state.minesweeper.gamedState
})

const mapDispatchToProps = (dispatch: any) => ({
  resetBoard: dispatch.minesweeper.resetBoard,
  switchMarkedState: dispatch.minesweeper.switchMarkedState
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Minesweeper)
