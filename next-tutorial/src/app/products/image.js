import { Box } from '@chakra-ui/react';
import { Flex, Spacer, Center, Text, Square, Heading, 
    Button, ButtonGroup, AspectRatio, Image } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';

export default function Page() {
    return (
        <div>
            <AspectRatio maxW='400px' ratio={3/4}>
                <Image src='/def.jpg'></Image>
            </AspectRatio>
            <Box maxW='100px'>
                <Image src='/def.jpg' alt='' objectFit='contain' />
            </Box>
           
        </div>
    );
}

