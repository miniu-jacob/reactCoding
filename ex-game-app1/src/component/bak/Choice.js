import React from 'react'

const Choice = ({ gameItems }) => {

    const keys = Object.keys(gameItems)
    // console.log(gameItems['rock'].img)
    
    
    // TEST
    // keys.map((key) => {
    //     const item = gameItems[key]
    //     return item.img;
    // })
    
    
  return (
    <div className='choice' >
        <div className='user-pick-area'>
            { keys.map((key)=> {
                const item = gameItems[key];
                return (
                    <div key={key} >
                                <img className='img-src' src={item.img} alt="" width={60} />
                    </div>
                )
            }) }
        </div>
        <div>
            <h2>Result</h2>
        </div>
        {/* -- 2 -- 객체를 넘겨받기 전 코드 */}
        {/* {gameItems.map((key) => {
            const imgSrc = `images/${key}.png`;
            return (
                <img key={key} src={imgSrc} alt={key} width={50} />
             )
        })} */}
        
        {/* {keys.map((imgSrc) => { */}
            {/* return `<img src="images/${imgSrc}.png" alt='' />` */}
        {/* })} */}
      
    </div>
  )
}

export default Choice
