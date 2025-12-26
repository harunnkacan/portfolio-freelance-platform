import React, { useState } from 'react';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { makaleler } from '@/lib/content';
import { BlogCard } from '@/components/ui/blog-card';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Search, FilterX, Layers } from 'lucide-react';
import { Input } from '@/components/ui/input';
const categories = ['Tüm', 'React', 'CSS', 'Kod', 'Vue', 'PHP', 'Laravel', 'Wordpress'];
export function BlogPage() {
  const [selectedKategori, setSelectedKategori] = useState('Tüm');
  const [searchTerm, setSearchTerm] = useState('');
  const filteredMakaleler = makaleler.filter(m => {
    const matchesKategori = selectedKategori === 'Tüm' || m.kategori === selectedKategori;
    const matchesSearch = m.baslik.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         m.ozet.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesKategori && matchesSearch;
  });
  const getCountForCat = (cat: string) => {
    if (cat === 'Tüm') return makaleler.length;
    return makaleler.filter(m => m.kategori === cat).length;
  };
  return (
    <SiteLayout>
      <div className="cyber-grid min-h-screen py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-glow leading-none">
                  TÜM <span className="text-primary italic">MAKALELER</span>
                </h1>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground mt-4">
                  {filteredMakaleler.length} TÜM BULUNDU
                </p>
              </motion.div>
              <div className="relative w-full max-w-md group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5 transition-transform group-focus-within:scale-110" />
                <Input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Makale ara..."
                  className="h-14 pl-12 bg-black/40 border-primary/20 rounded-none text-base focus-visible:ring-primary"
                />
              </div>
            </div>
            {/* Filter Bar */}
            <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-none">
              {categories.map((kat) => (
                <button
                  key={kat}
                  onClick={() => setSelectedKategori(kat)}
                  className={cn(
                    "flex items-center gap-2 px-6 py-2 text-[10px] font-black uppercase tracking-widest transition-all border shrink-0",
                    selectedKategori === kat
                      ? "bg-primary border-primary text-white shadow-glow"
                      : "border-primary/20 text-muted-foreground hover:border-primary/60 hover:text-foreground"
                  )}
                >
                  {kat}
                  <span className={cn(
                    "ml-1 text-[8px] font-mono",
                    selectedKategori === kat ? "text-white" : "text-primary"
                  )}>
                    ({getCountForCat(kat)})
                  </span>
                </button>
              ))}
            </div>
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
              <p className="text-muted-foreground font-mono uppercase text-sm tracking-widest">Kriterlere uygun makale bulunamadı.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedKategori('Tüm'); }}
                className="text-primary text-xs font-black uppercase underline underline-offset-4"
              >
                Filtreleri Sıfırla
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </SiteLayout>
  );
}