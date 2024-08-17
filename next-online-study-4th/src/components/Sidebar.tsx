'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useSidebar } from '@/hooks/useSidebar';
import { FaAngleDoubleLeft,FaAngleDoubleRight  } from 'react-icons/fa';

export default function Sidebar() {

    const { isOpen, toggleSidebar,
        isHovered, onMouseEnter, onMouseLeave
     } = useSidebar();

    return (
        <motion.div
            // * 초기 너비 설정 (사이드바가 처음 랜더링 될 때의 너비)
            initial={{ width: '16rem'} }
            
            // 상태에 따라 애니메이션을 적용해 너비를 변경
            animate={{ width: isOpen ? '16rem' : '8rem' }}

            // 애니메이션의 전환 효과를 설정
            transition={{ duration: 0.3, ease : 'easeInOut'}}
            className='h-full bg-gray-800 text-white fixed'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        > 
        
            { /*   <div className={`edge border-black text-orange bg-gray-400 text-white fixed 
            w=64 h-full text-center transition-all duration-300 ease-in-out
            ${isOpen ? 'w-64' : 'w-32' }
        `}> */ }
            <div className='2nd-edge p-6 flex justify-between relative items-center'>
                <h1 className={`
                    text-xl font-semibold transition-opacity duration-200 ease-in-out
                    ${isOpen ? 'opacity-100' : 'opacity-0' }
                    `}>My Sidebar</h1>
                <button
                    onClick={toggleSidebar}
                    className={`
                        absolute right-3 transform p-2
                        ${isHovered || !isOpen ? 'opacity-100' : 'opacity-100'}
                        text-white transition-opacity duration-300 ease-in-out text-2xl
                     `}
                >
                    { isOpen ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
                    {/* 아이콘 */}
                </button>
                </div>

               <div>
                <button onClick={toggleSidebar}
                    className={`mt-4 text-sm bg-gray-600 py-1 px-2 rounded`}
                >{isOpen ? 'Close' : 'Open'}</button>
            </div>
            <nav className='mt-6'>
                <Link href='/' passHref>
                    <div className='py-2.5 rounded transition duration-200 hover:bg-gray-700
                        cursor-pointer block'>
                        Home
                    </div>
                </Link>
                <Link href='/about'>
                    <div className='py-2.5 rounded transition duration-200 hover:bg-gray-700
                        cursor-pointer block'>
                        About
                    </div>
                </Link>
                <Link href={'/services'} passHref>
                    <div className='py-2.5 rounded transition duration-200 hover:bg-gray-700
                        cursor-pointer block'>
                        Services
                    </div>
                </Link>
            </nav>
        </motion.div>
    )
}