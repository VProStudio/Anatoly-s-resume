import { MY_DATA } from '@/app/lib/constants';
import { ThemeToggle } from '@/app/components/ui/ThemeToggle';
import { ScaleUp } from '@/app/components/animation/ScaleUp';

export function Header() {
    return (
        <header className="flex md:justify-between items-center bg-card rounded-xl shadow-md p-6 mb-6 text-center border border-border">
            <ScaleUp className="flex flex-col items-center mb-4 flex-1">
                <div >
                    <h1 className="text-4xl md:text-5xl font-bold text-text">{MY_DATA.NAME}</h1>
                    <p className="text-xl text-text-secondary mt-2">{MY_DATA.TITLE}</p>
                </div>
            </ScaleUp>
            <ThemeToggle />
        </header>
    );
}