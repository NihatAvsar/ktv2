// ============================================================
//  SİTE AYARLARI — Sitedeki tüm bilgiler buradan değiştirilir.
// ============================================================

export const site = {
  // Firma bilgileri
  brand: 'Kayseri Taksi', // Logoda ve metinlerde görünen ad
  brandShort: 'K', // Logo kutusundaki harf
  city: 'Kayseri',

  // Telefon: görünen format ve arama formatı (başında +90, boşluksuz)
  phoneDisplay: '0500 000 00 00',
  phoneTel: '+905000000000',

  // WhatsApp: ülke koduyla, + ve boşluk olmadan
  whatsapp: '905000000000',
  whatsappMessage: 'Merhaba, taksi çağırmak istiyorum. Konumumu gönderiyorum.',

  // Domain alındığında güncelleyin (astro.config.mjs içindeki "site" ile aynı olmalı)
  siteUrl: 'https://www.ornek-domain.com',

  // Google Ads — boş bırakılırsa sitede hiçbir Google kodu yüklenmez.
  // Örnek: googleAdsId: 'AW-123456789', googleAdsCallLabel: 'AbCdEfGhIj'
  googleAdsId: '',
  googleAdsCallLabel: '',

  // SEO
  title: 'Kayseri Taksi | 7/24 Taksi Çağır | Hızlı ve Güvenilir',
  description:
    'Kayseri’de 7/24 taksi hizmeti. Havalimanı, otogar, hastane ve şehirler arası ulaşım için hemen arayın, dakikalar içinde kapınızdayız.',
};

export const telHref = `tel:${site.phoneTel}`;
export const waHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.city)}`;

export const services = [
  {
    icon: 'clock' as const,
    title: '7/24 Kayseri Taksi',
    text: 'Gece yarısı ya da sabahın erken saatleri fark etmez; günün her saati bir telefon uzağınızdayız.',
  },
  {
    icon: 'plane' as const,
    title: 'Havalimanı Transferi',
    text: 'Erkilet Havalimanı’na gidiş ve dönüşte uçuş saatinize göre planlı, zamanında transfer.',
  },
  {
    icon: 'bus' as const,
    title: 'Otogar Transferi',
    text: 'Kayseri Otogarı’na bavullarınızla rahatça ulaşın, otobüsünüzü kaçırmayın.',
  },
  {
    icon: 'hospital' as const,
    title: 'Hastane Ulaşımı',
    text: 'Şehir Hastanesi ve diğer sağlık kuruluşlarına güvenli, sakin ve hızlı ulaşım.',
  },
  {
    icon: 'city' as const,
    title: 'Şehir İçi Taksi',
    text: 'Melikgazi, Kocasinan, Talas ve tüm merkez mahallelerde kısa sürede yanınızda.',
  },
  {
    icon: 'pin' as const,
    title: 'Şehirler Arası Taksi',
    text: 'Kayseri çıkışlı tüm il ve ilçelere özel araçla konforlu yolculuk.',
  },
];

export const features = [
  { title: '7 Gün 24 Saat', text: 'Bayram, tatil, gece demeden hizmetteyiz.' },
  { title: 'Hızlı Ulaşım', text: 'Aradığınızda hemen yola çıkar, kısa sürede yanınızda oluruz.' },
  { title: 'Temiz Araç', text: 'Bakımlı, temiz ve klimalı araçla konforlu yolculuk.' },
  { title: 'Tüm Kayseri', text: 'Merkezden ilçelere kadar her yere gideriz.' },
];


export const faqs = [
  {
    q: 'Kayseri’de 7/24 taksi hizmetiniz var mı?',
    a: 'Evet. Haftanın 7 günü, günün 24 saati hizmet veriyoruz. Gece geç saatlerde de arayabilirsiniz.',
  },
  {
    q: 'Taksiyi nasıl çağırabilirim?',
    a: `Sayfadaki “Hemen Taksi Çağır” butonuna dokunarak ${site.phoneDisplay} numarasını arayabilir ya da WhatsApp’tan konumunuzu gönderebilirsiniz.`,
  },
  {
    q: 'Kayseri Erkilet Havalimanı’na hizmetiniz var mı?',
    a: 'Evet. Havalimanına gidiş ve havalimanından şehir merkezine dönüş için transfer yapıyoruz. Uçuş saatinizi önceden bildirirseniz aracınızı planlarız.',
  },
  {
    q: 'Şehirler arası yolculuk yapıyor musunuz?',
    a: 'Evet. Kayseri çıkışlı olarak farklı şehir ve ilçelere özel taksi hizmeti veriyoruz. Ücret bilgisi için bizi arayabilirsiniz.',
  },
  {
    q: 'WhatsApp üzerinden taksi çağırabilir miyim?',
    a: 'Evet. WhatsApp butonuna dokunup konumunuzu paylaşmanız yeterli; bulunduğunuz yere hemen geliriz.',
  },
];
