export interface Makale {
  id: string;
  baslik: string;
  kategori: 'Teknoloji' | 'Yazılım' | 'Yaşam';
  ozet: string;
  icerik: string;
  tarih: string;
  resim: string;
  okumaSuresi: string;
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
export const siteAyarlari = {
  baslik: "Lumina",
  slogan: "GELECEĞİ KODLA, FİKİRLERİ PAYLAŞ",
  hakkimda: "Lumina, modern web teknolojileri ve minimalist tasarım anlayışını birleştiren bir dijital platformdur.",
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
    icerik: "React 19, geliştirici deneyimini kökten değiştirecek yeniliklerle geliyor. En dikkat çekici özellik olan React Compiler (Forget), artık memoization işlemlerini otomatik hale getiriyor. Ayrıca Actions API'si ile form yönetimi ve veri mutasyonları çok daha kolay bir hal alıyor. UseTransition ve UseOptimistic gibi hooklar ile kullanıcı arayüzü etkileşimleri daha akıcı hale geliyor.",
    tarih: "14 May 2024",
    resim: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    okumaSuresi: "8 dk"
  },
  {
    id: "m2",
    baslik: "Minimalist Çalışma Alanı Tasarımı",
    kategori: "Yaşam",
    ozet: "Üretkenliği artıran, karmaşadan uzak bir çalışma ortamı hazırlamanın püf noktaları.",
    icerik: "Minimalizm sadece bir dekorasyon stili değil, aynı zamanda bir zihin durumudur. Çalışma masanızdaki fazlalıklardan kurtulmak, odaklanma sürenizi %40 oranında artırabilir. Doğal ışık kullanımı, kablo yönetimi ve sadece ihtiyacınız olan araçları masada tutmak, yaratıcılığınızı tetikleyen ana unsurlardır.",
    tarih: "10 May 2024",
    resim: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop",
    okumaSuresi: "5 dk"
  },
  {
    id: "m3",
    baslik: "TypeScript'te Advanced Types",
    kategori: "Yazılım",
    ozet: "Mapped types, conditional types ve infer anahtar kelimesi ile tip güvenliğini en üst düzeye çıkarın.",
    icerik: "TypeScript dünyasında derinleşmek istiyorsanız Mapped Types ve Conditional Types konularına hakim olmalısınız. 'infer' anahtar kelimesi ile karmaşık generic yapıların içinden tipleri çekip çıkarabilir, projelerinizde hata payını sıfıra indirebilirsiniz. Bu makalede utility types'ın arkasındaki mantığı derinlemesine inceliyoruz.",
    tarih: "08 May 2024",
    resim: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800&auto=format&fit=crop",
    okumaSuresi: "12 dk"
  },
  {
    id: "m4",
    baslik: "Yapay Zeka ve Yazılımın Geleceği",
    kategori: "Teknoloji",
    ozet: "AI araçlarının yazılım geliştirme süreçlerine etkisi ve gelecekteki rolü.",
    icerik: "GitHub Copilot ve ChatGPT gibi araçlar artık birer yardımcıdan öte, iş ortağı haline geldi. Kod yazma hızı artarken, asıl değerli olan yetenek 'doğru soruyu sorma' (prompt engineering) yeteneği haline dönüşüyor. Yazılımcıların rolü mimari tasarım ve problem çözmeye doğru evriliyor.",
    tarih: "01 May 2024",
    resim: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    okumaSuresi: "10 dk"
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