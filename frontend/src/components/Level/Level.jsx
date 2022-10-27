import React from 'react'
import "./Level.scss"

const Level = (props) => {
  const { label, text } = props;
  return (
    <div className='level'>
      <p className='level__label'>Level {label}</p>
      <p className='level--desc'>{text}</p>
    </div>
  )
}

export default Level