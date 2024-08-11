import Image from 'next/image';


export default function Home() {
    let title = '상품 목록'
    let name = 'Jacob CHUNG'
    let products = [ '토마토', '피망', '오이', '당근', '양배추', '양상추', '이상한 줄기'];



    products.map((a, i)=>{
        return (
            <div key={i}>
                <div key={`inside${i}`}>abc</div>
            </div>
        )
    });


  return (
    <div>
        <h4 className='title' style={{ color: 'red', fontSize:'30px', marginTop: '50px' }}>
        {title}</h4>
        {
            products.map((item, index)=>(
                <div key={index} className='ui right items'>
                    <Image 
                        src={'/1. Product - Natural Rubber - Latex.jpg'}
                        alt={`${item} image`}
                        width={200}
                        height={200}
                        layout='responsive'
                        style={ { width: '100%', height: 'auto', 
                            maxWidth: '200px'
                        } }
                    />
                    <h4 key={index} className='food'>{item} $40</h4>
                </div>
            ))
        }
    </div>
  );
}


