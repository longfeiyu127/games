import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Cell from '../cell.tsx'

Enzyme.configure({ adapter: new Adapter() })

const testData = ['🔄', '🚩', '🔍', '⬜', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '⬛', '🚩', '💥', '💣']

describe('<Cell />', () => {
  it('component minesweeper/Cell render', () => {
    const Dom = renderer
      .create(
        <div>
          {testData.map((item, index) => (
            <Cell type={item} cols={index} rows={index} key={index} />
          ))}
        </div>
      )
      .toJSON()
    expect(Dom).toMatchSnapshot()
  })

  it('component minesweeper/Cell click event', () => {
    const onClick = jest.fn()
    const cell = mount(<Cell type="🔄" onClick={onClick} cols={-1} rows={-1} key={-1} />)
    cell.find('div').simulate('click')
    expect(onClick.mock.calls.length).toBe(1)
    cell.find('div').simulate('click')
    expect(onClick.mock.calls.length).toBe(2)
  })
})
