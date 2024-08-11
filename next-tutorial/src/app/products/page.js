'use client';
import { useState } from 'react';
import { Center, HStack, VStack, Flex, SimpleGrid } from '@chakra-ui/react';
import { Image, Heading, Text, Input, Box, Button, Spacer } from '@chakra-ui/react'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@chakra-ui/react';


export default function Page() {

    return (
        <div>
            <Flex m={10} gap='50px'>
                <Box boxSize='200px'>
                    <Image src='/cat.jpg' alt='' />
                </Box>
                <Image borderRadius='full' src='/cat.jpg' boxSize='150px'></Image>
            </Flex>
            <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }}
                transition='font-size 0.2s ease-in-out'

            >
                This is responsive text
            </Text >
            <Text color='red'></Text>
            <Heading size={'md'}>안녕하셔요.</Heading>
            
            
        </div>
        );
    }
