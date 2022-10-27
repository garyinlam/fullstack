import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Level from '../Level/Level';
import Levels from '../Levels/Levels';
import Notes from '../Notes/Notes';
import "./Item.scss"

const Item = () => {
  const [ item, setItem ] = useState({});
  const { itemId } = useParams();
  const navigate = useNavigate();

  const {
    name,
    imageUrl,
    maxLevel,
    weight,
    description,
    levels,
    superLevel,
    notes
  } = item ?? {}

  const getItem = async () => {
    const res = await fetch(`http://localhost:8080/item/${itemId}`)
    const data = await res.json()
    setItem(data);
  }

  const handleDeleteItem = async () => {
    await fetch(`http://localhost:8080/item/${itemId}`,{method: 'DELETE'});
    navigate("/");
  };

  const handleEdit = () => {
    navigate("edit")
  }

  useEffect(() => {
    getItem();
  }, [])

  return (
    <div className='item'>
      <div className='item__left'>
        <h2 className='item__title'>{name}</h2>
        <img src={imageUrl} alt={name} className="item__image"/>
        <p className='item__text'>{description}</p>
        <p className='item__text'>Max level: {maxLevel}</p>
        <p className='item__text'>Weight: {weight}</p>
        <Notes data={notes}/>
      </div>
      <div className='item__right'>
        <Levels data={levels?.split("|") ?? []} />
        {superLevel && <Level label="Super" text={superLevel}/>}
      </div>
      <div className='item__buttons'>
        <button className='item__button item__button--update' onClick={handleEdit}>Update</button>
        <button className='item__button item__button--delete' onClick={handleDeleteItem}>Delete</button>
      </div>
      
    </div>
  )
}

export default Item