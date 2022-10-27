import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardContainer from '../CardContainer/CardContainer';
import "./Items.scss"

const Items = () => {
  const [items, setItems] = useState();
  const [sortValue, setSortValue] = useState("ID (ASC)");
  const [searchTerm, setSearchTerm] = useState("");

  const getItems = async () => {
    const num = await fetch("http://localhost:8080/items/count")
    const numOfResults = await num.json();
    
    const res = await fetch(`http://localhost:8080/items?limit=${numOfResults}`)
    const data = await res.json();

    const cleaned = data.map((item) => {
      return {
        id: item.id,
        title: item.name,
        image: item.imageUrl,
      }
    })

    setItems(cleaned);
  }

  const getSorting = (e) => {
    setSortValue(e.target.value);
  }

  const getSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  }

  const filteredItems = items?.filter((item) => 
    item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase()))
    .sort((a,b) => {
      switch (sortValue) {
        case "Name (ASC)":
          return a.title.localeCompare(b.title)
        case "Name (DSC)":
          return b.title.localeCompare(a.title)
        case "ID (ASC)":
          return a.id - b.id
        case "ID (DSC)":
          return b.id - a.id
        default:
          return 0;
      }
    })

  useEffect(() => {
    getItems();
  },[]);

  return (
    <div className='items'>
      <nav className='items__nav'>
        <SearchBar 
          sortOptions={["ID (ASC)","ID (DSC)","Name (ASC)","Name (DSC)",]}
          sortLabel="Sort by:"
          getSorting={getSorting}
          sortName="sorting"
          searchBy="item"
          getSearchTerm={getSearchTerm}
          needFilter={false}
        />
        <button className='items__button'><Link to="/additem">Add Item</Link></button>
      </nav>
      <CardContainer type={"items"} cardArray={filteredItems}/>
    </div>
  )
}

export default Items