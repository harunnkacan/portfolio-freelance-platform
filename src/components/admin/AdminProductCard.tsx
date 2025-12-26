import React from 'react';
import { Urun } from '@/lib/content';
import { Edit, Trash2, Eye, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
interface AdminProductCardProps {
  product: Urun;
  onEdit: () => void;
  onDelete: () => void;
}
export function AdminProductCard({ product, onEdit, onDelete }: AdminProductCardProps) {
  return (
    <div className="glass-red border-primary/10 flex items-center p-4 gap-6 group hover:border-primary/40 transition-all">
      <div className="w-24 h-24 shrink-0 bg-black/40 border border-primary/10 overflow-hidden">
        <img src={product.resim} alt={product.ad} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-1">
          <h4 className="text-lg font-black uppercase tracking-tight truncate">{product.ad}</h4>
          <Badge className="bg-primary/10 text-primary border border-primary/20 text-[8px] px-2 py-0 rounded-none uppercase">
            {product.kategori}
          </Badge>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xl font-black text-primary">{product.fiyat}</span>
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            {product.stokDurumu === 'Anında Teslimat' ? '● AKTİF' : '○ BEKLEMEDE'}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button onClick={onEdit} variant="outline" size="sm" className="h-10 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all rounded-none uppercase font-black text-[9px] tracking-widest hidden md:flex">
          <Edit size={14} className="mr-2" /> DÜZENLE
        </Button>
        <Button onClick={onDelete} variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-red-500 hover:bg-red-500/10 rounded-none hidden md:flex">
          <Trash2 size={16} />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <MoreVertical size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black border-primary/20 text-white rounded-none min-w-[120px]">
            <DropdownMenuItem className="text-[10px] font-black uppercase py-3 cursor-pointer"><Eye size={14} className="mr-2" /> Görüntüle</DropdownMenuItem>
            <DropdownMenuItem onClick={onEdit} className="text-[10px] font-black uppercase py-3 cursor-pointer"><Edit size={14} className="mr-2" /> Düzenle</DropdownMenuItem>
            <DropdownMenuItem onClick={onDelete} className="text-[10px] font-black uppercase py-3 cursor-pointer text-red-500"><Trash2 size={14} className="mr-2" /> Sil</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}