import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, ShoppingBag, CreditCard, ShieldCheck, FileText, Eye, MessageSquare } from 'lucide-react';
import { useSettings } from '@/lib/settings-store';
import { adminStats, siteAyarlari } from '@/lib/content';
export function DashboardPanel() {
  const articles7Days = useSettings(s => s.analytics.articles7Days);
  const views7Days = useSettings(s => s.analytics.views7Days);
  const primaryColor = useSettings(s => s.primaryColor);
  const mainStats = [
    { label: 'DİJİTAL SATIŞ', value: '1,240', icon: ShoppingBag, color: 'text-primary' },
    { label: 'TOPLAM CİRO', value: adminStats.ciro, icon: CreditCard, color: 'text-emerald-500' },
    { label: 'SİPARİŞLER', value: '84', icon: TrendingUp, color: 'text-blue-500' },
    { label: 'SİSTEM DURUMU', value: '99.9%', icon: ShieldCheck, color: 'text-amber-500' },
  ];
  const contentStats = [
    { label: 'MAKALELER', value: siteAyarlari.istatistikler.makale, icon: FileText },
    { label: 'GÖRÜNTÜLENME', value: siteAyarlari.istatistikler.ziyaretci, icon: Eye },
    { label: 'YORUMLAR', value: '42', icon: MessageSquare },
  ];
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mainStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-red p-6 flex flex-col justify-between h-36 border-primary/10"
          >
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</span>
              <stat.icon size={20} className={stat.color} />
            </div>
            <p className="text-4xl font-black tracking-tighter">{stat.value}</p>
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contentStats.map((stat, i) => (
          <div key={stat.label} className="glass-red p-6 flex items-center gap-6 border-primary/5">
            <div className="w-12 h-12 bg-white/5 flex items-center justify-center">
              <stat.icon size={24} className="text-primary/60" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-black tracking-tighter">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="glass-red p-8">
          <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-8">MAKALE YAYINLANMA (SON 7 GÜN)</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={articles7Days}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                <XAxis dataKey="day" stroke="#666" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#666" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#000', border: `1px solid ${primaryColor}`, borderRadius: '0px' }}
                  itemStyle={{ color: primaryColor, textTransform: 'uppercase', fontWeight: 'bold', fontSize: '10px' }}
                />
                <Bar dataKey="count" fill={primaryColor}>
                  {articles7Days.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={primaryColor} fillOpacity={0.4 + (index * 0.1)} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
        <section className="glass-red p-8">
          <h3 className="text-xs font-black uppercase tracking-widest text-primary mb-8">GÖRÜNTÜLENME İSTATİSTİKLERİ</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={views7Days}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                <XAxis dataKey="day" stroke="#666" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#666" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#000', border: `1px solid ${primaryColor}`, borderRadius: '0px' }}
                  itemStyle={{ color: primaryColor, textTransform: 'uppercase', fontWeight: 'bold', fontSize: '10px' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="count" 
                  stroke={primaryColor} 
                  strokeWidth={3} 
                  dot={{ fill: primaryColor, r: 4 }}
                  activeDot={{ r: 8, stroke: '#fff', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
    </div>
  );
}