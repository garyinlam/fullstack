import React from 'react'
import "./Notes.scss"

const Notes = (props) => {
  const {data} = props;
  const dataJSX = data?.split("|")?.map((note,index) => (
    <li className='notes__single' key={index}>{note}</li>
  ))
  return (
    <div className='notes'>
      <h3 className='notes__title'>Notes</h3>
      <ul className='notes__list'>
        {dataJSX}
      </ul>
    </div>
  )
}

export default Notes