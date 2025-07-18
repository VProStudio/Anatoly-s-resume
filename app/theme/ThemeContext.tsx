'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light');
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as Theme | null;
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = storedTheme || (systemDark ? 'dark' : 'light');

        setTheme(initialTheme);
        document.documentElement.setAttribute('data-theme', initialTheme);
        setIsReady(true);
    }, []);

    useEffect(() => {
        if (!isReady) return;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        localStorage.setItem('theme-sync', Date.now().toString());
    }, [theme, isReady]);

    useEffect(() => {
        const handleStorage = (event: StorageEvent) => {
            if (event.key === 'theme') {
                setTheme(event.newValue as Theme);
            }
            if (event.key === 'theme-sync' && event.newValue) {
                const storedTheme = localStorage.getItem('theme') as Theme | null;
                if (storedTheme && storedTheme !== theme) {
                    setTheme(storedTheme);
                }
            }
        };

        window.addEventListener('storage', handleStorage);
        return () => window.removeEventListener('storage', handleStorage);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    if (!isReady) return null;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}