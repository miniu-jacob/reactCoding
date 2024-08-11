import { Box } from '@chakra-ui/react';
import { Flex, Spacer, Center, Text, Square, Heading, 
    Button, ButtonGroup } from '@chakra-ui/react';

export default function Page() {
    return (
        <div>
            상품 페이지
            <Box bg='green' w='120px' h='50px' >박스 하나 그림</Box>
            <Flex color='pink'>
                <Center w='100px' bg='green.300'>
                    <Text>Box 1</Text>
                </Center>
                <Square bg='blue.300' size='50px'>
                    <Text>Box 2</Text>
                </Square>
                <Box flex='1' bg='tomato'>
                    <Text>Box 3</Text>
                </Box>
            </Flex>
            <Flex mt='2'>
                <Box p='4' bg='red.300'>Box 1</Box>
                <Spacer />
                <Box p='4' bg='green.200'>Box 2</Box>
            </Flex>
            <Flex mt='2'>
                <Box w='70px' h='10' bg='red.500'></Box>
                <Spacer></Spacer>
                <Box w='170px' h='10' bg='red.500'></Box>
                <Spacer></Spacer>
                <Box w='180px' h='10' bg='red.500'></Box>
            </Flex>
            {/* 네브바 만들어 보기 */}
            <Flex border='1px solid'
                borderColor='gray'
                m='3' p='3'
                borderRadius='10px'
                minWidth='max-content'
                alignItems='center'
            >
                <Box 
                // borderColor='blue.500'
                // borderRadius='10px'
                >
                    <Heading size='lg'>로그인 하기 </Heading>
                </Box>
                <Spacer />
                <ButtonGroup gap='3'>
                    <Button colorScheme='telegram'>가입하기</Button>
                    <Button colorScheme='telegram'>로그인하기</Button>
                </ButtonGroup>
                
            </Flex>

        </div>
    );
}

