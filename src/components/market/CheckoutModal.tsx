import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, ShieldCheck, ShoppingCart, CheckCircle2, Package, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Urun } from '@/lib/content';
import { toast } from 'sonner';
interface CheckoutModalProps {
  product: Urun;
  isOpen: boolean;
  onClose: () => void;
}
export function CheckoutModal({ product, isOpen, onClose }: CheckoutModalProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
      toast.success("Ödeme başarıyla tamamlandı!");
    }, 2000);
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-xl glass-red p-8 md:p-12 overflow-hidden"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-primary">
              <X size={24} />
            </button>
            <div className="relative z-10">
              {step === 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">SİPARİŞ ÖZETİ</h2>
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">SİPARİŞİNİZİ KONTROL EDİN</p>
                  </div>
                  <div className="flex items-center gap-6 p-6 bg-black/40 border border-primary/20">
                    <img src={product.resim} className="w-24 h-24 object-cover" />
                    <div>
                      <h3 className="text-xl font-bold uppercase">{product.ad}</h3>
                      <p className="text-primary font-black text-2xl">{product.fiyat}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between text-xs uppercase font-bold text-muted-foreground">
                      <span>Ara Toplam</span>
                      <span>{product.fiyat}</span>
                    </div>
                    <div className="flex justify-between text-xs uppercase font-bold text-primary">
                      <span>KDV (Dahil)</span>
                      <span>0.00 ₺</span>
                    </div>
                    <div className="border-t border-primary/20 pt-4 flex justify-between text-2xl font-black uppercase tracking-tighter">
                      <span>TOPLAM</span>
                      <span className="text-glow">{product.fiyat}</span>
                    </div>
                  </div>
                  <Button onClick={() => setStep(2)} className="w-full btn-cyber h-16 text-lg">ÖDEMEYE GEÇ</Button>
                </motion.div>
              )}
              {step === 2 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">ÖDEME BİLGİLERİ</h2>
                    <div className="flex justify-center gap-4 text-primary mb-6">
                      <CreditCard size={20} /> <ShieldCheck size={20} /> <ShoppingCart size={20} />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-primary">KART NUMARASI</label>
                      <input placeholder="**** **** **** ****" className="w-full h-14 bg-black/50 border border-primary/20 px-4 font-mono tracking-[0.2em] focus:border-primary outline-none" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-primary">SON KULLANIM</label>
                        <input placeholder="MM/YY" className="w-full h-14 bg-black/50 border border-primary/20 px-4 font-mono text-center outline-none" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-primary">CVV</label>
                        <input placeholder="***" className="w-full h-14 bg-black/50 border border-primary/20 px-4 font-mono text-center outline-none" />
                      </div>
                    </div>
                  </div>
                  <Button onClick={handlePayment} disabled={loading} className="w-full btn-cyber h-16 text-lg relative">
                    {loading ? "İŞLENİYOR..." : `ÖDEYİN: ${product.fiyat}`}
                  </Button>
                </motion.div>
              )}
              {step === 3 && (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-8">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-glow-lg">
                    <CheckCircle2 size={48} className="text-white" />
                  </div>
                  <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 text-glow">TEŞEKKÜRLER!</h2>
                  <p className="text-muted-foreground uppercase tracking-widest text-sm font-bold mb-12">ÖDEME BAŞARIYLA ALINDI</p>
                  <div className="grid grid-cols-2 gap-4 mb-12">
                    <div className="p-4 bg-primary/5 border border-primary/10 flex flex-col items-center">
                      <Package size={24} className="text-primary mb-2" />
                      <span className="text-[10px] font-black uppercase">Panelde Aktif</span>
                    </div>
                    <div className="p-4 bg-primary/5 border border-primary/10 flex flex-col items-center">
                      <Mail size={24} className="text-primary mb-2" />
                      <span className="text-[10px] font-black uppercase">E-posta Gönderildi</span>
                    </div>
                  </div>
                  <Button onClick={onClose} className="w-full btn-cyber h-16">ALIŞVERİŞE DEVAM ET</Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}