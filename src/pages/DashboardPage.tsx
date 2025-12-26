import React, { useState } from 'react';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { motion } from 'framer-motion';
import { useAuth } from '@/lib/auth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, User, CreditCard, Download, ExternalLink, Shield, Trash2, Save, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { urunler } from '@/lib/content';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
export function DashboardPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const userName = useAuth((s) => s.user?.name);
  const userEmail = useAuth((s) => s.user?.email);
  const userRole = useAuth((s) => s.user?.role);
  const updateProfile = useAuth((s) => s.updateProfile);
  const updatePassword = useAuth((s) => s.updatePassword);
  const logout = useAuth((s) => s.logout);
  const deleteUser = useAuth((s) => s.deleteUser);
  const [newName, setNewName] = useState(userName || '');
  const activeTab = searchParams.get('tab') || 'overview';
  const initialChar = userName?.[0]?.toUpperCase() || 'U';
  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (userEmail) {
      updateProfile(userEmail, newName);
      toast.success("Profil bilgileri güncellendi.");
    }
  };
  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (userEmail) {
      updatePassword(userEmail, "********");
    }
  };
  const handleDeleteAccount = () => {
    if (window.confirm("Hesabınızı kalıcı olarak silmek istediğinize emin misiniz? Bu işlem geri alınamaz.")) {
      if (userEmail) {
        deleteUser(userEmail);
        logout();
        navigate('/');
        toast.error("Hesabınız silindi.");
      }
    }
  };
  return (
    <SiteLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-screen cyber-grid">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <div className="flex items-end gap-6 mb-4">
            <div className="w-24 h-24 bg-primary flex items-center justify-center text-4xl font-black text-white shadow-glow">
              {initialChar}
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-primary">HOŞ GELDİN</span>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none">{userName}</h1>
            </div>
          </div>
          <p className="text-muted-foreground font-mono text-sm uppercase">{userEmail} • {userRole === 'admin' ? 'Yönetici' : 'Üye'}</p>
        </motion.div>
        <Tabs defaultValue={activeTab} className="space-y-12">
          <TabsList className="bg-transparent h-auto p-0 flex flex-wrap gap-4 border-b border-primary/20 pb-4">
            <TabsTrigger value="overview" className="rounded-none data-[state=active]:bg-primary px-8 py-3 font-black uppercase text-[10px] tracking-widest">Genel Bakış</TabsTrigger>
            <TabsTrigger value="orders" className="rounded-none data-[state=active]:bg-primary px-8 py-3 font-black uppercase text-[10px] tracking-widest">Siparişlerim</TabsTrigger>
            <TabsTrigger value="settings" className="rounded-none data-[state=active]:bg-primary px-8 py-3 font-black uppercase text-[10px] tracking-widest">Hesap Ayarları</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-0 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-red p-8 flex items-center justify-between">
                <div><p className="text-[10px] font-black text-primary uppercase mb-2">Satın Alımlar</p><p className="text-4xl font-black">2</p></div>
                <Package className="w-12 h-12 text-primary/20" />
              </div>
              <div className="glass-red p-8 flex items-center justify-between">
                <div><p className="text-[10px] font-black text-primary uppercase mb-2">Yorumlar</p><p className="text-4xl font-black">5</p></div>
                <CreditCard className="w-12 h-12 text-primary/20" />
              </div>
              <div className="glass-red p-8 flex items-center justify-between">
                <div><p className="text-[10px] font-black text-primary uppercase mb-2">Puan</p><p className="text-4xl font-black">850</p></div>
                <User className="w-12 h-12 text-primary/20" />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="orders">
            <div className="space-y-6">
              {urunler.map((item, idx) => (
                <div key={idx} className="glass-red p-6 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="flex items-center gap-6">
                    <img src={item.resim} className="w-20 h-20 object-cover border border-primary/20" alt={item.ad} />
                    <div>
                      <h4 className="font-black uppercase tracking-tight text-xl">{item.ad}</h4>
                      <p className="text-xs text-muted-foreground uppercase font-bold">{item.fiyat} • Sipariş No: #29482</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" className="rounded-none border-primary/30 text-[10px] font-black uppercase tracking-widest">
                      <ExternalLink className="mr-2 w-4 h-4" /> Detaylar
                    </Button>
                    <Button className="btn-cyber rounded-none text-[10px] font-black uppercase tracking-widest">
                      <Download className="mr-2 w-4 h-4" /> İNDİR (.ZIP)
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="settings">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-12">
                <section className="glass-red p-8">
                  <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-8 flex items-center gap-2">
                    <User size={14}/> Profil Bilgileri
                  </h3>
                  <form onSubmit={handleProfileUpdate} className="space-y-6">
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest">Görünen Ad</Label>
                      <Input value={newName} onChange={(e) => setNewName(e.target.value)} className="bg-black/50 border-primary/20 rounded-none h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest opacity-50">E-Posta (Değiştirilemez)</Label>
                      <Input disabled value={userEmail || ''} className="bg-black/20 border-primary/10 rounded-none h-12 opacity-50 cursor-not-allowed" />
                    </div>
                    <Button type="submit" className="w-full btn-cyber h-12"><Save size={16} className="mr-2"/> Değişiklikleri Kaydet</Button>
                  </form>
                </section>
                <section className="glass-red p-8">
                  <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-8 flex items-center gap-2">
                    <Key size={14}/> Şifre Güncelleme
                  </h3>
                  <form onSubmit={handlePasswordUpdate} className="space-y-6">
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest">Mevcut Şifre</Label>
                      <Input type="password" placeholder="••••••••" className="bg-black/50 border-primary/20 rounded-none h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase tracking-widest">Yeni Şifre</Label>
                      <Input type="password" placeholder="••••••••" className="bg-black/50 border-primary/20 rounded-none h-12" />
                    </div>
                    <Button type="submit" className="w-full btn-cyber h-12">Şifreyi Güncelle</Button>
                  </form>
                </section>
              </div>
              <section className="glass-red p-8 border-red-500/20 bg-red-500/5 h-fit">
                <h3 className="text-xs font-black uppercase tracking-widest text-red-500 mb-8 flex items-center gap-2">
                  <Trash2 size={14}/> Tehlike Bölgesi
                </h3>
                <p className="text-sm text-muted-foreground uppercase font-bold mb-8 italic">
                  Hesabınızı sildiğinizde tüm sipariş ge��mişiniz, yorumlarınız ve dijital ürün erişimleriniz kalıcı olarak kaldırılacaktır.
                </p>
                <Button onClick={handleDeleteAccount} variant="destructive" className="w-full h-14 rounded-none font-black uppercase tracking-widest bg-red-600 hover:bg-red-700 shadow-glow">
                  HESABIMI TAMAMEN SİL
                </Button>
              </section>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SiteLayout>
  );
}