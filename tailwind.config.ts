import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                background: 'var(--color-background)',
                card: 'var(--color-card)',
                text: 'var(--color-text)',
                'text-secondary': 'var(--color-text-secondary)',
                border: 'var(--color-border)',
                'accent-light': 'var(--color-accent-light)',
                'accent-medium': 'var(--color-accent-medium)',
                'accent-dark': 'var(--color-accent-dark)',
                success: 'var(--color-success)',
                warning: 'var(--color-warning)',
                error: 'var(--color-error)',
            },
        },
    },
}

export default config