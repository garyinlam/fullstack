import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./Weapon.scss"


const Weapon = () => {
  const [ weapon, setWeapon] = useState({});
  const [ playerId, setPlayerId] = useState(0);
  const [ playerName, setPlayerName] = useState("");
  const { weaponId } = useParams();

  const {
    name,
    imageUrl
  } = weapon;


  const getWeapon = async () => {
    const res = await fetch(`http://localhost:8080/weapon/${weaponId}`)
    const data = await res.json()
    setWeapon(data);

    const res2 = await fetch(`http://localhost:8080/weapon/${weaponId}/character`)
    try {
      const data2 = await res2.json()
      setPlayerId(data2)
    } catch (error) {
    }
    
  }

  const getPlayerName = async () => {
    if(playerId != 0 ){
      const res = await fetch(`http://localhost:8080/character/${playerId}/name`)
      const data = await res.text()
      setPlayerName(data)
    }
  }

  useEffect(() => {
    getWeapon();
  }, [])

  useEffect(() => {
    getPlayerName()
  }, [playerId])
  
  

  return (
    <div className='weapon'>
      <h2 className='weapon__title'>{name}</h2>
      <img src={imageUrl} alt={name} />
      {playerId != 0 && (
        <>
          <p className='weapon__text'>Used By:</p>
          <Link to={`/characters/${playerId}`}><p className='weapon__text link'>{playerName}</p></Link>
        </>
      )}
    </div>
  )
}

export default Weapon