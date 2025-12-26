import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Zap, Shield, FileSearch, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
interface AIAssistantProps {
  content: string;
  title: string;
}
export function AIAssistant({ content, title }: AIAssistantProps) {
  const [activeMode, setActiveMode] = useState<'none' | 'summary' | 'simple' | 'seo'>('none');
  const [isTyping, setIsTyping] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [copied, setCopied] = useState(false);
  const mockLibrary = {
    summary: `Bu makale, ${title} konusundaki temel yaklaşımları ele almaktadır. Yazar, modern standartları minimalist bir bakış açısıyla harmanlayarak %40 daha verimli bir iş akışı öneriyor.`,
    simple: `Bunu şöyle düşün: Çok karmaşık bir oyuncağı parçalarına ayırıp, her parçanın ne işe yaradığını en basit haliyle anlatıyoruz. Sonuçta oyuncağı daha iyi kullanmanı sağlıyoruz.`,
    seo: `• Anahtar Kelimeler: ${title.split(' ').join(', ')}, Gelecek, Yazılım, Teknoloji\n• Başlık Puanı: 92/100\n• Okunabilirlik: Mükemmel\n• Öneri: Daha fazla alt başlık (H3) kullanın.`
  };
  const handleAction = (mode: 'summary' | 'simple' | 'seo') => {
    setActiveMode(mode);
    setIsTyping(true);
    setDisplayText('');
    let fullText = mockLibrary[mode];
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => prev + fullText[i]);
      i++;
      if (i >= fullText.length - 1) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 15);
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(displayText);
    setCopied(true);
    toast.success("AI İçeriği kopyalandı!");
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="glass-red p-6 md:p-8 relative overflow-hidden my-12 group">
      <div className="absolute top-0 right-0 p-4">
        <div className="flex items-center gap-2 bg-primary text-white text-[10px] font-black px-3 py-1 uppercase animate-pulse">
          <Sparkles size={12} /> AI ASSISTANT
        </div>
      </div>
      <div className="relative z-10">
        <h3 className="text-xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
          <Zap className="text-primary fill-primary" /> İÇERİK ANALİTİĞİ
        </h3>
        <div className="flex flex-wrap gap-4 mb-8">
          <Button 
            onClick={() => handleAction('summary')} 
            variant={activeMode === 'summary' ? 'default' : 'outline'}
            className="rounded-none border-primary/30 h-10 text-[10px] font-black tracking-widest uppercase"
          >
            <FileSearch className="mr-2 w-4 h-4" /> Özetle
          </Button>
          <Button 
            onClick={() => handleAction('simple')} 
            variant={activeMode === 'simple' ? 'default' : 'outline'}
            className="rounded-none border-primary/30 h-10 text-[10px] font-black tracking-widest uppercase"
          >
            <Shield className="mr-2 w-4 h-4" /> Basitleştir
          </Button>
          <Button 
            onClick={() => handleAction('seo')} 
            variant={activeMode === 'seo' ? 'default' : 'outline'}
            className="rounded-none border-primary/30 h-10 text-[10px] font-black tracking-widest uppercase"
          >
            <Zap className="mr-2 w-4 h-4" /> SEO Analizi
          </Button>
        </div>
        <AnimatePresence mode="wait">
          {activeMode !== 'none' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-black/40 border border-primary/10 p-6 min-h-[120px] relative group/output"
            >
              <div className="prose prose-invert prose-sm font-mono text-primary/80 leading-relaxed whitespace-pre-line">
                {displayText}
                {isTyping && <span className="inline-block w-2 h-4 bg-primary ml-1 animate-bounce" />}
              </div>
              {!isTyping && (
                <button 
                  onClick={copyToClipboard}
                  className="absolute bottom-4 right-4 text-muted-foreground hover:text-primary transition-colors"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}