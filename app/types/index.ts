import { ReactNode } from "react"

export interface SectionProps {
    title: string,
    children: ReactNode,
    stats?: ReactNode,
}

export interface ContactItemProps {
    icon: string,
    text: string
    url?: string
}

export interface SkillBarProps {
    skill: string,
    level: number
}

export interface ExperienceProps {
    position: string,
    company: string,
    period: string
}

export interface WorkPeriod {
    start: Date,
    end?: Date,
}

export interface GitHubRepo {
    name: string;
    description: string | null;
    language: string | null;
    updt: string;
    url: string;
    stars?: number;
}

export interface GitHubApiRepo {
    name: string;
    description: string | null;
    language: string | null;
    updated_at: string;
    html_url: string;
    stargazers_count: number;
}

export interface ThemeToggleProps {
    theme: 'light' | 'dark';
    onToggle: () => void;
}

export interface HeaderProps {
    theme: 'light' | 'dark';
    onThemeToggle: () => void;
}

export interface ProjectsSectionProps {
    repos: GitHubRepo[];
}