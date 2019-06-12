import React from 'react'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router'
import LOVE from '../LOVE.tsx'

describe('<LOVE />', () => {
  it('component common/LOVE render', () => {
    const Dom = renderer
      .create(
        <MemoryRouter>
          <LOVE />
        </MemoryRouter>
      )
      .toJSON()
    expect(Dom).toMatchSnapshot()
  })
})
