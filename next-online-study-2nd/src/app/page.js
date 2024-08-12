import styles from "./page.module.css";
import { Flex, Box, Heading, Text } from '@chakra-ui/react';



export default function Home() {
  return (
    <Flex flexDir={'column'}>
        <Flex alignItems={'center'} gap={10}>
            <Heading size={'lg'}>{'가위 바위 보 게임 '}</Heading>
            <Text fontSize={'30px'}>{'가위바위보 게임으로 가세요'}</Text>
        </Flex>
        
       

    </Flex>
  );
}
