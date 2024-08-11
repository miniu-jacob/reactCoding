
export default function Cart() {
    return (
        <div>
            <h4 className='title' style={{ color: 'red', fontSize:'30px', marginTop: '50px' }}>
        Cart</h4>
            <CartItem />
            <CartItem />
        </div>
    );
}

function CartItem() {
    return (
        <div className="cart-item"
            style={{
                textAlign: 'center'
             }}>
            <h4 className='food'>상품명</h4>
            <p>$40</p>
            <p>1개</p>
        </div> 
    )
}