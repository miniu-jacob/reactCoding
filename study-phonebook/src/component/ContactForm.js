import React, { useState} from 'react'
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  
  // Form에 뭔가가 입력할 때 값을 받아올 수 있도록 이름을 설정한다.
  const [name, setName] = useState('');
  const [mobileNum, setMobileNum] = useState(0);

  // getName 함수
  // const getName = (e) => {
    // console.log(e.target.value);
    // 콘솔에 값을 저장할 게 아니라 name에 값을 입력한다. (변경한다. > 상태를 변경한다.)
    // setName(e.target.value)
  // }

  /* 살펴 보면 getName 이나 getMobileNum 은 하는 일이 setName 딱 하나다. 
      그런데 함수를 만들고 setName 을 세팅하면 코드가 늘어난다. 
      따라서 이를 줄이기 위해서 화살표 함수를 이용해서 자체적으로 처리하면 더 효율적일
      수 있다. 
      onChange={()=>}
      */

  // const getMobileNum = (e) => {
  //   setMobileNum(e.target.value);
  // }
  
  // ### 값을 입력한 걸 받아왔다면? 보여줘야지. 어디에? 우측 
  // 즉 Contact Form 의 컴포넌트의 정보를 Contact List 컴포넌트로 전달해야 함.
  // 언제 이벤트를 보내냐? 버튼을 클릭하면. 
  // 그런데 type="submit" 이라면? onSubmit
  // 따라서 버튼을 클릭하면 이벤트가 button 에서 발생하는 것이 아니라 Form 에서 발생한다. 

  // useDispatch 를 가져왔으면 사용해야 하니까 선언해 준다. 
  const dispatch = useDispatch();


  const addContact = (event) => {
    console.log('버튼 클릭')
    event.preventDefault();
    // dispatch({ type: 'ADD_CONTACT', payload: {name: name, mobileNum: mobileNum }  });
    // 만일 키와 값이 같다면 하나로 줄여서 쓸 수 있다. 
    dispatch({ type: 'ADD_CONTACT', payload: { name, mobileNum }  });

    // 액션을 만들어줘야 한다. 누구를 통해서? dispatch
    // dispatch를 사용할 수 있게 수입하자. 
    // dispatch는 액션을 던진다. 뭘 가지고? type과 payload
    
    // 액션을 던지면 ? =>>>> 리듀서로 간다. 
    
  }
  

  return (
    <div>
      <Form className='form-area' onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          {/* 유저가 폼을 입력하고 변경되면 getName이라는 함수를 호출한다.  */}
          <Form.Control type="text" placeholder="이름을 입력해 주세요" onChange={(e)=> setName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>모바일</Form.Label> 
          <Form.Control type="number" placeholder="0773437901" onChange={(e)=>setMobileNum(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          등록하기
        </Button>
    </Form>
    </div>
  )
}

export default ContactForm
