import { useEffect, useState } from 'react';
import { useClientOnly } from './useClientOnly';

export const useIsMobile = (breakpoint = 768) => {
    const isClient = useClientOnly();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (!isClient) return;

        const checkMobile = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, [breakpoint, isClient]);

    return isMobile;
};