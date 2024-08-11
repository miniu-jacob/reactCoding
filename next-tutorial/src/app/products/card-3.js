'use client';
import { Box, Stack, Heading, Text, Flex, StackDivider } from '@chakra-ui/react';
import { Center, Square, Circle, HStack, VStack } from '@chakra-ui/react';
import { Card, Divider, Price,  CardHeader, CardBody, Image , CardFooter } from '@chakra-ui/react';
import { ButtonGroup, Button } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons';

export const MyCard = ( { heading, contents, ...rest }) => {
    return (
    <Box>
        <Heading size='md' textTransform='uppercase' {...rest}>{heading}</Heading>
        <Text pt='2' fontSize='md'>{contents}</Text>
    </Box>
    ) 
}

export default function Page() {
    return (
        <Card m={5} maxW='sm'>
            <CardBody>
                <Image 
                    src='/cat.jpg'
                    borderRadius='5px'
                ></Image>
                <Stack mt={6} spacing={3}>
                    <Heading size='lg'>Living room Sofa</Heading>
                    <Text>
                        This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>$450</Text>
                </Stack>
            </CardBody>

            <Divider color='gray.300' />
            <CardFooter>
                <ButtonGroup spacing={4}>
                    <Button variant='solid' colorScheme='telegram'>Buy Now</Button>
                    <Button variant='ghost' colorScheme='blue'>Add to cart</Button>
                </ButtonGroup>
            </CardFooter>
        
        </Card>
    );
}
