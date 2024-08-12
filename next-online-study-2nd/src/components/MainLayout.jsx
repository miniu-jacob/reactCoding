import React from 'react'
import { HStack, Flex, Text, Heading } from '@chakra-ui/react';
import Sidebar from './Sidebar';

const MainLayout = ({ children }) => {
    let screenMaxWidth = 250;
  return (
        <HStack w={'full'} h={'100vh'} bg='gray.100' padding={3} spacing={3}>
            <Sidebar></Sidebar>
            <Flex w={'full'} h={'full'} bg={'white'} alignItems={'center'} justifyContent={'center'}
                flexDirection={'column'} position={'relative'} borderRadius={'3xl'}
            >
                {/* 여기서 children 을 랜더링하여 page.js 의 콘텐츠 표시 */}
                { children }

                {/* <Text fontSize={30} color={'gray.100'}>메인 페이지 = MainLayout </Text> */}
            </Flex>
        </HStack>
  )
}

export default MainLayout
