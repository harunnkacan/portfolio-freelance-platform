import React from 'react';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { motion } from 'framer-motion';
import { pricingTiers, isSureci, hizmetler } from '@/lib/content';
import { Check, Layout, Smartphone, Briefcase, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const iconMap: Record<string, any> = { Layout, Smartphone, Briefcase };
export function ServicesPage() {
  return (
    <SiteLayout>
      <div className="cyber-grid min-h-screen py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-32">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-glow mb-8"
            >
              HİZMET <span className="text-primary italic">PAKETLERİ</span>
            </motion.h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto uppercase italic font-medium">
              Dijital dünyadaki varlığınızı güçlendirecek profesyonel çözümler ve esnek fiyatlandırma modelleri.
            </p>
          </div>
          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
            {pricingTiers.map((tier, idx) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col p-8 md:p-12 glass-red ${tier.isPopular ? 'border-primary shadow-glow-lg scale-105 z-10' : 'border-primary/10'}`}
              >
                {tier.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black px-4 py-1 uppercase tracking-widest">
                    EN ÇOK TERCİH EDİLEN
                  </div>
                )}
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">{tier.ad}</h3>
                <div className="mb-8">
                  <span className="text-4xl font-black text-primary">{tier.fiyat}</span>
                  <span className="text-muted-foreground text-xs uppercase font-bold ml-2">'dan başlayan</span>
                </div>
                <ul className="space-y-4 mb-12 flex-1">
                  {tier.ozellikler.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight text-white/80">
                      <Check size={16} className="text-primary shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button asChild className={`w-full h-14 rounded-none font-black uppercase tracking-widest ${tier.isPopular ? 'btn-cyber' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>
                  <Link to="/contact">HEMEN BAŞLAYALIM</Link>
                </Button>
              </motion.div>
            ))}
          </div>
          {/* Process Section */}
          <div className="mb-40">
            <h2 className="text-4xl font-black tracking-tighter uppercase mb-20 text-center">ÇALIŞMA <span className="text-primary italic">SÜRECİMİZ</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-primary/20 -translate-y-1/2" />
              {isSureci.map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-black border-2 border-primary/40 flex items-center justify-center mb-6 shadow-glow">
                    <span className="text-2xl font-black text-primary italic">0{idx + 1}</span>
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-tight mb-4">{step.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed font-bold uppercase italic">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Contact CTA */}
          <section className="glass-red p-12 md:p-20 text-center border-primary/30 relative overflow-hidden group">
             <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             <Zap className="mx-auto w-12 h-12 text-primary mb-8 animate-pulse" />
             <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 relative z-10">ÖZEL BİR PROJENİZ M�� VAR?</h2>
             <p className="text-muted-foreground uppercase text-sm font-bold tracking-widest mb-12 relative z-10 max-w-xl mx-auto">
               Standart paketlerin dışında, ihtiyaçlarınıza özel çözümler için bizimle iletişime geçin. Ekibimiz en kısa sürede size d��nüş yapacaktır.
             </p>
             <Button asChild size="lg" className="btn-cyber h-16 px-12 rounded-none relative z-10">
               <Link to="/contact" className="flex items-center gap-3">ÜCRETSİZ TEKLİF AL <ArrowRight size={20} /></Link>
             </Button>
          </section>
        </div>
      </div>
    </SiteLayout>
  );
}