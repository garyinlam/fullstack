import React from 'react'
import "./Card.scss"

const Card = (props) => {
  const { title, image, isCharacter, description } = props;
  return (
    <div className='card'>
      <h3 className='card__title'>{title}</h3>
      <img src={image} alt={title} />
      {isCharacter && <p>{description}</p>}
    </div>
  )
}

export default Card