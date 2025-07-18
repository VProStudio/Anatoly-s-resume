import { useTheme } from "@/app/theme/ThemeContext"
import type { ContactItemProps } from "@/app/lib/types";

export function ContactItem({ icon, text, url }: ContactItemProps) {
    const { theme } = useTheme()
    const iconSrc = typeof icon === 'string' ? icon : icon[theme];
    const content = (
        <>
            <img
                src={iconSrc}
                alt={text}
                key={`icon-${theme}`}
                className="w-5 h-5 mr-2" />
            <span>{text}</span>
        </>
    );

    if (url) {
        return (
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mt-2 hover:text-primary transition-colors cursor-pointer"
            >
                {content}
            </a>
        );
    }

    return (
        <div className="flex items-center mt-2">
            {content}
        </div>
    );
}