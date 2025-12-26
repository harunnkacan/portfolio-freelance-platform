import React from 'react';
import { motion } from 'framer-motion';
import { useSettings } from '@/lib/settings-store';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Save, Trash2, Sparkles, Globe, Palette, Info } from 'lucide-react';
import { toast } from 'sonner';
export function SettingsPanel() {
  const primaryColor = useSettings(s => s.primaryColor);
  const heroTitle = useSettings(s => s.heroTitle);
  const heroSubtitle = useSettings(s => s.heroSubtitle);
  const heroCtaText = useSettings(s => s.heroCtaText);
  const heroCtaLink = useSettings(s => s.heroCtaLink);
  const updateSettings = useSettings(s => s.updateSettings);
  const colors = ["#ff1744", "#F72A1F", "#3d5afe", "#00e676", "#ffea00", "#d500f9", "#ffffff"];
  const handleSave = () => {
    toast.success("Ayarlar başarıyla güncellendi.");
  };
  const handleClearCache = () => {
    toast.info("Sistem önbelleği temizlendi.");
  };
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      <div className="flex justify-between items-end border-b border-primary/20 pb-8">
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-glow flex items-center gap-3">
            <Palette className="text-primary" /> SİTE AYARLARI
          </h2>
          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-2 italic">Global marka kimliği ve görünüm yönetimi</p>
        </div>
        <div className="flex gap-3">
          <Button onClick={handleClearCache} variant="outline" className="h-12 border-primary/20 text-primary hover:bg-primary/5 text-[10px] font-black uppercase px-6">
            <Trash2 size={16} className="mr-2" /> CACHE TEMİZLE
          </Button>
          <Button onClick={handleSave} className="btn-cyber h-12 px-8 text-[10px] font-black uppercase">
            <Save size={16} className="mr-2" /> AYARLARI KAYDET
          </Button>
        </div>
      </div>
      <Tabs defaultValue="gorumun" className="space-y-8">
        <TabsList className="bg-black/40 border border-primary/20 h-16 p-1 rounded-none w-full max-w-xl">
          <TabsTrigger value="gorumun" className="flex-1 rounded-none data-[state=active]:bg-primary data-[state=active]:text-white font-black uppercase text-[10px] tracking-widest">GÖRÜNÜM</TabsTrigger>
          <TabsTrigger value="genel" className="flex-1 rounded-none data-[state=active]:bg-primary data-[state=active]:text-white font-black uppercase text-[10px] tracking-widest">GENEL</TabsTrigger>
          <TabsTrigger value="sosyal" className="flex-1 rounded-none data-[state=active]:bg-primary data-[state=active]:text-white font-black uppercase text-[10px] tracking-widest">SOSYAL</TabsTrigger>
        </TabsList>
        <TabsContent value="gorumun" className="space-y-12">
          {/* Color Picker */}
          <section className="glass-red p-8 space-y-8 relative overflow-hidden">
            <div className="flex items-center gap-2 text-primary">
              <Sparkles size={16} />
              <h3 className="text-xs font-black uppercase tracking-widest">Tema Renk Paleti</h3>
            </div>
            <div className="flex flex-wrap items-center gap-10">
              <div className="flex gap-4">
                {colors.map(c => (
                  <button
                    key={c}
                    onClick={() => updateSettings({ primaryColor: c })}
                    className={`w-12 h-12 rounded-full border-4 transition-all hover:scale-110 ${primaryColor === c ? 'border-white shadow-glow' : 'border-black/20'}`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <div className="flex items-center gap-4 bg-black/40 border border-primary/10 p-4 h-14">
                <span className="text-[10px] font-black uppercase text-muted-foreground">Manuel Hex:</span>
                <Input 
                  value={primaryColor}
                  onChange={(e) => updateSettings({ primaryColor: e.target.value })}
                  className="w-28 bg-transparent border-none font-mono text-primary text-sm focus-visible:ring-0 p-0 h-auto"
                />
              </div>
            </div>
          </section>
          {/* Hero Settings */}
          <section className="glass-red p-8 space-y-8">
            <div className="flex items-center gap-2 text-primary">
              <Info size={16} />
              <h3 className="text-xs font-black uppercase tracking-widest">Hero Bölümü İçeriği</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Ana Başlık (H1)</Label>
                <Input value={heroTitle} onChange={(e) => updateSettings({ heroTitle: e.target.value })} className="bg-black/50 border-primary/20 h-14 rounded-none uppercase font-black" />
              </div>
              <div className="space-y-3">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">CTA Buton Metni</Label>
                <Input value={heroCtaText} onChange={(e) => updateSettings({ heroCtaText: e.target.value })} className="bg-black/50 border-primary/20 h-14 rounded-none uppercase font-black" />
              </div>
              <div className="space-y-3 md:col-span-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Alt Başlık (Açıklama)</Label>
                <Input value={heroSubtitle} onChange={(e) => updateSettings({ heroSubtitle: e.target.value })} className="bg-black/50 border-primary/20 h-14 rounded-none italic font-medium" />
              </div>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="genel" className="glass-red p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Site Adı</Label>
              <Input defaultValue="LUMINA" className="bg-black/50 border-primary/20 h-14 rounded-none" />
            </div>
            <div className="space-y-3">
              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Site Sloganı</Label>
              <Input defaultValue="Geleceği Kodla, Fikirleri Paylaş" className="bg-black/50 border-primary/20 h-14 rounded-none" />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="sosyal" className="glass-red p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">X (Twitter)</Label>
              <Input placeholder="https://x.com/username" className="bg-black/50 border-primary/20 h-14 rounded-none" />
            </div>
            <div className="space-y-3">
              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">GitHub</Label>
              <Input placeholder="https://github.com/username" className="bg-black/50 border-primary/20 h-14 rounded-none" />
            </div>
            <div className="space-y-3">
              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">LinkedIn</Label>
              <Input placeholder="https://linkedin.com/in/username" className="bg-black/50 border-primary/20 h-14 rounded-none" />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}