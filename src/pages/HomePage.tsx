import React from 'react';
import { motion } from 'framer-motion';
import { kategorilerSidebar } from '@/lib/content';
import { useSettings } from '@/lib/settings-store';
import { useContentStore } from '@/lib/content-store';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Server, TrendingUp, Brain, Layers } from 'lucide-react';
import { BlogCard } from '@/components/ui/blog-card';
import { Input } from '@/components/ui/input';
const iconMap: Record<string, any> = {
  Code, Server, TrendingUp, Brain, Layers
};
export function HomePage() {
  const heroTitle = useSettings(s => s.heroTitle);
  const heroSubtitle = useSettings(s => s.heroSubtitle);
  const heroCtaText = useSettings(s => s.heroCtaText);
  const heroCtaLink = useSettings(s => s.heroCtaLink);
  const posts = useContentStore(s => s.posts);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full lg:w-72 shrink-0">
          <div className="sticky top-28 space-y-8">
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-6">Kategoriler</h3>
              <div className="space-y-2">
                {kategorilerSidebar.map((kat) => {
                  const Icon = iconMap[kat.iconName] || Layers;
                  return (
                    <Link
                      key={kat.ad}
                      to={`/blog?cat=${kat.ad}`}
                      className="flex items-center justify-between group p-3 glass-red border-transparent hover:border-primary/40 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <Icon size={18} className="text-primary" />
                        <span className="text-xs font-bold uppercase tracking-wide">{kat.ad}</span>
                      </div>
                      <div className="flex gap-1">
                        {kat.isHot && <span title="Popüler">🔥</span>}
                        {kat.isNew && <span title="Yeni">🚀</span>}
                        {kat.isSecure && <span title="Güvenli">🔒</span>}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="glass-red p-6 border-primary/10">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Sponsorluk</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                İş birliği ve reklam için bizimle iletişime geçin.
              </p>
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 space-y-24">
          {/* Hero */}
          <section className="relative overflow-hidden glass-red p-12 md:p-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8 text-glow uppercase">
                {heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 uppercase italic font-medium leading-relaxed">
                {heroSubtitle}
              </p>
              <Button asChild size="lg" className="btn-cyber h-14 px-10">
                <Link to={heroCtaLink}>{heroCtaText}</Link>
              </Button>
            </motion.div>
          </section>
          {/* Recent Posts Grid */}
          <section>
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-4xl font-black tracking-tighter uppercase leading-none">Son Paylaşılanlar</h2>
              <Link to="/blog" className="text-xs font-black uppercase text-primary hover:underline flex items-center gap-2">
                TÜMÜ <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {posts.slice(0, 8).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </section>
          {/* Newsletter */}
          <section className="glass-red p-12 text-center border-primary/30 relative overflow-hidden group">
             <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             <h2 className="text-4xl font-black tracking-tighter uppercase mb-4 relative z-10">BÜLTENE KATIL</h2>
             <p className="text-muted-foreground uppercase text-xs font-bold tracking-widest mb-10 relative z-10">Yeniliklerden ilk siz haberdar olun</p>
             <form className="max-w-md mx-auto flex gap-2 relative z-10" onSubmit={(e) => e.preventDefault()}>
               <Input className="h-14 bg-black/50 border-primary/20 rounded-none focus-visible:ring-primary" placeholder="E-Posta Adresiniz" />
               <Button className="btn-cyber h-14 px-8 rounded-none shrink-0">ABONE OL</Button>
             </form>
          </section>
        </main>
      </div>
    </div>
  );
}