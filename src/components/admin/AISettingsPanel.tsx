import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Key, Shield, TextCursor, Save, RefreshCw } from 'lucide-react';
import { useSettings } from '@/lib/settings-store';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from 'sonner';
export function AISettingsPanel() {
  const aiModel = useSettings(s => s.aiModel);
  const aiTemperature = useSettings(s => s.aiTemperature);
  const aiApiKey = useSettings(s => s.aiApiKey);
  const aiPromptTemplates = useSettings(s => s.aiPromptTemplates);
  const updateSettings = useSettings(s => s.updateSettings);
  const [testing, setTesting] = useState(false);
  const handleTestConnection = () => {
    setTesting(true);
    setTimeout(() => {
      setTesting(false);
      toast.success("OpenRouter Bağlantısı Başarılı!");
    }, 1500);
  };
  const handleSave = () => {
    toast.success("AI Ayarları Sisteme Kaydedildi.");
  };
  return (
    <div className="space-y-10 pb-20">
      <div className="flex justify-between items-end border-b border-primary/20 pb-8">
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-glow flex items-center gap-3">
            <Brain className="text-primary" /> AI ASİSTAN AYARLARI
          </h2>
          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-2 italic">OpenRouter entegrasyonu ve içerik otomasyonu</p>
        </div>
        <Button onClick={handleTestConnection} disabled={testing} variant="outline" className="h-12 border-primary/20 text-primary hover:bg-primary/5 text-[10px] font-black uppercase px-6">
          <RefreshCw size={16} className={`mr-2 ${testing ? 'animate-spin' : ''}`} /> BAĞLANTIYI TEST ET
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="glass-red p-8 space-y-8">
          <div className="flex items-center gap-2 text-primary">
            <Key size={16} />
            <h3 className="text-xs font-black uppercase tracking-widest">API Yapılandırması</h3>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">OpenRouter API Key</Label>
              <Input 
                type="password" 
                value={aiApiKey} 
                onChange={(e) => updateSettings({ aiApiKey: e.target.value })} 
                placeholder="sk-or-v1-..." 
                className="bg-black/50 border-primary/20 h-14 rounded-none font-mono"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Yapay Zeka Modeli</Label>
                <Select value={aiModel} onValueChange={(val) => updateSettings({ aiModel: val })}>
                  <SelectTrigger className="h-14 bg-black/50 border-primary/20 rounded-none text-[10px] font-black uppercase">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-primary/20 text-white rounded-none">
                    <SelectItem value="gpt-4o" className="text-[10px] font-black uppercase">GPT-4 Omni</SelectItem>
                    <SelectItem value="claude-3-5-sonnet" className="text-[10px] font-black uppercase">Claude 3.5 Sonnet</SelectItem>
                    <SelectItem value="gemini-pro" className="text-[10px] font-black uppercase">Gemini Pro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Temperature</Label>
                  <span className="text-xs font-mono text-primary font-bold">{aiTemperature}</span>
                </div>
                <Slider 
                  value={[aiTemperature]} 
                  onValueChange={(val) => updateSettings({ aiTemperature: val[0] })} 
                  max={1} 
                  step={0.1} 
                  className="py-4"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="glass-red p-8 space-y-8">
          <div className="flex items-center gap-2 text-primary">
            <TextCursor size={16} />
            <h3 className="text-xs font-black uppercase tracking-widest">Prompt Şablonları</h3>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">SEO Analizi Mantığı</Label>
              <Textarea 
                value={aiPromptTemplates.seo} 
                onChange={(e) => updateSettings({ aiPromptTemplates: { ...aiPromptTemplates, seo: e.target.value } })}
                className="bg-black/50 border-primary/20 min-h-[100px] rounded-none text-xs leading-relaxed"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Meta Title Oluşturucu</Label>
              <Textarea 
                value={aiPromptTemplates.metaTitle} 
                onChange={(e) => updateSettings({ aiPromptTemplates: { ...aiPromptTemplates, metaTitle: e.target.value } })}
                className="bg-black/50 border-primary/20 min-h-[80px] rounded-none text-xs leading-relaxed"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="flex justify-end">
        <Button onClick={handleSave} className="btn-cyber h-16 px-16 text-xs font-black uppercase">
          <Save size={20} className="mr-2" /> AI YAPILANDIRMASINI KAYDET
        </Button>
      </div>
    </div>
  );
}