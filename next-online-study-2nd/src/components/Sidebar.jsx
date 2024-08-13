'use client';
import React, { useContext, useState, useEffect, memo } from 'react'
import { Flex, Divider, useConst } from '@chakra-ui/react';
import { Box, Avatar, Heading, Text } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { FiHome, FiMenu, FiCalendar, FiUser, FiBriefcase, FiSettings } from 'react-icons/fi'
import { IoPawOutline } from "react-icons/io5";
// SidebarContext 사용 선언
import { SidebarContext } from '@/context/SidebarContext';
import  NavItem from '@/components/Navigation/NavItem';


function Sidebar(){
    //  햄버거 아이콘으로 축소하기 위한 상태 정의
    // Context API 를 사용해서 아래는 사용하지 않음. 
    // const [navSize, changeNavSize] = useState('large'); 
    // * 상태와 토글 함수 사용 
    // const data = useContext(SidebarContext);
    const { navSize, setNavSize , toggleNavSize } = useContext(SidebarContext);

    
    useEffect(()=>{

        // 미디어 쿼리 이용 
        const mediaQuery = window.matchMedia('(max-width: 768px)');

        // 변경 감지, 상태 업데이트
        const handleMediaQueryChange = (event) => {
            if (event.matches) {
                setNavSize('small');
            } else {
                setNavSize('large');
            }
        };

        handleMediaQueryChange(mediaQuery);

        // 미디어 쿼리 변경 감지 리스너 추가 
        mediaQuery.addEventListener('change', handleMediaQueryChange);


        // 컴포넌트 정리 작업  
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    },[setNavSize]);


    return (
        <Flex
            w={ navSize === 'small' ? '75px' : '250px' }
            borderRadius={ navSize === 'small' ? '15px' : '30px'}
            bg={'white'}
            // border={'1px solid green'} 
            position={'sticky'} left={'4'} h={'96vh'} 
            display={'flex'} flexDirection={'column'} 
            justifyContent={'space-between'}
            // overflow={'hidden'}
            boxShadow={'0 4px 12px 0 rgba(0,0,0, 0.05)'}
        >  { /*  boxShadow 는 나중에 없애던지 변경할것    */  }
            <Flex
                p={'5%'} flexDir={'column'} 
                alignItems={ navSize === 'small' ? 'center' : 'flex-start'}
                // textAlign={'center'}
            >
                <IconButton
                    background={'none'} mt={3}
                    size={'lg'}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={toggleNavSize}  // 토글 함수 연결
                ></IconButton>
                <NavItem navSize={navSize} icon={FiHome} title={'홈으로 가기'} href={'/'}></NavItem>
                <NavItem navSize={navSize} icon={FiCalendar} title={'가위바위보게임'} href={'/game'} ></NavItem>
                <NavItem navSize={navSize} icon={FiBriefcase} title={'클래스 컴포넌트'} href={'/gameclass'} ></NavItem>
                <NavItem navSize={navSize} icon={FiUser} title={'날씨앱'} href={'/weather'} ></NavItem>
                <NavItem navSize={navSize} icon={IoPawOutline} title={'쇼핑몰'} href={'/shop'} ></NavItem>
                <NavItem navSize={navSize} icon={FiSettings} title={'환경설정'} href={'/settings'} ></NavItem>
            </Flex>

            <Flex
                flexDir={'column'} w={'100%'} 
                alignItems={'center'} 
                justifyContent={'center'}


            >
                <Divider w={'100%'} />
                {/* 아바타 내용 */}
                <Flex 
                    my={ navSize === 'small' ? 3 : 0}
                    p={navSize === 'small' ? '0': '3' }
                    // border={'1px solid red'}
                    display={'flex'} 
                    // justifyContent={ navSize === 'small' ? 'center' : 'flex-start'}
                >
                    <Avatar size={'lg'} src='images/miniuLogo.png'
                        ml={navSize === 'small' ? 1: 0 }
                     />
                    <Flex flexDir={'column'} w={'100%'} 
                        // navSize에 따라 텍스트 숨기기
                        // border={'1px solid blue'}
                        display={ navSize === 'small' ? 'none' : 'flex'}
                        // justifyContent={navSize === 'small' ? 'center' : 'flex-start'}
                        justifyContent={ navSize === 'small' ? 'none' : 'center'}
                    >
                        <Heading as={'h3'}  size={'sm'}>Jacob CHUNG</Heading>
                        <Text size={'xs'}>Student</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default memo(Sidebar);