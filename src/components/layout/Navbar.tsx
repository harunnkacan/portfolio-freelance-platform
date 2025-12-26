import React, { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Menu, X, User, LogOut, Shield, Search, Terminal } from 'lucide-react';
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
  { name: 'Hakkımda', path: '/hakkinda' },
  { name: 'Hizmetler', path: '/services' },
  { name: 'Makaleler', path: '/blog' },
  { name: 'Market', path: '/market' },
  { name: 'İletişim', path: '/contact' },
];
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  // Zustand: Primitive selectors only
  const userName = useAuth((s) => s.user?.name);
  const userRole = useAuth((s) => s.user?.role);
  const isAuthenticated = useAuth((s) => s.isAuthenticated);
  const logout = useAuth((s) => s.logout);
  const isAdminMode = searchParams.get('mode') === 'admin';
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };
  return (
    <>
      {isAdminMode && (
        <div className="bg-primary text-white text-[10px] font-black uppercase tracking-[0.3em] py-2 text-center animate-pulse">
          <Terminal size={12} className="inline mr-2" /> ADMIN MODU AKTİF • <Link to="/" className="underline hover:text-black">KULLANICI MODUNA DÖN</Link>
        </div>
      )}
      <nav className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to={isAdminMode ? "/?mode=admin" : "/"} className="text-2xl font-black tracking-tighter uppercase text-primary text-glow">
                LUMINA
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={isAdminMode ? `${link.path}?mode=admin` : link.path}
                    className={cn(
                      "text-[11px] font-black uppercase tracking-widest transition-all hover:text-primary",
                      isActive(link.path) ? "text-primary" : "text-muted-foreground"
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
                        <span className="text-[10px] font-black uppercase tracking-widest">{userName}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-black border-primary/20 text-white rounded-none">
                      <DropdownMenuLabel className="text-[10px] uppercase font-black text-primary tracking-widest">HESABIM</DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-primary/20" />
                      <DropdownMenuItem asChild>
                        <Link to="/panel" className="cursor-pointer text-xs font-bold uppercase py-3 hover:text-primary">Panelim</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/panel?tab=orders" className="cursor-pointer text-xs font-bold uppercase py-3 hover:text-primary">Siparişlerim</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/market" className="cursor-pointer text-xs font-bold uppercase py-3 hover:text-primary">Market</Link>
                      </DropdownMenuItem>
                      {userRole === 'admin' && (
                        <>
                          <DropdownMenuSeparator className="bg-primary/20" />
                          <DropdownMenuItem asChild>
                            <Link to="/admin?mode=admin" className="cursor-pointer flex items-center gap-2 text-xs font-bold uppercase py-3 text-primary">
                              <Shield size={14} /> Admin Panel
                            </Link>
                          </DropdownMenuItem>
                        </>
                      )}
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
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/95 border-b border-primary/20 py-4 px-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={isAdminMode ? `${link.path}?mode=admin` : link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block text-[11px] font-black uppercase tracking-widest",
                  isActive(link.path) ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}