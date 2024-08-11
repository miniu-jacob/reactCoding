'use client';
import { Box, Stack, Heading, Text, Flex, StackDivider } from '@chakra-ui/react';
import { Center, Square, Circle, HStack, VStack } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
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
        <div>
            <Card>
                <CardBody><Text>일반적인 카드 </Text></CardBody>
            </Card>
            <Card m={4}>
                <CardHeader>
                    <Heading size='lg'>오늘 점심 뭐먹지?</Heading>
                </CardHeader>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <MyCard
                            heading='summary'
                            contents='한달동안 먹은 음식을 가지고 칼로리를 계산했다.'
                        >
                        </MyCard>
                        <MyCard
                            heading='overview'
                            contents='지금까지 공부한 기간 동안 먹은 샐러드만.. 어우'
                            color='yellow.600'
                        ></MyCard>
                        
                    </Stack>
                </CardBody>
            </Card>

        
        </div>
    );
}
