import { motion } from 'framer-motion';
import { useIsMobile } from '@/app/hooks/useIsMobile';
import type { AnimationProps } from '@/app/lib/types';


export const ScaleUp = ({ children, className, ...rest }: AnimationProps) => {
    const isMobile = useIsMobile();
    return (
        <motion.div
            initial={{ scale: isMobile ? 1 : 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: isMobile ? '0px' : '-20%' }}
            transition={{ duration: 0.5, ...rest.transition }}
            className={`transform-gpu ${className}`}
            {...rest}
        >
            {children}
        </motion.div>)
};