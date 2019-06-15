import React from 'react'
import './cell.less'

interface Iprops {
  type: string
  cols: number
  rows: number
  onClick: ({ cols, rows }: { cols: number; rows: number }) => void
  mark?: boolean
}

function Cell({ type, cols, rows, onClick, mark = false }: Iprops) {
  return (
    <div className="c-Cell" onClick={() => onClick({ cols, rows })}>
      {type}
      {mark ? <div className="mark">🚩</div> : ''}
    </div>
  )
}

export default Cell
