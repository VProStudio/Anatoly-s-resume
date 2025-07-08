import type { ExperienceProps } from "@/app/types/index"

export function Experience({ position, company, period }: ExperienceProps) {
    return (
        <div className="mb-4">
            <h3 className="text-xl font-semibold text-text">{position}</h3>
            <div className="flex justify-between text-text-secondary">
                <span>{company}</span>
                <span>{period}</span>
            </div>
        </div>
    )
}