import { SkillTag } from "./SkillTag"
import type { SkillGroupProps } from '@/app/lib/types'

export const SkillGroup = ({ title, skills }: SkillGroupProps) => {

    if (skills.length === 0) return null;

    return (
        <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-text">{title}</h3>
            <div className="flex flex-wrap gap-1">
                {skills.map((skill) => (
                    <SkillTag key={skill.name} {...skill} />
                ))}
            </div>
        </div>
    )
}