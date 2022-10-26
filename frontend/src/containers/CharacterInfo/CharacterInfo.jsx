import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CharacterProfile from '../../components/CharacterProfile/CharacterProfile';
import "./CharacterInfo.scss"

const CharacterInfo = () => {
  const [char, setChar] = useState({});
  const {characterId} = useParams();

  const getCharacter = async () => {
    const res = await fetch(`http://localhost:8080/character/${characterId}`)
    const data = await res.json();
    setChar(data);
    console.log(char);
  }

  useEffect(() => {
    getCharacter()
  }, [])
  

  return (
    <div className='character-info'>
      <CharacterProfile data={char}/>
    </div>
  )
}

export default CharacterInfo