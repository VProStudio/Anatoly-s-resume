import { ReactNode } from "react"
import { HTMLMotionProps } from 'framer-motion';

export interface SectionProps {
    title: string,
    children: ReactNode,
    stats?: ReactNode,
}

export interface ContactItemProps {
    icon: string | { light: string; dark: string },
    text: string
    url?: string
}

export interface SkillTagProps {
    name: string,
    level: number
}

export interface SkillGroupProps {
    title: string;
    skills: SkillTagProps[];
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

export type AnimationProps = {
    children: React.ReactNode
    className?: string;
    delay?: number;
} & HTMLMotionProps<'div'>;

export type HoverCardProps = AnimationProps & {
    disableOnMobile?: boolean;
    scaleValue?: number;
    elevateValue?: number;
};

type SlideDirection = 'left' | 'right' | 'up' | 'down';

export type SlideInProps = {
    children: React.ReactNode;
    className?: string;
    direction?: SlideDirection;
    distance?: number | string;
    mobileDistance?: number | string;
    mobileDirection?: SlideDirection | 'none';
} & HTMLMotionProps<'div'>;


export type StaggerListProps<T> = {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
    staggerDelay?: number;
    disableAnimation?: boolean;
    getItemKey?: (item: T) => string | number;
};