'use client';
import React, { useState, useEffect } from 'react'
import { Flex,Box, Heading, Text, Square, Image } from '@chakra-ui/react';

const MyBox = ({userSelect, comSelect, player}) => {
    // const imgUrl = userSelect ? gameItem[userSelect].img : '';
    const imgUrl = player.toLowerCase() === 'player' ? 
        (userSelect ? gameItem[userSelect].img : '') :
        (comSelect ? gameItem[comSelect].img : '' );
    // console.log('', imgUrl)
    
     return <Square 
            p={0} m={0}
            flexDir={'column'}
            size={'350px'} 
            border={'5px solid black'}
        >
            <Heading>{player}</Heading>
            <Image src={imgUrl} 
                w={'70%'}
            />
            <Text fontWeight={'bold'} size={'lg'} fontSize={'30px'}
                display={ !userSelect ? 'none' : 'block' }
            > Result</Text>
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


const page = () => {

    const [ userSelect, setUserSelect ] = useState(null);
    const [ comSelect, setComSelect ] = useState(null);


    const comRandomChoice = () => {
        const itemArray = Object.keys(gameItem);
        const comIndex = Math.floor(Math.random() * 100) % 3;
        const final = itemArray[comIndex];
        return final;
        // console.log('final answer', final)
        
    }

    const gamePlay = (item) => {
        setUserSelect(item);
        const comValue = comRandomChoice();
        setComSelect(comValue);
        // console.log('clicked', item)
    }
    
    const MyImage = () => {
        const itemKeys = Object.keys(gameItem);
        // console.log('itemKeys:', itemKeys)
        return (
            itemKeys.map((item, index)=> (
                <Image key={index} src={gameItem[item].img} w={'50px'} h={'50px'} cursor={'pointer'}
                onClick={() => gamePlay(item)} />
            ))
        )
    }

    useEffect(()=>{

    }, [userSelect, comSelect]);

  return (
    <>
        <Heading>가위 바위 보 게임을 시작합니다  </Heading>
        <Flex flexDir={'Row'} gap={5} mt={5} >
            <MyBox userSelect={userSelect} player={'Player'}></MyBox>
            <MyBox player={'Computer'} comSelect={comSelect}></MyBox>
        </Flex>
        <Flex column={'3'} flexDir={'row'} gap={3} mt={3}>
            <MyImage></MyImage>
            </Flex>
        <Heading mt={3}>Winner!</Heading>
    </>
  )
}

export default page
