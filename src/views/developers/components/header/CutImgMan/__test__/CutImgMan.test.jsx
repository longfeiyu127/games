import React from 'react'
import renderer from 'react-test-renderer'
import CutImgMan from '../CutImgMan.tsx'

describe('<CutImgMan />', () => {
  it('component developers/header/CutImgMan render', () => {
    const Dom = renderer.create(<CutImgMan />).toJSON()
    expect(Dom).toMatchSnapshot()
  })
})
