import { useState } from 'react'; 

export function useSidebar() {

    // 사이드바 열림/닫힘 상태 관리
    const [isOpen, setIsOpen] = useState(true);

    // 사이드바 호버 상태 관리 
    const [isHovered, setIsHovered] = useState(true);

    const toggleSidebar = () => { 
        setIsOpen(!isOpen);
    }

    
    const openSidebar = () => {
        setIsOpen(true);
    }
    
    const closeSidebar = () => {
        setIsOpen(false);
    }

    // 사이드바에 마우스가 들어왔을 때 호출되는 함수
    const onMouseEnter = () => {
        setIsHovered(true);
    }

    // 사이드바에 마우스가 나갔을 때 호출되는 함수
    const onMouseLeave = () => {
        setIsHovered(false);
    }
    
    return {
        isOpen,
        isHovered,
        toggleSidebar,
        openSidebar,
        closeSidebar,
        onMouseEnter,
        onMouseLeave,
    };
}