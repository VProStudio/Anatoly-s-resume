import type { SectionProps } from '@/app/lib/types'

export function Section({ title, children, stats }: SectionProps) {
    return (
        <div className="bg-card rounded-xl shadow-md p-6 border border-border">
            <div className="flex flex-row justify-between">
                <h2 className="text-2xl font-bold mb-4 text-text">{title}</h2>
                <h3 className="text-xl font-bold mb-4 text-text self-end">{stats}</h3>
            </div>
            <div className="text-text-secondary">
                {children}
            </div>
        </div>
    )
}