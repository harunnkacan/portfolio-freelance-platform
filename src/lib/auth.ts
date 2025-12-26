import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export type UserRole = 'guest' | 'user' | 'admin';
interface User {
  name: string;
  email: string;
  role: UserRole;
}
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, role?: UserRole) => void;
  logout: () => void;
}
export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (email, role = 'user') => {
        const name = email.split('@')[0];
        set({ 
          user: { name, email, role }, 
          isAuthenticated: true 
        });
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);