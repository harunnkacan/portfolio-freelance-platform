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
  },
  {
    id: "m4",
    baslik: "Yapay Zeka ve Yazılımın Geleceği",
    kategori: "Teknoloji",
    ozet: "AI araçlarının yazılım geliştirme süreçlerine etkisi ve gelecekteki rolü.",
    icerik: "GitHub Copilot ve ChatGPT gibi araçlar artık birer yardımcıdan öte, iş ortağı haline geldi...",
    tarih: "01 May 2024",
    resim: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    okumaSuresi: "10 dk"
  },
  {
    id: "m5",
    baslik: "Modern CSS Teknikleri 2024",
    kategori: "Yazılım",
    ozet: "Container Queries, Scope ve Layers gibi yeni CSS özelliklerini projelerinize dahil edin.",
    icerik: "CSS dünyası son yıllarda inanılmaz bir değişim içerisinde...",
    tarih: "28 Nis 2024",
    resim: "https://images.unsplash.com/photo-1523437113738-bbd3ee0e2e73?q=80&w=800&auto=format&fit=crop",
    okumaSuresi: "6 dk"
  },
  {
    id: "m6",
    baslik: "Docker ile Containerize Uygulamalar",
    kategori: "Sunucu",
    ozet: "Uygulamalarınızı Docker kullanarak nasıl izole edeceğinizi ve dağıtacağınızı öğrenin.",
    icerik: "Docker, geliştirme süreçlerini standartlaştırmak için vazgeçilmez bir araçtır...",
    tarih: "22 Nis 2024",
    resim: "https://images.unsplash.com/photo-1605745341112-85968b193ef5?q=80&w=800&auto=format&fit=crop",
    okumaSuresi: "15 dk",
    githubRepo: "docker/cli"
  },
  {
    id: "m7",
    baslik: "Zustand vs Redux: Hangisi?",
    kategori: "Yazılım",
    ozet: "Modern React uygulamalarında state yönetimi için doğru aracı seçmek.",
    icerik: "State yönetimi her zaman React geliştiricilerinin en büyük tartışma konularından biri olmuştur...",
    tarih: "15 Nis 2024",
    resim: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    okumaSuresi: "7 dk"
  },
  {
    id: "m8",
    baslik: "SEO Uyumlu Web Tasarımı",
    kategori: "SEO",
    ozet: "Arama motoru sonuçlarında üst sıralara çıkmak için tasarımda nelere dikkat edilmeli?",
    icerik: "SEO sadece kelimelerden ibaret değildir, teknik altyapı da çok önemlidir...",
    tarih: "10 Nis 2024",
    resim: "https://images.unsplash.com/photo-1572177222102-78613f74cc13?q=80&w=800&auto=format&fit=crop",
    okumaSuresi: "9 dk"
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
    ad: "React Admin Dashboard",
    fiyat: "850 ₺",
    resim: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800&auto=format&fit=crop",
    kategori: "Yazılım",
    stokDurumu: "Anında Teslimat",
    aciklama: "Kurumsal projeleriniz için hızlıca özelleştirilebilir yönetim paneli şablonu.",
    ozellikler: ["Zustand State Yönetimi", "Responsive Tasarım", "Chart.js Entegrasyonu", "Full TypeScript"]
  }
];