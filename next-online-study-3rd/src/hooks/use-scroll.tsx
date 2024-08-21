import { useCallback, useEffect, useState } from 'react';

// *  useScroll 훅은 사용자가 스크롤을 특정 임계값(threshold)을 넘었는지를 추적한다. 
export default function useScroll(threshold: number) {
    // * scrolled 상태를 정의한다. 사용자가 스크롤을 했는지 여부를 나타낸다.
    const [scrolled, setScrolled] = useState(false);

    // * onScroll 함수는 스크롤 이벤트가 발생할 때 호출된다. 
    // 현재 스크롤 위치(window.scrollY) 가 임계값 (threshold)을 넘었는지 확인하여 상태를 업데이트한다. 
    const onScroll = useCallback(() => {
        setScrolled(window.scrollY > threshold);
    }, [threshold]); // threshold 가 변경될 때마다 이 함수가 새로 생성된다.

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [onScroll]);

    // ! 사용자가 특정 위치까지 스크롤했을 때 헤더를 고정하거나, 버튼을 표시하는 등의 
    // 동작을 제어하는데 사용될 수 있다. 

    // 처음 로딩 체크 
    useEffect(() => {
        onScroll();
    }, [onScroll]);

    return scrolled;
}
