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

export enum CellState {
  'open',
  'shutDown'
}
export enum GameState {
  'start',
  'victory',
  'failure'
}

export interface Icell {
  type: cellType
  cols: number
  rows: number
  state: CellState
  mark: boolean
}

const defaultCount = 10

const getRandom = () => Math.floor(Math.random() * defaultCount)

const creatCell = (type: cellType, cols: number, rows: number): Icell => ({
  type,
  cols,
  rows,
  state: CellState.shutDown,
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

const onEmpty = (BoardState: any[], cell: Icell, openCount: number) => {
  const { cols, rows } = cell
  const aroundArr = getAroundArr(BoardState, cols, rows)
  let constRes: number = openCount
  aroundArr.map((item: Icell) => {
    if (item.state === CellState.shutDown) {
      // tslint:disable-next-line:no-shadowed-variable
      // const { cols, rows } = item
      openCount = trample(BoardState, item, openCount).openCount
    }
  })
  return { openCount }
}

const onMines = (BoardState: any[], cell: Icell) => {
  const { cols, rows } = cell
  let minesCount = 1
  // @ts-ignore
  cell.type = explosionType
  for (let line of BoardState) {
    for (let item of line) {
      if (item.type === minesType) {
        item.state = CellState.open
        minesCount++
      }
      if (minesCount === defaultCount) {
        return
      }
    }
  }
}

const trample = (BoardState: any[], cell: Icell, openCount: number) => {
  // console.log(minesweeper)
  // const cell = BoardState[cols][rows]
  cell.state = CellState.open
  openCount++
  // console.log(openCount)
  let gamedState = GameState.start
  if (openCount === defaultCount * (defaultCount - 1)) {
    gamedState = GameState.victory
  }
  switch (cell.type) {
    // @ts-ignore
    case emptyType:
      openCount = onEmpty(BoardState, cell, openCount).openCount
      break
    // @ts-ignore
    case minesType:
      gamedState = GameState.failure
      onMines(BoardState, cell)
      break
    default:
      break
  }
  return {
    gamedState,
    BoardState: [...BoardState],
    openCount
  }
}

export interface Istate {
  BoardState: any[]
  MarkedState: boolean
  gamedState: GameState
  openCount: number
  minesCount: number
}

const resetState = (): Istate => {
  return {
    BoardState: resetBoardState(),
    MarkedState: false,
    gamedState: GameState.start,
    openCount: 0,
    minesCount: defaultCount
  }
}

const minesweeper = {
  state: resetState(),
  reducers: {
    trampleCell(state: Istate, { cols, rows }: { cols: number; rows: number }) {
      if (state.gamedState !== GameState.start) {
        return state
      }
      const cell = state.BoardState[cols][rows]
      if (state.MarkedState) {
        if (cell.state === CellState.shutDown) {
          cell.mark = !cell.mark
        }
        console.log(state.BoardState)
        return {
          ...state,
          BoardState: [...state.BoardState]
        }
      } else {
        if (cell.mark) {
          return state
        }
      }
      const { BoardState, gamedState, openCount } = trample(state.BoardState, cell, state.openCount)
      console.log(BoardState)
      // console.log(openCount)
      return {
        ...state,
        BoardState,
        gamedState,
        openCount
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
    },
    addOpenCount(state: Istate) {
      state.openCount++
      console.log(state.openCount)
      if (state.openCount === defaultCount * (defaultCount - 1)) {
        state.gamedState = GameState.victory
        console.log(GameState.victory)
      }
      return {
        ...state
      }
    },
    setGameState(state: Istate, gamedState: GameState) {
      return {
        ...state,
        gamedState
      }
    }
  }
}

export default minesweeper
