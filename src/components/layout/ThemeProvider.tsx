import React, { useEffect } from 'react';
import { useSettings } from '@/lib/settings-store';
interface ThemeProviderProps {
  children: React.ReactNode;
}
export function ThemeProvider({ children }: ThemeProviderProps) {
  const primaryColor = useSettings(s => s.primaryColor);
  const updateSettings = useSettings(s => s.updateSettings);
  useEffect(() => {
    // Re-trigger update to apply CSS variables on mount
    updateSettings({ primaryColor });
  }, [primaryColor, updateSettings]);
  return <>{children}</>;
}