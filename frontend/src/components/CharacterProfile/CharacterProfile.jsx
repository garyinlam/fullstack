import React from 'react'
import "./CharacterProfile.scss"

const CharacterProfile = (props) => {
  const {data} = props;
  const {
    name,
    imageUrl,
    group,
    hp,
    attack,
    speed,
    critical,
    flat
  } = data;
  return (
    <div className='char-profile'>
      <h2 className='char-profile__title'>{name}</h2>
      <img src={imageUrl} alt={name} className='char-profile__image'/>
      <p className='char-profile__text'>Group: {group}</p>
      <div className='char-profile__stats'>
        <h4>Base Stats</h4>
        <p className='char-profile__text'>HP: {hp}</p>
        <p className='char-profile__text'>ATK: {attack}</p>
        <p className='char-profile__text'>Speed: {speed}</p>
        <p className='char-profile__text'>Crit: {critical}</p>
        <p className='char-profile__text'>Flat: {flat ? "Yes" : "No"}</p>
      </div>
    </div>
  )
}

export default CharacterProfile