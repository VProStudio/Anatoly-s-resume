import { motion } from 'framer-motion';
import { useIsMobile } from '@/app/hooks/useIsMobile';
import type { HoverCardProps } from "@/app/lib/types";

export const HoverCard = ({
    children,
    className,
    disableOnMobile = true,
    scaleValue = 1.03,
    elevateValue = 8,
    ...rest
}: HoverCardProps) => {
    const isMobile = useIsMobile();
    const shouldAnimate = !(disableOnMobile && isMobile);

    return (
        <motion.div
            whileHover={shouldAnimate ? {
                scale: scaleValue,
                y: -elevateValue,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            } : undefined}
            whileTap={shouldAnimate ? { scale: 0.98 } : undefined}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`transition-shadow duration-300 ${className}`}
            {...rest}
        >
            {children}
        </motion.div>
    );
};