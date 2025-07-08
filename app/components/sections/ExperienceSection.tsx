import { Section } from '@/app/components/ui/Section';
import { Experience } from '@/app/components/ui/Experience';
import { MY_DATA } from '@/app/lib/constants';

export function ExperienceSection() {
    return (
        <Section title="Experience" stats={<div>{MY_DATA.TOTAL_EXPERIENCE}</div>}>
            {MY_DATA.EXPERIENCE.map((exp, index) => (
                <Experience
                    key={index}
                    position={exp.position}
                    company={exp.company}
                    period={`${exp.start} - ${exp.end}`}
                />
            ))}
        </Section>
    );
}