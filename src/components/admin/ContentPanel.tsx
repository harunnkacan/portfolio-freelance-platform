import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { makaleler, kategorilerSidebar } from '@/lib/content';
import { AdminBlogCard } from './AdminBlogCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Plus, FileText, Layers, TrendingUp, Eye, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';
export function ContentPanel() {
  const [searchTerm, setSearchTerm] = useState('');
  const stats = [
    { label: 'TOPLAM MAKALE', value: makaleler.length.toString(), icon: FileText, color: 'text-primary' },
    { label: 'TOPLAM OKUNMA', value: '12.4K', icon: Eye, color: 'text-blue-500' },
    { label: 'YORUMLAR', value: '142', icon: MessageSquare, color: 'text-emerald-500' },
    { label: 'KATEGOR��LER', value: kategorilerSidebar.length.toString(), icon: Layers, color: 'text-amber-500' },
  ];
  const handleAddContent = () => {
    toast.success("Yeni içerik editörü başlatılıyor...");
  };
  const filteredArticles = makaleler.filter(m => 
    m.baslik.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.kategori.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-red p-6 flex flex-col justify-between h-32 border-primary/10"
          >
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</span>
              <stat.icon size={20} className={stat.color} />
            </div>
            <p className="text-3xl font-black tracking-tighter">{stat.value}</p>
          </motion.div>
        ))}
      </div>
      <Tabs defaultValue="posts" className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <TabsList className="bg-black/40 border border-primary/20 h-14 p-1 rounded-none w-full md:w-auto">
            <TabsTrigger value="posts" className="flex-1 px-8 rounded-none data-[state=active]:bg-primary font-black uppercase text-[10px] tracking-widest">MAKALELER</TabsTrigger>
            <TabsTrigger value="categories" className="flex-1 px-8 rounded-none data-[state=active]:bg-primary font-black uppercase text-[10px] tracking-widest">KATEGORİLER</TabsTrigger>
          </TabsList>
          <Button onClick={handleAddContent} className="btn-cyber h-14 px-8 text-[10px] font-black uppercase shrink-0">
            <Plus size={18} className="mr-2" /> YENİ MAKALE EKLE
          </Button>
        </div>
        <TabsContent value="posts" className="space-y-8 mt-0">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5 transition-transform group-focus-within:scale-110" />
            <Input
              placeholder="Makale başlığı veya kategori ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-14 pl-12 bg-black/40 border-primary/20 rounded-none focus-visible:ring-primary"
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            {filteredArticles.map((post) => (
              <AdminBlogCard key={post.id} post={post} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="categories" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kategorilerSidebar.map((kat) => (
              <div key={kat.ad} className="glass-red p-6 border-primary/10 flex items-center justify-between group hover:border-primary/40 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Layers size={18} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-widest text-xs">{kat.ad}</h4>
                    <p className="text-[10px] text-muted-foreground font-mono">ID: {kat.ad.toLowerCase()}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                    <TrendingUp size={14} />
                  </Button>
                </div>
              </div>
            ))}
            <button onClick={handleAddContent} className="border-2 border-dashed border-primary/20 p-6 flex items-center justify-center gap-3 hover:bg-primary/5 hover:border-primary/40 transition-all group">
              <Plus size={20} className="text-primary group-hover:scale-125 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">KATEGORİ EKLE</span>
            </button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}