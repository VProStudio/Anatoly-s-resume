'use client';

import { THEME_ICONS } from '@/app/lib/constants';
import { useTheme } from "@/app/theme/ThemeContext"

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-accent hover:bg-accent-light transition-colors self-start"
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
            <img
                src={theme === 'light' ? THEME_ICONS.MOON : THEME_ICONS.SUN}
                alt="Theme toggle"
                className="w-5 h-5"
            />
        </button>
    );
}