import React from 'react';
import { Link } from 'react-router-dom';
import { Makale } from '@/lib/content';
import { motion } from 'framer-motion';
import { Clock, ArrowUpRight } from 'lucide-react';
interface BlogCardProps {
  post: Makale;
}
export function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden glass-red flex flex-col h-full"
    >
      <Link to={`/blog/${post.id}`} className="block relative aspect-video overflow-hidden">
        <img 
          src={post.resim} 
          alt={post.baslik} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white text-[10px] font-black px-3 py-1 uppercase tracking-tighter">
            {post.kategori}
          </span>
        </div>
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-[10px] font-mono text-muted-foreground mb-3">
          <span>{post.tarih}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.okumaSuresi}</span>
        </div>
        <Link to={`/blog/${post.id}`}>
          <h3 className="text-xl font-black uppercase tracking-tighter leading-tight mb-4 group-hover:text-primary transition-colors flex items-start justify-between">
            {post.baslik}
            <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-primary" />
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-3 mb-6 flex-1 italic">
          "{post.ozet}"
        </p>
        <Link 
          to={`/blog/${post.id}`}
          className="text-xs font-black uppercase tracking-widest text-primary border-b border-transparent hover:border-primary w-fit pb-1 transition-all"
        >
          Devamını Oku
        </Link>
      </div>
    </motion.div>
  );
}