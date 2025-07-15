import { Section } from '@/app/components/ui/Section';
import { GitHubRepos } from '@/app/components/ui/GitHubRepos';
import type { ProjectsSectionProps } from '@/app/lib/types';

export function ProjectsSection({ repos }: ProjectsSectionProps) {
    return (
        <Section title="Projects" stats={<div>{repos.length} repositories</div>}>
            {repos.map((repo) => (
                <GitHubRepos key={repo.name} {...repo} />
            ))}
        </Section>
    );
}