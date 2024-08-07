import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-regular-svg-icons';


const Navbar = () => {
  return (
    <div className='nav-bar'>
        <div>
            <FontAwesomeIcon icon={faUser}/>
        </div>
        <div className='login'>
            로그인 
        </div>
        
      
    </div>
  )
}

export default Navbar
