import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { makaleler } from '@/lib/content';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function BlogDetailPage() {
  const { id } = useParams();
  const post = makaleler.find(m => m.id === id);
  if (!post) return <Navigate to="/blog" />;
  return (
    <SiteLayout>
      <article className="min-h-screen bg-background">
        <div className="relative h-[60vh] overflow-hidden">
          <img 
            src={post.resim} 
            alt={post.baslik}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link to="/blog" className="inline-flex items-center text-primary text-xs font-black uppercase tracking-[0.2em] mb-8 hover:translate-x-[-5px] transition-transform">
                  <ArrowLeft className="mr-2 w-4 h-4" /> Geri Dön
                </Link>
                <span className="block text-primary text-sm font-black uppercase tracking-widest mb-4">{post.kategori}</span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] text-glow mb-8">
                  {post.baslik}
                </h1>
                <div className="flex flex-wrap gap-8 text-xs font-mono text-muted-foreground uppercase">
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> {post.tarih}</div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {post.okumaSuresi} Okuma</div>
                  <div className="flex items-center gap-2"><User className="w-4 h-4 text-primary" /> Admin</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-invert prose-red max-w-none"
          >
            <p className="text-2xl text-primary font-bold italic border-l-4 border-primary pl-8 mb-12 leading-relaxed">
              {post.ozet}
            </p>
            <div className="text-xl leading-relaxed text-muted-foreground space-y-8 font-medium">
              {post.icerik.split('. ').map((para, i) => (
                <p key={i}>{para}.</p>
              ))}
            </div>
          </motion.div>
          <div className="mt-24 pt-12 border-t border-primary/20 flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-2">Makaleyi Paylaş</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="rounded-none border-primary/30">Twitter</Button>
                <Button variant="outline" size="sm" className="rounded-none border-primary/30">LinkedIn</Button>
              </div>
            </div>
            <Button asChild className="btn-cyber h-14 px-10 rounded-none">
              <Link to="/blog">Daha Fazla Oku</Link>
            </Button>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}