import React from 'react'
import { useSelector } from 'react-redux'
import Another from './Another';

const Box = () => {

  // 박스에서도 count 값을 보여주고 싶다. 
  let count = useSelector(state => state.count);

  return (
    <div>
     this is a Box  
      {count}
      <Another></Another>
    </div>
  )
}

export default Box
