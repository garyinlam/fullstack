import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ItemForm from '../../components/ItemForm/ItemForm';
import "./UpdateItem.scss"

const UpdateItem = () => {
  const { itemId } = useParams();
  const [ item, setItem ] = useState({});
  const navigate = useNavigate()

  const location = useLocation();
  const itemPath = location.pathname.split("/").slice(0, -1).join("/");

  const handleSubmit = async (item) => {
    const request = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }
    const res = await fetch(`http://localhost:8080/item/${itemId}`,request)
    const data = await res.json();
    if(data != null){
      alert("Success")
      navigate(itemPath)
    }
  }

  let defaultFormState = item ?? {};

  const getItem = async () => {
    const res = await fetch(`http://localhost:8080/item/${itemId}`)
    const data = await res.json()
    defaultFormState = data
    console.log(data);
    setItem(data);
  }

  useEffect(() => {
    getItem();
  }, [])

  return (
    <div className='edit-item'>
      { Object.keys(defaultFormState).length !==0 && <ItemForm defaultFormState={defaultFormState} handleSubmit={handleSubmit} formTitle={`Edit ${item.name}`}/>}
    </div>
  )
}

export default UpdateItem