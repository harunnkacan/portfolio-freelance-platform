export interface Makale {
  id: string;
  baslik: string;
  kategori: string;
  ozet: string;
  icerik: string;
  tarih: string;
  resim: string;
  okumaSuresi: string;
  githubRepo?: string;
}
export interface Urun {
  id: string;
  ad: string;
  fiyat: string;
  resim: string;
  kategori: string;
  stokDurumu: 'Anında Teslimat' | 'Gecikmeli';
  ozellikler: string[];
  aciklama: string;
}
export interface Hizmet {
  id: string;
  ad: string;
  aciklama: string;
  iconName: string;
}
export interface PricingTier {
  id: string;
  ad: string;
  fiyat: string;
  ozellikler: string[];
  isPopular?: boolean;
}
export interface ProcessStep {
  title: string;
  desc: string;
}
export interface SidebarCategory {
  ad: string;
  iconName: string;
  isHot?: boolean;
  isNew?: boolean;
  isSecure?: boolean;
}
export const kategorilerSidebar: SidebarCategory[] = [
  { ad: "Yazılım", iconName: "Code", isHot: true },
  { ad: "Sunucu", iconName: "Server", isSecure: true },
  { ad: "SEO", iconName: "TrendingUp", isNew: true },
  { ad: "AI Kaynak", iconName: "Brain" },
  { ad: "Diğer", iconName: "Layers", isHot: true },
];
export const siteAyarlari = {
  baslik: "Lumina",
  slogan: "GELECEĞİ KODLA, FİKİRLERİ PAYLAŞ",
  hakkimda: "Lumina, modern web teknolojileri ve minimalist tasarım anlayışını birleştiren bir dijital platformdur. Yazılım dünyasındaki gelişmeleri en güncel haliyle sunar.",
  email: "iletisim@lumina.blog",
  sosyalMedya: [
    { ad: "Twitter", link: "#", url: "https://twitter.com" },
    { ad: "GitHub", link: "#", url: "https://github.com" },
    { ad: "LinkedIn", link: "#", url: "https://linkedin.com" }
  ],
  istatistikler: {
    ziyaretci: "128K+",
    satis: "1.4K+",
    makale: "240+",
    uye: "5.2K+"
  }
};
export const makaleler: Makale[] = [
  {
    id: "m1",
    baslik: "React 19 ile Gelen Yenilikler",
    kategori: "Yazılım",
    ozet: "React'in yeni sürümüyle gelen Compiler ve Actions gibi devrim niteliğindeki özellikleri inceliyoruz.",
    icerik: "React 19, geliştirici deneyimini kökten değiştirecek yeniliklerle geliyor...",
    tarih: "14 May 2024",
    resim: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    okumaSuresi: "8 dk",
    githubRepo: "facebook/react"
  },
  {
    id: "m2",
    baslik: "Minimalist Çalışma Alanı Tasarımı",
    kategori: "Yaşam",
    ozet: "Üretkenliği artıran, karmaşadan uzak bir çalışma ortamı hazırlamanın püf noktaları.",
    icerik: "Minimalizm sadece bir dekorasyon stili değil, aynı zamanda bir zihin durumudur...",
    tarih: "10 May 2024",
    resim: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop",
    okumaSuresi: "5 dk"
  },
  {
    id: "m3",
    baslik: "TypeScript'te Advanced Types",
    kategori: "Yazılım",
    ozet: "Mapped types, conditional types ve infer anahtar kelimesi ile tip güvenliğini en üst düzeye çıkarın.",
    icerik: "TypeScript dünyasında derinleşmek istiyorsanız Mapped Types konularına hakim olmalısınız...",
    tarih: "08 May 2024",
    resim: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800&auto=format&fit=crop",
    okumaSuresi: "12 dk",
    githubRepo: "microsoft/typescript"
  }
];
export const urunler: Urun[] = [
  {
    id: "u1",
    ad: "Cyber Red UI Kit",
    fiyat: "499 ₺",
    resim: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    kategori: "Tasarım",
    stokDurumu: "Anında Teslimat",
    aciklama: "Modern ve fütüristik web projeleri için tasarlanmış kapsamlı bir UI kiti.",
    ozellikler: ["200+ Komponent", "Figma Dosyası Dahil", "React/Tailwind Desteği", "Koyu Tema Odaklı"]
  }
];
export const hizmetler: Hizmet[] = [
  { id: "h1", ad: "Web Tasarım", aciklama: "Modern, hızlı ve SEO uyumlu web arayüzleri.", iconName: "Layout" },
  { id: "h2", ad: "Mobil Geliştirme", aciklama: "iOS ve Android platformları için hibrit çözümler.", iconName: "Smartphone" },
  { id: "h3", ad: "Kurumsal Kimlik", aciklama: "Dijital varlığınız için profesyonel marka tasarımı.", iconName: "Briefcase" }
];
export const pricingTiers: PricingTier[] = [
  { id: "p1", ad: "Başlangıç", fiyat: "4.500 ₺", ozellikler: ["5 Sayfa Web Sitesi", "Mobil Uyumlu", "Ücretsiz Hosting (1 Yıl)", "Teknik Destek"] },
  { id: "p2", ad: "Profesyonel", fiyat: "12.000 ₺", ozellikler: ["15 Sayfa Web Sitesi", "SEO Optimizasyonu", "Admin Paneli", "E-Ticaret Altyapısı", "7/24 Destek"], isPopular: true },
  { id: "p3", ad: "Kurumsal", fiyat: "25.000+ ₺", ozellikler: ["Sınırsız Sayfa", "Özel Entegrasyonlar", "Yıllık Bakım", "Dedicated Sunucu", "VIP Danışmanlık"] }
];
export const isSureci: ProcessStep[] = [
  { title: "Analiz", desc: "��htiyaçlarınızı belirliyoruz ve yol haritasını çiziyoruz." },
  { title: "Tasarım", desc: "Kullanıcı odaklı, modern arayüzler tasarlıyoruz." },
  { title: "Geliştirme", desc: "En güncel teknolojilerle kodlama sürecini başlatıyoruz." },
  { title: "Yayım", desc: "Test süreçlerini tamamlayıp projenizi yayına alıyoruz." }
];