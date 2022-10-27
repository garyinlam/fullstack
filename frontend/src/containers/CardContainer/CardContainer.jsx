import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import "./CardContainer.scss"

const CardContainer = (props) => {
  const { cardArray, type } = props;

  const link = "/"+type+"/"

  const cardsJSX = cardArray?.map((card, index) => {
    const {id, title, image, description} = card;
    return (
    <Link to={link+id} key={index}>
      <Card 
        key={id}
        title={title}
        image={image}
        description={description}
        hasDescription={type !== "items" ? true : false} 
      />
    </Link>)
  })

  return (
    <div className='card-container'>
      {cardsJSX}
    </div>
  )
}

export default CardContainer