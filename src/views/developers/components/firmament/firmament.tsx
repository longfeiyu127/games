import React from 'react'
import './firmament.less'

const Firmament = () => (
  <div className="c-firmament">
    <div className="dawn" />
    {/* <div className="dawn magenta" /> */}
    <div className="star">
      <div className="star-shadow" />
    </div>
    <div className="multiple-star before" />
    <div className="multiple-star" />
    <div className="multiple-star after" />
    <div className="shooting-star" />
    <div className="shooting-star after" />
  </div>
)

export default Firmament
