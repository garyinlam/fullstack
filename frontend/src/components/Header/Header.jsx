import React from 'react'
import Links from '../Links/Links'
import Logo from '../Logo/Logo'
import "./Header.scss"

const Header = () => {
  return (
    <header className='header'>
      <Logo />
      <Links />
    </header>
  )
}

export default Header