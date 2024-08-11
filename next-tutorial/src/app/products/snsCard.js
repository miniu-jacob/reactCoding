'use client';
import { Box, Stack, Heading, Text, Flex, StackDivider } from '@chakra-ui/react';
import { Center, Square, Circle, HStack, VStack } from '@chakra-ui/react';
import { Card, Divider, Price,  CardHeader, CardBody, Image , CardFooter } from '@chakra-ui/react';
import { ButtonGroup, Button, Avatar, IconButton } from '@chakra-ui/react'
import { PhoneIcon  } from '@chakra-ui/icons';
import {BsThreeDotsVertical } from 'react-icons/bs';
import {BiLike, BiComment, BiShare } from 'react-icons/bi'


export default function Page() {
    return (
        <Card m={10} maxW='md'>
            <CardHeader>
                <Flex spacing='4'>
                <Flex gap={4} flex={1} alignItems='center'
                >
                    <Avatar name='Jacob CHUNG' src='cat.jpg' />
                    <Box alignItems='center'>
                        <Heading size='md' mb={1}>Jacob CHUNG</Heading>
                        <Text fontSize='sm'>Creator, Chakra UI</Text>
                        
                    </Box>
                </Flex>
                <IconButton 
                    variant='ghost'
                    colorScheme='gray'

                aria-label='button' icon={<BsThreeDotsVertical />}/>
            </Flex>
            </CardHeader>
            <CardBody>
                <Text>With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen.
                </Text>
            </CardBody>
            <Image src='/cat.jpg' objectFit='cover'></Image>
            <CardFooter justify='space-between'
                flexWrap='wrap'
                // sx={{
                //     '& > button': {
                //         minW: '136px'
                //     },
                // }}
            >
                <Button flex={1} variant='ghost' leftIcon={<BiLike />}
                    alignItems='center'
                    display='flex'
                >Like</Button>
                <Button flex={1} variant='ghost' leftIcon={<BiComment />}
                    display='flex'
                    alignItems='center'
                >Comment</Button>
                <Button flex={1} variant='ghost' leftIcon={<BiShare />}>Share</Button>

            </CardFooter>

          
        </Card>
    );
}
