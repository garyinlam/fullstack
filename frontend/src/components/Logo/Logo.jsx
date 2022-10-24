import React from 'react'
import "./Logo.scss"
import logoImage from "../../assets/images/Site-logo.png"
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className='logo'>
      <Link to="/">
        <img src={logoImage} alt="holoCure logo" className='logo__image'/>
        <h1 className='logo__title'>HoloCure DB</h1>
      </Link>
    </div>
  )
}

export default Logo