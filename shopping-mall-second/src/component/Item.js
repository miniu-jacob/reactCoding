import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Item = ({item}) => {
    // console.log('받아온 item: ', item)
    const imgUrl = item?.img; 
    const formattedPrice = item?.price.toLocaleString();
    const navigate = useNavigate();
    const showDetail = () => {
        /* 
        showDetail 함수에서는 클릭했을 때 상세 페이지로 이동하게 한다. 
        상세 페이지는 '/products/:id' 
        즉 id 값을 넘겨주고 넘겨 받아야 한다. 
        또한 id 값은 동적이기 때문에 리터럴 (백틱)으로 만든다. 
        */
        // navigate('/products/:id')
        
        navigate(`/products/${item.id}`)

        
    }
  return (
    <div className='items m-1 pb-1' onClick={showDetail}>
        <div className='item-img-area'>
            <img src={imgUrl} alt="" />
        </div>
        <div className='item-desc d-flex flex-column align-items-start pb-0 pt-0'>
            { item?.choice === false ? <div></div> : 
                <h6 className='font-sub f-x fw-semibold'>Conscious Choice</h6>
             }
            <h6>{item?.title}</h6>
            <h6>₩ {formattedPrice}</h6>
            { item?.new === true ? 
                <h6 className='font-sub fw-semibold'>신제품</h6> : <></>
            }
        </div>
        {/* others....  */}
    </div>
  )
}

export default Item
