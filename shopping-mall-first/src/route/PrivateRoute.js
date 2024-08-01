import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({enableLogin}) => {
  console.log('enableLogin value: ', enableLogin)
  return enableLogin === true? 
    <ProductDetail /> : <Navigate to='/login' />
    
  };

export default PrivateRoute
