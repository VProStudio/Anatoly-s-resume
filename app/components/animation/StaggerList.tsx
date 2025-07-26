'use client';

import { useEffect, useState } from 'react';
import type { StaggerListProps } from '@/app/lib/types'

export const StaggerList = <T,>({
    items,
    renderItem,
    staggerDelay = 100,
    disableAnimation = false,
    getItemKey
}: StaggerListProps<T>) => {
    const [visibleStates, setVisibleStates] = useState<boolean[]>([]);
    const supportsAnimation = typeof CSS !== 'undefined' && CSS.supports('animation', 'fadeInUp 1s');

    const getKey = (item: T, index: number): string | number => {
        if (getItemKey) return getItemKey(item);
        if (typeof item === 'object' && item && 'id' in item) {
            return (item as any).id;
        }
        return index;
    };

    useEffect(() => {
        setVisibleStates(Array(items.length).fill(false));

        const timers: NodeJS.Timeout[] = [];

        items.forEach((_, index) => {
            timers.push(setTimeout(() => {
                setVisibleStates(prev => {
                    const newStates = [...prev];
                    newStates[index] = true;
                    return newStates;
                });
            }, index * staggerDelay));
        });

        return () => timers.forEach(timer => clearTimeout(timer));
    }, [items, staggerDelay]);

    if (disableAnimation || !supportsAnimation) {
        return (
            <div className="stagger-container">
                {items.map((item, index) => (
                    <div key={getKey(item, index)}>
                        {renderItem(item)}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="stagger-container">
            {items.map((item, index) => (
                <div
                    key={getKey(item, index)}
                    className={visibleStates[index] ? 'stagger-item visible' : 'stagger-item'}
                    style={{
                        animationDelay: `${index * staggerDelay}ms`,
                        opacity: visibleStates[index] ? 1 : 0
                    }}
                >
                    {renderItem(item)}
                </div>
            ))}
        </div>
    );
};