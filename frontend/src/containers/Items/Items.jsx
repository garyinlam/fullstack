import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CardContainer from '../CardContainer/CardContainer';
import "./Items.scss"

const Items = () => {
  const [items, setItems] = useState();

  const getItems = async () => {
    const num = await fetch("http://localhost:8080/items/count")
    const numOfResults = await num.json();
    
    const res = await fetch(`http://localhost:8080/items?limit=${numOfResults}`)
    const data = await res.json();

    const cleaned = data.map((item) => {
      return {
        id: item.id,
        title: item.name,
        image: item.imageUrl,
      }
    })

    setItems(cleaned);
  }

  useEffect(() => {
    getItems();
  },[]);

  return (
    <div className='items'>
      <nav className='items__nav'>
        <button className='items__button'><Link to="/additem">Add Item</Link></button>
      </nav>
      <CardContainer type={"items"} cardArray={items}/>
    </div>
  )
}

export default Items