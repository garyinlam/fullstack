import React from 'react'
import Levels from '../Levels/Levels'
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

  const notesJSX = notes?.split("|")?.map((note) => (
    <li>{note}</li>
  ))

  return (
    <div className='skill'>
      <h4 className='sill_title'>{name}</h4>
      <img src={imageUrl} alt={name} className="skill__image" />
      <div className='skill__levels'>
        <Levels data={[level1,level2,level3]} />
      </div>
      <ul className='skill__notes'>{notesJSX}</ul>
    </div>
  )
}

export default Skill