import React, { useEffect, useState } from 'react'
import CardContainer from '../CardContainer/CardContainer';
import "./Characters.scss"

const Characters = () => {
  const [characters, setCharacters] = useState();

  const getCharacters = async () => {
    const num = await fetch("http://localhost:8080/characters/count")
    const numOfResults = await num.json();
    
    const res = await fetch(`http://localhost:8080/characters?limit=${numOfResults}`)
    const data = await res.json();

    const cleaned = data.map((item) => {
      return {
        id: item.id,
        title: item.name,
        image: item.imageUrl,
        description: item.generation
      }
    })

    setCharacters(cleaned);
  }

  useEffect(() => {
    getCharacters();
  },[]);

  return (
    <div className='characters'>
      <CardContainer type={"characters"} cardArray={characters}/>
    </div>
  )
}

export default Characters