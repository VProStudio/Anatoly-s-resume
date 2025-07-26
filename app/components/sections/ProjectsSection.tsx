import { GitHubRepos } from '@/app/components/ui/GitHubRepos';
import { Section } from '@/app/components/ui/Section';
import React, { useState } from 'react';
import { FadeIn } from '@/app/components/animation/FadeIn';
import { StaggerList } from '@/app/components/animation/StaggerList';
import { HoverCard } from '@/app/components/animation/Hover';

import type { ProjectsSectionProps } from '@/app/lib/types';

export function ProjectsSection({ repos }: ProjectsSectionProps) {
    const [displayCount, setDisplayCount] = useState(3);
    const visibleItems = displayCount ? repos.slice(0, displayCount) : repos;
    return (
        <FadeIn delay={0.2}>
            <Section title="Projects" stats={<div>{repos.length} repositories</div>}>
                <StaggerList
                    items={visibleItems}
                    staggerDelay={150}
                    renderItem={(repo) => (
                        <HoverCard>
                            <GitHubRepos {...repo} />
                        </HoverCard>
                    )}
                />
                <div className="flex mt-4 space-x-2">
                    <button
                        onClick={() => setDisplayCount(3)}
                        className="mt-4 px-2 py-1 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                    >3</button>
                    <button
                        onClick={() => setDisplayCount(5)}
                        className="mt-4 px-2 py-1 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                    >5</button>
                    <button
                        onClick={() => setDisplayCount(repos.length)}
                        className="mt-4 px-2 py-1 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                    >All</button>
                </div>
            </Section>
        </FadeIn>
    );
}