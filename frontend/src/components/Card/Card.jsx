import React from 'react'
import "./Card.scss"

const Card = (props) => {
  const { title, image, hasDescription, description } = props;
  return (
    <div className='card'>
      <h3 className='card__title'>{title}</h3>
      <img src={image} alt={title} className="card__image"/>
      {hasDescription && <p>{description}</p>}
    </div>
  )
}

export default Card