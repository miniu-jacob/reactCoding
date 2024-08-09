import React, { useEffect, useState } from 'react'
import { Container, Row, Col  } from 'react-bootstrap';
import Item from '../component/Item';
import { useSearchParams } from 'react-router-dom';

const Products = () => {

    const [ query, setQuery ] = useSearchParams();
    
    const [ itemList, setItemList ] = useState([]);
    const getProducts = () => {

        let searchQuery = query.get('q') || '';
        console.log('쿼리값은: ', searchQuery);
        let url = `http://localhost:5050/products?q=${searchQuery}`

        // const url = 'http://localhost:5050/products';
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setItemList(data);
            // console.log('data:', data)
        })
        .catch(error=>{
            console.error('Error fetching data:', error);
        })
            
        
    };

    useEffect(()=>{
        getProducts();
            
    }, [query]);

  return (
    <Container>
        {/* <Row className='item-row'> */}
        <Row className={'item-row m-3'}>
            {/* 맵을 그려 준다. 어디서? data를 넣은 곳 => itemList */}
            { itemList.map((item, index)=> (
                <Col key={index} sm={6} md={4} lg={3} className='item-col'>
                    <Item key={index} item={item} ></Item>
                </Col>
            )) }
        </Row>
      
    </Container >
  )
}

export default Products
