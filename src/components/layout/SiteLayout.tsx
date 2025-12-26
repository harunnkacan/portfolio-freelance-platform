import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { siteAyarlari } from '@/lib/content';
import { Send, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, Outlet } from 'react-router-dom';
import { SEO } from '@/components/ui/SEO';
export function SiteLayout() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground relative">
      <SEO />
      <div className="noise-overlay" />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 relative z-10"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <footer className="border-t border-primary/20 bg-black/80 backdrop-blur-md py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <span className="text-3xl font-black tracking-tighter uppercase text-primary text-glow">
                {siteAyarlari.baslik}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm font-medium uppercase italic">
                {siteAyarlari.hakkimda} <br />
                <span className="text-primary font-black mt-2 block">��� Burak Beji</span>
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-primary">Bağlantılar</h4>
              <ul className="space-y-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <li><a href="/robots.txt" className="hover:text-primary">robots.txt</a></li>
                <li><a href="/sitemap.xml" className="hover:text-primary">sitemap.xml</a></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-widest text-primary">Hızlı Menü</h4>
              <div className="flex flex-col gap-3">
                <a href="/contact" className="text-sm font-black uppercase tracking-widest text-white hover:text-primary flex items-center gap-2 group">
                   MESAJ GÖNDER <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-[10px] text-muted-foreground uppercase font-bold mt-4">
                  © {new Date().getFullYear()} {siteAyarlari.baslik}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <AnimatePresence>
        {showScrollTop && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="fixed bottom-8 right-8 z-[60]">
            <Button onClick={scrollToTop} variant="default" size="icon" className="bg-primary text-white rounded-none w-12 h-12 shadow-glow animate-float">
              <ChevronUp className="w-6 h-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}