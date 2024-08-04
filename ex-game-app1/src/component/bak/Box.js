import React from 'react'


const Box = (props) => {
    // console.log('넘어온 값: ', props)
    // console.log('선택자: ', props.pick)
    // console.log('img: ', props.pick.img)
    const action = props.select;
    const imgUrl = action? action.img : '';
    // console.log('action값: ', action)
    // console.log('imgUrl', imgUrl)
    let comName = props?.name.replace(/[^a-zA-Z]/g, '').toLowerCase();
    let pureResult = props?.result.replace(/[^a-zA-Z]/g, '').toLowerCase();
    let result;
    // console.log('com, result', comName, pureResult)
    if ( comName === 'computer' &&
        pureResult !== 'tie' &&
        pureResult !== '' 
    ) {
        result = pureResult === 'win' ? 'LOSER!!' : 'WIN!';
    } else {
        result = props.result;
    }
    let boxResult = result?.toLowerCase().replace(/[^a-zA-Z]/g,'');
    console.log('box result: ', boxResult )
    
        

  return (
    <div className={`boxes ${boxResult}` }>
        <h2>{props.name}</h2>
            <img src={imgUrl} width={200} alt="" />
        <h2>{result}</h2>
        
    </div>
  )
}


export default Box
