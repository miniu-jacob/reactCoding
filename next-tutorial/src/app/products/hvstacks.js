'use client';
import { Box, StackDivider } from '@chakra-ui/react';
import { Center, Square, Circle, HStack, VStack } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';


export default function Page() {
    return (
        <div>
            <HStack m='5' gap='5'>
                <Circle size='40px' bg='tomato' color='white'>
                    <PhoneIcon></PhoneIcon>
                </Circle>
                <Square size='40px' bg='purple.700' color='white'>
                    <PhoneIcon></PhoneIcon>
                </Square>
            </HStack>
            <HStack spacing='24px'>
                <Box w='40px' h='40px' bg='yellow.400'>1</Box>
                <Box w='40px' h='40px' bg='tomato'>2</Box>
                <Box w='40px' h='40px' bg='pink.100'>3</Box>
                <Center w='40px' h='40px' bg='orange.200'>4</Center>
            </HStack>
            <VStack
                m='2'
                // 구분선
                divider={<StackDivider borderColor='gray.400' />}
                spacing={3}
                // align='stretch' 를 주었기 때문에 한칸을 다 차지할 수 있다.
                align='stretch'
            >
                <Box h='40px' bg='yellow.400'>1</Box>
                <Box h='40px' bg='tomato'>2</Box>
                <Box h='40px' bg='pink.100'>3</Box>
            </VStack>
        </div>
    );
}
