import React, { useEffect } from 'react';
import { siteAyarlari } from '@/lib/content';
import { useSettings } from '@/lib/settings-store';
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}
export function SEO({ title, description, keywords, ogImage }: SEOProps) {
  const defaultTitle = useSettings(s => s.defaultSeoTitle);
  const defaultDesc = useSettings(s => s.defaultSeoDesc);
  useEffect(() => {
    const finalTitle = title ? `${title} | ${siteAyarlari.baslik}` : (defaultTitle || siteAyarlari.baslik);
    const finalDesc = description || defaultDesc || siteAyarlari.hakkimda;
    const finalKeywords = keywords || "yazılım, blog, teknoloji, react, laravel";
    document.title = finalTitle;
    const updateMeta = (name: string, content: string, attr: string = 'name') => {
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    updateMeta('description', finalDesc);
    updateMeta('keywords', finalKeywords);
    updateMeta('og:title', finalTitle, 'property');
    updateMeta('og:description', finalDesc, 'property');
    updateMeta('og:image', ogImage || "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800", 'property');
    updateMeta('twitter:card', 'summary_large_image');
  }, [title, description, keywords, ogImage, defaultTitle, defaultDesc]);
  return null;
}