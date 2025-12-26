import React from 'react';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { motion } from 'framer-motion';
import { useAuth } from '@/lib/auth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, User, CreditCard, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { urunler } from '@/lib/content';
export function DashboardPage() {
  // Zustand: Primitive selectors only
  const userName = useAuth((s) => s.user?.name);
  const userEmail = useAuth((s) => s.user?.email);
  const userRole = useAuth((s) => s.user?.role);
  const initialChar = userName?.[0]?.toUpperCase() || 'U';
  return (
    <SiteLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen cyber-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-end gap-6 mb-4">
            <div className="w-24 h-24 bg-primary flex items-center justify-center text-4xl font-black text-white shadow-glow">
              {initialChar}
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-primary">HOŞ GELDİN</span>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none">{userName}</h1>
            </div>
          </div>
          <p className="text-muted-foreground font-mono text-sm uppercase">{userEmail} • {userRole === 'admin' ? 'Yönetici' : 'Üye'}</p>
        </motion.div>
        <Tabs defaultValue="overview" className="space-y-12">
          <TabsList className="bg-transparent h-auto p-0 flex flex-wrap gap-4 border-b border-primary/20 pb-4">
            <TabsTrigger value="overview" className="rounded-none data-[state=active]:bg-primary data-[state=active]:text-white border border-primary/20 px-8 py-3 font-black uppercase text-[10px] tracking-widest">
              Genel Bakış
            </TabsTrigger>
            <TabsTrigger value="orders" className="rounded-none data-[state=active]:bg-primary data-[state=active]:text-white border border-primary/20 px-8 py-3 font-black uppercase text-[10px] tracking-widest">
              Siparişlerim
            </TabsTrigger>
            <TabsTrigger value="settings" className="rounded-none data-[state=active]:bg-primary data-[state=active]:text-white border border-primary/20 px-8 py-3 font-black uppercase text-[10px] tracking-widest">
              Ayarlar
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-red p-8 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">Satın Al��mlar</p>
                  <p className="text-4xl font-black">2</p>
                </div>
                <Package className="w-12 h-12 text-primary/20" />
              </div>
              <div className="glass-red p-8 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">Yorumlar</p>
                  <p className="text-4xl font-black">5</p>
                </div>
                <CreditCard className="w-12 h-12 text-primary/20" />
              </div>
              <div className="glass-red p-8 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">Puan</p>
                  <p className="text-4xl font-black">850</p>
                </div>
                <User className="w-12 h-12 text-primary/20" />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="orders">
            <div className="space-y-6">
              {urunler.map((item, idx) => (
                <div key={idx} className="glass-red p-6 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-6">
                    <img src={item.resim} className="w-20 h-20 object-cover border border-primary/20" alt={item.ad} />
                    <div>
                      <h4 className="font-black uppercase tracking-tight text-xl">{item.ad}</h4>
                      <p className="text-xs text-muted-foreground uppercase font-bold">{item.fiyat} • Sipariş No: #29482</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" className="rounded-none border-primary/30 text-[10px] font-black uppercase tracking-widest">
                      <ExternalLink className="mr-2 w-4 h-4" /> Detaylar
                    </Button>
                    <Button className="btn-cyber rounded-none text-[10px] font-black uppercase tracking-widest">
                      <Download className="mr-2 w-4 h-4" /> İNDİR (.ZIP)
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="settings">
            <div className="max-w-2xl glass-red p-8">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary">Görünen Ad</label>
                    <input className="w-full bg-black/50 border border-primary/20 p-4 font-mono text-sm focus:border-primary outline-none transition-all" defaultValue={userName || ''} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary">E-Posta</label>
                    <input className="w-full bg-black/20 border border-primary/10 p-4 font-mono text-sm opacity-50 cursor-not-allowed" disabled value={userEmail || ''} />
                  </div>
                </div>
                <Button className="btn-cyber rounded-none w-full h-14">DEĞİŞİKLİKLERİ KAYDET</Button>
              </form>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SiteLayout>
  );
}