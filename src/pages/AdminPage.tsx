import React from 'react';
import { motion } from 'framer-motion';
import { useSettings } from '@/lib/settings-store';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard, Settings, User, FileText, ShoppingCart,
  Database, Image, Brain, Globe, MessageSquare, Menu as MenuIcon,
  Trash2, Save, Cloud, Search, Wrench, Sparkles, LogOut, ArrowLeft
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
const menuItems = [
  { id: 'dashboard', label: 'Yönetim Paneli', icon: LayoutDashboard },
  { id: 'colors', label: 'Tema Renkleri', icon: Settings },
  { id: 'settings', label: 'Site Ayarları', icon: Wrench },
  { id: 'sales', label: 'Dijital Satış', icon: ShoppingCart },
  { id: 'users', label: 'Üyeler', icon: User },
  { id: 'posts', label: 'Makaleler', icon: FileText },
  { id: 'cats', label: 'Kategoriler', icon: Database },
  { id: 'ai', label: 'AI Ayarları', icon: Brain },
  { id: 'cloud', label: 'Bulut Depolama', icon: Cloud },
  { id: 'seo', label: 'Arama Ayarları', icon: Search },
];
export function AdminPage() {
  const primaryColor = useSettings(s => s.primaryColor);
  const heroTitle = useSettings(s => s.heroTitle);
  const heroSubtitle = useSettings(s => s.heroSubtitle);
  const heroCtaText = useSettings(s => s.heroCtaText);
  const updateSettings = useSettings(s => s.updateSettings);
  const colors = ["#ff1744", "#F72A1F", "#3d5afe", "#00e676", "#ffea00", "#d500f9"];
  const handleSave = () => {
    toast.success("Ayarlar başarıyla kaydedildi.");
  };
  const handleClearCache = () => {
    toast.info("Sistem önbelleği temizlendi.");
  };
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-primary/20 bg-black shrink-0 hidden md:block">
        <div className="p-6 border-b border-primary/20">
          <div className="text-xl font-black tracking-tighter text-primary uppercase text-glow">
            ADMIN PANELI
          </div>
        </div>
        <nav className="p-4 space-y-1">
          {menuItems.map(item => (
            <button
              key={item.id}
              className="w-full flex items-center gap-3 px-4 py-3 text-[11px] font-black uppercase tracking-widest text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all group"
            >
              <item.icon size={16} className="group-hover:text-primary" />
              {item.label}
            </button>
          ))}
          <div className="pt-8 mt-8 border-t border-primary/10">
            <Link 
              to="/" 
              className="w-full flex items-center gap-3 px-4 py-3 text-[11px] font-black uppercase tracking-widest text-primary hover:bg-primary/10 transition-all"
            >
              <ArrowLeft size={16} />
              SİTEYE DÖN
            </Link>
          </div>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <div className="space-y-1">
               <h1 className="text-4xl font-black uppercase tracking-tighter text-glow">Site Ayarları</h1>
               <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">YÖNETİCİ OTURUMU AKTİF</p>
            </div>
            <div className="flex items-center gap-4">
               <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 text-[10px] font-black text-primary uppercase tracking-widest">
                <Sparkles size={12} /> Live Preview Aktif
              </div>
              <Button asChild variant="outline" className="h-10 border-primary/20 hover:bg-primary/10 text-primary">
                <Link to="/"><LogOut size={16} className="mr-2" /> ÇIKIŞ</Link>
              </Button>
            </div>
          </div>
          <Tabs defaultValue="appearance" className="space-y-10">
            <TabsList className="bg-transparent border-b border-primary/20 h-auto p-0 rounded-none w-full justify-start gap-8">
              <TabsTrigger value="appearance" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-4 font-black uppercase text-xs tracking-widest">Görünüm</TabsTrigger>
              <TabsTrigger value="general" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-4 font-black uppercase text-xs tracking-widest">Genel</TabsTrigger>
              <TabsTrigger value="social" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-4 font-black uppercase text-xs tracking-widest">Sosyal</TabsTrigger>
            </TabsList>
            <TabsContent value="appearance" className="space-y-12">
              {/* Color Picker */}
              <section className="space-y-6">
                <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Tema Ana Rengi</Label>
                <div className="flex items-center gap-8 glass-red p-8 border-primary/10">
                  <div className="flex gap-4">
                    {colors.map(c => (
                      <button
                        key={c}
                        onClick={() => updateSettings({ primaryColor: c })}
                        className={`w-10 h-10 rounded-full border-2 transition-all ${primaryColor === c ? 'border-white scale-110 shadow-glow' : 'border-transparent'}`}
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                  <div className="flex-1 flex items-center gap-4">
                    <span className="text-xs font-mono uppercase font-bold">HEX Kod:</span>
                    <Input
                      value={primaryColor}
                      onChange={(e) => updateSettings({ primaryColor: e.target.value })}
                      className="max-w-[150px] bg-black border-primary/20 font-mono text-center"
                    />
                  </div>
                </div>
              </section>
              {/* Hero Settings */}
              <section className="space-y-8">
                <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Hero Bölümü Yönetimi</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 glass-red p-8">
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase font-bold text-muted-foreground">Başlık (H1)</Label>
                    <Input
                      value={heroTitle}
                      onChange={(e) => updateSettings({ heroTitle: e.target.value })}
                      className="bg-black border-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] uppercase font-bold text-muted-foreground">CTA Buton Metni</Label>
                    <Input
                      value={heroCtaText}
                      onChange={(e) => updateSettings({ heroCtaText: e.target.value })}
                      className="bg-black border-primary/20"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label className="text-[10px] uppercase font-bold text-muted-foreground">Alt Başlık (Açıklama)</Label>
                    <Input
                      value={heroSubtitle}
                      onChange={(e) => updateSettings({ heroSubtitle: e.target.value })}
                      className="bg-black border-primary/20"
                    />
                  </div>
                </div>
              </section>
              {/* Action Buttons */}
              <div className="flex gap-4 pt-10 border-t border-primary/10">
                <Button onClick={handleSave} className="btn-cyber h-14 px-12 text-sm">
                  <Save className="mr-2 w-5 h-5" /> AYARLARI KAYDET
                </Button>
                <Button onClick={handleClearCache} variant="outline" className="h-14 px-12 text-[10px] font-black uppercase border-primary/30 text-primary">
                  <Trash2 className="mr-2 w-4 h-4" /> CACHE TEMİZLE
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}