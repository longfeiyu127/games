import React from 'react'

interface Iporps {
  type: string
}

const Exception = (props: Iporps) => {
  const { type = '404' } = props
  return <div>{type}</div>
}

export default Exception
