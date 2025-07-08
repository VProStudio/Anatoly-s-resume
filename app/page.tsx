"use client"
import { useEffect, useState } from "react"
import { useTheme } from "./hooks/useTheme"
import { fetchRepos, extractGitHubUsername } from '@/app/lib/utils'
import { MY_DATA } from "@/app/lib/constants"
import { Header } from '@/app/components/sections/Header'
import { ContactsSection } from '@/app/components/sections/ContactsSection'
import { SkillsSection } from '@/app/components/sections/SkillsSection'
import { AboutSection } from '@/app/components/sections/AboutSection'
import { ProjectsSection } from '@/app/components/sections/ProjectsSection'
import { ExperienceSection } from '@/app/components/sections/ExperienceSection'
import type { GitHubRepo } from '@/app/types'


export default function Home() {
  const { theme, toggleTheme } = useTheme()
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    const username = extractGitHubUsername(MY_DATA.GITHUB);
    if (username) {
      fetchRepos(`https://api.github.com/users/${username}/repos`).then(setRepos);
    }
  }, []);

  return (
    <main className="min-h-screen bg-background p-4 md:p-8 text-text">
      <div className="max-w-4xl mx-auto">
        <Header theme={theme} onThemeToggle={toggleTheme} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-6">
            <ContactsSection />
            <SkillsSection />
          </div>

          <div className="md:col-span-2 space-y-6">
            <AboutSection />
            <ProjectsSection repos={repos} />
            <ExperienceSection />
          </div>
        </div>
      </div>
    </main>
  )
}



