import React from 'react'
import { Link } from 'react-router-dom'
import "./Links.scss"

const Links = () => {
  return (
    <div className='links'>
      <ul className='links__list'>
        <Link to="/"><p className='links__item'>Home</p></Link>
        <Link to="/characters"><p className='links__item'>Characters</p></Link>
        <Link to="/weapons"><p className='links__item'>Weapons</p></Link>
        <Link to="/items"><p className='links__item'>Items</p></Link>
      </ul>
    </div>
  )
}

export default Links