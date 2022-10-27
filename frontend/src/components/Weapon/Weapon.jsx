import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Levels from '../Levels/Levels';
import WeaponStats from '../WeaponStats/WeaponStats';
import "./Weapon.scss"


const Weapon = () => {
  const [ weapon, setWeapon] = useState({});
  const [ playerId, setPlayerId] = useState(0);
  const [ playerName, setPlayerName] = useState("");
  const [ collabNames, setCollabNames] = useState([]);

  const { weaponId } = useParams();

  const {
    name,
    imageUrl,
    description,
    weaponType,
    damage,
    attackTime,
    attackCount,
    attackDelay,
    hitLimit,
    hitCooldown,
    area,
    duration,
    projectileSpeed,
    knockbackDuration,
    knockbackSpeed,
    component1,
    component2,
    hitRange,
    notes,
    level1,
    level2,
    level3,
    level4,
    level5,
    level6,
    levelAwakened,
  } = weapon ?? {};

  const stats = {
    damage: damage,
    attackTime: attackTime,
    attackCount: attackCount,
    attackDelay: attackDelay,
    hitLimit: hitLimit,
    hitCooldown: hitCooldown,
    area: area,
    duration: duration,
    projectileSpeed: projectileSpeed,
    knockbackDuration: knockbackDuration,
    knockbackSpeed: knockbackSpeed,
    hitRange: hitRange
  }

  const levels = [
    level1,
    level2,
    level3,
    level4,
    level5,
    level6,
    levelAwakened
  ]

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
    if(playerId !== 0 ){
      const res = await fetch(`http://localhost:8080/character/${playerId}/name`)
      const data = await res.text()
      setPlayerName(data)
    }
  }

  const getCollabWeapons = async () => {

    const res = await fetch(`http://localhost:8080/weapon/${component1}/name`)
    const data = await res.text()
    const res2 = await fetch(`http://localhost:8080/weapon/${component2}/name`)
    const data2 = await res2.text()

    setCollabNames([data,data2])

  }

  useEffect(() => {
    getWeapon();
  }, [])

  useEffect(() => {
    getWeapon();
  }, [weaponId])

  useEffect(() => {
    getPlayerName()
  }, [playerId])
  
  useEffect(() => {
    if(weaponType?.includes("Collab")){
      getCollabWeapons()
    }
  }, [weapon])

  return (
    <div className='weapon'>
      <h2 className='weapon__title'>{name}</h2>
      <img src={imageUrl} alt={name} />
      <p className='weapon__text'>{weaponType}</p>
      {weaponType?.includes("Collab") && (
        <>
          <p className='weapon__text'><Link to={`/weapons/${component1}`}><span className='link'>{collabNames[0]}</span></Link> X <Link to={`/weapons/${component2}`}><span className='link'>{collabNames[1]}</span></Link></p>
        </>
      )}
      <p className='weapon__text'>{description}</p>
      {playerId !== 0 && (
        <>
          <p className='weapon__text'>Used By:</p>
          <Link to={`/characters/${playerId}`}><p className='weapon__text link'>{playerName}</p></Link>
        </>
      )}
      <WeaponStats data={stats} />
      {(!weaponType?.includes("Collab")) && <Levels data={levels} type={weaponType} />}
      <p className='weapon__text'>{notes}</p>
    </div>
  )
}

export default Weapon