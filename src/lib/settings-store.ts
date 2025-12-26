import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export interface SettingsState {
  primaryColor: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCtaText: string;
  heroCtaLink: string;
  updateSettings: (newSettings: Partial<Omit<SettingsState, 'updateSettings'>>) => void;
}
export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      primaryColor: '#ff1744',
      heroTitle: 'GELECEĞİ KODLA, FİKİRLERİ PAYLAŞ',
      heroSubtitle: 'Dijital evrende iz bırak��n. Yazılım, tasarım ve gelecek burada buluşuyor.',
      heroCtaText: 'MAKALELERİ OKU',
      heroCtaLink: '/blog',
      updateSettings: (newSettings) => {
        set((state) => ({ ...state, ...newSettings }));
        if (newSettings.primaryColor) {
          document.documentElement.style.setProperty('--primary', hexToHsl(newSettings.primaryColor));
          document.documentElement.style.setProperty('--ring', newSettings.primaryColor);
        }
      },
    }),
    {
      name: 'site-settings',
    }
  )
);
// Helper to convert HEX to HSL for Shadcn CSS variables
function hexToHsl(hex: string): string {
  let r = 0, g = 0, b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.substring(1, 3), 16);
    g = parseInt(hex.substring(3, 5), 16);
    b = parseInt(hex.substring(5, 7), 16);
  }
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
}