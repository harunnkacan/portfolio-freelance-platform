import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, ExternalLink, Download, FileJson, FileSpreadsheet } from 'lucide-react';
import { toast } from 'sonner';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
const mockOrders = [
  { id: '#ORD-29482', customer: 'Ahmet Yılmaz', product: 'Cyber Red UI Kit', total: '499 ₺', date: '24 May 2024', status: 'Tamamlandı' },
  { id: '#ORD-29481', customer: 'Zeynep Kaya', product: 'Admin Dashboard Template', total: '1.250 ₺', date: '23 May 2024', status: 'Tamamlandı' },
  { id: '#ORD-29480', customer: 'Burak Beji', product: 'Laravel Reverb Module', total: '750 ₺', date: '22 May 2024', status: 'Bekliyor' },
  { id: '#ORD-29479', customer: 'Caner Demir', product: 'Cyber Red UI Kit', total: '499 ₺', date: '21 May 2024', status: 'Tamamlandı' },
];
export function OrderList() {
  const handleExport = (type: string) => {
    toast.promise(new Promise(res => setTimeout(res, 1000)), {
      loading: `${type} raporu hazırlanıyor...`,
      success: "Rapor başarıyla dışa aktarıldı.",
      error: "Rapor oluşturulamadı."
    });
  };
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center px-2">
        <h3 className="text-xs font-black uppercase tracking-widest text-primary">SON SİPARİŞLER</h3>
        <div className="flex gap-2">
          <Button onClick={() => handleExport('CSV')} variant="outline" size="sm" className="h-9 border-primary/20 text-[9px] font-black uppercase rounded-none">
            <FileSpreadsheet size={12} className="mr-2" /> CSV
          </Button>
          <Button onClick={() => handleExport('JSON')} variant="outline" size="sm" className="h-9 border-primary/20 text-[9px] font-black uppercase rounded-none">
            <FileJson size={12} className="mr-2" /> JSON
          </Button>
        </div>
      </div>
      <div className="glass-red border-primary/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-primary/20 bg-primary/5">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-primary">SİPARİŞ ID</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-primary">MÜŞTERİ</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-primary">ÜRÜN</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-primary">TUTAR</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-primary">DURUM</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-primary text-right">İŞLEM</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/10">
              {mockOrders.map((order) => (
                <tr key={order.id} className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4 font-mono text-xs text-white/80">{order.id}</td>
                  <td className="px-6 py-4">
                    <HoverCard>
                      <HoverCardTrigger className="font-bold uppercase text-[10px] cursor-help underline decoration-primary/30 underline-offset-4">{order.customer}</HoverCardTrigger>
                      <HoverCardContent className="bg-black border-primary/20 text-white rounded-none p-4 w-64">
                        <div className="space-y-2">
                          <p className="text-[10px] font-black text-primary uppercase">Müşteri Profili</p>
                          <p className="text-xs font-bold uppercase">{order.customer}</p>
                          <div className="grid grid-cols-2 gap-2 text-[8px] font-black uppercase text-muted-foreground pt-2">
                            <div>TOPLAM: 12 Sipariş</div>
                            <div>GÜVEN: %98</div>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </td>
                  <td className="px-6 py-4 text-[10px] font-medium text-muted-foreground">{order.product}</td>
                  <td className="px-6 py-4 font-black text-primary text-sm">{order.total}</td>
                  <td className="px-6 py-4">
                    <Badge className={order.status === 'Tamamlandı' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-amber-500/10 text-amber-500 border-amber-500/20'}>
                      {order.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="sm" className="h-8 rounded-none border border-primary/20 hover:border-primary text-primary transition-all">
                      <ExternalLink size={12} className="mr-2" /> DETAY
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}