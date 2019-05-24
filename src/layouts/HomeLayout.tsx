import React from 'react'

export default ({ children = '' }) => (
  <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>{children}</div>
)
