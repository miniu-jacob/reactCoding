import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const SearchBar = () => {
  return (
    <div className='search-bar'>
            {/* <FontAwesomeIcon icon={faSearch}/> */}
            <div>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div>
                <input className='input-box' type="text"
                    placeholder='제품검색'
                 />
            </div>
    </div>
  )
}

export default SearchBar
