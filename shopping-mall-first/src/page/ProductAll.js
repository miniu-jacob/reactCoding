import React, { useEffect, useState } from 'react'
import  Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from '../component/ProductCard';


const ProductAll = () => {

  // ### 3단계 이어서 
  const [productList, setProductList ] = useState([]);


  // ### API 호출위한 2단계 함수 작성
  const getProducts = async () => {
    const port = 5050; 
    let url = `http://localhost:${port}/products`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log('data: ', data)
    setProductList(data);
    console.log('상품리스트: ', productList);

    // 변수의 상태를 변경했으면 보여주는 UI 작업을 해야 한다.
    // UI를 보면 카드가 있는데 카드를 하나하나 따로 만드는 것보다
    // 컴포넌트로 보여줄 수 있다. 따라서... 
    
    // ### API 호출을 위한 3단계
    // data를 확인했으면 UI 에 보여줘야 한다. 
    // UI 에 보여주려면? 상태를 저장했다가 보여줘야 한다. 
    // UI 랜더? 상태 관리? > useState

  }

  // API 호출은 어디서 하나? 언제 하나?
  // react 가 생성될 때 constructor > render > componentDidMount 단계
  // ### 1. API 호출을 위한 1단계: useEffect(()=>{}, []); 
  useEffect(()=>{
    // API 호출
    getProducts();


  }, []);
  

  return (
    <div>
      <Container />
        <Row>
          {/* ### API 호출 4단계
          아래 코드를 보면 ()=>{} 를 사용하여 return 문을 추가하지 않으면 정상적으로 JSX 요소를 반환하지 않는 것을 알 수 있다. 
          따라서 {} 를 () 로 변환하여 암묵적인 반환을 하도록 변경한다. 
          */}
          {/* productList.map((menu) => {
           <Col lg={2} key={menu.id}><ProductCard item={menu} />
          </Col> 
          }) */}
          {/* 수정된 코드 */}
          { productList.map((menu)=> (
            <Col lg={3} key={menu.id}>
              <ProductCard item={menu} />
            </Col>
          ))}

          {/* ### 5단계를 위해서는 ProductCard 에서 데이터에 맞게
          정보가 변경되면 된다. 상품 변경 정보는 ProductAll 이 
          가지고 있기 때문에 ProductCard에 정보를 props 로 전달한다. 
          다른 방법으로는 {item} 과 같이 사용할 수도 있다. */}



          {/* <Col lg={2}><ProductCard />
          </Col>
          <Col lg={2}><ProductCard />
          </Col>
          <Col lg={2}><ProductCard />
          </Col>
          <Col lg={2}><ProductCard />
          </Col> */}
          {/* 아이템이 몇개 있을 줄 알고 이렇게 하냐? 
          map을 이용하면 Array를 받아 HTML 을 그려줄 수 있다. */}
          
        </Row>

      {/* <ProductCard /> */}
      
    </div>
  )
}

export default ProductAll
