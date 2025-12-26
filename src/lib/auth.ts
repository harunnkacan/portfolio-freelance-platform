import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { toast } from 'sonner';
export type UserRole = 'guest' | 'user' | 'admin';
export interface AuditLog {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  detail: string;
}
export interface User {
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
}
interface AuthState {
  user: User | null;
  users: User[];
  logs: AuditLog[];
  isAuthenticated: boolean;
  login: (email: string, role?: UserRole) => void;
  logout: () => void;
  logAction: (action: string, detail: string) => void;
  updateUserRole: (email: string, role: UserRole) => void;
  deleteUser: (email: string) => void;
  updatePassword: (email: string, newPass: string) => void;
  updateProfile: (email: string, name: string) => void;
  clearLogs: () => void;
}
export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      users: [
        { name: 'Admin', email: 'admin@lumina.blog', role: 'admin', createdAt: '2024-01-01' },
        { name: 'Misafir', email: 'user@lumina.blog', role: 'user', createdAt: '2024-05-10' }
      ],
      logs: [],
      logAction: (action, detail) => {
        const currentUser = get().user?.email || 'Sistem';
        const newLog: AuditLog = {
          id: Math.random().toString(36).substr(2, 9),
          timestamp: new Date().toISOString(),
          user: currentUser,
          action,
          detail
        };
        set((state) => ({ logs: [newLog, ...state.logs].slice(0, 100) }));
      },
      login: (email, role = 'user') => {
        const name = email.split('@')[0];
        const newUser: User = { 
          name, 
          email, 
          role, 
          createdAt: new Date().toISOString().split('T')[0] 
        };
        set((state) => {
          const userExists = state.users.find(u => u.email === email);
          return {
            user: userExists || newUser,
            isAuthenticated: true,
            users: userExists ? state.users : [...state.users, newUser]
          };
        });
        get().logAction('LOGIN', `${email} sisteme giriş yaptı.`);
      },
      logout: () => {
        const email = get().user?.email;
        get().logAction('LOGOUT', `${email} sistemden çıkış yaptı.`);
        set({ user: null, isAuthenticated: false });
      },
      updateUserRole: (email, role) => {
        set((state) => ({
          users: state.users.map(u => u.email === email ? { ...u, role } : u)
        }));
        get().logAction('ROLE_UPDATE', `${email} rolü ${role} olarak güncellendi.`);
      },
      deleteUser: (email) => {
        set((state) => ({
          users: state.users.filter(u => u.email !== email)
        }));
        get().logAction('USER_DELETE', `${email} hesabı silindi.`);
      },
      updatePassword: (email, newPass) => {
        // Mock password update
        get().logAction('PASSWORD_UPDATE', `${email} şifresini güncelledi.`);
        toast.success("Şifre başarıyla güncellendi.");
      },
      updateProfile: (email, name) => {
        set((state) => ({
          user: state.user?.email === email ? { ...state.user, name } : state.user,
          users: state.users.map(u => u.email === email ? { ...u, name } : u)
        }));
        get().logAction('PROFILE_UPDATE', `${email} profil bilgilerini güncelledi.`);
      },
      clearLogs: () => set({ logs: [] }),
    }),
    {
      name: 'auth-storage',
    }
  )
);