import type { GitHubRepo } from '@/app/types/index'

export function GitHubRepos({ name, description, language, updt, url, stars }: GitHubRepo) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-4 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
        >
            <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-semibold text-text">{name}</h4>
                <div className="flex items-center text-text-secondary">
                    {language && <span className="text-sm bg-accent px-2 py-1 rounded">{language}</span>}
                </div>
            </div>
            {description && (
                <p className="text-text-secondary text-sm mb-2">{description}</p>
            )}
            <div className="text-xs text-text-secondary">
                Updated: {new Date(updt).toLocaleDateString('en-US')}
            </div>
        </a>
    );
}