import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Board } from '../board.tsx'
import Cell from '../../cell/cell'
Enzyme.configure({ adapter: new Adapter() })

const testData = [
  [
    { type: '⬜', cols: 0, rows: 0, state: 0, mark: false },
    { type: '1️⃣', cols: 0, rows: 1, state: 0, mark: false },
    { type: '1️⃣', cols: 0, rows: 2, state: 1, mark: true },
    { type: '1️⃣', cols: 0, rows: 3, state: 0, mark: false },
    { type: '⬜', cols: 0, rows: 4, state: 0, mark: true },
    { type: '⬜', cols: 0, rows: 5, state: 0, mark: false },
    { type: '⬛', cols: 0, rows: 6, state: 0, mark: false },
    { type: '1️⃣', cols: 0, rows: 7, state: 0, mark: false },
    { type: '3️⃣', cols: 0, rows: 8, state: 1, mark: false },
    { type: '💣', cols: 0, rows: 9, state: 0, mark: false }
  ]
]

describe('<Board />', () => {
  it('component minesweeper/Board render', () => {
    const Dom = renderer.create(<Board BoardState={testData} trampleCell={() => {}} />).toJSON()
    expect(Dom).toMatchSnapshot()
  })

  it('component minesweeper/Board mount', () => {
    const onClick = jest.fn()
    const board = mount(<Board BoardState={testData} trampleCell={onClick} />)
    expect(board.find(Board).length).toBe(1)
    expect(board.find(Cell).length).toBe([].concat(...testData).length)
  })
})
