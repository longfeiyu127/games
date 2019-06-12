import React from 'react'
import renderer from 'react-test-renderer'
import Pentagram from '../pentagram.tsx'

describe('<Pentagram />', () => {
  it('component developers/header/Pentagram render', () => {
    const Dom = renderer.create(<Pentagram />).toJSON()
    expect(Dom).toMatchSnapshot()
  })
})
