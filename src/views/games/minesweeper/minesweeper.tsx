import React from 'react'
import { connect } from 'react-redux'
import './minesweeper.less'
import GameLayout from '@/layouts/GameLayout/GameLayout.tsx'
import Board from './components/board/board'
import Cell from './components/cell/cell'

interface Iprops {
  MarkedState: boolean
  resetBoard: () => {}
  switchMarkedState: () => {}
}

function Minesweeper({ resetBoard, MarkedState, switchMarkedState }: Iprops) {
  return (
    <GameLayout>
      <div className="c-Minesweeper">
        <div className="header">
          <Cell type="🔄" onClick={resetBoard} cols={-1} rows={-1} key={-1} />
        </div>
        <Board />
        <div className="footer">
          <Cell type={MarkedState ? '🚩' : '🔍'} onClick={switchMarkedState} cols={-2} rows={-2} key={-2} />
        </div>
      </div>
    </GameLayout>
  )
}

const mapStateToProps = (state: any) => ({
  MarkedState: state.minesweeper.MarkedState
})

const mapDispatchToProps = (dispatch: any) => ({
  resetBoard: dispatch.minesweeper.resetBoard,
  switchMarkedState: dispatch.minesweeper.switchMarkedState
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Minesweeper)
