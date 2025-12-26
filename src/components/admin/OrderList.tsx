import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, ExternalLink } from 'lucide-react';
const mockOrders = [
  { id: '#ORD-29482', customer: 'Ahmet Yılmaz', product: 'Cyber Red UI Kit', total: '499 ₺', date: '24 May 2024', status: 'Tamamlandı' },
  { id: '#ORD-29481', customer: 'Zeynep Kaya', product: 'Admin Dashboard Template', total: '1.250 ₺', date: '23 May 2024', status: 'Tamamlandı' },
  { id: '#ORD-29480', customer: 'Burak Beji', product: 'Laravel Reverb Module', total: '750 ₺', date: '22 May 2024', status: 'Bekliyor' },
  { id: '#ORD-29479', customer: 'Caner Demir', product: 'Cyber Red UI Kit', total: '499 ₺', date: '21 May 2024', status: 'Tamamlandı' },
];
export function OrderList() {
  return (
    <div className="glass-red border-primary/10 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-primary/20 bg-primary/5">
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-primary">SİPARİŞ ID</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-primary">MÜŞTERİ</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-primary">ÜRÜN</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-primary">TUTAR</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-primary">TARİH</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-primary">DURUM</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-primary text-right">İŞLEM</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-primary/10">
            {mockOrders.map((order) => (
              <tr key={order.id} className="hover:bg-white/5 transition-colors group">
                <td className="px-6 py-4 font-mono text-xs text-white/80">{order.id}</td>
                <td className="px-6 py-4 font-bold uppercase text-[10px]">{order.customer}</td>
                <td className="px-6 py-4 text-[10px] font-medium text-muted-foreground">{order.product}</td>
                <td className="px-6 py-4 font-black text-primary text-sm">{order.total}</td>
                <td className="px-6 py-4 text-[10px] font-mono text-muted-foreground">{order.date}</td>
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
      <div className="p-4 border-t border-primary/20 bg-black/40 text-center">
        <button className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
          Tüm Sipari��leri Görüntüle (124+)
        </button>
      </div>
    </div>
  );
}