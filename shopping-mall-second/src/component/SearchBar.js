import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const SearchBar = () => {
    
    const navigate = useNavigate();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter'){
            // 입력한 검색어를 읽어와서 
            const keyword = event.target.value;
            console.log('입력값: ', keyword)
            
            // url 을 바꿔 준다.
            navigate(`/?q=${encodeURIComponent(keyword)}`)

        }

    }

  return (
    <div className='search-bar d-flex align-items-center'>
        <FontAwesomeIcon className='fa-lg' icon={faMagnifyingGlass} />
        <input className='input-box ms-2 border-0 w-100' type="text" placeholder='제품검색' onKeyDown={handleKeyDown}/>
    </div> 
  )
}

export default SearchBar
