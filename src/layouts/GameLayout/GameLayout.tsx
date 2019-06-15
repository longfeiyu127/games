import React from 'react'
import './GameLayout.less'

export default ({ children = '', className = '' }) => <div className={`l-GameLayout ${className}`}>{children}</div>
