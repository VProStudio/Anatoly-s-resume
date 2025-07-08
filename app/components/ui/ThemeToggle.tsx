import { THEME_ICONS } from '@/app/lib/constants';
import type { ThemeToggleProps } from '@/app/types/index'

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
    return (
        <button
            onClick={onToggle}
            className="p-2 rounded-lg bg-accent hover:bg-accent-light transition-colors self-start"
        >
            <img
                src={theme === 'light' ? THEME_ICONS.MOON : THEME_ICONS.SUN}
                alt="Theme toggle"
                className="w-5 h-5"
            />
        </button>
    );
}