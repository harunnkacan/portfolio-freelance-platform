import React from 'react';
import { Link } from 'react-router-dom';
import { Urun } from '@/lib/content';
import { motion } from 'framer-motion';
import { ShoppingCart, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface ProductCardProps {
  product: Urun;
}
export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-red group overflow-hidden flex flex-col h-full border-primary/10"
    >
      <div className="relative aspect-square overflow-hidden bg-black/40">
        <img 
          src={product.resim} 
          alt={product.ad}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-black/80 text-primary border border-primary/30 text-[10px] font-black px-3 py-1 uppercase backdrop-blur-md">
            {product.kategori}
          </span>
        </div>
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">{product.ad}</h3>
          <span className="text-primary font-black text-2xl drop-shadow-sm">{product.fiyat}</span>
        </div>
        <p className="text-xs text-muted-foreground mb-6 line-clamp-2 uppercase font-bold tracking-tight">
          {product.stokDurumu} • {product.ozellikler[0]}
        </p>
        <div className="mt-auto grid grid-cols-2 gap-4">
          <Button asChild variant="outline" className="rounded-none border-primary/30 text-primary hover:bg-primary/10 font-bold uppercase text-[10px] tracking-widest">
            <Link to={`/market/${product.id}`}><ExternalLink className="mr-2 w-3 h-3" /> Detay</Link>
          </Button>
          <Button className="btn-cyber rounded-none font-black uppercase text-[10px] tracking-widest">
            <ShoppingCart className="mr-2 w-3 h-3" /> SATIN AL
          </Button>
        </div>
      </div>
    </motion.div>
  );
}