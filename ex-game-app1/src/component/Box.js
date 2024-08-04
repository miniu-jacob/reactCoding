import React from 'react'

// 컴포넌트 밖에서 정의
const formatResult = (result) => {
    return result.toLocaleLowerCase().replace(/[^a-zA-Z]/g,'');
}


const Box = (props) => {
    const action = props?.action;
    console.log('ddd',props )
    const imgUrl = action?.img;

    let result;
    let boxResult;

    const isComputer = props?.name.toLowerCase() === 'computer';
    const formattedResult = formatResult(props.result);

    // 컴퓨터일 경우 결과를 반대로 표시
    if (isComputer && formattedResult !== 'tie' && props.result !== ''){
        result = formattedResult === 'win' ? 'LOSE!' : 'WIN!!';
    } else result = props.result;
    
    boxResult = formatResult(result)

  return (
    <div className={`boxes ${boxResult}`}>
        <h2>{props.name}</h2>
        <img src={imgUrl} width={250}  alt="" />
        <h2>{result}</h2> 
    </div>
  )
}

export default Box
