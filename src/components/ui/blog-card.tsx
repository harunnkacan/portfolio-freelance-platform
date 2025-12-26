import React from 'react';
import { Link } from 'react-router-dom';
import { Makale } from '@/lib/content';
import { motion } from 'framer-motion';
import { Clock, Github, ChevronRight } from 'lucide-react';
interface BlogCardProps {
  post: Makale;
}
export function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden glass-red flex flex-col h-full border-primary/10 hover:border-primary/40"
    >
      <Link to={`/blog/${post.id}`} className="block relative aspect-[4/3] overflow-hidden">
        <img
          src={post.resim}
          alt={post.baslik}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        {/* GitHub Badge */}
        {post.githubRepo && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/80 backdrop-blur-md border border-white/10 px-2 py-1 rounded text-[9px] font-mono text-white/90">
            <Github size={12} className="text-white" />
            <span className="truncate max-w-[100px]">{post.githubRepo}</span>
          </div>
        )}
        <div className="absolute bottom-3 left-3">
          <span className="bg-primary text-white text-[9px] font-black px-2 py-0.5 uppercase tracking-tighter">
            {post.kategori}
          </span>
        </div>
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-[9px] font-mono text-muted-foreground mb-3">
          <span>{post.tarih}</span>
          <span className="flex items-center gap-1 uppercase"><Clock size={10} /> {post.okumaSuresi}</span>
        </div>
        <Link to={`/blog/${post.id}`}>
          <h3 className="text-base font-black uppercase tracking-tight leading-tight mb-4 group-hover:text-primary transition-colors line-clamp-2">
            {post.baslik}
          </h3>
        </Link>
        <p className="text-[11px] text-muted-foreground/80 line-clamp-2 mb-6 flex-1 font-medium leading-relaxed uppercase">
          {post.ozet}
        </p>
        <Link
          to={`/blog/${post.id}`}
          className="flex items-center justify-center w-full bg-primary text-white h-10 text-[10px] font-black uppercase tracking-widest transition-all hover:bg-primary/90 hover:shadow-glow active:scale-95"
        >
          OKU <ChevronRight size={14} className="ml-1" />
        </Link>
      </div>
    </motion.div>
  );
}