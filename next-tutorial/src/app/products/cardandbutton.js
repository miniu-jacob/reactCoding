'use client';
import { useState } from 'react';
import { Box, Stack, Heading, Text, Flex, StackDivider, SimpleGrid } from '@chakra-ui/react';
import { Center, Square, Circle, HStack, VStack } from '@chakra-ui/react';
import { Card, Divider, Price,  CardHeader, CardBody, Image , CardFooter } from '@chakra-ui/react';
import { ButtonGroup, Button, Avatar, IconButton } from '@chakra-ui/react'
import { PhoneIcon  } from '@chakra-ui/icons';
import {BsThreeDotsVertical } from 'react-icons/bs';
import {BiLike, BiComment, BiShare } from 'react-icons/bi'


export default function Page() {

    const [ loadingState, setLoadingState ] = useState(false);
    return (
        <div>
        <SimpleGrid m={5} 
            spacing={4} 
            templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <Card>
                <CardHeader>
                    <Heading size='md'>Customer dashboard</Heading>

                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button>View Here</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'>Customer dashboard</Heading>

                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button>View Here</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <Heading size='md'>Customer dashboard</Heading>

                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button>View Here</Button>
                </CardFooter>
            </Card>
        </SimpleGrid>
        <Stack m={10} direction='row' spacing={4}>
            <Button isLoading colorScheme='teal' variant='solid'>
                Email
            </Button>
            <Button
                   loadingState={loadingState} 
                loadingText='Submitting'
                colorScheme='teal'
                variant='outline'
            >
                Submit
            </Button>
            <Button
                size='lg'
                height='40px'
                border='1px'
                variant='outline'
                boxSizing='border-box'
                _hover={{ bg: 'gray.300' }}
                _focus={{ 
                    boxShadow: 
                    '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)'
                  }}
                colorScheme='telegram'
            > 로딩해 !! </Button>
        </Stack>
        </div>
    );
}
