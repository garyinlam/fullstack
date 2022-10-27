import React from 'react'
import Level from '../Level/Level';
import "./Levels.scss"

const Levels = (props) => {
  const { data, type } = props;

  const dataJSX = data.map((one,index) => {
    if(index + 1 === data.length){
      return <Level label={type === "Basic" ? "MAX" : type === "Starting weapon" ? "AWAKENED" : index+1} text={one} key={index} />
    }
    return <Level label={index+1} text={one} key={index} />
  })

  return (
    <div className='levels'>
      {dataJSX}
    </div>
  )
}

export default Levels