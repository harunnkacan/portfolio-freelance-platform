import React, { useState } from 'react';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { makaleler } from '@/lib/content';
import { BlogCard } from '@/components/ui/blog-card';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Search, FilterX } from 'lucide-react';
import { Input } from '@/components/ui/input';
type Kategori = 'Hepsi' | 'Teknoloji' | 'Yazılım' | 'Yaşam';
export function BlogPage() {
  const [selectedKategori, setSelectedKategori] = useState<Kategori>('Hepsi');
  const [searchTerm, setSearchTerm] = useState('');
  const kategoriler: Kategori[] = ['Hepsi', 'Teknoloji', 'Yazılım', 'Yaşam'];
  const filteredMakaleler = makaleler.filter(m => {
    const matchesKategori = selectedKategori === 'Hepsi' || m.kategori === selectedKategori;
    const matchesSearch = m.baslik.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         m.ozet.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesKategori && matchesSearch;
  });
  return (
    <SiteLayout>
      <div className="cyber-grid min-h-screen py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-glow mb-6"
            >
              MAKALE <span className="text-primary italic">ARŞİVİ</span>
            </motion.h1>
            <div className="max-w-2xl mx-auto relative group mt-12">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5 transition-transform group-focus-within:scale-110" />
              <Input 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="İçeriklerde ara..." 
                className="h-16 pl-12 bg-black/40 border-primary/20 rounded-none text-lg focus-visible:ring-primary focus-visible:border-primary focus-visible:shadow-glow-lg transition-all"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {kategoriler.map((kat) => (
              <button
                key={kat}
                onClick={() => setSelectedKategori(kat)}
                className={cn(
                  "px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all border",
                  selectedKategori === kat
                    ? "bg-primary border-primary text-white shadow-glow scale-105"
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
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32 border border-dashed border-primary/20 flex flex-col items-center gap-4"
            >
              <FilterX className="w-12 h-12 text-primary/40" />
              <p className="text-muted-foreground font-mono uppercase text-sm tracking-widest">Arama kriterlerine uygun içerik bulunamadı.</p>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedKategori('Hepsi'); }}
                className="text-primary text-xs font-black uppercase underline underline-offset-4"
              >
                Filtreleri Temizle
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </SiteLayout>
  );
}