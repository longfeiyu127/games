import { resetBoardState, trample, defaultCount, cellType, minesType, GameState, CellState } from '../index'

describe('store/game/minesweeper', () => {
  it('test store/game/minesweeper', () => {
    let BoardState = resetBoardState()
    let flatBoardState = [].concat(...BoardState)
    expect(flatBoardState.filter(item => item.type === minesType).length).toBe(defaultCount)
    let openCount = 0
    let trampleCell = null
    for (const item of flatBoardState) {
      if (item.type === cellType[1]) {
        trampleCell = item
        break
      }
    }
    // start
    const trampleOne = trample(BoardState, trampleCell, openCount)
    expect(trampleOne.openCount).toBe(1)
    expect(trampleOne.gamedState).toBe(GameState.start)
    for (const item of flatBoardState) {
      if (item.type === cellType[12]) {
        trampleCell = item
        break
      }
    }
    // failure
    openCount = 1
    const trampleMines = trample(BoardState, trampleCell, openCount)
    expect(trampleMines.openCount).toBe(2)
    expect(trampleMines.gamedState).toBe(GameState.failure)
    expect(flatBoardState.filter(item => item.type === cellType[11]).length).toBe(1)
    expect(flatBoardState.filter(item => item.type === cellType[12]).length).toBe(9)
    // victory
    BoardState = resetBoardState()
    flatBoardState = [].concat(...BoardState)
    let result = null
    openCount = 0
    for (let i = 0; i < BoardState.length; i++) {
      const line = BoardState[i]
      for (let j = 0; j < line.length; j++) {
        const item = line[j]
        if (item.state !== CellState.open && item.type !== cellType[12]) {
          result = trample(BoardState, item, result ? result.openCount : 0)
        }
      }
    }
    expect(result.openCount).toBe(90)
    expect(result.gamedState).toBe(GameState.victory)
  })
})
