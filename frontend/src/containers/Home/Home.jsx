import React from 'react'
import CardContainer from '../CardContainer/CardContainer'
import "./Home.scss"

const Home = () => {

  const characters = [
    {
      id:1,
      title:"Amelia Watson",
      image:"https://static.wikia.nocookie.net/holocure/images/7/7a/Amelia_Watson_Icon.png",
      description:"HoloMyth"
    },{
      id:2,
      title:"Gawr Gura",
      image:"https://static.wikia.nocookie.net/holocure/images/9/9c/Gawr_Gura_Icon.png",
      description:"HoloMyth"
    }
  ]

  const items = [
    {
      id:1,
      title:"Sake",
      image:"https://static.wikia.nocookie.net/holocure/images/c/c7/Sake_Icon.png"
    }
  ]

  return (
    <div className='home'>
      <h2 className='home__title'>Welcome to the HoloCure Database</h2>
      <CardContainer cardArray={characters} type={0} />
      <CardContainer cardArray={items} type={2} />

    </div>
  )
}

export default Home