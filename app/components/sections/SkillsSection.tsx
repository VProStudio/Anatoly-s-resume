import { Section } from '@/app/components/ui/Section';
import { SkillBar } from '@/app/components/ui/SkillBar';
import { MY_DATA } from '@/app/lib/constants';

export function SkillsSection() {
    return (
        <Section title="Skills">
            {MY_DATA.SKILLS.map((skill) => (
                <SkillBar
                    key={skill.name}
                    skill={skill.name}
                    level={skill.level}
                />
            ))}
        </Section>
    );
}