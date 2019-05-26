import React from 'react'
import './Dice.less'

const creatDot = (count: number) => {
  return Array(count)
    .fill(undefined)
    .map((item, index) => {
      return <div className="circle" key={index} />
    })
}

const Dice = () => {
  const oneDot = creatDot(1)
  const twoDot = creatDot(2)
  const threeDot = creatDot(3)
  return (
    <div className="c-Dice">
      {/* <div className="Dice-shadow" /> */}
      <div className="Dice-center">
        <ul>
          <li>{oneDot}</li>
          <li>{twoDot}</li>
          <li>{threeDot}</li>
          <li>
            <div>{twoDot}</div>
            <div>{twoDot}</div>
          </li>
          <li>
            <div>{twoDot}</div>
            <div>{oneDot}</div>
            <div>{twoDot}</div>
          </li>
          <li>
            <div>{twoDot}</div>
            <div>{twoDot}</div>
            <div>{twoDot}</div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Dice
