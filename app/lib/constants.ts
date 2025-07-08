import { calcaulateExperience, formatPhoneNumber } from "@/app/lib/utils"

export const THEME_ICONS = {
    SUN: './icons/sun-svgrepo-com.svg',
    MOON: './icons/moon-svgrepo-com.svg',
}

const CONTACT_ICONS = {
    PHONE: './icons/smartphone-material-svgrepo-com.svg',
    EMAIL: './icons/email-svgrepo-com.svg',
    GITHUB: './icons/github-142-svgrepo-com.svg',
    LINKEDIN: './icons/linkedin-svgrepo-com.svg',
    TELEGRAM: './icons/telegram-svgrepo-com.svg',
}

export const MY_DATA = {
    NAME: 'Anatoly Yakubovsky',
    TITLE: 'Frontend Developer',
    PHONE: formatPhoneNumber('299106112'),
    EMAIL: 'ti5@tut.by',
    GITHUB: 'https://github.com/VProStudio',
    LINKEDIN: 'https://www.linkedin.com/in/anatoly-yakubovsky-a750b635b/',
    TELEGRAM: 'https://t.me/TigrisSunset',
    ABOUT: `Since 2024, I've been actively mastering programming and frontend development. To compensate for my lack of commercial experience, I've completed intensive project-based courses and gained foundational knowledge in information security. I'm highly motivated to grow professionally and welcome challenging opportunities.`,

    TECH_STACK: {
        frontend: 'JavaScript (ES6+), TypeScript, React, React Native, HTML5, CSS3, Tailwind CSS',
        backend: 'C# (.NET fundamentals, OOP)',
        tools: 'Git, VS Code, Firebase, Figma, Vite',
        languages: 'English (B1 - Intermediate)'
    },

    get CONTACTS() {
        return [
            {
                icon: CONTACT_ICONS.PHONE,
                text: this.PHONE,
                url: `tel:${this.PHONE}`
            },
            {
                icon: CONTACT_ICONS.EMAIL,
                text: this.EMAIL,
                url: `mailto:${this.EMAIL}`
            },
            {
                icon: CONTACT_ICONS.GITHUB,
                text: 'GitHub',
                url: this.GITHUB
            },
            {
                icon: CONTACT_ICONS.LINKEDIN,
                text: 'LinkedIn',
                url: this.LINKEDIN
            },
            {
                icon: CONTACT_ICONS.TELEGRAM,
                text: 'Telegram',
                url: this.TELEGRAM
            },
        ];
    },
    SKILLS: [
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 70 },
        { name: 'React', level: 70 },
        { name: 'ReactNative', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Redux', level: 60 },
        { name: 'Node.js', level: 80 },
        { name: 'ESLint', level: 80 },
        { name: 'TailWind', level: 70 },
        { name: 'Prettier', level: 80 },
    ],
    EXPERIENCE: [
        { position: 'Frontend', company: 'IT-Academy', start: '13.01.2025', end: '04.05.2025' },
    ],
    get TOTAL_EXPERIENCE() {
        const periods = this.EXPERIENCE.map(exp => ({
            start: new Date(exp.start.split('.').reverse().join('-')),
            end: new Date(exp.end.split('.').reverse().join('-'))
        }));
        return calcaulateExperience(periods)
    }
}

