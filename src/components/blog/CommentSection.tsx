import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, Heart, Reply, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
interface Comment {
  id: number;
  user: string;
  text: string;
  date: string;
  likes: number;
  approved: boolean;
}
export function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, user: 'Ahmet Y.', text: 'Harika bir yazı olmuş, özellikle compiler kısmına değinmeniz çok iyi.', date: '2 saat önce', likes: 12, approved: true },
    { id: 2, user: 'Zeynep K.', text: 'React 19 sabırsızlıkla bekliyoruz.', date: '5 saat önce', likes: 4, approved: true },
  ]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newComment: Comment = {
      id: Date.now(),
      user: (formData.get('name') as string) || 'Misafir',
      text: formData.get('comment') as string,
      date: 'Şimdi',
      likes: 0,
      approved: false
    };
    setComments([newComment, ...comments]);
    toast.success("Yorumunuz iletildi, onay bekliyor!");
    (e.target as HTMLFormElement).reset();
  };
  return (
    <div className="mt-32 pt-16 border-t border-primary/20">
      <h3 className="text-3xl font-black uppercase tracking-tighter mb-12 flex items-center gap-4">
        <MessageSquare className="text-primary" /> YORUMLAR <span className="text-muted-foreground text-sm font-mono">({comments.length})</span>
      </h3>
      <div className="glass-red p-8 mb-16">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-primary">Ad Soyad</label>
              <Input name="name" required placeholder="Görünmesini istediğiniz isim" className="bg-black/50 border-primary/20 rounded-none h-12" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-primary">E-Posta (Gizli)</label>
              <Input name="email" type="email" required placeholder="iletisim@adresiniz.com" className="bg-black/50 border-primary/20 rounded-none h-12" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-primary">Yorumunuz</label>
            <Textarea name="comment" required placeholder="Düşüncelerinizi paylaşın..." className="bg-black/50 border-primary/20 rounded-none min-h-[120px]" />
          </div>
          <Button type="submit" className="btn-cyber w-full h-14 text-sm font-black uppercase tracking-widest">
            YORUMU GÖNDER <Send className="ml-2 w-4 h-4" />
          </Button>
        </form>
      </div>
      <div className="space-y-8">
        <AnimatePresence initial={false}>
          {comments.map((comment) => (
            <motion.div
              key={comment.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={cn(
                "p-6 border-l-2 relative",
                comment.approved ? "border-primary/20 bg-black/20" : "border-amber-500/50 bg-amber-500/5"
              )}
            >
              {!comment.approved && (
                <div className="absolute top-4 right-4 flex items-center gap-1 text-[8px] font-black uppercase text-amber-500 tracking-widest bg-amber-500/10 px-2 py-1">
                  <Clock size={10} /> ONAY BEKLİYOR
                </div>
              )}
              <div className="flex justify-between items-start mb-4">
                <div className="font-black uppercase tracking-tight text-primary">{comment.user}</div>
                <div className="text-[10px] font-mono text-muted-foreground">{comment.date}</div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">"{comment.text}"</p>
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-1 text-[10px] font-black uppercase text-muted-foreground hover:text-primary transition-colors">
                  <Heart size={14} className={comment.likes > 10 ? 'fill-primary text-primary' : ''} /> {comment.likes} Beğeni
                </button>
                <button className="flex items-center gap-1 text-[10px] font-black uppercase text-muted-foreground hover:text-primary transition-colors">
                  <Reply size={14} /> Cevapla
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}