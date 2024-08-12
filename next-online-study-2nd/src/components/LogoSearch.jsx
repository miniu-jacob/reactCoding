'use client';
import React from 'react'
import { Box, Flex, Icon, IconButton, Text } from '@chakra-ui/react'
import { AiFillThunderbolt, AiOutlineSearch } from 'react-icons/ai'

const LogoSearch = () => {
  return (
    <Flex w={'full'} alignItems={'center'} justifyContent={'space-between'} flexDirection={'row'}
        gap={4} 
    >
        <Box display={'flex'} alignItems={'start'} gap={2}>
            <Icon as={AiFillThunderbolt} fontSize={30} />
            <Text fontWeight={'bold'} fontSize={16} >
                누나 온라인 강의 2기
            </Text>
        </Box>
        <IconButton 
            aria-label='Search'
            variant={'ghost'}
            icon={<AiOutlineSearch />}
            fontSize={26}
            color={'gray.400'}
            borderRadius={'50%'}
        ></IconButton>

    </Flex>
    
  )
}

export default LogoSearch
