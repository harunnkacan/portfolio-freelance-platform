export interface Makale {
  id: string;
  baslik: string;
  kategori: 'Teknoloji' | 'Yazılım' | 'Yaşam';
  ozet: string;
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
}
export const siteAyarlari = {
  baslik: "Lumina",
  slogan: "GELECEĞİ KODLA, FİKİRLERİ PAYLAŞ",
  hakkimda: "Lumina, modern web teknolojileri ve minimalist tasarım anlayışını birleştiren bir dijital platformdur.",
  email: "iletisim@lumina.blog",
  sosyalMedya: [
    { ad: "Twitter", link: "#" },
    { ad: "GitHub", link: "#" },
    { ad: "LinkedIn", link: "#" }
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
    tarih: "14 May 2024",
    resim: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    okumaSuresi: "8 dk"
  },
  {
    id: "m2",
    baslik: "Minimalist Çalışma Alanı Tasarımı",
    kategori: "Yaşam",
    ozet: "Üretkenliği artıran, karmaşadan uzak bir çalışma ortamı hazırlamanın püf noktaları.",
    tarih: "10 May 2024",
    resim: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop",
    okumaSuresi: "5 dk"
  },
  {
    id: "m3",
    baslik: "TypeScript'te Advanced Types",
    kategori: "Yazılım",
    ozet: "Mapped types, conditional types ve infer anahtar kelimesi ile tip güvenliğini en üst düzeye çıkarın.",
    tarih: "08 May 2024",
    resim: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800&auto=format&fit=crop",
    okumaSuresi: "12 dk"
  }
];
export const urunler: Urun[] = [
  {
    id: "u1",
    ad: "Cyber Red UI Kit",
    fiyat: "499 ₺",
    resim: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    kategori: "Tasarım",
    stokDurumu: "Anında Teslimat"
  },
  {
    id: "u2",
    ad: "React Admin Dashboard",
    fiyat: "850 ₺",
    resim: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800&auto=format&fit=crop",
    kategori: "Yazılım",
    stokDurumu: "Anında Teslimat"
  }
];