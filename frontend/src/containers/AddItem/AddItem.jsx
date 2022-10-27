import React from 'react'
import "./AddItem.scss"
import { useNavigate } from 'react-router-dom'
import ItemForm from '../../components/ItemForm/ItemForm'

const AddItem = () => {
  const navigate = useNavigate();

  const handleSubmit = async (item) => {
    const request = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }
    const res = await fetch("http://localhost:8080/item",request)
    const data = await res.json();
    if(data != null){
      alert("Success")
      navigate("/")
    }
  }

  const defaultFormState = { name: "", imageUrl: "", maxLevel: 0, weight: 0, description: "", levels: "", superLevel: "", notes: "",};

  return (
    <div className='add-item'>
      <ItemForm defaultFormState={defaultFormState} handleSubmit={handleSubmit} formTitle="Add a new item"/>
    </div>
  )
}

export default AddItem