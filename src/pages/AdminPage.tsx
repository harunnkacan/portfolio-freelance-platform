import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { SettingsPanel } from '@/components/admin/SettingsPanel';
import { MarketPanel } from '@/components/admin/MarketPanel';
import { User, Bell, Search, ShieldCheck } from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { Navigate } from 'react-router-dom';
export function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const user = useAuth(s => s.user);
  const isAuthenticated = useAuth(s => s.isAuthenticated);
  // Protected Route Logic
  if (!isAuthenticated || user?.role !== 'admin') {
    return <Navigate to="/auth" />;
  }
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <MarketPanel />; // Dashboard shows market stats by default
      case 'market':
      case 'products':
        return <MarketPanel />;
      case 'settings':
        return <SettingsPanel />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
            <div className="w-20 h-20 bg-primary/10 border border-primary/20 flex items-center justify-center">
              <ShieldCheck size={40} className="text-primary opacity-20" />
            </div>
            <p className="text-muted-foreground font-mono text-sm uppercase italic">
              Bu modül ({activeTab}) geliştirme aşamasındadır.
            </p>
          </div>
        );
    }
  };
  return (
    <div className="min-h-screen bg-[#050505] text-white flex selection:bg-primary selection:text-white">
      <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="h-20 border-b border-primary/20 bg-black/40 backdrop-blur-md px-10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">SİSTEM DURUMU:</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              ONLINE & GÜVENLİ
            </span>
          </div>
          <div className="flex items-center gap-8">
            <div className="relative group hidden md:block">
              <Search size={18} className="absolute left-0 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary" />
              <input 
                placeholder="KOMUT ARA..." 
                className="bg-transparent border-none pl-8 py-2 outline-none text-[10px] font-black uppercase tracking-widest w-40 focus:w-60 transition-all placeholder:text-muted-foreground/30"
              />
            </div>
            <button className="relative p-2 text-muted-foreground hover:text-primary transition-colors">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
            </button>
            <div className="flex items-center gap-3 border-l border-primary/20 pl-8">
              <div className="text-right">
                <p className="text-[10px] font-black uppercase tracking-widest leading-none">{user.name}</p>
                <p className="text-[8px] font-black uppercase text-primary tracking-widest mt-1">SUPER_ADMIN</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-primary/20 p-0.5 overflow-hidden grayscale">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>
        {/* Dynamic Content Area */}
        <main className="flex-1 overflow-y-auto cyber-grid">
          <div className="max-w-7xl mx-auto px-10 py-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}