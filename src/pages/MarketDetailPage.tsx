import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { urunler } from '@/lib/content';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ShoppingCart, ShieldCheck, DownloadCloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function MarketDetailPage() {
  const { id } = useParams();
  const product = urunler.find(u => u.id === id);
  if (!product) return <Navigate to="/market" />;
  return (
    <SiteLayout>
      <div className="cyber-grid min-h-screen py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/market" className="inline-flex items-center text-primary text-xs font-black uppercase tracking-[0.2em] mb-12 hover:translate-x-[-5px] transition-transform">
            <ArrowLeft className="mr-2 w-4 h-4" /> Mağazaya Dön
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="glass-red p-4 overflow-hidden group">
                <img 
                  src={product.resim} 
                  alt={product.ad} 
                  className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-video glass-red bg-black/40 border-primary/10" />
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-primary/10 text-primary text-[10px] font-black px-4 py-1 uppercase tracking-widest border border-primary/30">
                  {product.kategori}
                </span>
                <span className="text-muted-foreground font-mono text-[10px]">{product.stokDurumu}</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase text-glow mb-4">
                {product.ad}
              </h1>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-6xl font-black text-primary">{product.fiyat}</span>
                <span className="text-muted-foreground line-through font-mono text-xl opacity-50">{(parseInt(product.fiyat) * 1.5).toString()} ₺</span>
              </div>
              <p className="text-xl text-muted-foreground italic mb-10 leading-relaxed">
                {product.aciklama}
              </p>
              <div className="space-y-4 mb-12">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-6">Paket İçeriği</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.ozellikler.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-auto space-y-4">
                <Button className="w-full btn-cyber h-16 text-lg font-black uppercase tracking-widest rounded-none shadow-glow">
                  <ShoppingCart className="mr-3 w-6 h-6" /> HEMEN SATIN AL
                </Button>
                <div className="flex items-center justify-center gap-6 text-[10px] font-mono text-muted-foreground uppercase py-4">
                  <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Güvenli Ödeme</div>
                  <div className="flex items-center gap-2"><DownloadCloud className="w-4 h-4 text-primary" /> Anında İndir</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}