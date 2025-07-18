import { GitHubRepos } from '@/app/components/ui/GitHubRepos';
import { Section } from '@/app/components/ui/Section';
import React, { useState } from 'react';
import type { ProjectsSectionProps } from '@/app/lib/types';

export function ProjectsSection({ repos }: ProjectsSectionProps) {
    const [displayCount, setDisplayCount] = useState(3);
    const visibleItems = displayCount ? repos.slice(0, displayCount) : repos;
    return (
        <Section title="Projects" stats={<div>{repos.length} repositories</div>}>
            {visibleItems.map((repo) => (
                <GitHubRepos key={repo.name} {...repo} />
            ))}
            <div className="flex mt-4 space-x-2">
                <button
                    onClick={() => setDisplayCount(3)}
                    className="mt-4 px-2 py-1 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
                >3</button>
                <button
                    onClick={() => setDisplayCount(5)}
                    className="mt-4 px-2 py-1 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
                >5</button>
                <button
                    onClick={() => setDisplayCount(repos.length)}
                    className="mt-4 px-2 py-1 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
                >All</button>
            </div>
        </Section>
    );
}