import React, { useEffect, useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar';
import CardContainer from '../CardContainer/CardContainer';
import "./Characters.scss"

const Characters = () => {
  const [characters, setCharacters] = useState();
  const [groups, setGroups] = useState([]);
  const [filterGroup, setFilterGroup] = useState("All");
  const [sortValue, setSortValue] = useState("ID (ASC)");
  const [searchTerm, setSearchTerm] = useState("");

  const getCharacters = async () => {
    const num = await fetch("http://localhost:8080/characters/count")
    const numOfResults = await num.json();
    
    const res = await fetch(`http://localhost:8080/characters?limit=${numOfResults}`)
    const data = await res.json();

    const cleaned = data.map((item) => {
      return {
        id: item.id,
        title: item.name,
        image: item.imageUrl,
        description: item.generation
      }
    })

    setCharacters(cleaned);
  }

  const getGroups = async () => {
    const res = await fetch(`http://localhost:8080/characters/generations`)
    const data = await res.json();
    data.unshift("All")
    setGroups(data);
  }

  const getGroup = (e) => {
    setFilterGroup(e.target.value);
  }

  const getSorting = (e) => {
    setSortValue(e.target.value);
  }

  const getSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  }

  const filteredCharacters = characters?.filter((character) => 
    character.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase()))
    .filter((character) => filterGroup === "All" ? true : character?.description === filterGroup)
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
    getCharacters();
    getGroups();
  },[]);

  return (
    <div className='characters'>
      <SearchBar 
        filterOptions={groups}
        filterLabel="Filter by group:"
        getGroup={getGroup}
        filterName="groupFilter"
        sortOptions={["ID (ASC)","ID (DSC)","Name (ASC)","Name (DSC)",]}
        sortLabel="Sort by:"
        getSorting={getSorting}
        sortName="sorting"
        searchBy="character"
        getSearchTerm={getSearchTerm}
        needFilter={true}
      />
      <CardContainer type={"characters"} cardArray={filteredCharacters}/>
    </div>
  )
}

export default Characters