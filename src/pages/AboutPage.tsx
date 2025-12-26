import React from 'react';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { motion } from 'framer-motion';
import { profile } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Github, Send, Terminal, Monitor, Database, Code2, Sparkles } from 'lucide-react';
export function AboutPage() {
  return (
    <SiteLayout>
      <div className="cyber-grid min-h-screen py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 text-[10px] font-black text-primary uppercase tracking-widest">
                <Sparkles size={12} className="animate-pulse" /> {profile.status}
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-glow">
                HAKKIMDA <span className="text-primary italic">|</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic uppercase font-medium max-w-2xl">
                {profile.bio}
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg" className="btn-cyber px-8 h-14">
                  <Link to="/contact">PROJE ÖNERİSİ GÖNDER <Send size={18} className="ml-2" /></Link>
                </Button>
                <Button asChild variant="outline" className="h-14 px-8 rounded-none border-primary/20 hover:border-primary/50 font-black uppercase tracking-widest text-[10px]">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer"><Github size={18} className="mr-2" /> GITHUB</a>
                </Button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full max-w-md"
            >
              <div className="aspect-square relative glass-red border-primary/30 p-4">
                <img 
                  src={profile.avatar} 
                  alt={profile.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-6 -right-6 glass-red bg-black/80 px-8 py-6 border-primary/40">
                  <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">Developer</p>
                  <p className="text-2xl font-black uppercase tracking-tighter">{profile.name}</p>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Stack Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            <StackCard 
              title="BACKEND" 
              icon={<Terminal className="text-primary" />} 
              items={profile.stacks.backend} 
            />
            <StackCard 
              title="FRONTEND" 
              icon={<Code2 className="text-primary" />} 
              items={profile.stacks.frontend} 
            />
            <StackCard 
              title="DATABASE" 
              icon={<Database className="text-primary" />} 
              items={profile.stacks.database} 
            />
            <StackCard 
              title="SYSTEM/OS" 
              icon={<Monitor className="text-primary" />} 
              items={profile.stacks.os} 
            />
          </div>
          {/* Vizyon Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
            <div className="glass-red p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Terminal size={200} />
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 text-primary">VİZYON & MİSYON</h2>
              <p className="text-lg text-muted-foreground leading-relaxed uppercase italic font-medium space-y-6">
                Dijital dünyada sadece var olmak değil, iz bırakmak için geliştiriyoruz. 
                Her satır kodun bir hikayesi, her tasarımın bir ruhu olduğuna inanıyoruz. 
                Minimalizmi karmaşık problemleri basitleştirmek için bir araç olarak kullanıyor, 
                geleceğin web standartlarını bugünden uyguluyoruz.
              </p>
              <div className="mt-12 flex gap-4">
                <div className="glass-red bg-primary/5 px-6 py-4 border-primary/10">
                  <p className="text-[10px] font-black text-primary uppercase mb-1">Tecrübe</p>
                  <p className="text-2xl font-black">5+ YIL</p>
                </div>
                <div className="glass-red bg-primary/5 px-6 py-4 border-primary/10">
                  <p className="text-[10px] font-black text-primary uppercase mb-1">Bitirilen Proje</p>
                  <p className="text-2xl font-black">120+</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="glass-red h-full min-h-[300px] overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000"
                  alt="Workspace"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
function StackCard({ title, icon, items }: { title: string, icon: React.ReactNode, items: string[] }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-red p-8 border-primary/10 hover:border-primary/40 transition-all"
    >
      <div className="w-12 h-12 glass-red bg-primary/5 border-primary/20 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-black uppercase tracking-widest mb-6">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-tight text-muted-foreground">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}