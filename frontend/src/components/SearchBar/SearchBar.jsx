import React from 'react'
import DropDown from '../DropDown/DropDown'
import "./SearchBar.scss"

const SearchBar = (props) => {
  const { 
    filterOptions, 
    filterLabel, 
    getGroup, 
    filterName,
    sortOptions, 
    sortLabel, 
    getSorting, 
    sortName,
    searchBy,
    getSearchTerm,
    needFilter
  } = props
  return (
    <div className='search-bar'>
      <label htmlFor="search-box" className='search-bar__label'>Search {searchBy} by name:</label>
      <input id="search-box" type="text" onChange={getSearchTerm} placeholder="Search by name..." className='search-bar__textbox' />
      {needFilter && <DropDown options={filterOptions} label={filterLabel} handleChange={getGroup} name={filterName} />}
      <DropDown options={sortOptions} label={sortLabel} handleChange={getSorting} name={sortName} />
    </div>
  )
}

export default SearchBar