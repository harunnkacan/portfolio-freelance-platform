import React, { useState } from 'react';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { projects } from '@/lib/content';
import { ProjectCard } from '@/components/ui/project-card';
import { cn } from '@/lib/utils';
type FilterType = 'All' | 'Design' | 'Development' | 'Branding';
export function WorkPage() {
  const [filter, setFilter] = useState<FilterType>('All');
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);
  return (
    <SiteLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <header className="mb-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase mb-8">Work</h1>
          <div className="flex flex-wrap gap-4">
            {['All', 'Design', 'Development', 'Branding'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as FilterType)}
                className={cn(
                  "px-6 py-2 text-xs font-bold uppercase tracking-widest border transition-all",
                  filter === f 
                    ? "bg-primary text-primary-foreground border-primary" 
                    : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}