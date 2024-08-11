import { Box } from '@chakra-ui/react';
import { Flex, Spacer, Center, Text, Square, Heading, 
    Button, ButtonGroup } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';

export default function Page() {
    return (
        <div>
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
        <Container border='1px solid' borderColor='blue.300' centerContent>
            There are many benefits to a joint design and development system. Not only does it bring benefits to the design team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent look and feel, not just in our design specs, but in production
        </Container>
        <Container maxW='md' bg='blue.600' color='white'>md size</Container>
        <Container maxW='550px' bg='purple.600' color='white'>550px Container </Container>
        <Container maxW='container.sm' bg='green.400' color='#262626'>container.sm</Container>
        </div>
    );
}

