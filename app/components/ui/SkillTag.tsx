import type { SkillTagProps } from "@/app/lib/types"

export function SkillTag({ name }: SkillTagProps) {
    return (
        <div className="px-3 bg-secondary text-white rounded-full">
            {name}
        </div>
    )
}