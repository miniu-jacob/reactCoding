import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container,Row, Stack, Col, Dropdown, Button } from 'react-bootstrap';


const ProductDetailPage = () => {
    let { id } = useParams();
    console.log('ID: ', id)
    const [ product, setProduct ] = useState(null);

    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/miniu-jacob/json-jacob-shopping/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
        // console.log('data: ', data)
    }

    useEffect(()=>{
        getProductDetail();
    }, []);

    const imgUrl = product?.img;
    const formattedPrice = product?.price.toLocaleString();

    
  return (
    <Container className='item-container text-center w-100 '>
        <Row className='row'>
            <Col className='product col-6 p-0 ms-0 mb-2 mt-2'>
                {/* <img src='#' alt="" /> */}
                <img src={imgUrl} alt="" />
            </Col>
            <Col className='text-start pt-3 px-4 col-6 d-flex flex-column justify-content-between mb-2'>
                <Stack gap={4}>
                    <div>{product?.title}</div>

                    <div>₩ {formattedPrice}</div>
                    { product?.choice === true ? (
                        <h6 className='font-sub f-x fw-semibold'>Conscious Choice</h6> )
                        : (<></>)
                    }
                    { /*
                    <DropdownButton variant='danger' id="dropdown-item-button"
                        size='md'
                        title="사이즈 선택">
                        <Dropdown.ItemText>사이즈 종류</Dropdown.ItemText>
                        <Dropdown.Item as="button" className='drop-items'>{product?.size[0]}</Dropdown.Item>
                        <Dropdown.Item as="button" className='drop-items'>{product?.size[1]}</Dropdown.Item>
                        <Dropdown.Item as="button" className='drop-items'>{product?.size[2]}</Dropdown.Item>
                    </DropdownButton>   */ }

                   {/* { /* */}
                    <Dropdown className='d-inline-block'>
                        <Dropdown.Toggle variant="danger" id="dropdown-basic" className='dropdown-button d-flex justify-content-between align-items-center'>
                            사이즈 선택
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant='danger' className='dropdown-menu'>
                            <Dropdown.Item className='drop-items' href="#/action-1">{product?.size[0]}</Dropdown.Item>
                            <Dropdown.Item className='drop-items' href="#/action-2">{product?.size[1]}</Dropdown.Item>
                            <Dropdown.Item className='drop-items' href="#/action-3">{product?.size[2]}</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>   
                </Stack>
                <Button className='add-cart mt-5 '>추가</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default ProductDetailPage
