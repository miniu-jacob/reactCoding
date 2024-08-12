'use client';
import React from 'react'
import { Button, Flex, Switch } from '@chakra-ui/react';

const SwitchButtons = () => {
    const [isLogin, setIsLogin] = React.useState(true);
    const [isLogout, setIsLogout] = React.useState(false);

    const handleLoginLogout = ({target}) =>{
        console.log('aa', target.id)
        if(target.id === 'login') {
            setIsLogout(false)    
            setIsLogin(true)
        }
        if(target.id === 'logout') {
            setIsLogout(true)    
            setIsLogin(false)
        }
    }

  return (
    <Flex
        w={'full'}
        borderWidth={1}
        borderColor={'gray.100'}
        borderRadius={14}
        my={6}
    >
        <Button w={'full'} variant={ isLogin ? 'solid' : 'ghost'}
            borderRadius={14}
            colorScheme={ isLogin ? 'messenger' : 'gray'}
            id='login'
            textTransform={'uppercase'}
            size={'sm'}
            py={5}
            onClick={handleLoginLogout}
        >login</Button>
        <Button w={'full'} variant={ isLogout ? 'solid' : 'ghost'}
            borderRadius={14}
            colorScheme={ isLogout ? 'messenger' : 'gray'}
            id='logout'
            textTransform={'uppercase'}
            color={ isLogout ? 'white' : 'gray.500'}
            size={'sm'}
            py={5}
            onClick={handleLoginLogout}
        >logout</Button>
      
    </Flex>
  )
}

export default SwitchButtons
