import { motion, Variants } from 'framer-motion';
import { useIsMobile } from '@/app/hooks/useIsMobile';
import type { SlideInProps } from '@/app/lib/types'

export const SlideIn = ({
    children,
    className,
    direction = 'left',
    distance = 100,
    mobileDirection = 'up',
    ...rest
}: SlideInProps) => {
    const isMobile = useIsMobile();

    const finalDirection = isMobile
        ? (mobileDirection === 'none' ? null : mobileDirection)
        : direction;

    if (isMobile && mobileDirection === 'none') {
        return <div className={className}>{children}</div>;
    }

    const variants: Variants = {
        hidden: {
            opacity: 0,
            x: finalDirection === 'left' ? distance :
                finalDirection === 'right' ? -distance : 0,
            y: finalDirection === 'up' ? distance :
                finalDirection === 'down' ? -distance : 0
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: isMobile ? 'tween' : 'spring',
                duration: isMobile ? 0.4 : 0.8,
                bounce: isMobile ? 0 : 0.3,
                ...rest.transition
            }
        }
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                margin: isMobile ? '0px' : '-100px'
            }}
            className={`transform-gpu ${className}`}
            {...rest}
        >
            {children}
        </motion.div>
    );
};
