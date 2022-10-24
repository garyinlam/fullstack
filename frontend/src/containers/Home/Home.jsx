import React from 'react'
import Card from '../../components/Card/Card'
import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>
      <h2 className='home__title'>Welcome to the HoloCure Database</h2>
      <Card title="Amelia Watson" image="https://static.wikia.nocookie.net/holocure/images/7/7a/Amelia_Watson_Icon.png" isCharacter={true} description="HoloMyth"/>
    </div>
  )
}

export default Home