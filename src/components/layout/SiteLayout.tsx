import React from 'react';
import { Navbar } from './Navbar';
import { profile } from '@/lib/content';
interface SiteLayoutProps {
  children: React.ReactNode;
}
export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <span className="text-xl font-bold tracking-tighter uppercase">{profile.name}</span>
              <p className="mt-2 text-sm text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              {profile.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}