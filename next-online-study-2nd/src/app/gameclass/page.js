'use client';
import React, { Component } from 'react'
import { Flex, Heading, Text, Square, Image } from '@chakra-ui/react';

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

export default class ClassGame extends Component {
    constructor(props){
        super(props);
        this.state = {
            userSelect: null, 
            comSelect: null, 
            result: ''
        };
    }

    comRandomChoice = () => {
        const itemArray = Object.keys(gameItem);
        const comIndex = Math.floor(Math.random() * 100 ) % 3;
        return itemArray[comIndex];
    }

    whoWin = (user, com) => {
        if (user === com) return 'Tie!';
        else if (user === 'scissors') {
            return com === 'paper' ? 'Win!' : 'Lose';
        } else if (user === 'rock') {
            return com === 'scissors' ? 'Win!' : 'Lose';
        } else if (user === 'paper') {
            return com === 'rock' ? 'Win!' : 'Lose';
        }
        return '';
    }

    gamePlay = (item) => {
        const comValue = this.comRandomChoice();
        const result = this.whoWin(item, comValue);

        this.setState({
            userSelect: item,
            comSelect: comValue,
            result: result
        });
    }

    render() {
        const { userSelect, comSelect, result } = this.state;

        const MyBox = ({ userSelect, comSelect, player, result }) => {
            const imgUrl = player.toLowerCase() === 'player' ? 
                (userSelect ? gameItem[userSelect].img : '') :
                (comSelect ? gameItem[comSelect].img : '' );

            let finalResult = result.replace(/[^a-zA-Z]/g, '').toLowerCase();
            if (player.toLowerCase() === 'computer' && finalResult !== 'tie' && finalResult !== '') {
                finalResult = finalResult === 'win' ? 'lose' : 'win';
            }

            finalResult = finalResult.charAt(0).toUpperCase() + finalResult.slice(1);

            const borderColor = finalResult === 'Tie' ? 'black' :
                finalResult === 'Win' ? 'green' : 'red';

            return (
                <Square 
                    p={0} m={0}
                    flexDir={'column'}
                    size={['130px', '150px', '350px']} 
                    border={`5px solid ${borderColor}`}
                >
                    <Heading fontSize={[20, 30, 30]}>{player}</Heading>
                    <Image src={imgUrl} 
                        w={['40%', '50%', '70%']} alt='game image'
                        display={imgUrl ? 'block' : 'none'}
                    />
                    <Text fontWeight={'bold'} size={'lg'} fontSize={[20, 30, 30]}
                        display={ !finalResult ? 'none' : 'block' }
                    > {finalResult}</Text>
                </Square>
            );
        }

        const MyImage = () => {
            const itemKeys = Object.keys(gameItem);
            return (
                itemKeys.map((item, index) => (
                    <Image key={index} src={gameItem[item].img} w={'50px'} h={'50px'} cursor={'pointer'}
                        onClick={() => this.gamePlay(item)} alt='game images' />
                ))
            );
        }

        return (
            <Flex flexDir={'column'} alignItems={'center'} mt={[20, 20, 30]}>
                <Heading fontSize={[20, 30, 30]}>가위 바위 보 게임(클래스 컴포넌트용)</Heading>
                <Flex flexDir={'Row'} gap={5} mt={5}>
                    <MyBox userSelect={userSelect} player={'Player'} result={result}></MyBox>
                    <MyBox player={'Computer'} comSelect={comSelect} result={result}></MyBox>
                </Flex>
                <Flex column={'3'} flexDir={'row'} gap={3} mt={3}>
                    <MyImage></MyImage>
                </Flex>
                <Heading mt={3}>{ result === 'Tie!' ? 'Tie!' : ( result === 'Win!' ? 'Winner' : 'Loser!')}</Heading>
            </Flex>
        );
    }
}

