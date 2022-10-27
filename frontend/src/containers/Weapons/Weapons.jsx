import React, { useEffect, useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar';
import CardContainer from '../CardContainer/CardContainer';

import "./Weapons.scss"

const Weapons = () => {
  const [weapons, setWeapons] = useState();
  const [types, setTypes] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [sortValue, setSortValue] = useState("ID (ASC)");
  const [searchTerm, setSearchTerm] = useState("");

  const getWeapons = async () => {
    const num = await fetch("http://localhost:8080/weapons/count")
    const numOfResults = await num.json();
    
    const res = await fetch(`http://localhost:8080/weapons?limit=${numOfResults}`)
    const data = await res.json();

    const cleaned = data.map((item) => {
      return {
        id: item.id,
        title: item.name,
        image: item.imageUrl,
        description: item.weaponType
      }
    })

    setWeapons(cleaned);
  }

  const getTypes = async () => {
    const res = await fetch(`http://localhost:8080/weapons/types`)
    const data = await res.json();
    data.unshift("All")
    setTypes(data);
  }

  const getType = (e) => {
    setFilterType(e.target.value);
  }

  const getSorting = (e) => {
    setSortValue(e.target.value);
  }

  const getSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  }

  const filteredWeapons = weapons?.filter((weapon) => 
    weapon.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase()))
    .filter((weapon) => filterType === "All" ? true : weapon?.description === filterType)
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
    getWeapons();
    getTypes()
  },[]);

  return (
    <div className='weapons'>
      <SearchBar 
        filterOptions={types}
        filterLabel="Filter by type:"
        getGroup={getType}
        filterName="typeFilter"
        sortOptions={["ID (ASC)","ID (DSC)","Name (ASC)","Name (DSC)",]}
        sortLabel="Sort by:"
        getSorting={getSorting}
        sortName="sorting"
        searchBy="weapon"
        getSearchTerm={getSearchTerm}
        needFilter={true}
      />
      <CardContainer type={"weapons"} cardArray={filteredWeapons}/>
    </div>
  )
}

export default Weapons