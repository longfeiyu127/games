import React from 'react'
import renderer from 'react-test-renderer'
import Firmament from '../firmament.tsx'

describe('<Firmament />', () => {
  it('component developers/Firmament render', () => {
    const Dom = renderer.create(<Firmament />).toJSON()
    expect(Dom).toMatchSnapshot()
  })
})
