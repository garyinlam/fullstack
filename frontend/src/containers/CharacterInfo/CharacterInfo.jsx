import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CharacterProfile from '../../components/CharacterProfile/CharacterProfile';
import Skill from '../../components/Skill/Skill';
import Special from '../../components/Special/Special';
import "./CharacterInfo.scss"

const CharacterInfo = () => {
  const [char, setChar] = useState({});
  const {characterId} = useParams();

  const getCharacter = async () => {
    const res = await fetch(`http://localhost:8080/character/${characterId}`)
    const data = await res.json();
    setChar(data);
  }

  useEffect(() => {
    getCharacter()
  }, [])

  const skillsJSX = char.skills?.map((skill,index) => (
    <Skill data={skill} key={index}/>
  ))
  

  return (
    <div className='character-info'>
      <div className='character-info__left'>
        <CharacterProfile data={char}/>
        <div className='line'/>
        <p className='character-info__text'>Weapon:</p>
        <Link to={`/weapons/${char.weapon?.id}`}><p className='character-info__weapon link'>{char.weapon?.name}</p></Link>
        <div className='line'/>
        <h3 className='character-info__subtitle'>Special</h3>
        <Special data={char.special}/>
      </div>
      <div className='character-info__right'>
        <h3 className='character-info__subtitle'>Skills</h3>
        {skillsJSX}
      </div>
    </div>
  )
}

export default CharacterInfo