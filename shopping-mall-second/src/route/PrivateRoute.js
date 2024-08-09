import React from 'react'
import { ProductDetailPage } from '../page'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ hasPermission, selectedProduct, setSelectedProduct }) => {

    /* hasPermission 값을 확인
        if true?  상품 디테일 페이지
        else (false) > redirect to login
              */
    
//   return hasPermission === true ? <ProductDetailPage /> : <Login />
// 경로를 튕겨내야 한다. Navigate to... 
  return hasPermission === true ? <ProductDetailPage /> : <Navigate to='/login'> </Navigate>

    
    // 
    // <div>
    //   
    // </div>
}

export default PrivateRoute
