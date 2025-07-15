import type { WorkPeriod, GitHubApiRepo, SkillTagProps } from '@/app/lib/types'

export const formatPhoneNumber = (phone: string) => {
    return phone.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, '+375 ($1) $2-$3-$4');
}

const pluralizeMonths = (count: number): string => {
    return count === 1 ? 'month' : 'months';
}

export const calcaulateExperience = (periods: WorkPeriod[]) => {
    const totalMonths = periods.reduce((total, period) => {
        const startDate = new Date(period.start);
        const endDate = period.end ? new Date(period.end) : new Date();
        const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 +
            (endDate.getMonth() - startDate.getMonth());
        return total + Math.max(0, months);
    }, 0);

    return `${totalMonths} ${pluralizeMonths(totalMonths)}`;
}

export function extractGitHubUsername(url: string): string | null {
    const match = url.match(/github\.com\/([^\/]+)/);
    return match ? match[1] : null;
}

export const fetchRepos = async (url: string) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const repos = await response.json();

        return repos.map((repo: GitHubApiRepo) => ({
            name: repo.name,
            description: repo.description,
            language: repo.language,
            updt: repo.updated_at,
            url: repo.html_url,
            stars: repo.stargazers_count,
        }));
    } catch (error) {
        console.error('Error loading repositories:', error);
        return [];
    }
};

export const groupSkillByLevel = (skills: SkillTagProps[]) => {
    return {
        advanced: skills.filter((s: SkillTagProps) => s.level >= 70),
        intermediate: skills.filter((s: SkillTagProps) => s.level >= 40 && s.level < 70),
        beginner: skills.filter((s: SkillTagProps) => s.level < 40),
    };
}