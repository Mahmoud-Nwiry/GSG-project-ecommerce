import React from 'react'
import { SearchBoxStyled } from './style'

const Search = () => {
  return (
    <SearchBoxStyled>
        <input type="text" placeholder='Search' />
        <select name="" id="">
            <option value="all">All category</option>
        </select>
        <button>Search</button>
    </SearchBoxStyled>
  )
}

export default Search