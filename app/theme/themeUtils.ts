export type Theme = 'light' | 'dark'

export const isValidTheme = (value: unknown): value is Theme => {
    return value === 'light' || value === 'dark'
}

export const getSystemTheme = (): Theme => {
    if (typeof window === 'undefined') return 'light'
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export const saveTheme = (theme: Theme): void => {
    try {
        localStorage.setItem('theme', theme)
    } catch (error) {
        console.warn('Failed to save theme:', error)
    }
}

export const loadTheme = (): Theme => {
    if (typeof window === 'undefined') return 'light'

    try {
        const saved = localStorage.getItem('theme')
        return isValidTheme(saved) ? saved : getSystemTheme()
    } catch (error) {
        console.warn('Failed to load theme:', error)
        return getSystemTheme()
    }
}