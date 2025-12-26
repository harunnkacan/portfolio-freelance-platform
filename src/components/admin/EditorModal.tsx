import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useContentStore } from '@/lib/content-store';
import { toast } from 'sonner';
interface EditorModalProps {
  type: 'post' | 'product';
  isOpen: boolean;
  onClose: () => void;
  editId?: string | null;
}
export function EditorModal({ type, isOpen, onClose, editId }: EditorModalProps) {
  const posts = useContentStore(s => s.posts);
  const products = useContentStore(s => s.products);
  const addPost = useContentStore(s => s.addPost);
  const updatePost = useContentStore(s => s.updatePost);
  const addProduct = useContentStore(s => s.addProduct);
  const updateProduct = useContentStore(s => s.updateProduct);
  const [formData, setFormData] = useState<any>({});
  useEffect(() => {
    if (editId) {
      const existing = type === 'post' 
        ? posts.find(p => p.id === editId) 
        : products.find(p => p.id === editId);
      if (existing) setFormData(existing);
    } else {
      setFormData({});
    }
  }, [editId, type, posts, products]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (type === 'post') {
        if (editId) {
          updatePost(editId, formData);
          toast.success("Makale güncellendi.");
        } else {
          addPost(formData);
          toast.success("Yeni makale eklendi.");
        }
      } else {
        if (editId) {
          updateProduct(editId, formData);
          toast.success("Ürün güncellendi.");
        } else {
          addProduct(formData);
          toast.success("Yeni ürün eklendi.");
        }
      }
      onClose();
    } catch (err) {
      toast.error("İşlem başarısız oldu.");
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-black border-primary/20 text-white rounded-none">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black uppercase tracking-tighter text-primary">
            {editId ? 'DÜZENLE' : 'YENİ EKLE'}: {type.toUpperCase()}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest">Başlık / Ad</Label>
              <Input 
                value={formData.baslik || formData.ad || ''} 
                onChange={e => setFormData({...formData, [type === 'post' ? 'baslik' : 'ad']: e.target.value})}
                className="bg-black/50 border-primary/20 rounded-none" 
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest">Kategori</Label>
              <Input 
                value={formData.kategori || ''} 
                onChange={e => setFormData({...formData, kategori: e.target.value})}
                className="bg-black/50 border-primary/20 rounded-none" 
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-[10px] font-black uppercase tracking-widest">Görsel URL</Label>
            <Input 
              value={formData.resim || ''} 
              onChange={e => setFormData({...formData, resim: e.target.value})}
              className="bg-black/50 border-primary/20 rounded-none" 
              placeholder="https://images.unsplash.com/..."
              required
            />
          </div>
          {type === 'product' && (
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest">Fiyat</Label>
                <Input 
                  value={formData.fiyat || ''} 
                  onChange={e => setFormData({...formData, fiyat: e.target.value})}
                  className="bg-black/50 border-primary/20 rounded-none" 
                  placeholder="0 ₺"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest">Stok Durumu</Label>
                <Select value={formData.stokDurumu} onValueChange={v => setFormData({...formData, stokDurumu: v})}>
                  <SelectTrigger className="bg-black/50 border-primary/20 rounded-none uppercase text-[10px] font-black">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-primary/20 text-white rounded-none">
                    <SelectItem value="Anında Teslimat">ANINDA TESLİMAT</SelectItem>
                    <SelectItem value="Gecikmeli">GECİKMELİ</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          <div className="space-y-2">
            <Label className="text-[10px] font-black uppercase tracking-widest">
              {type === 'post' ? 'Özet' : 'Kısa Açıklama'}
            </Label>
            <Textarea 
              value={formData.ozet || formData.aciklama || ''} 
              onChange={e => setFormData({...formData, [type === 'post' ? 'ozet' : 'aciklama']: e.target.value})}
              className="bg-black/50 border-primary/20 rounded-none min-h-[80px]" 
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[10px] font-black uppercase tracking-widest">
              {type === 'post' ? 'Tam İçerik' : 'Özellikler (Satır başı bir adet)'}
            </Label>
            <Textarea 
              value={type === 'post' ? (formData.icerik || '') : (formData.ozellikler?.join('\n') || '')} 
              onChange={e => {
                if(type === 'post') setFormData({...formData, icerik: e.target.value});
                else setFormData({...formData, ozellikler: e.target.value.split('\n')});
              }}
              className="bg-black/50 border-primary/20 rounded-none min-h-[150px]" 
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} className="rounded-none border-primary/20">İPTAL</Button>
            <Button type="submit" className="btn-cyber px-8 rounded-none">KAYDET</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}