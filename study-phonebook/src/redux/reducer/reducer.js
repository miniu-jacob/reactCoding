
let initialState =  {
  // name: '',
  // mobileNum: 0,
  contactList:[]
  // 연락처를 모아다가 저장할 장소
}

function reducer (state=initialState, action) {

  const { type, payload } = action; 
  // 이렇게 하면 type 과 payload 라는 변수를 action 으로부터 뽑아내겠다. 

  // 행동 지침 

  // action 은 객체 항상 type 과 payload 값이 있는 객체 
  // object 디스트럭쳐링
  switch(type){
    case 'ADD_CONTACT': 
      return { ...state,
         contactList:[...state.contactList,
           {name: payload.name,
             mobileNum: payload.mobileNum}] };
      // 할일 
    default: {
      return {...state};
    }
  }

}

export default reducer;