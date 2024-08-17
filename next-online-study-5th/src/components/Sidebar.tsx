'use client';
import React from 'react';
import Link from 'next/link';
import { useSidebar } from '@/hooks/useSidebar';
import { IoSadOutline } from 'react-icons/io5';


const Sidebar = () => {

	// 가지고 온 useSidebar 를 사용하기 위해 선언
	const { isOpen, toggleSidebar } = useSidebar();
	
	/*
	 * transition-all > 모든 속성의 변화를 부드럽게 전환하도록 설정
	 * duration-300 > 애니메이션의 지속 시간을 300 ms 으로 설정
	 * ease-in-out > 애니매이션이 시작할 때와 끝날 때 부드럽게 진행되도록 설정
	 * ${isOpen ? 'w-64' : 'w-16'} > 사이드의 너비를 상태에 따라 변경 

	*/
		{ /* 최상위는 하나의 div 태그만 가능하다.
        // h-full 을 썼을 때 바로 적용되지 않는 이유
        // 부모 요소의 높이에 의존하기 때문에 부모 요소의 높이가 설정되어 있지 않다면
        // 자식 요소의 h-full 은 효과가 없다. 이때, fixed를 쓸 수 있다. */ }
	
    return (

        <div
            className={`h-full border-r border-zinc-200 fixed flex-1 text-white
				bg-gray-800 transition-all duration-300 ease-in-out ${isOpen ? 'w-64':'w-16'}
			`}>
				 
            {/* md:w-60 <-- 미디엄 사이즈 이상에서 가로를 60단위로 세팅 
            	border-zinc-200: 밝은 회색 
            	로고 및 아이콘 영역 */}
			<div className='p-6'>
				<div>
					{/* <h1 className='text-xl font-semibold ' >Sidebar LOGO</h1> */}
					<h1 className={`text-xl font-semibold 
						${isOpen ? 'opacity-100':'opacity-0' }
					`}>Sidebar LOGO</h1>
				</div>
				<div className='ml-12'>
					<button className='bg-gray-400 rounded py-1 px-2 text-md
						cursor-pointer
					' onClick={toggleSidebar}>
						{isOpen ? 'Open' : 'Close'}</button>
				</div>
			</div>

            {/* 네비게이션 영역 */}
			<div className='mt-6'>
				<Link href='/' passHref>
					<div className='py-2.5 px-6 rounded transition 
						duration-200 hover:bg-gray-700'>{isOpen ? 'Home' : 'H'}</div>
				</Link>
				<Link href='/about' passHref>
					<div className='py-2.5 px-6 rounded transition 
						duration-200 hover:bg-gray-700'>{isOpen ? 'About' : 'A'}</div>
				</Link>
				<Link href='/products' passHref>
					<div className='py-2.5 px-6 rounded transition 
						duration-200 hover:bg-gray-700'>{isOpen ? 'Products' : 'P'}</div>
				</Link>
			</div>
			<div className='footer py-2.5 mt-10 px-6'>{isOpen ? 'Footer' : 'F'}</div>

        </div>
    );
};

export default Sidebar;
