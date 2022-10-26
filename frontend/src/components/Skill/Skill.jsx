import React from 'react'
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
        <p className='skill__level--label'>Level 1</p>
        <p className='skill__level--desc'>{level1}</p>
        <p className='skill__level--label'>Level 2</p>
        <p className='skill__level--desc'>{level2}</p>
        <p className='skill__level--label'>Level 3</p>
        <p className='skill__level--desc'>{level3}</p>
      </div>
      <p className='skill__notes'>{notes}</p>
    </div>
  )
}

export default Skill