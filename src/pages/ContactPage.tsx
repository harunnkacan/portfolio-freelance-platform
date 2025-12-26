import React from 'react';
import { siteAyarlari } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Mail, Github, Twitter, Linkedin, Send } from 'lucide-react';
export function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mesajınız iletildi! En kısa sürede dönüş sağlayacağım.");
    (e.target as HTMLFormElement).reset();
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="cyber-grid min-h-[80vh] py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-12 text-glow">
              İletişime <br /> <span className="text-primary italic">Geçin</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-md">
              Yeni bir projeniz mi var yoksa sadece selam mı vermek istiyorsunuz? Formu doldurarak bana ulaşabilirsiniz.
            </p>
            <div className="space-y-10">
              <div className="group cursor-pointer">
                <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-2">E-Posta</h3>
                <a href={`mailto:${siteAyarlari.email}`} className="text-2xl font-bold hover:text-primary transition-colors flex items-center gap-3">
                  <Mail className="w-6 h-6" /> {siteAyarlari.email}
                </a>
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-4">Sosyal Medya</h3>
                <div className="flex gap-8">
                  {siteAyarlari.sosyalMedya.map((social) => (
                    <a
                      key={social.ad}
                      href={social.url}
                      className="text-muted-foreground hover:text-primary transition-all transform hover:scale-110"
                      title={social.ad}
                    >
                      {social.ad === 'GitHub' && <Github className="w-8 h-8" />}
                      {social.ad === 'Twitter' && <Twitter className="w-8 h-8" />}
                      {social.ad === 'LinkedIn' && <Linkedin className="w-8 h-8" />}
                      {social.ad !== 'GitHub' && social.ad !== 'Twitter' && social.ad !== 'LinkedIn' && social.ad}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-red p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Send size={120} className="text-primary" />
            </div>
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary">Ad Soyad</label>
                <Input required className="rounded-none border-t-0 border-x-0 border-b border-primary/30 bg-black/20 px-0 focus-visible:ring-0 focus-visible:border-primary h-12 text-lg transition-all" placeholder="Adınızı giriniz" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary">E-Posta Adresi</label>
                <Input required type="email" className="rounded-none border-t-0 border-x-0 border-b border-primary/30 bg-black/20 px-0 focus-visible:ring-0 focus-visible:border-primary h-12 text-lg transition-all" placeholder="email@ornek.com" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary">Mesajınız</label>
                <Textarea required className="rounded-none border-t-0 border-x-0 border-b border-primary/30 bg-black/20 px-0 focus-visible:ring-0 focus-visible:border-primary min-h-[150px] text-lg transition-all resize-none" placeholder="Nasıl yardımcı olabilirim?" />
              </div>
              <Button type="submit" className="w-full btn-cyber h-16 text-lg font-black uppercase tracking-widest group">
                MESAJI GÖNDER <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}