import type { SkillBarProps } from "@/app/types/index"

export function SkillBar({ skill, level }: SkillBarProps) {
    return (
        <div className="mb-3">
            <div className="flex justify-between mb-1 text-text">
                <span>{skill}</span>
                <span>{level}%</span>
            </div>
            <div className="w-full bg-accent-light rounded-full h-2.5">
                <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: `${level}%` }}
                ></div>
            </div>
        </div>
    )
}