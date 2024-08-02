
/* 

// const counterSlice = createSlice({}, reducers: {})
// const counterSlice = createSlice({ 객체 }, reducers: { 객체 })
const counterSlice = createSlice({
  name: 'counter', 
  initialState: { value: 0 },
  reducers: { incremented: state => { state.value += 1 }, decremented: state => {state.value -= 1 }}})

  /*
  createSlice({name: '이름', initialState:{ 값: 0 }, reducers: 
              { increment: state => state.value +=1, 
                decrement: state => state.value -=1 }
                                                                })

  createSlice( { name: '카운터', initialState: { 값: 0}, reducers: {변경: item => item.값 = item.값 +1}  })
             ( { 이름: '카운터', 초기값: { 주인공: 456 }, reducers: 
               {흑막: 총 => 총.주인공 = 총.주인공 - 455, 
                도움: 총 => 총.주인공 -=264 }
                                            })
                */


// function reducer( name,  state, action ){

let initialState = {
  count: 0,
  id: '',
  password: ''
}

function reducer( state=initialState, action ){

  // reducer 는 dispatch가 던진 액션의 이름을 자동으로 받아올 수 있다. 
  // 버튼을 클릭하면 type: 'INCREMENT' 라는 객체가 액션에 들어 있는 것을 확인할 수 있다.
  if(action.type === 'INCREMENT'){
    // 스토어는 리듀서가 반환하는 값을 적용한다.
    // 리듀서는 항상 리턴을 해야 한다. 
    return {...state, count: state.count+1 }
  } else if(action.type === 'LOGIN'){
    return {...state,
      id: action.payload.id, 
      password: action.payload.password
     }
  }
  console.log('action: ', action)
  return {...state};

  /* Switch 문으로 바꾼다면? 
  switch(action.type){
    case 'INCREMENT': 
          return {...state, count: state.count + 1 };
    default: 
          return { ...state }
  }


    */




  
}

export default reducer;