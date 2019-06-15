export enum cellType {
  '⬜',
  '1️⃣',
  '2️⃣',
  '3️⃣',
  '4️⃣',
  '5️⃣',
  '6️⃣',
  '7️⃣',
  '8️⃣',
  '⬛',
  '🚩',
  '💥',
  '💣'
}

export const emptyType = cellType[0]
export const shutDownType = cellType[9]
export const minesType = cellType[12]
export const explosionType = cellType[11]

export enum cellState {
  'open',
  'shutDown'
}

export interface Icell {
  type: cellType
  cols: number
  rows: number
  state: cellState
  mark: boolean
}

const defaultCount = 10

const getRandom = () => Math.floor(Math.random() * defaultCount)

const creatCell = (type: cellType, cols: number, rows: number): Icell => ({
  type,
  cols,
  rows,
  state: cellState.shutDown,
  mark: false
})

const setMines = (BoardState: any[]) => {
  let count = defaultCount
  let i: number = 0
  let j: number = 0
  while (count) {
    i = getRandom()
    j = getRandom()
    const cell = BoardState[i][j]
    if (!cell) {
      // @ts-ignore
      BoardState[i][j] = creatCell(minesType, i, j)
      count--
    }
  }
  return BoardState
}

const getEffectiveCell = (aroundArr: any[], targetArr: any[], i: number, j: number) => {
  if (i >= 0 && i < defaultCount && j >= 0 && j < defaultCount) {
    return aroundArr.push(targetArr[i][j])
  } else {
    return aroundArr
  }
}

const getAroundArr = (BoardState: any[], i: number, j: number): any[] => {
  const aroundArr: any[] = []
  getEffectiveCell(aroundArr, BoardState, i - 1, j - 1)
  getEffectiveCell(aroundArr, BoardState, i - 1, j)
  getEffectiveCell(aroundArr, BoardState, i - 1, j + 1)
  getEffectiveCell(aroundArr, BoardState, i, j - 1)
  getEffectiveCell(aroundArr, BoardState, i, j + 1)
  getEffectiveCell(aroundArr, BoardState, i + 1, j - 1)
  getEffectiveCell(aroundArr, BoardState, i + 1, j)
  getEffectiveCell(aroundArr, BoardState, i + 1, j + 1)
  return aroundArr
}

const GetMineCount = (BoardState: any[], i: number, j: number): number => {
  return getAroundArr(BoardState, i, j).filter((item: any) => item && item.type === minesType).length
}

const setCount = (BoardState: any[]) => {
  return BoardState.map((line: any[], i: number) => {
    return line.map((cell: any, j: number) => {
      if (cell) {
        return cell
      } else {
        // @ts-ignore
        return creatCell(cellType[GetMineCount(BoardState, i, j)], i, j)
      }
    })
  })
}

const getEmptyArr = (): any[] => {
  const arr = new Array()
  for (let x = 0; x < defaultCount; x++) {
    arr[x] = new Array()
    for (let y = 0; y < defaultCount; y++) {
      arr[x][y] = void 0
    }
  }
  return arr
}

const resetBoardState = (): any[] => {
  let BoardState = getEmptyArr()
  BoardState = setCount(setMines(BoardState))
  return BoardState
}

export interface Istate {
  BoardState: any[]
  gameOver: boolean
  MarkedState: boolean
  minesCount: number
}

const onEmpty = (BoardState: any[], cell: Icell) => {
  const { cols, rows } = cell
  const aroundArr = getAroundArr(BoardState, cols, rows)
  aroundArr.map((item: Icell) => {
    if (item.state === cellState.shutDown) {
      // tslint:disable-next-line:no-shadowed-variable
      const { cols, rows } = item
      trample(BoardState, cols, rows)
    }
  })
}

const onMines = (BoardState: any[], cell: Icell) => {
  const { cols, rows } = cell
  let minesCount = 1
  // @ts-ignore
  cell.type = explosionType
  for (let line of BoardState) {
    for (let item of line) {
      if (item.type === minesType) {
        item.state = cellState.open
        minesCount++
      }
      if (minesCount === defaultCount) {
        return
      }
    }
  }
}

const trample = (BoardState: any[], cols: number, rows: number) => {
  const cell = BoardState[cols][rows]
  cell.state = cellState.open
  let gameOver = false
  switch (cell.type) {
    case emptyType:
      onEmpty(BoardState, cell)
      break
    case minesType:
      gameOver = true
      onMines(BoardState, cell)
      break
    default:
      break
  }
  return {
    gameOver,
    BoardState: [...BoardState]
  }
}

const resetState = (): Istate => {
  return {
    BoardState: resetBoardState(),
    gameOver: false,
    MarkedState: false,
    minesCount: defaultCount
  }
}

export default {
  state: resetState(),
  reducers: {
    trampleCell(state: Istate, { cols, rows }: { cols: number; rows: number }) {
      if (state.gameOver) {
        return state
      }
      const cell = state.BoardState[cols][rows]
      if (state.MarkedState) {
        if (!cell.mark) {
          cell.mark = true
        }
        return {
          ...state,
          BoardState: [...state.BoardState]
        }
      } else {
        if (cell.mark) {
          return state
        }
      }
      const { BoardState, gameOver } = trample(state.BoardState, cols, rows)
      return {
        ...state,
        BoardState,
        gameOver
      }
    },
    resetBoard() {
      return resetState()
    },
    switchMarkedState(state: Istate) {
      state.MarkedState = !state.MarkedState
      return {
        ...state
      }
    }
  }
}
