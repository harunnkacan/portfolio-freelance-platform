import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { makaleler } from '@/lib/content';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, User, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AIAssistant } from '@/components/blog/AIAssistant';
import { CommentSection } from '@/components/blog/CommentSection';
import { toast } from 'sonner';
export function BlogDetailPage() {
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const post = makaleler.find(m => m.id === id);
  if (!post) return <Navigate to="/blog" />;
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Bağlantı kopyalandı!");
  };
  return (
    <SiteLayout>
      <article className="min-h-screen bg-background">
        <div className="relative h-[65vh] overflow-hidden">
          <img
            src={post.resim}
            alt={post.baslik}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link to="/blog" className="inline-flex items-center text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8 hover:translate-x-[-5px] transition-transform">
                  <ArrowLeft className="mr-2 w-4 h-4" /> Arşive Dön
                </Link>
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-primary text-white text-[10px] font-black px-4 py-1 uppercase tracking-widest">{post.kategori}</span>
                  <span className="text-muted-foreground font-mono text-xs">842 Okunma</span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-glow mb-8">
                  {post.baslik}
                </h1>
                <div className="flex flex-wrap gap-8 text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> {post.tarih}</div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {post.okumaSuresi}</div>
                  <div className="flex items-center gap-2"><User className="w-4 h-4 text-primary" /> Lumina Editor</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="prose prose-invert prose-red max-w-none mb-16"
              >
                <p className="text-2xl text-primary font-bold italic border-l-4 border-primary pl-8 mb-12 leading-relaxed">
                  {post.ozet}
                </p>
                <AIAssistant content={post.icerik} title={post.baslik} />
                <div className="text-xl leading-relaxed text-muted-foreground/90 space-y-8 font-medium">
                  {post.icerik.split('. ').map((para, i) => (
                    <p key={i}>{para}.</p>
                  ))}
                </div>
              </motion.div>
              <div className="flex items-center gap-4 py-12 border-y border-primary/10">
                <Button 
                  onClick={() => setLiked(!liked)}
                  variant="outline" 
                  className={cn(
                    "rounded-none border-primary/30 h-14 px-8 font-black uppercase tracking-widest transition-all",
                    liked && "bg-primary text-white border-primary shadow-glow"
                  )}
                >
                  <Heart className={cn("mr-2 w-5 h-5", liked && "fill-current")} /> 
                  {liked ? 'BEĞENİLDİ' : 'BEĞEN (124)'}
                </Button>
                <Button 
                  onClick={handleShare}
                  variant="outline" 
                  className="rounded-none border-primary/30 h-14 px-8 font-black uppercase tracking-widest"
                >
                  <Share2 className="mr-2 w-5 h-5" /> PAYLAŞ
                </Button>
              </div>
              <CommentSection />
            </div>
            <aside className="lg:col-span-4 space-y-12">
              <div className="glass-red p-8">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-6">Yazar Hakkında</h4>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary rounded-full" />
                  <div>
                    <p className="font-black uppercase tracking-tight">Lumina Team</p>
                    <p className="text-[10px] text-muted-foreground uppercase">Teknoloji Editörü</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic">
                  Geleceği kodlayanlar için içerik üretiyoruz.
                </p>
              </div>
              <div className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary">Benzer Konular</h4>
                {makaleler.filter(m => m.id !== id).slice(0, 2).map(m => (
                  <Link key={m.id} to={`/blog/${m.id}`} className="group block">
                    <div className="glass-red p-4 border-transparent group-hover:border-primary/40 transition-all">
                      <p className="text-[10px] text-primary uppercase font-black mb-2">{m.kategori}</p>
                      <h5 className="font-bold uppercase tracking-tight group-hover:text-primary leading-tight">{m.baslik}</h5>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}