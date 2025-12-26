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
  },
  {
    id: "m4",
    baslik: "PHP 8.3 Yeni Özellikleri",
    kategori: "PHP",
    ozet: "Typed constants ve dynamic class constant fetch gibi PHP 8.3 ile gelen kritik yenilikler.",
    icerik: "PHP her geçen gün daha tip-güvenli bir dil haline geliyor. 8.3 sürümü ile gelen typed class constants ve readonly sınıflardaki esneklikler, modern PHP kodunun ne kadar güçlü olabileceğini gösteriyor.",
    tarih: "08 May 2024",
    resim: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=800&auto=format&fit=crop",
    okumaSuresi: "6 dk",
    yazar: "Burak Beji",
    okunma: "950"
  },
  {
    id: "m5",
    baslik: "Wordpress Headless Kullanımı",
    kategori: "Wordpress",
    ozet: "Wordpress'i backend olarak kullanıp Next.js ile frontend geliştirme süreci.",
    icerik: "Geleneksel CMS yapısından kurtulup modern bir yapı kurmak mümkün. WP REST API veya GraphQL kullanarak içerikleri çekebilir ve Next.js'in gücüyle inanılmaz hızlı kullanıcı arayüzleri oluşturabilirsiniz.",
    tarih: "05 May 2024",
    resim: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=800&auto=format&fit=crop",
    okumaSuresi: "10 dk",
    yazar: "Burak Beji",
    okunma: "830"
  },
  {
    id: "m6",
    baslik: "Vue 3 Composition API İpuçları",
    kategori: "Vue",
    ozet: "Vue 3 ile daha temiz ve sürdürülebilir kod yazmanın incelikleri.",
    icerik: "Composition API, Vue dünyasında devrim yarattı. Logic decoupling ve script setup kullanımı sayesinde devasa componentleri bile parçalara ayırıp kolayca yönetebiliyoruz.",
    tarih: "02 May 2024",
    resim: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=800&auto=format&fit=crop",
    okumaSuresi: "7 dk",
    yazar: "Burak Beji",
    okunma: "1.2K"
  },
  {
    id: "m7",
    baslik: "Temiz Kod Yazma Sanatı",
    kategori: "Kod",
    ozet: "Kod karmaşasından kurtulup okunabilirliği artıran temel prensipler.",
    icerik: "Kod bir kez yazılır ama bin kez okunur. SOLID prensipleri, DRY ve KISS yaklaşımları sadece terim değil, her geliştiricinin hayat felsefesi olmalıdır.",
    tarih: "01 May 2024",
    resim: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
    okumaSuresi: "15 dk",
    yazar: "Burak Beji",
    okunma: "5.4K"
  },
  {
    id: "m8",
    baslik: "Full Stack Geliştirici Olmak",
    kategori: "Kod",
    ozet: "2024 yılında bir full stack developer yol haritası.",
    icerik: "Nereden başlamalı ve hangi teknolojilere odaklanmalı? Artık sadece bir dili bilmek yetmiyor, altyapı, deployment ve kullanıcı deneyimi konularında da bilgi sahibi olmak gerekiyor.",
    tarih: "28 Apr 2024",
    resim: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    okumaSuresi: "11 dk",
    yazar: "Burak Beji",
    okunma: "4.8K"
  },
  {
    id: "m9",
    baslik: "Docker ve Microservices",
    kategori: "Kod",
    ozet: "Konteyner teknolojisi ile ölçeklenebilir uygulamalar geliştirmek.",
    icerik: "Docker neden modern yazılımın vazgeçilmezi? Bağımlılık sorunlarını ortadan kaldıran ve environment tutarlılığını sağlayan Docker, mikroservis mimarisinin temel taşıdır.",
    tarih: "25 Apr 2024",
    resim: "https://images.unsplash.com/photo-1605745341112-85968b193ef5?q=80&w=800&auto=format&fit=crop",
    okumaSuresi: "9 dk",
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