import React from 'react'
import renderer from 'react-test-renderer'
import Firework from '../Firework.tsx'

describe('<Firework />', () => {
  it('component common/Firework render', () => {
    const Dom = renderer.create(<Firework />).toJSON()
    expect(Dom).toMatchSnapshot()
  })
})
