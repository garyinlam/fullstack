import React, { useEffect, useState } from 'react'
import CardContainer from '../CardContainer/CardContainer';

import "./Weapons.scss"

const Weapons = () => {
  const [weapons, setWeapons] = useState();

  const getWeapons = async () => {
    const num = await fetch("http://localhost:8080/weapons/count")
    const numOfResults = await num.json();
    
    const res = await fetch(`http://localhost:8080/weapons?limit=${numOfResults}`)
    const data = await res.json();

    const cleaned = data.map((item) => {
      return {
        id: item.id,
        title: item.name,
        image: item.imageUrl,
        description: item.weaponType
      }
    })

    setWeapons(cleaned);
  }

  useEffect(() => {
    getWeapons();
  },[]);

  return (
    <div className='weapons'>
      <CardContainer type={1} cardArray={weapons}/>
    </div>
  )
}

export default Weapons