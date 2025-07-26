import { motion } from 'framer-motion';
import type { AnimationProps } from "@/app/lib/types";

export const FadeIn = ({ children, className, delay = 0, ...rest }: AnimationProps) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
            duration: 0.6,
            delay,
            ...rest.transition
        }}
        className={className}
        {...rest}
    >
        {children}
    </motion.div>
);