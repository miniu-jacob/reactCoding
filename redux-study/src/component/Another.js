import React from 'react'
import { useSelector } from 'react-redux'


const Another = () => {
  let count = useSelector(state=> state.count);
  return (
    <div>
      Another Box { count }
      
    </div>
  )
}

export default Another
