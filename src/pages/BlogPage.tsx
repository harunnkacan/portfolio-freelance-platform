import React, { useState } from 'react';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { makaleler } from '@/lib/content';
import { BlogCard } from '@/components/ui/blog-card';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
type Kategori = 'Hepsi' | 'Teknoloji' | 'Yazıl��m' | 'Yaşam';
export function BlogPage() {
  const [selectedKategori, setSelectedKategori] = useState<Kategori>('Hepsi');
  const kategoriler: Kategori[] = ['Hepsi', 'Teknoloji', 'Yazılım', 'Yaşam'];
  const filteredMakaleler = selectedKategori === 'Hepsi' 
    ? makaleler 
    : makaleler.filter(m => m.kategori === selectedKategori);
  return (
    <SiteLayout>
      <div className="cyber-grid min-h-screen py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-glow mb-6"
            >
              MAKALE <span className="text-primary italic">ARŞİVİ</span>
            </motion.h1>
            <p className="text-muted-foreground uppercase tracking-[0.3em] font-bold text-sm">
              Geleceği şekillendiren düşünceler ve teknik notlar.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {kategoriler.map((kat) => (
              <button
                key={kat}
                onClick={() => setSelectedKategori(kat)}
                className={cn(
                  "px-8 py-3 text-xs font-black uppercase tracking-widest transition-all border",
                  selectedKategori === kat 
                    ? "bg-primary border-primary text-white shadow-glow" 
                    : "border-primary/20 text-muted-foreground hover:border-primary/60 hover:text-foreground"
                )}
              >
                {kat}
              </button>
            ))}
          </div>
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredMakaleler.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </motion.div>
          {filteredMakaleler.length === 0 && (
            <div className="text-center py-20 border border-dashed border-primary/20">
              <p className="text-muted-foreground font-mono">Bu kategoride henüz içerik bulunmuyor.</p>
            </div>
          )}
        </div>
      </div>
    </SiteLayout>
  );
}