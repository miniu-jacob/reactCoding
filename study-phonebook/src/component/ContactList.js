import React from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

// 던지는건 dispatch, 조회는 useSelect

const ContactList = () => {

  const contactList = useSelector(state=>state.contactList);
  console.log('리스트', contactList)


  return (
    <div className='contactlist-area'>
      <SearchBox />
      { contactList.map((item)=>( <ContactItem key={item.id}  item={item}/> ) ) }

      {/* JSX 에서에서의 HTML요소를 보여주기 위해서는 ()를 쓴다.  */}

      {/* <ContactItem /> */}
      {/* <ContactItem /> */}
      {/* <ContactItem /> */}
      
    </div>
  )
}

export default ContactList
