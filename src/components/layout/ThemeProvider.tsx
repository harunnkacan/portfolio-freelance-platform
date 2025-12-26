import React, { useEffect } from 'react';
import { useSettings, hexToHsl } from '@/lib/settings-store';
interface ThemeProviderProps {
  children: React.ReactNode;
}
export function ThemeProvider({ children }: ThemeProviderProps) {
  // Zustand: Primitive selector only
  const primaryColor = useSettings(s => s.primaryColor);
  useEffect(() => {
    if (primaryColor) {
      try {
        const hslValue = hexToHsl(primaryColor);
        document.documentElement.style.setProperty('--primary', hslValue);
        document.documentElement.style.setProperty('--ring', primaryColor);
      } catch (error) {
        console.error('Failed to update theme variables:', error);
      }
    }
  }, [primaryColor]);
  return <>{children}</>;
}