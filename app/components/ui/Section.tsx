import { HoverCard } from '@/app/components/animation/Hover'
import { FadeIn } from "@/app/components/animation/FadeIn"
import { SlideIn } from '@/app/components/animation/SlideIn'
import type { SectionProps } from '@/app/lib/types'

export function Section({ title, children, stats }: SectionProps) {
    return (

        <SlideIn
            direction="left"
            distance={120}
            mobileDirection="up"
            className="mb-8"
        >
            <FadeIn delay={0.2}>
                <HoverCard>
                    <div className="bg-card rounded-xl shadow-md p-6 border border-border">
                        <div className="flex flex-row justify-between">
                            <h2 className="text-2xl font-bold mb-4 text-text">{title}</h2>
                            <h3 className="text-xl font-bold mb-4 text-text self-end">{stats}</h3>
                        </div>
                        <div className="text-text-secondary">
                            {children}
                        </div>
                    </div>
                </HoverCard>
            </FadeIn>
        </SlideIn>
    )



}