import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const ProductDetail = () => {
  let {id} = useParams();
  const [ product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let port = 5050;
    let url = `http://localhost:${port}/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    console.log('상품정보: ',data);
    setProduct(data);
  }
  useEffect(()=>{
    // product detail 을 가지고 올 수 있는 API
    getProductDetail();

  },[]);
  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} alt="" />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
        </Col>

      </Row>
      
    </Container>
  )
}

export default ProductDetail
