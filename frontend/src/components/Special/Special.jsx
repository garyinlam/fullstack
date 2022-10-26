import React from 'react'
import "./Special.scss"

const Special = (props) => {
  const {data} = props;
  const {
    name,
    cooldown,
    imageUrl,
    description
  } = data;
  return (
    <div className='special'>
      <h4 className='special__title'>{name}</h4>
      <img src={imageUrl} alt={name} className="special__image" />
      <p className='special__text'>Cooldown: {cooldown} seconds</p>
      <p className='special__text'>{description}</p>
    </div>
  )
}

export default Special