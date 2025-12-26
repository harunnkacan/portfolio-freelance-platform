import React from 'react';
import { Navbar } from './Navbar';
import { siteAyarlari } from '@/lib/content';
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
      <footer className="border-t border-primary/10 py-16 bg-black/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-4">
              <span className="text-2xl font-black tracking-tighter uppercase text-primary text-glow">
                {siteAyarlari.baslik}
              </span>
              <p className="text-sm text-muted-foreground max-w-xs">
                {siteAyarlari.hakkimda}
              </p>
              <p className="text-xs text-muted-foreground/60 font-mono">
                © {new Date().getFullYear()} {siteAyarlari.baslik}. Tüm hakları saklıdır.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-4">Navigasyon</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="/" className="hover:text-primary transition-colors">Anasayfa</a></li>
                  <li><a href="/blog" className="hover:text-primary transition-colors">Makaleler</a></li>
                  <li><a href="/market" className="hover:text-primary transition-colors">Mağaza</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-4">Sosyal Medya</h4>
                <div className="flex gap-4">
                  {siteAyarlari.sosyalMedya.map((social) => (
                    <a
                      key={social.ad}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {social.ad}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}