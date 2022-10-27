import React from 'react'
import "./DropDown.scss"

const DropDown = (props) => {
  const { options, label, handleChange, name} = props;

  const optionsJSX = options?.map((option,index) => (
    <option className='dropdown___option' value={option} key={index}>{option}</option>
  ))

  return (
    <div className='dropdown'>
      <label htmlFor={name} className="dropdown__label">{label}</label>
      <select name={name} id={name} onChange={handleChange} className="dropdown__select">
        {optionsJSX}
      </select>
    </div>
  )
}

export default DropDown