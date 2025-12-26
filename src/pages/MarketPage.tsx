import React from 'react';
import { useContentStore } from '@/lib/content-store';
import { siteAyarlari } from '@/lib/content';
import { ProductCard } from '@/components/ui/product-card';
import { motion } from 'framer-motion';
import { ShoppingBag, Zap, ShieldCheck, Globe } from 'lucide-react';
export function MarketPage() {
  const products = useContentStore(s => s.products);
  return (
    <div className="cyber-grid min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-8">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-glow leading-none mb-8"
            >
              DİJİTAL <br /> <span className="text-primary italic">MAĞAZA</span>
            </motion.h1>
            <p className="text-xl text-muted-foreground max-w-xl italic uppercase font-medium">
              Projelerinizi bir üst seviyeye taşıyacak premium dijital varlıklar ve yazılım çözümleri.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className="glass-red p-8 flex items-center justify-between border-primary/30">
              <div>
                <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1">Toplam Satış</p>
                <p className="text-4xl font-black tracking-tighter">{siteAyarlari.istatistikler.satis}</p>
              </div>
              <ShoppingBag className="w-10 h-10 text-primary opacity-50" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {[
            { icon: Zap, title: 'Anında Teslimat', desc: 'Ödeme sonrası tüm dosyalara anında erişim.' },
            { icon: ShieldCheck, title: 'Güvenli Ödeme', desc: '256-bit SSL sertifikalı güvenli altyapı.' },
            { icon: Globe, title: 'Global Destek', desc: 'Dünyanın her yerinden erişim ve destek.' },
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 border border-primary/10 bg-black/20">
              <feature.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-sm font-black uppercase tracking-widest mb-2">{feature.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed italic">{feature.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}