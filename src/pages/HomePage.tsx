import React from 'react';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { motion } from 'framer-motion';
import { makaleler, urunler, siteAyarlari } from '@/lib/content';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, TrendingUp, Users, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
export function HomePage() {
  const latestPosts = makaleler.slice(0, 3);
  const featuredProducts = urunler.slice(0, 2);
  return (
    <SiteLayout>
      <div className="cyber-grid min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 lg:py-48 flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-8 text-glow">
                {siteAyarlari.slogan.split(',')[0]} <br />
                <span className="text-primary italic">{siteAyarlari.slogan.split(',')[1]}</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium tracking-tight mb-12 uppercase italic">
                Dijital evrende iz bırakın. Yazılım, tasarım ve gelecek burada buluşuyor.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button asChild size="lg" className="btn-cyber rounded-none px-12 h-14">
                  <Link to="/blog">Makaleleri Oku</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-none px-12 h-14 border-primary text-primary hover:bg-primary/10 transition-all uppercase font-bold">
                  <Link to="/market">Mağazayı Gez</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="py-12 border-y border-primary/20 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Ziyaretçi', val: siteAyarlari.istatistikler.ziyaretci, icon: Users },
                { label: 'Satış', val: siteAyarlari.istatistikler.satis, icon: Zap },
                { label: 'Makale', val: siteAyarlari.istatistikler.makale, icon: BookOpen },
                { label: 'Üye', val: siteAyarlari.istatistikler.uye, icon: TrendingUp },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-2">
                  <stat.icon className="text-primary w-6 h-6 mb-1" />
                  <span className="text-3xl font-black tracking-tighter">{stat.val}</span>
                  <span className="text-xs uppercase font-bold text-muted-foreground tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Vitrin (Showcase) */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-5xl font-black tracking-tighter uppercase leading-none">Vitrin</h2>
              <p className="text-muted-foreground mt-4 font-mono text-sm">En son yayınlananlar ve popüler ürünler.</p>
            </div>
            <Link to="/blog" className="group flex items-center gap-3 text-sm font-black uppercase tracking-widest text-primary">
              Tümünü Gör <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Featured Article - Large */}
            <div className="lg:col-span-8">
              <Link to={`/blog/${latestPosts[0].id}`} className="group block h-full">
                <div className="glass-red h-full overflow-hidden flex flex-col md:flex-row">
                  <div className="md:w-1/2 overflow-hidden">
                    <img src={latestPosts[0].resim} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest mb-4">{latestPosts[0].kategori}</span>
                    <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-6 group-hover:text-primary transition-colors">
                      {latestPosts[0].baslik}
                    </h3>
                    <p className="text-muted-foreground mb-8 line-clamp-3">{latestPosts[0].ozet}</p>
                    <div className="mt-auto flex items-center justify-between text-xs font-mono">
                      <span>{latestPosts[0].tarih}</span>
                      <span>{latestPosts[0].okumaSuresi}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {/* Side Articles */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {latestPosts.slice(1, 3).map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`} className="group flex-1">
                  <div className="glass-red p-6 h-full flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2 block">{post.kategori}</span>
                      <h4 className="text-xl font-bold uppercase tracking-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.baslik}
                      </h4>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                      <span>{post.tarih}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        {/* Market Highlights */}
        <section className="py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black tracking-tighter uppercase mb-16">Popüler Ürünler</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {featuredProducts.map((urun) => (
                <div key={urun.id} className="glass-red group overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <img src={urun.resim} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4">
                       <span className="bg-primary text-white text-[10px] font-black px-3 py-1 uppercase">{urun.stokDurumu}</span>
                    </div>
                  </div>
                  <div className="p-8 flex justify-between items-center">
                    <div>
                      <h3 className="text-2xl font-bold uppercase tracking-tighter">{urun.ad}</h3>
                      <p className="text-sm text-muted-foreground uppercase">{urun.kategori}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-black text-primary">{urun.fiyat}</p>
                      <button className="text-[10px] font-black uppercase text-primary hover:underline mt-2">Hemen Al</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}