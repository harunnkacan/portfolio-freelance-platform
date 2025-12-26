import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut, Shield, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { SearchOverlay } from '@/components/ui/search-overlay';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const navLinks = [
  { name: 'Anasayfa', path: '/' },
  { name: 'Makaleler', path: '/blog' },
  { name: 'Kategoriler', path: '/blog' },
  { name: 'Hakkımda', path: '/contact' },
  { name: 'Araçlar', path: '/market' },
  { name: 'Dijital Üniler', path: '/market' },
];
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const user = useAuth((s) => s.user);
  const logout = useAuth((s) => s.logout);
  const isAuthenticated = useAuth((s) => s.isAuthenticated);
  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-black tracking-tighter uppercase text-primary text-glow">
                LUMINA
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      "text-[11px] font-black uppercase tracking-widest transition-all hover:text-primary",
                      location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-muted-foreground hover:text-primary transition-all"
                >
                  <Search size={18} />
                </button>
                {isAuthenticated ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="gap-2 text-primary border border-primary/20 rounded-none h-10 px-4">
                        <User size={16} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Harun Kagan</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-black border-primary/20 text-white rounded-none">
                      <DropdownMenuLabel className="text-[10px] uppercase font-black text-muted-foreground">Hesabım</DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-primary/20" />
                      <DropdownMenuItem asChild>
                        <Link to="/panel" className="cursor-pointer text-xs font-bold uppercase py-3">Üye Paneli</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/admin" className="cursor-pointer flex items-center gap-2 text-xs font-bold uppercase py-3">
                          <Shield size={14} className="text-primary" /> Admin Panel
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-primary/20" />
                      <DropdownMenuItem onClick={() => logout()} className="text-primary cursor-pointer text-xs font-bold uppercase py-3">
                        <LogOut size={14} className="mr-2" /> Çıkış Yap
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button asChild variant="outline" size="sm" className="border-primary/40 text-primary hover:bg-primary hover:text-white transition-all rounded-none font-black uppercase text-[10px] tracking-widest h-10 px-6">
                    <Link to="/auth">Giriş</Link>
                  </Button>
                )}
              </div>
            </div>
            <div className="md:hidden flex items-center gap-2">
               <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-primary"
                >
                  <Search size={20} />
                </button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary"
              >
                {isOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden border-t border-primary/10 bg-background h-screen">
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-3xl font-black uppercase tracking-tighter",
                    location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 border-t border-primary/10 space-y-4">
                {isAuthenticated ? (
                  <>
                    <Link to="/panel" onClick={() => setIsOpen(false)} className="block text-2xl font-black uppercase text-primary">Üye Paneli</Link>
                    <button onClick={() => { logout(); setIsOpen(false); }} className="text-xl uppercase font-bold text-muted-foreground">Çıkış Yap</button>
                  </>
                ) : (
                  <Button asChild className="w-full btn-cyber h-14 rounded-none text-lg" onClick={() => setIsOpen(false)}>
                    <Link to="/auth">GİRİŞ YAP</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}