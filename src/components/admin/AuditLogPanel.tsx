import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/lib/auth';
import { Activity, Trash2, Download, Terminal, Search, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
export function AuditLogPanel() {
  const logs = useAuth((s) => s.logs);
  const clearLogs = useAuth((s) => s.clearLogs);
  const handleExport = () => {
    const data = JSON.stringify(logs, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `lumina-audit-logs-${new Date().toISOString()}.json`;
    link.click();
    toast.success("Günlük kayıtları JSON olarak indirildi.");
  };
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-glow flex items-center gap-3">
            <Activity className="text-primary" /> SİSTEM GÜNLÜĞÜ
          </h2>
          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-2 italic">Gerçek zamanlı audit ve güvenlik takibi</p>
        </div>
        <div className="flex gap-4">
          <Button onClick={clearLogs} variant="outline" className="h-12 border-red-500/20 text-red-500 hover:bg-red-500/5 text-[10px] font-black uppercase">
            <Trash2 size={16} className="mr-2" /> GÜNLÜĞÜ TEMİZLE
          </Button>
          <Button onClick={handleExport} className="btn-cyber h-12 px-8 text-[10px] font-black uppercase">
            <Download size={18} className="mr-2" /> DIŞA AKTAR (JSON)
          </Button>
        </div>
      </div>
      <div className="glass-red bg-black/80 border-primary/20 rounded-none overflow-hidden flex flex-col min-h-[600px]">
        <div className="h-12 bg-primary/10 border-b border-primary/20 flex items-center px-6 justify-between">
          <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest">
            <Terminal size={14}/> lumina_audit_viewer.sh
          </div>
          <div className="text-[10px] font-mono text-muted-foreground">Entries: {logs.length}</div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-2 font-mono text-[11px] scrollbar-none">
          {logs.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center opacity-30 text-center gap-4">
              <Search size={48} />
              <p className="uppercase font-black tracking-widest">HAKİKATEN HİÇBİR ŞEY YOK</p>
            </div>
          ) : (
            logs.map((log) => (
              <motion.div
                key={log.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-start gap-4 p-3 border-b border-white/5 hover:bg-white/5 transition-colors group"
              >
                <div className="text-muted-foreground shrink-0 flex items-center gap-1">
                  <Clock size={12}/> {new Date(log.timestamp).toLocaleTimeString()}
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <Badge className="bg-white/10 text-white rounded-none border-none text-[9px] uppercase font-black px-1.5 h-5">
                    {log.action}
                  </Badge>
                </div>
                <div className="text-primary font-black flex items-center gap-1 shrink-0">
                  <User size={12}/> {log.user.split('@')[0]}
                </div>
                <div className="text-white/70 italic truncate">
                  {log.detail}
                </div>
                <div className="ml-auto text-[8px] opacity-0 group-hover:opacity-100 text-muted-foreground">
                  ID: {log.id}
                </div>
              </motion.div>
            ))
          )}
        </div>
        <div className="h-8 bg-black/60 border-t border-primary/20 px-4 flex items-center justify-between">
          <div className="text-[8px] font-black uppercase tracking-widest text-primary animate-pulse">
            ● SYSTEM_MONITORING_ACTIVE
          </div>
          <div className="text-[8px] font-mono text-muted-foreground uppercase">
            Last Update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}
function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${className}`}>
      {children}
    </span>
  );
}