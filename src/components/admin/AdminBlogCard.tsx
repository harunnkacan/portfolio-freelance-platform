import React from 'react';
import { Makale } from '@/lib/content';
import { Edit, Trash2, Eye, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
interface AdminBlogCardProps {
  post: Makale;
  onEdit: () => void;
  onDelete: () => void;
}
export function AdminBlogCard({ post, onEdit, onDelete }: AdminBlogCardProps) {
  return (
    <div className="glass-red border-primary/10 flex flex-col md:flex-row items-center p-4 gap-6 group hover:border-primary/40 transition-all">
      <div className="w-full md:w-32 h-24 shrink-0 bg-black/40 border border-primary/10 overflow-hidden">
        <img src={post.resim} alt={post.baslik} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <Badge className="bg-primary/10 text-primary border border-primary/20 text-[8px] px-2 py-0 rounded-none uppercase font-black">
            {post.kategori}
          </Badge>
          <div className="flex items-center gap-1.5 text-[9px] font-mono text-muted-foreground uppercase">
            <Calendar size={10} /> {post.tarih}
          </div>
          <div className="flex items-center gap-1.5 text-[9px] font-mono text-muted-foreground uppercase">
            <Clock size={10} /> {post.okumaSuresi}
          </div>
        </div>
        <h4 className="text-lg font-black uppercase tracking-tight truncate mb-1 group-hover:text-primary transition-colors">
          {post.baslik}
        </h4>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-[10px] font-black text-primary uppercase tracking-widest">
            <Eye size={12} /> {post.okunma} OKUNMA
          </div>
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest opacity-50">
            ID: {post.id}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 w-full md:w-auto shrink-0 border-t md:border-t-0 md:border-l border-primary/10 pt-4 md:pt-0 md:pl-6">
        <Button onClick={onEdit} variant="outline" size="sm" className="flex-1 md:flex-none h-10 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all rounded-none uppercase font-black text-[9px] tracking-widest">
          <Edit size={14} className="mr-2" /> DÜZENLE
        </Button>
        <Button onClick={onDelete} variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-red-500 hover:bg-red-500/10 rounded-none">
          <Trash2 size={16} />
        </Button>
      </div>
    </div>
  );
}