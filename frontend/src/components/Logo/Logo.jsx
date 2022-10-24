import React from 'react'
import "./Logo.scss"
import logoImage from "../../assets/images/Site-logo.png"

const Logo = () => {
  return (
    <div className='logo'>
      <img src={logoImage} alt="holoCure logo" className='logo__image'/>
      <h1 className='logo__title'>HoloCure DB</h1>
    </div>
  )
}

export default Logo