import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSettings } from '@/lib/settings-store';
import { HardDrive, Upload, Search, Link, Trash2, Download, FileIcon, ImageIcon, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
export function MediaManager() {
  const media = useSettings(s => s.media);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredMedia = media.filter(file => 
    file.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success("Dosya bağlantısı kopyalandı!");
  };
  const handleUpload = () => {
    toast.info("Yükleme işlemi simüle ediliyor...");
  };
  return (
    <div className="space-y-10 pb-20">
      <div className="flex justify-between items-end border-b border-primary/20 pb-8">
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-glow flex items-center gap-3">
            <HardDrive className="text-primary" /> DOSYA YÖNETİCİSİ
          </h2>
          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-2">Cloudflare R2 Depolama Arabirimi (MOCK)</p>
        </div>
        <div className="w-64 space-y-2">
          <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-muted-foreground">
            <span>Kullanılan Alan</span>
            <span className="text-primary">1.2 GB / 10 GB</span>
          </div>
          <Progress value={12} className="h-1 bg-white/5" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1 space-y-6">
          <div 
            onClick={handleUpload}
            className="border-2 border-dashed border-primary/20 bg-primary/5 p-10 flex flex-col items-center justify-center gap-4 cursor-pointer hover:border-primary/40 transition-all group"
          >
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Upload className="text-primary" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground text-center">Dosyaları sürükleyin veya <br/><span className="text-primary underline">Göz Atın</span></p>
          </div>
          <div className="glass-red p-6 space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-primary">FİLTRELER</h3>
            <div className="space-y-2">
              {['Tüm Dosyalar', 'Görüntüler', 'Belgeler', 'Video'].map(f => (
                <button key={f} className="w-full text-left px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:bg-primary/5 hover:text-primary transition-all">
                  {f}
                </button>
              ))}
            </div>
          </div>
        </aside>
        <main className="lg:col-span-3 space-y-6">
          <div className="flex gap-4">
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-4 h-4" />
              <Input 
                placeholder="Dosya adı ara..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-12 pl-12 bg-black/40 border-primary/20 rounded-none text-xs"
              />
            </div>
            <Button variant="outline" className="h-12 px-6 border-primary/20 text-primary rounded-none">
              <Filter size={16} />
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredMedia.map((file) => (
              <motion.div 
                key={file.id} 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="glass-red border-primary/10 overflow-hidden group relative"
              >
                <div className="aspect-square bg-black/60 flex items-center justify-center overflow-hidden">
                  {file.type.startsWith('image') ? (
                    <img src={file.url} alt={file.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  ) : (
                    <FileIcon className="w-12 h-12 text-primary/20" />
                  )}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4">
                    <Button onClick={() => copyUrl(file.url)} size="sm" className="w-full h-8 text-[8px] font-black uppercase tracking-widest rounded-none">
                      <Link size={12} className="mr-1" /> URL KOPYALA
                    </Button>
                    <div className="flex gap-2 w-full">
                      <Button variant="outline" size="icon" className="flex-1 h-8 border-primary/20 text-primary hover:bg-primary hover:text-white rounded-none">
                        <Download size={12} />
                      </Button>
                      <Button variant="ghost" size="icon" className="flex-1 h-8 text-red-500 hover:bg-red-500/10 rounded-none">
                        <Trash2 size={12} />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-3 border-t border-primary/10 bg-black/40">
                  <p className="text-[9px] font-black uppercase tracking-tight truncate">{file.name}</p>
                  <p className="text-[8px] font-mono text-muted-foreground uppercase">{file.size}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}