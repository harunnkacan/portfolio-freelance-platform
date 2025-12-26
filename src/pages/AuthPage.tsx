import React from 'react';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { motion } from 'framer-motion';
import { useAuth } from '@/lib/auth';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from 'sonner';
export function AuthPage() {
  const login = useAuth((s) => s.login);
  const navigate = useNavigate();
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    // Mock admin logic
    const role = email === 'admin@lumina.blog' ? 'admin' : 'user';
    login(email, role);
    toast.success(`Hoş geldin, ${email.split('@')[0]}!`);
    navigate('/');
  };
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Kayıt başarılı! Lütfen giriş yapın.");
  };
  return (
    <SiteLayout>
      <div className="min-h-[80vh] cyber-grid flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full glass-red p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black tracking-tighter uppercase text-glow mb-2">HESAP</h1>
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Platforma erişim sağlayın</p>
          </div>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-secondary rounded-none p-1 h-12">
              <TabsTrigger value="login" className="rounded-none font-bold uppercase text-xs data-[state=active]:bg-primary">Giriş Yap</TabsTrigger>
              <TabsTrigger value="register" className="rounded-none font-bold uppercase text-xs data-[state=active]:bg-primary">Kayıt Ol</TabsTrigger>
            </TabsList>
            <TabsContent value="login" className="mt-8">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest">E-Posta Adresi</Label>
                  <Input name="email" type="email" required placeholder="admin@lumina.blog" className="bg-black/50 border-primary/20 rounded-none focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest">Şifre</Label>
                  <Input name="password" type="password" required className="bg-black/50 border-primary/20 rounded-none focus-visible:ring-primary" />
                </div>
                <Button type="submit" className="w-full btn-cyber h-12 rounded-none">Oturum Aç</Button>
                <p className="text-[10px] text-center text-muted-foreground uppercase font-bold mt-4">
                  Test için <span className="text-primary italic">admin@lumina.blog</span> kullanın
                </p>
              </form>
            </TabsContent>
            <TabsContent value="register" className="mt-8">
              <form onSubmit={handleRegister} className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest">Ad Soyad</Label>
                  <Input required className="bg-black/50 border-primary/20 rounded-none focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest">E-Posta</Label>
                  <Input type="email" required className="bg-black/50 border-primary/20 rounded-none focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase tracking-widest">Şifre</Label>
                  <Input type="password" required className="bg-black/50 border-primary/20 rounded-none focus-visible:ring-primary" />
                </div>
                <Button type="submit" className="w-full btn-cyber h-12 rounded-none">Kayıt Ol</Button>
              </form>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </SiteLayout>
  );
}