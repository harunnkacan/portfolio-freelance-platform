import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, FileText, ShoppingBag } from 'lucide-react';
import { useContentStore } from '@/lib/content-store';
import { Link } from 'react-router-dom';
interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}
export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  // Zustand: Primitive selectors only
  const makaleler = useContentStore(s => s.posts);
  const urunler = useContentStore(s => s.products);
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);
  const filteredBlog = query.length > 1
    ? makaleler.filter(m => m.baslik.toLowerCase().includes(query.toLowerCase())).slice(0, 4)
    : [];
  const filteredMarket = query.length > 1
    ? urunler.filter(u => u.ad.toLowerCase().includes(query.toLowerCase())).slice(0, 4)
    : [];
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl p-4 md:p-12 overflow-y-auto"
        >
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <span className="text-primary font-black tracking-tighter text-2xl text-glow">LUMINA SEARCH</span>
              <button onClick={onClose} className="p-2 hover:text-primary transition-colors">
                <X size={32} />
              </button>
            </div>
            <div className="relative mb-20">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-primary w-12 h-12" />
              <input
                autoFocus
                placeholder="NE ARIYORSUN?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-b-4 border-primary/20 focus:border-primary outline-none py-8 pl-16 text-4xl md:text-7xl font-black uppercase tracking-tighter placeholder:text-white/10 transition-all"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <section>
                <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
                  <FileText size={16} /> Makaleler
                </h3>
                <div className="space-y-4">
                  {filteredBlog.map(post => (
                    <Link key={post.id} to={`/blog/${post.id}`} onClick={onClose} className="group block glass-red p-6 hover:border-primary transition-all">
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold uppercase tracking-tight group-hover:text-primary">{post.baslik}</span>
                        <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-all" />
                      </div>
                    </Link>
                  ))}
                  {query.length > 1 && filteredBlog.length === 0 && <p className="text-muted-foreground italic text-sm font-mono uppercase">Sonuç bulunamadı.</p>}
                </div>
              </section>
              <section>
                <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
                  <ShoppingBag size={16} /> Market
                </h3>
                <div className="space-y-4">
                  {filteredMarket.map(item => (
                    <Link key={item.id} to={`/market/${item.id}`} onClick={onClose} className="group block glass-red p-6 hover:border-primary transition-all">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-xl font-bold uppercase tracking-tight block group-hover:text-primary">{item.ad}</span>
                          <span className="text-xs text-primary font-mono">{item.fiyat}</span>
                        </div>
                        <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 transition-all" />
                      </div>
                    </Link>
                  ))}
                  {query.length > 1 && filteredMarket.length === 0 && <p className="text-muted-foreground italic text-sm font-mono uppercase">Sonuç bulunamadı.</p>}
                </div>
              </section>
            </div>
            <div className="mt-24 text-center">
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                ESC ile Kapat — Enter ile Onayla
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}