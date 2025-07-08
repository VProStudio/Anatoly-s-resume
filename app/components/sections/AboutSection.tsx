import { Section } from '@/app/components/ui/Section';
import { MY_DATA } from '@/app/lib/constants';

export function AboutSection() {
    return (
        <Section title="About Me">
            <p>{MY_DATA.ABOUT}</p>
        </Section>
    );
}