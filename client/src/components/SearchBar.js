import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons"

const SearchBar = (classes) => {
  return (
    <div className = 'search-bar'>
      <input placeholder = " What are you looking for?" className="search-bar-input"/>
      <FontAwesomeIcon icon = {faSearch} size = "lg" color= "black" style={{position:"absolute", right: "10px", top:"50%", transform:"translateY(-50%)"}}/>
    </div>
  )
}

export default SearchBar
