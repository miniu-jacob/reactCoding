'use client';
import React, { createContext, useState, useContext } from 'react'
// *  Sidebar 상태 관리를 위한 Context 생성
export const SidebarContext = createContext('large'); 

// * Sidebar 상태를 제공하는 Provider 컴포넌트
export const SidebarProvider = ({ children }) => {
    const [navSize, setNavSize] = useState();  // 사이드바 크기 상태 

    // * 사이드바 크기 토글 함수
    const toggleNavSize = () => {
        setNavSize((prevSize) => (prevSize === 'small' ? 'large' : 'small' ));
    };

    return (
        <SidebarContext.Provider value={{ navSize, setNavSize, toggleNavSize }}>
            { children }
        </SidebarContext.Provider>
    );
}
