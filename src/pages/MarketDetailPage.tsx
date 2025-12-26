import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useContentStore } from '@/lib/content-store';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ShoppingCart, ShieldCheck, DownloadCloud, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CheckoutModal } from '@/components/market/CheckoutModal';
import { toast } from 'sonner';
export function MarketDetailPage() {
  const { id } = useParams();
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const products = useContentStore(s => s.products);
  const product = products.find(u => u.id === id);
  if (!product) return <Navigate to="/market" />;
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Bağlantı kopyalandı!");
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="cyber-grid min-h-screen py-12 md:py-24">
        <div className="flex justify-between items-center mb-12">
          <Link to="/market" className="inline-flex items-center text-primary text-xs font-black uppercase tracking-[0.2em] hover:translate-x-[-5px] transition-transform">
            <ArrowLeft className="mr-2 w-4 h-4" /> Mağazaya Dön
          </Link>
          <Button variant="ghost" size="icon" onClick={handleShare} className="text-primary border border-primary/20 rounded-none">
            <Share2 size={18} />
          </Button>
        </div>
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
                <div key={i} className="aspect-video glass-red bg-black/40 border-primary/10 overflow-hidden">
                  <img src={product.resim} className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
                </div>
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
              <span className="text-muted-foreground font-mono text-[10px] uppercase">{product.stokDurumu}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-glow mb-4 leading-none">
              {product.ad}
            </h1>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-6xl font-black text-primary">{product.fiyat}</span>
              <span className="text-muted-foreground line-through font-mono text-xl opacity-50">{(parseInt(product.fiyat) * 1.5).toString()} ₺</span>
            </div>
            <p className="text-xl text-muted-foreground italic mb-10 leading-relaxed uppercase font-medium">
              {product.aciklama}
            </p>
            <div className="space-y-4 mb-12">
              <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-6">Paket İçeriği</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.ozellikler.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-auto space-y-4">
              <Button
                onClick={() => setCheckoutOpen(true)}
                className="w-full btn-cyber h-20 text-xl font-black uppercase tracking-widest rounded-none shadow-glow transition-all active:scale-95"
              >
                <ShoppingCart className="mr-3 w-8 h-8" /> HEMEN SATIN AL
              </Button>
              <div className="flex items-center justify-center gap-8 text-[9px] font-mono text-muted-foreground uppercase py-4 border-t border-primary/10 mt-6">
                <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Güvenli SSL</div>
                <div className="flex items-center gap-2"><DownloadCloud className="w-4 h-4 text-primary" /> Anında Teslimat</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <CheckoutModal
        product={product}
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
      />
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <Button
          onClick={() => setCheckoutOpen(true)}
          className="w-full btn-cyber h-14 rounded-full shadow-glow-lg text-xs"
        >
          HIZLI SATIN AL • {product.fiyat}
        </Button>
      </div>
    </div>
  );
}