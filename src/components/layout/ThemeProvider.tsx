import React, { useEffect } from 'react';
import { useSettings, hexToHsl } from '@/lib/settings-store';
interface ThemeProviderProps {
  children: React.ReactNode;
}
export function ThemeProvider({ children }: ThemeProviderProps) {
  const primaryColor = useSettings(s => s.primaryColor);
  useEffect(() => {
    if (primaryColor) {
      const hslValue = hexToHsl(primaryColor);
      document.documentElement.style.setProperty('--primary', hslValue);
      document.documentElement.style.setProperty('--ring', primaryColor);
      // Optional: update secondary/accent based on primary color if needed
    }
  }, [primaryColor]);
  return <>{children}</>;
}