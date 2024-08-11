'use client';
import { Box, Stack, Heading, Text, Flex, StackDivider } from '@chakra-ui/react';
import { Center, Square, Circle, HStack, VStack } from '@chakra-ui/react';
import { Card, Divider, Price,  CardHeader, CardBody, Image , CardFooter } from '@chakra-ui/react';
import { ButtonGroup, Button } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons';


export default function Page() {
    return (
        <Card
            m={6}
            p={3}
            borderRadius={15}
            border='1px solid'
            borderColor='gray.400'
            direction={{ base: 'column', 
                sm: 'row'
             }}
            // overflow='hidden'
            variant='outline'
        >
            <Image 
                src='/cat.jpg'
                objectFit='cover'
                borderTopLeftRadius={5}
                borderBottomLeftRadius={5}
                // borderRadius={5}
                maxW={{ base: '100%', sm:'200px' }}
            ></Image>
            <Stack>
                <CardBody>
                    <Heading size='md'>
                      The perfect latte
                    </Heading>
                    <Text py={2}>
                        Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.
                    </Text>
                </CardBody>
                <CardFooter>
                    <Button variant='solid' colorScheme='telegram'>Buy Late</Button>

                </CardFooter>
            </Stack>


        </Card>
    );
}
