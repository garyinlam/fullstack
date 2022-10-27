import React from 'react'
import Levels from '../Levels/Levels'
import Notes from '../Notes/Notes'
import "./Skill.scss"

const Skill = (props) => {
  const {data} = props
  const {
    name,
    imageUrl,
    level1,
    level2,
    level3,
    notes
  } = data ?? {}

  return (
    <div className='skill'>
      <h4 className='sill_title'>{name}</h4>
      <img src={imageUrl} alt={name} className="skill__image" />
      <div className='skill__levels'>
        <Levels data={[level1,level2,level3]} />
      </div>
      <div className='skill__notes'><Notes data={notes}/></div>
    </div>
  )
}

export default Skill