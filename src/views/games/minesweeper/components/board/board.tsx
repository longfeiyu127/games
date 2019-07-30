import React from 'react'
import { connect } from 'react-redux'
import './board.less'
import Cell from '../cell/cell'
import { shutDownType, CellState } from '@/services/store/modules/games/minesweeper.ts'

interface Iprops {
  BoardState: any[]
  trampleCell: () => {}
}

export function Board({ BoardState, trampleCell }: Iprops) {
  return (
    <div className="c-Board">
      {BoardState.map((line: any[], i: number) => {
        return (
          <div className="line" key={i}>
            {line.map((item: any, j: number) => {
              if (item && item.state === CellState.shutDown) {
                return <Cell type={shutDownType} mark={item.mark} onClick={trampleCell} cols={i} rows={j} key={j} />
              }
              return (
                <Cell mark={item.mark} type={item ? item.type : ''} onClick={trampleCell} cols={i} rows={j} key={j} />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  BoardState: state.minesweeper.BoardState
})

const mapDispatchToProps = (dispatch: any) => ({
  trampleCell: dispatch.minesweeper.trampleCell
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)
