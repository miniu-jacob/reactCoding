import React from 'react'
import { Flex, Text, Icon, Menu, MenuButton, Link as ChakraLink } from '@chakra-ui/react';
 import Link from 'next/link';


const NavItem = ({navSize, title, icon, active, href}) => {    
    // console.log('modified navSize: ', navSize)
  return (
    <Flex
        mt={1} w={'100%'}
        flexDir={'column'} 
        alignItems={ navSize === 'small' ? 'center' : 'flex-start'}
    >
        <Menu placement='right'>
            {/* Next.js Link 컴포넌트 */}
            {/* <Link href={href} passHref > */}
                <ChakraLink
                    href={href}
                    backgroundColor={active ? '#AEC8CA' : 'transparent' }
                    p={3}
                    borderRadius={8}
                    _hover={{textDecor: 'none', backgroundColor: '#AEC8CA' }}
                    w={navSize === 'large' && '100%' }
                > 
                    <MenuButton w={'100%'}
                    >
                        <Flex>
                            <Icon as={icon} fontSize={'2xl'}
                                color={active? '#82AAAD' : 'gray.500' }
                            />
                            <Text ml={4} fontWeight={'bold'}   
                                display={navSize === 'small' ? 'none' : 'block'}
                            >{title}</Text>
                        </Flex>
                    </MenuButton>
                </ChakraLink>
            {/* </Link> */}
        </Menu>
    </Flex>
  )
}

export default NavItem
