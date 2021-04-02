import { useState } from 'react';
import { throttle } from 'lodash';

export const useDynamicStickyClass = (stickyRef, fixedStickyBreakpoint = 0) => {
    const [dynamicStickyBreakpoint, setDynamicStickyBreakpoint] = useState(0);
    const [isSticky, setIsSticky] = useState(false);
    return [
        isSticky,
        // scrollPosition at which we apply the sticky-class
        dynamicStickyBreakpoint,
        // setSticky
        setIsSticky,
        // handleScroll
        throttle(() => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            if (fixedStickyBreakpoint && scrollY >= fixedStickyBreakpoint && !isSticky) {
                // we know which y position to apply the sticky class
                setIsSticky(true);
            }
            else if (!fixedStickyBreakpoint && scrollY >= dynamicStickyBreakpoint && !isSticky) {
                // we don't know which y position to apply the sticky class
                setIsSticky(true);
            }
            else if (scrollY <= fixedStickyBreakpoint) {
                setIsSticky(false);
            }
            else if (scrollY <= dynamicStickyBreakpoint) {
                setIsSticky(false);
            }
        }, 100),
        // measureScreen
        throttle(() => {
            const wrapperY = stickyRef.current
                ? stickyRef.current.offsetTop
                : 0;
            setDynamicStickyBreakpoint(wrapperY);
        }, 100)
    ];
};