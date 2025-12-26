import React from 'react';
import {
  LayoutDashboard, PlusSquare, ShoppingBag, CreditCard,
  Ticket, FileText, FolderTree, MessageSquare,
  Settings, Brain, Shield, ArrowLeft, Terminal
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
interface MenuItem {
  id: string;
  label: string;
  icon: React.ElementType;
}
interface MenuGroup {
  label: string;
  items: MenuItem[];
}
const menuGroups: MenuGroup[] = [
  {
    label: 'GENEL',
    items: [
      { id: 'dashboard', label: 'Yönetim Paneli', icon: LayoutDashboard },
      { id: 'new', label: 'Yeni Ekle', icon: PlusSquare },
    ]
  },
  {
    label: 'MAĞAZA',
    items: [
      { id: 'market', label: 'Ürünler', icon: ShoppingBag },
      { id: 'orders', label: 'Siparişler', icon: CreditCard },
      { id: 'coupons', label: 'Kuponlar', icon: Ticket },
    ]
  },
  {
    label: 'İÇERİK',
    items: [
      { id: 'posts', label: 'Makaleler', icon: FileText },
      { id: 'categories', label: 'Kategoriler', icon: FolderTree },
      { id: 'comments', label: 'Yorumlar', icon: MessageSquare },
    ]
  },
  {
    label: 'SİSTEM',
    items: [
      { id: 'settings', label: 'Site Ayarları', icon: Settings },
      { id: 'ai', label: 'AI Asistan', icon: Brain },
      { id: 'media', label: 'Dosya Yöneticisi', icon: HardDrive },
      { id: 'security', label: 'Güvenlik', icon: Shield },
    ]
  }
];
interface AdminSidebarProps {
  activeTab: string;
  onTabChange: (id: string) => void;
}
export function AdminSidebar({ activeTab, onTabChange }: AdminSidebarProps) {
  return (
    <aside className="w-72 border-r border-primary/20 bg-black/90 backdrop-blur-xl h-screen sticky top-0 flex flex-col shrink-0">
      <div className="p-8 border-b border-primary/20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary flex items-center justify-center shadow-glow">
            <Terminal size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter text-glow">LUMINA</h1>
            <p className="text-[10px] font-black uppercase text-primary tracking-widest leading-none">Control Center</p>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8 scrollbar-none">
        {menuGroups.map((group) => (
          <div key={group.label} className="space-y-2">
            <h3 className="px-4 text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">
              {group.label}
            </h3>
            <div className="space-y-1">
              {group.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 text-[11px] font-black uppercase tracking-widest transition-all group relative overflow-hidden",
                    activeTab === item.id
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  )}
                >
                  <item.icon size={16} className={cn("transition-colors", activeTab === item.id ? "text-primary" : "text-muted-foreground group-hover:text-primary")} />
                  {item.label}
                  {activeTab === item.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary shadow-glow" />
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="p-6 border-t border-primary/20 space-y-4">
        <div className="flex items-center justify-between px-2">
          <span className="text-[8px] font-black text-muted-foreground uppercase tracking-widest">BUILD_ID: 1204X</span>
          <span className="text-[8px] font-black text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 border border-primary/20 animate-pulse">v1.2.0</span>
        </div>
        <Link
          to="/"
          className="flex items-center justify-center gap-3 w-full bg-white/5 border border-white/10 h-12 text-[10px] font-black uppercase tracking-widest text-white hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg hover:shadow-glow"
        >
          <ArrowLeft size={14} />
          SİTEYE DÖN
        </Link>
      </div>
    </aside>
  );
}