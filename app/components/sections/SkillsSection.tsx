import { Section } from '@/app/components/ui/Section';
import { MY_DATA } from '@/app/lib/constants';
import { SkillGroup } from '../ui/SkillGroup';

export function SkillsSection() {
    const { advanced, intermediate, beginner } = MY_DATA.GROUPED_SKILLS
    return (
        <Section title="Skills">
            <SkillGroup title="Advanced" skills={advanced} />
            <SkillGroup title="Intermediate" skills={intermediate} />
            <SkillGroup title="Beginner" skills={beginner} />
        </Section>
    );
}