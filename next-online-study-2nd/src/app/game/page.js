'use client';
import React, { useState, useEffect } from 'react'
import { Flex,Box, Heading, Text, Square, Image } from '@chakra-ui/react';

let finalResult;
const MyBox = ({userSelect, comSelect, player, result}) => {
    // const imgUrl = userSelect ? gameItem[userSelect].img : '';
    const imgUrl = player.toLowerCase() === 'player' ? 
        (userSelect ? gameItem[userSelect].img : '') :
        (comSelect ? gameItem[comSelect].img : '' );
    // console.log('', result)
    // console.log('', imgUrl)
    finalResult = result.replace(/[^a-zA-Z]/g, '').toLowerCase();
        if(player.toLowerCase() === 'computer' && 
                finalResult !== 'tie' &&
                finalResult !== ''
          ){
            finalResult = finalResult === 'win' ? 'lose' : 'win';
            console.log('com result: ', finalResult)
          }
           
    finalResult = finalResult.charAt(0).toUpperCase() + finalResult.slice(1);
    console.log('final: ', finalResult)
    
    const borderColor = finalResult === 'Tie' ? 'black' :
        finalResult === 'Win' ? 'green' : 'red';
    
     return <Square 
            p={0} m={0}
            flexDir={'column'}
            size={ ['130px', '150px', '350px']} 
            border={`5px solid ${borderColor}`}
            backgroundColor={'rgba(255,255,255,0.8)'}
            borderRadius={'25px'}
        >
            <Heading fontSize={[20, 30, 30]}>{player}</Heading>
            <Image src={imgUrl} 
                w={['40%', '50', '70%']} alt='game image'
                display={imgUrl ? 'block' : 'none'}
            />
            <Text fontWeight={'bold'} size={'lg'} fontSize={[20, 30, 30]}
                display={ !finalResult ? 'none' : 'block' }
            > {finalResult}</Text>
        </Square>
}

const gameItem = {
    scissors: {
        name: 'scissors',
        img: 'images/scissors.png'
    },
    rock: {
        name: 'rock',
        img: 'images/rock.png'
    },
    paper: {
        name: 'paper',
        img: 'images/paper.png'
    }
    
}

// console.log('imgUrl', gameItem.paper.img )


const Page = () => {

    const [ userSelect, setUserSelect ] = useState(null);
    const [ comSelect, setComSelect ] = useState(null);
    const [playerResult, setPlayerResult] = useState('');
    const [ computerResult, setComputerResult] = useState('');
    const [ result, setResult] = useState('');
    const [ selectedButton, setSelectedButton ] = useState(null);

    const  backgroundImage = 'images/gameDefault.jpg';


    const comRandomChoice = () => {
        const itemArray = Object.keys(gameItem);
        const comIndex = Math.floor(Math.random() * 100) % 3;
        const final = itemArray[comIndex];
        return final;
        // console.log('final answer', final)
        
    }

    const whoWin = (user, com) => {
        // console.log('user and com', user, com)
        if (user === com ) return 'Tie!'
        else if (user === 'scissors'){
            return com === 'paper' ? 'Win!' : 'Lose';
        } else if (user === 'rock'){
            return com === 'scissors' ? 'Win!' : 'Lose';
        } else if (user === 'paper'){
            return com === 'rock' ?  'Win!' : 'Lose';
        }
        return '';
    }

    const gamePlay = (item) => {
        setUserSelect(item);
        setSelectedButton(item);
        const comValue = comRandomChoice();
        setComSelect(comValue);

        // userSelect 와 comSelect 가 null 이 아닌지 확인 후 누가 이겼는지 판별
        if (item && comValue){
            const result = whoWin(item, comValue);
            setResult(result);
        }
        // console.log('clicked', item)
    }
    
    const MyImage = () => {
        const itemKeys = Object.keys(gameItem);
        // console.log('itemKeys:', itemKeys)
        return (
            itemKeys.map((item, index)=> (
                <Image key={index} src={gameItem[item].img} w={'50px'} h={'50px'} 
                cursor={'pointer'} 
                backgroundColor={ selectedButton === item ? 'orange.100' : 'rgba(255,255,255,0.6)'} 
                onClick={() => gamePlay(item)} alt='game images'borderRadius={'10px'} />
            ))
        )
    }

    useEffect(()=>{

    }, [userSelect, comSelect, result ]);

  return (
    <Flex w={'100%'} h={'100%'} justifyContent={'center'}
        backgroundSize={['contain','cover']}
        backgroundPosition={'center'}
        backgroundRepeat={['repeat', 'no-repeat']}
        borderRadius={'25px'}
        backgroundImage={`url(${backgroundImage})`}
        >
        <Flex flexDir={'column'} alignItems={'center'} mt={[20, 20, 30]}
            // backgroundColor={'rgba(255,255,255,0.6)'}
        >
            <Heading fontSize={[20, 30, 30]} color={'white'}>가위 바위 보 게임을 시작합니다  </Heading>
            <Flex flexDir={'Row'} gap={5} mt={5} >
                <MyBox userSelect={userSelect} player={'Player'} result={result} />
                <MyBox player={'Computer'} comSelect={comSelect} result={result}/>
            </Flex>
            <Flex column={'3'} flexDir={'row'} gap={3} mt={3}>
                <MyImage></MyImage>
                </Flex>
            <Heading mt={3} backgroundColor={'rgba(255,255,255,0.6)'}
                borderRadius={'10px'} p={1}
            >{ result === 'Tie!' ? 'Tie!' : ( result === 'Win!' ? 'Winner' : 'Loser!')}</Heading>
        </Flex>
    </Flex>
  )
}

export default Page
