import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  // 메뉴를 일일이 만드는 것은 재사용성 측면에서 좋지 않을 수 있다.
  // 여기에서는 메뉴리스트를 만들어 관리한다. 
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', 
        '아동', 'H&M HOME', '세일', '지속가능성'
  ];

  // onClick 이벤트 걸고
  // 로그인 함수 만들고 
  // 이동하는 동작 ? (function 으로 쓰면 useNavigate)
  // useNavigate는 함수 밖에서 선언
  const navigate = useNavigate();
  const goToLogin = () => {
    // 이동
    navigate('/login');
  }
  
  
  return (
    <div>
      <div>
        <div className='login-button' onClick={goToLogin}>
          <FontAwesomeIcon className='user-icon' icon={faUser} />
          <div>로그인</div>
        </div>
        {/* <FontAwesomeIcon icon={["fa-regular fa-user"]} /> */}
      </div>
      <div className='nav-section'>
        <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg" alt="" />
      </div>
      <div className='menu-area'>
        {/* 박스가 2개 영역이 필요함  */}
          {/* 메뉴들 영역이 들어감. ul? li? div? */}
        <ul className='menu-list'>
          { menuList.map((menu, index)=> (
            <li key={index}>{menu}</li>
          )) }
        </ul>
          
        <div className='search-area'>
          <FontAwesomeIcon className='search-icon'  icon={faSearch} />
          <input type="text" placeholder='제품검색' />
        </div>
      </div>

      
    </div>
  )
}

export default Navbar
