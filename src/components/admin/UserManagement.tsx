import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth, UserRole } from '@/lib/auth';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, UserPlus, Shield, Trash2, Key, MoreHorizontal, Mail, Calendar } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
export function UserManagement() {
  const users = useAuth((s) => s.users);
  const deleteUser = useAuth((s) => s.deleteUser);
  const updateUserRole = useAuth((s) => s.updateUserRole);
  const updatePassword = useAuth((s) => s.updatePassword);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleResetPassword = (email: string) => {
    updatePassword(email, "reset123");
    toast.info(`${email} için geçici şifre oluşturuldu.`);
  };
  const handleDelete = (email: string) => {
    if (confirm(`${email} kullanıcısını silmek istediğinize emin misiniz?`)) {
      deleteUser(email);
      toast.error("Kullanıcı sistemden kaldırıldı.");
    }
  };
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tighter text-glow flex items-center gap-3">
            <Shield className="text-primary" /> KULLANICI YÖNETİM��
          </h2>
          <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-2">Platform üyeleri ve erişim yetkileri</p>
        </div>
        <Button onClick={() => setShowAddForm(!showAddForm)} className="btn-cyber h-14 px-8 text-[10px] font-black uppercase">
          <UserPlus size={18} className="mr-2" /> YENİ ÜYE EKLE
        </Button>
      </div>
      <AnimatePresence>
        {showAddForm && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="glass-red p-8">
            <form className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end" onSubmit={(e) => { e.preventDefault(); toast.success("Önizleme Modu: Kullanıcı eklendi."); setShowAddForm(false); }}>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary">Ad Soyad</label>
                <Input required className="bg-black/50 border-primary/20 rounded-none h-12" placeholder="Yeni Kullanıcı" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-primary">E-Posta</label>
                <Input required type="email" className="bg-black/50 border-primary/20 rounded-none h-12" placeholder="user@lumina.blog" />
              </div>
              <Button type="submit" className="btn-cyber h-12">ÜYEYİ OLUŞTUR</Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
        <Input 
          placeholder="İsim veya e-posta ile ara..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="h-14 pl-12 bg-black/40 border-primary/20 rounded-none"
        />
      </div>
      <div className="glass-red border-primary/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-primary/20 bg-primary/5">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-primary">ÜYE BİLGİSİ</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-primary">ROL</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-primary">KATILIM</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-primary text-right">İŞLEMLER</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-primary/10 font-medium">
              {filteredUsers.map((user) => (
                <tr key={user.email} className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center font-black text-primary">
                        {user.name[0]}
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-tight">{user.name}</p>
                        <p className="text-[10px] text-muted-foreground flex items-center gap-1 uppercase italic"><Mail size={10}/> {user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <Badge className={user.role === 'admin' ? 'bg-primary text-white border-none' : 'bg-white/5 text-muted-foreground border-white/10 uppercase text-[9px]'}>
                      {user.role}
                    </Badge>
                  </td>
                  <td className="px-6 py-5 text-[10px] font-mono text-muted-foreground uppercase flex items-center gap-2 mt-3">
                    <Calendar size={12}/> {user.createdAt}
                  </td>
                  <td className="px-6 py-5 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="hover:text-primary"><MoreHorizontal size={20} /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-black border-primary/20 text-white rounded-none min-w-[180px]">
                        <DropdownMenuLabel className="text-[10px] uppercase font-black">Yönetim</DropdownMenuLabel>
                        <DropdownMenuSeparator className="bg-primary/20"/>
                        <DropdownMenuItem onClick={() => updateUserRole(user.email, user.role === 'admin' ? 'user' : 'admin')} className="text-xs font-bold uppercase py-3 cursor-pointer">
                          {user.role === 'admin' ? 'YETKİYİ AL' : 'ADMİN YAP'}
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleResetPassword(user.email)} className="text-xs font-bold uppercase py-3 cursor-pointer flex items-center gap-2">
                          <Key size={14} className="text-primary"/> ŞİFRE SIFIRLA
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="bg-primary/20"/>
                        <DropdownMenuItem onClick={() => handleDelete(user.email)} className="text-xs font-bold uppercase py-3 cursor-pointer text-red-500">
                          <Trash2 size={14} className="mr-2"/> HESABI SİL
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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