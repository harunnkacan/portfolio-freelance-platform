import React from 'react';
import { motion } from 'framer-motion';
import { useSettings } from '@/lib/settings-store';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Save, Trash2, Sparkles, Palette, Info, Search, Download } from 'lucide-react';
import { toast } from 'sonner';
export function SettingsPanel() {
  const primaryColor = useSettings(s => s.primaryColor);
  const heroTitle = useSettings(s => s.heroTitle);
  const heroSubtitle = useSettings(s => s.heroSubtitle);
  const heroCtaText = useSettings(s => s.heroCtaText);
  const heroCtaLink = useSettings(s => s.heroCtaLink);
  const defaultSeoTitle = useSettings(s => s.defaultSeoTitle);
  const defaultSeoDesc = useSettings(s => s.defaultSeoDesc);
  const googleAnalyticsId = useSettings(s => s.googleAnalyticsId);
  const updateSettings = useSettings(s => s.updateSettings);
  const colors = ["#ff1744", "#F72A1F", "#3d5afe", "#00e676", "#ffea00", "#d500f9", "#ffffff"];
  const handleSave = () => {
    toast.success("Ayarlar başarıyla güncellendi.");
  };
  const handleBackup = () => {
    const data = localStorage.getItem('site-settings');
    const blob = new Blob([data || '{}'], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `lumina-backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    toast.success("Sistem yedeği oluşturuldu.");
  };
  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    toast.success(`${hex} panoya kopyalandı!`);
  };
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-10 pb-32">
      <div className="flex justify-between items-end border-b border-primary/20 pb-8">
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-glow flex items-center gap-3">
            <Palette className="text-primary" /> SİTE AYARLARI
          </h2>
          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-2 italic">Global marka kimliği ve SEO yönetimi</p>
        </div>
      </div>
      <Tabs defaultValue="gorumun" className="space-y-8">
        <TabsList className="bg-black/40 border border-primary/20 h-16 p-1 rounded-none w-full max-w-xl">
          <TabsTrigger value="gorumun" className="flex-1 rounded-none data-[state=active]:bg-primary data-[state=active]:text-white font-black uppercase text-[10px] tracking-widest">GÖRÜNÜM</TabsTrigger>
          <TabsTrigger value="genel" className="flex-1 rounded-none data-[state=active]:bg-primary data-[state=active]:text-white font-black uppercase text-[10px] tracking-widest">GENEL & SEO</TabsTrigger>
          <TabsTrigger value="sosyal" className="flex-1 rounded-none data-[state=active]:bg-primary data-[state=active]:text-white font-black uppercase text-[10px] tracking-widest">SOSYAL</TabsTrigger>
        </TabsList>
        <TabsContent value="gorumun" className="space-y-12">
          <section className="glass-red p-8 space-y-8">
            <div className="flex items-center gap-2 text-primary">
              <Sparkles size={16} />
              <h3 className="text-xs font-black uppercase tracking-widest">Tema Renk Paleti</h3>
            </div>
            <div className="flex flex-wrap items-center gap-10">
              <div className="flex gap-4">
                {colors.map(c => (
                  <button
                    key={c}
                    onClick={() => { updateSettings({ primaryColor: c }); copyHex(c); }}
                    className={`w-12 h-12 rounded-full border-4 transition-all hover:scale-110 ${primaryColor === c ? 'border-white shadow-glow' : 'border-black/20'}`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>
          </section>
          <section className="glass-red p-8 space-y-8">
            <div className="flex items-center gap-2 text-primary">
              <Info size={16} />
              <h3 className="text-xs font-black uppercase tracking-widest">Hero Bölümü</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Ana Başlık</Label>
                <Input value={heroTitle} onChange={(e) => updateSettings({ heroTitle: e.target.value })} className="bg-black/50 border-primary/20 h-14 rounded-none uppercase font-black" />
              </div>
              <div className="space-y-3">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">CTA Buton Metni</Label>
                <Input value={heroCtaText} onChange={(e) => updateSettings({ heroCtaText: e.target.value })} className="bg-black/50 border-primary/20 h-14 rounded-none uppercase font-black" />
              </div>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="genel" className="space-y-8">
          <section className="glass-red p-8 space-y-8">
            <div className="flex items-center gap-2 text-primary">
              <Search size={16} />
              <h3 className="text-xs font-black uppercase tracking-widest">SEO Yapılandırması</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Varsayılan Meta Title</Label>
                <Input value={defaultSeoTitle} onChange={(e) => updateSettings({ defaultSeoTitle: e.target.value })} className="bg-black/50 border-primary/20 h-14 rounded-none" />
              </div>
              <div className="space-y-3">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Google Analytics ID</Label>
                <Input value={googleAnalyticsId} onChange={(e) => updateSettings({ googleAnalyticsId: e.target.value })} placeholder="G-XXXXXXXXXX" className="bg-black/50 border-primary/20 h-14 rounded-none" />
              </div>
              <div className="space-y-3 md:col-span-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Varsayılan Meta Açıklama</Label>
                <Input value={defaultSeoDesc} onChange={(e) => updateSettings({ defaultSeoDesc: e.target.value })} className="bg-black/50 border-primary/20 h-14 rounded-none" />
              </div>
            </div>
          </section>
        </TabsContent>
      </Tabs>
      <div className="fixed bottom-0 right-0 left-72 bg-black/80 backdrop-blur-md border-t border-primary/20 p-6 z-50 flex justify-end gap-4 px-10">
        <Button onClick={handleBackup} variant="outline" className="h-12 border-primary/20 text-primary hover:bg-primary/5 text-[10px] font-black uppercase px-6">
          <Download size={16} className="mr-2" /> SİSTEM YEDEĞİ (JSON)
        </Button>
        <Button onClick={handleSave} className="btn-cyber h-12 px-12 text-[10px] font-black uppercase">
          <Save size={16} className="mr-2" /> AYARLARI KAYDET
        </Button>
      </div>
    </motion.div>
  );
}