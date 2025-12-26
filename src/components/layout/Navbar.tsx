import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
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
  { name: 'Mağaza', path: '/market' },
];
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const user = useAuth((s) => s.user);
  const logout = useAuth((s) => s.logout);
  const isAuthenticated = useAuth((s) => s.isAuthenticated);
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-black tracking-tighter uppercase text-primary text-glow">
              LUMINA
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-xs font-bold uppercase tracking-widest transition-all hover:text-primary",
                    location.pathname === link.path ? "text-primary underline underline-offset-8" : "text-muted-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="gap-2 text-primary border border-primary/20">
                      <User size={16} />
                      {user?.name}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-cyber-dark border-primary/20 text-white">
                    <DropdownMenuLabel>Hesabım</DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-primary/20" />
                    <DropdownMenuItem asChild>
                      <Link to="/panel" className="cursor-pointer">Panel</Link>
                    </DropdownMenuItem>
                    {user?.role === 'admin' && (
                      <DropdownMenuItem asChild>
                        <Link to="/admin" className="cursor-pointer flex items-center gap-2">
                          <Shield size={14} /> Admin
                        </Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator className="bg-primary/20" />
                    <DropdownMenuItem onClick={() => logout()} className="text-primary cursor-pointer">
                      <LogOut size={14} className="mr-2" /> Çıkış Yap
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-white transition-all rounded-none font-bold uppercase tracking-tighter">
                  <Link to="/auth">Giriş Yap</Link>
                </Button>
              )}
            </div>
          </div>
          <div className="md:hidden flex items-center gap-4">
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
        <div className="md:hidden border-t border-primary/10 bg-background animate-in slide-in-from-top-4 duration-200 h-screen">
          <div className="flex flex-col p-6 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-2xl font-bold uppercase tracking-tighter",
                  location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-primary/10">
              {isAuthenticated ? (
                <Button onClick={() => { logout(); setIsOpen(false); }} className="w-full btn-cyber rounded-none">Çıkış Yap</Button>
              ) : (
                <Button asChild className="w-full btn-cyber rounded-none" onClick={() => setIsOpen(false)}>
                  <Link to="/auth">Giriş Yap / Kayıt Ol</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}