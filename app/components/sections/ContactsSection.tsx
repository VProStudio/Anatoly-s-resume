import { Section } from '@/app/components/ui/Section';
import { ContactItem } from '@/app/components/ui/ContactItem';
import { MY_DATA } from '@/app/lib/constants';

export function ContactsSection() {
    return (
        <Section title="Contacts">
            {MY_DATA.CONTACTS.map((contact) => (
                <ContactItem
                    key={contact.text}
                    icon={contact.icon}
                    text={contact.text}
                    url={contact.url}
                />
            ))}
        </Section>
    );
}