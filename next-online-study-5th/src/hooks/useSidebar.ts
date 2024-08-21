import React, {useState} from 'react'

export const useSidebar = () => {

    // 사이드바가 열림/닫힘을 관리하는 상태 정의 
    const [isOpen, setIsOpen] = useState(true);

    // 누르면 열림 다시 한번 누르면 닫힘을 동작하게 하는 toggle 함수 
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    }

    const openSidebar = () => {
        setIsOpen(true);
    }

    const CloseSidebar = () => {
        setIsOpen(false);
    }

    return {
        isOpen,
        toggleSidebar,
        openSidebar,
        CloseSidebar,
    };
}