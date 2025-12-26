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
  yazar: string;
  okunma: string;
  slug?: string;
  metaTitle?: string;
  metaDescription?: string;
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
  slug?: string;
  metaTitle?: string;
  metaDescription?: string;
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
export const profile = {
  name: "Burak Beji",
  role: "Full Stack Developer",
  avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=256&h=256&auto=format&fit=crop",
  bio: "Modern web teknolojileri üzerine uzmanlaşmış, minimalist tasarım ve performans odaklı geliştirmeler yapan bir yazılım geliştiriciyim. Laravel, React ve Node.js ekosistemlerinde 5+ yıllık deneyime sahibim.",
  location: "İstanbul, TR",
  status: "SYSTEM READY",
  stacks: {
    backend: ["Laravel", "Node.js", "Docker", "AWS", "DigitalOcean"],
    frontend: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    database: ["MySQL", "PostgreSQL", "Redis", "MongoDB"],
    os: ["Ubuntu Server", "Windows Pro", "MacOS"]
  }
};
export const siteAyarlari = {
  baslik: "Lumina",
  slogan: "GELECEĞİ KODLA, FİKİRLERİ PAYLAŞ",
  hakkimda: "Lumina, Burak Beji tarafından modern web teknolojileri ve minimalist tasarım anlayışıyla hayata geçirilmiş bir dijital platformdur.",
  email: "iletisim@lumina.blog",
  sosyalMedya: [
    { ad: "Twitter", url: "https://twitter.com" },
    { ad: "GitHub", url: "https://github.com" },
    { ad: "LinkedIn", url: "https://linkedin.com" }
  ],
  istatistikler: {
    ziyaretci: "128K+",
    satis: "1.4K+",
    makale: "9",
    uye: "5.2K+"
  }
};
export const adminStats = {
  ciro: "42.580 ₺",
  siparisSayisi: "1.240",
  sistemDurumu: "%99.9",
  toplamUrun: "12"
};
export const kategorilerSidebar: SidebarCategory[] = [
  { ad: "React", iconName: "Code", isHot: true },
  { ad: "PHP", iconName: "Server", isSecure: true },
  { ad: "Laravel", iconName: "TrendingUp", isNew: true },
  { ad: "CSS", iconName: "Layers" },
  { ad: "Wordpress", iconName: "Brain" },
];
export const makaleler: Makale[] = [
  {
    id: "m1",
    baslik: "React 19 ile Gelen Yenilikler",
    kategori: "React",
    ozet: "React'in yeni sürümüyle gelen Compiler ve Actions gibi devrim niteliğindeki özellikleri inceliyoruz.",
    icerik: "React 19, geliştirici deneyimini kökten değiştirecek yeniliklerle geliyor. Yeni derleyici motoru sayesinde memoization artık manuel yapılmak zorunda değil. Actions API ise form yönetimini ve veri güncellemelerini çok daha basit bir hale getiriyor.",
    tarih: "14 May 2024",
    resim: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    okumaSuresi: "8 dk",
    githubRepo: "facebook/react",
    yazar: "Burak Beji",
    okunma: "3.2K"
  },
  {
    id: "m2",
    baslik: "Tailwind CSS v4 Roadmap",
    kategori: "CSS",
    ozet: "Tailwind CSS'in dördüncü sürümünde bizi bekleyen performans iyileştirmeleri ve yeni motor.",
    icerik: "Tailwind v4 tamamen sıfırdan yazılmış bir engine ile geliyor. Artık CSS konfigürasyonu çok daha hafif ve runtime performansı inanılmaz seviyede. Oxide engine sayesinde build süreleri %100'e kadar hızlanıyor.",
    tarih: "12 May 2024",
    resim: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop",
    okumaSuresi: "5 dk",
    yazar: "Burak Beji",
    okunma: "1.4K"
  },
  {
    id: "m3",
    baslik: "Laravel 11 Reverb Nedir?",
    kategori: "Laravel",
    ozet: "Laravel'in yeni gerçek zamanlı websocket sunucusu Reverb'ün kurulumu ve kullanımı.",
    icerik: "Reverb, Laravel ekosistemine dahil edilen en heyecan verici özelliklerden biri. PHP ile yazılmış, yüksek performanslı ve tamamen ölçeklenebilir bir websocket sunucusu olan Reverb, Pusher gibi harici servislere olan bağımlılığı ortadan kaldırıyor.",
    tarih: "10 May 2024",
    resim: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    okumaSuresi: "12 dk",
    githubRepo: "laravel/reverb",
    yazar: "Burak Beji",
    okunma: "2.1K"
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
  },
  {
    id: "u2",
    ad: "Admin Dashboard Template",
    fiyat: "1.250 ₺",
    resim: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    kategori: "Yazılım",
    stokDurumu: "Anında Teslimat",
    aciklama: "Yüksek performanslı ve tamamen özelleştirilebilir yönetim paneli şablonu.",
    ozellikler: ["Zustand State", "React Query", "Shadcn UI", "Responsive Design"]
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
  { title: "Analiz", desc: "İhtiyaçlarınızı belirliyoruz ve yol haritasını çiziyoruz." },
  { title: "Tasarım", desc: "Kullanıcı odaklı, modern arayüzler tasarlıyoruz." },
  { title: "Geliştirme", desc: "En güncel teknolojilerle kodlama sürecini başlatıyoruz." },
  { title: "Yayım", desc: "Test süreçlerini tamamlayıp projenizi yayına alıyoruz." }
];