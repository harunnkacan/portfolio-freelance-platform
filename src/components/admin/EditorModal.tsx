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
import { Globe, ShieldCheck } from 'lucide-react';
interface EditorModalProps {
  type: 'post' | 'product';
  isOpen: boolean;
  onClose: () => void;
  editId?: string | null;
}
export function EditorModal({ type, isOpen, onClose, editId }: EditorModalProps) {
  const posts = useContentStore(s => s.posts);
  const products = useContentStore(s => s.products);
  const categories = useContentStore(s => s.categories);
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
      setFormData({
        stokDurumu: 'Anında Teslimat',
        ozellikler: [],
        kategori: categories[0]?.ad || ''
      });
    }
  }, [editId, type, posts, products, categories]);
  const handleTitleChange = (val: string) => {
    const field = type === 'post' ? 'baslik' : 'ad';
    const slug = val.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    setFormData({ ...formData, [field]: val, slug });
  };
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
      toast.error("İ��lem başarısız oldu.");
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-black border-primary/20 text-white rounded-none max-h-[90vh] overflow-y-auto scrollbar-none">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black uppercase tracking-tighter text-primary">
            {editId ? 'DÜZENLE' : 'YENİ EKLE'}: {type.toUpperCase()}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-8 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest">Başlık / Ad</Label>
              <Input
                value={formData.baslik || formData.ad || ''}
                onChange={e => handleTitleChange(e.target.value)}
                className="bg-black/50 border-primary/20 rounded-none h-12"
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest">URL / Slug</Label>
              <Input
                value={formData.slug || ''}
                onChange={e => setFormData({...formData, slug: e.target.value})}
                className="bg-black/50 border-primary/20 rounded-none h-12 font-mono text-primary"
                placeholder="url-adresi"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest">Kategori</Label>
              <Select value={formData.kategori} onValueChange={v => setFormData({...formData, kategori: v})}>
                <SelectTrigger className="bg-black/50 border-primary/20 rounded-none h-12 text-[10px] font-black">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-black border-primary/20 text-white rounded-none">
                  {categories.map(c => (
                    <SelectItem key={c.ad} value={c.ad} className="text-[10px] font-black uppercase">{c.ad}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest">Görsel URL</Label>
              <Input
                value={formData.resim || ''}
                onChange={e => setFormData({...formData, resim: e.target.value})}
                className="bg-black/50 border-primary/20 rounded-none h-12"
                placeholder="https://..."
                required
              />
            </div>
          </div>
          {type === 'product' && (
            <div className="grid grid-cols-2 gap-6 p-6 bg-primary/5 border border-primary/10">
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest">Fiyat</Label>
                <Input
                  value={formData.fiyat || ''}
                  onChange={e => setFormData({...formData, fiyat: e.target.value})}
                  className="bg-black/50 border-primary/20 rounded-none h-12"
                  placeholder="0 ₺"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest">Stok Durumu</Label>
                <Select value={formData.stokDurumu} onValueChange={v => setFormData({...formData, stokDurumu: v})}>
                  <SelectTrigger className="bg-black/50 border-primary/20 rounded-none h-12 uppercase text-[10px] font-black">
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
              {type === 'post' ? 'Özet Metin' : 'Kısa Açıklama'}
            </Label>
            <Textarea
              value={formData.ozet || formData.aciklama || ''}
              onChange={e => setFormData({...formData, [type === 'post' ? 'ozet' : 'aciklama']: e.target.value})}
              className="bg-black/50 border-primary/20 rounded-none min-h-[100px]"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[10px] font-black uppercase tracking-widest">
              {type === 'post' ? 'Makale İçeriği' : 'Ürün Özellikleri (Satır Başı Bir Tane)'}
            </Label>
            <Textarea
              value={type === 'post' ? (formData.icerik || '') : (formData.ozellikler?.join('\n') || '')}
              onChange={e => {
                if(type === 'post') setFormData({...formData, icerik: e.target.value});
                else setFormData({...formData, ozellikler: e.target.value.split('\n')});
              }}
              className="bg-black/50 border-primary/20 rounded-none min-h-[200px]"
            />
          </div>
          <section className="p-6 bg-white/5 border border-white/10 space-y-6">
            <div className="flex items-center gap-2 text-primary">
              <Globe size={16} />
              <h3 className="text-xs font-black uppercase tracking-widest">SEO AYARLARI</h3>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest">Meta Başlık</Label>
                <Input
                  value={formData.metaTitle || ''}
                  onChange={e => setFormData({...formData, metaTitle: e.target.value})}
                  className="bg-black/50 border-primary/20 rounded-none h-12"
                  placeholder="Tarayıcı sekmesinde görünecek başlık"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest">Meta Açıklama</Label>
                <Textarea
                  value={formData.metaDescription || ''}
                  onChange={e => setFormData({...formData, metaDescription: e.target.value})}
                  className="bg-black/50 border-primary/20 rounded-none min-h-[80px]"
                  placeholder="Arama motoru sonuçlarında görünecek açıklama"
                />
              </div>
            </div>
          </section>
          <DialogFooter className="sticky bottom-0 bg-black pt-4 border-t border-primary/20">
            <Button type="button" variant="outline" onClick={onClose} className="rounded-none border-primary/20 h-14 px-8">İPTAL</Button>
            <Button type="submit" className="btn-cyber px-12 h-14 rounded-none">
              <ShieldCheck className="mr-2 w-5 h-5" /> KAYDET VE YAYINLA
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}