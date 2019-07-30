import React from 'react'
// import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Minesweeper } from '../minesweeper'
import { GameState } from '@/services/store/modules/games/minesweeper/index.ts'

Enzyme.configure({ adapter: new Adapter() })

// const testData = [
//   {
//     MarkedState: true,
//     gamedState: GameState[0]
//   },
//   {
//     MarkedState: false,
//     gamedState: GameState[1]
//   },
//   {
//     MarkedState: true,
//     gamedState: GameState[2]
//   }
// ]

/**
 *   MarkedState: boolean
  gamedState: any
  resetBoard: () => {}
  switchMarkedState: () => {}
 */

describe('<Minesweeper />', () => {
  // it('component Minesweeper render', () => {
  //   const Dom = renderer
  //     .create(
  //       <div>
  //         {testData.map((item, index) => (
  //           <Minesweeper {...item} />
  //         ))}
  //       </div>
  //     )
  //     .toJSON()
  //   expect(Dom).toMatchSnapshot()
  // })

  it('component Minesweeper shallow', () => {
    const resetBoard = jest.fn()
    const switchMarkedState = jest.fn()
    const testData = {
      MarkedState: true,
      gamedState: GameState[0],
      resetBoard,
      switchMarkedState
    }
    const minesweeper = shallow(<Minesweeper {...testData} />)
    expect(minesweeper.find('GameOver').length).toBe(1)
  })
})
