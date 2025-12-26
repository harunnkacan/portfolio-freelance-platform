import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export interface MediaFile {
  id: string;
  name: string;
  url: string;
  size: string;
  type: string;
}
export interface SettingsState {
  primaryColor: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCtaText: string;
  heroCtaLink: string;
  // SEO
  defaultSeoTitle: string;
  defaultSeoDesc: string;
  googleAnalyticsId: string;
  // AI Config
  aiModel: string;
  aiTemperature: number;
  aiApiKey: string;
  aiPromptTemplates: {
    seo: string;
    metaTitle: string;
    metaDesc: string;
  };
  // Media Manager (R2 Mock)
  media: MediaFile[];
  syncStatus: 'idle' | 'syncing' | 'saved';
  // Mock Analytics
  analytics: {
    articles7Days: { day: string; count: number }[];
    views7Days: { day: string; count: number }[];
  };
  updateSettings: (newSettings: Partial<Omit<SettingsState, 'updateSettings'>>) => void;
}
export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      primaryColor: '#ff1744',
      heroTitle: 'GELECEĞİ KODLA, FİKİRLERİ PAYLAŞ',
      heroSubtitle: 'Dijital evrende iz bırakın. Yazılım, tasarım ve gelecek burada buluşuyor.',
      heroCtaText: 'MAKALELERİ OKU',
      heroCtaLink: '/blog',
      defaultSeoTitle: 'Lumina - Kişisel Blog Scripti',
      defaultSeoDesc: 'Modern teknolojiler ve minimalist tasarımla geliştirilmiş kişisel portfolyo ve blog scripti.',
      googleAnalyticsId: '',
      aiModel: 'gpt-4o',
      aiTemperature: 0.7,
      aiApiKey: '',
      aiPromptTemplates: {
        seo: 'Bu makaleyi SEO odaklı analiz et.',
        metaTitle: 'İlgi çekici bir Meta Title oluştur.',
        metaDesc: 'Tıklama odaklı bir Meta Description yaz.'
      },
      media: [
        { id: '1', name: 'hero-banner.jpg', url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800', size: '2.4 MB', type: 'image/jpeg' },
        { id: '2', name: 'product-mockup.png', url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800', size: '1.1 MB', type: 'image/png' },
        { id: '3', name: 'admin-preview.jpg', url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800', size: '3.2 MB', type: 'image/jpeg' },
      ],
      syncStatus: 'idle',
      analytics: {
        articles7Days: [
          { day: 'Pzt', count: 2 }, { day: 'Sal', count: 1 }, { day: 'Çar', count: 3 },
          { day: 'Per', count: 0 }, { day: 'Cum', count: 2 }, { day: 'Cmt', count: 4 }, { day: 'Paz', count: 1 },
        ],
        views7Days: [
          { day: 'Pzt', count: 1200 }, { day: 'Sal', count: 1500 }, { day: 'Çar', count: 1100 },
          { day: 'Per', count: 1800 }, { day: 'Cum', count: 2200 }, { day: 'Cmt', count: 2800 }, { day: 'Paz', count: 2400 },
        ]
      },
      updateSettings: (newSettings) => {
        set({ syncStatus: 'syncing' });
        set((state) => ({ ...state, ...newSettings }));
        setTimeout(() => set({ syncStatus: 'idle' }), 1000);
      },
    }),
    { name: 'site-settings' }
  )
);
export function hexToHsl(hex: string): string {
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