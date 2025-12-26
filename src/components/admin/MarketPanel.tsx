import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { urunler, adminStats } from '@/lib/content';
import { AdminProductCard } from './AdminProductCard';
import { OrderList } from './OrderList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Plus, Filter, TrendingUp, ShoppingBag, Package, ShieldCheck } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSearchParams } from 'react-router-dom';
export function MarketPanel() {
  const [searchParams, setSearchParams] = useSearchParams();
  const subTab = searchParams.get('sub') || 'products';
  const [searchTerm, setSearchTerm] = useState('');
  const stats = [
    { label: 'TOPLAM CİRO', value: adminStats.ciro, icon: TrendingUp, color: 'text-primary' },
    { label: 'SİPARİŞLER', value: '1.240', icon: ShoppingBag, color: 'text-blue-500' },
    { label: 'AKTİF ÜRÜNLER', value: urunler.length.toString(), icon: Package, color: 'text-emerald-500' },
    { label: 'SİSTEM DURUMU', value: adminStats.sistemDurumu, icon: ShieldCheck, color: 'text-amber-500' },
  ];
  const handleSubTabChange = (val: string) => {
    setSearchParams({ tab: 'market', sub: val });
  };
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
      <Tabs value={subTab} onValueChange={handleSubTabChange} className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <TabsList className="bg-black/40 border border-primary/20 h-14 p-1 rounded-none w-full md:w-auto">
            <TabsTrigger value="overview" className="flex-1 px-6 rounded-none data-[state=active]:bg-primary font-black uppercase text-[10px] tracking-widest">GENEL BAKIŞ</TabsTrigger>
            <TabsTrigger value="products" className="flex-1 px-6 rounded-none data-[state=active]:bg-primary font-black uppercase text-[10px] tracking-widest">ÜRÜN YÖNETİMİ</TabsTrigger>
            <TabsTrigger value="orders" className="flex-1 px-6 rounded-none data-[state=active]:bg-primary font-black uppercase text-[10px] tracking-widest">SİPARİŞ LİSTESİ</TabsTrigger>
            <TabsTrigger value="config" className="flex-1 px-6 rounded-none data-[state=active]:bg-primary font-black uppercase text-[10px] tracking-widest">MAĞAZA AYARLARI</TabsTrigger>
          </TabsList>
          <Button className="btn-cyber h-14 px-8 text-[10px] font-black uppercase shrink-0">
            <Plus size={18} className="mr-2" /> YEN�� ÜRÜN EKLE
          </Button>
        </div>
        <TabsContent value="products" className="space-y-8 mt-0">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5 transition-transform group-focus-within:scale-110" />
              <Input
                placeholder="Ürün adı, ID veya kategori ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-14 pl-12 bg-black/40 border-primary/20 rounded-none focus-visible:ring-primary"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[200px] h-14 bg-black/40 border-primary/20 rounded-none text-[10px] font-black uppercase tracking-widest">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Kategori" />
              </SelectTrigger>
              <SelectContent className="bg-black border-primary/20 text-white rounded-none">
                <SelectItem value="all" className="uppercase font-black text-[10px]">TÜM KATEGORİLER</SelectItem>
                <SelectItem value="tasarim" className="uppercase font-black text-[10px]">TASARIM</SelectItem>
                <SelectItem value="yazilim" className="uppercase font-black text-[10px]">YAZILIM</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {urunler.filter(u => u.ad.toLowerCase().includes(searchTerm.toLowerCase())).map((product) => (
              <AdminProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="orders" className="mt-0">
          <OrderList />
        </TabsContent>
        <TabsContent value="overview" className="mt-0">
          <div className="glass-red p-12 text-center border-dashed border-primary/20">
            <p className="text-muted-foreground font-mono text-sm uppercase italic">Satış analitiği verileri yükleniyor...</p>
          </div>
        </TabsContent>
        <TabsContent value="config" className="mt-0">
          <div className="glass-red p-12 text-center border-dashed border-primary/20">
            <p className="text-muted-foreground font-mono text-sm uppercase italic">Mağaza yapılandırma ayarları...</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}