// ============================================================
//  SİTE AYARLARI — Sitedeki tüm bilgiler buradan değiştirilir.
// ============================================================

export const site = {
  // Firma bilgileri
  brand: 'Kayseri Park Taksi', // Logoda ve metinlerde görünen ad
  brandShort: 'K', // Logo kutusundaki harf
  city: 'Kayseri',

  // Telefon: görünen format ve arama formatı (başında +90, boşluksuz)
  phoneDisplay: '0540 392 83 93',
  phoneTel: '+905403928393',

  // WhatsApp: ülke koduyla, + ve boşluk olmadan
  whatsapp: '905403928393',
  whatsappMessage: 'Merhaba, taksi çağırmak istiyorum. Konumumu gönderiyorum.',

  // Sitenin yayındaki adresi. Domain alındığında güncelleyin
  // (astro.config.mjs içindeki "site" ile aynı olmalı, sonunda / olmadan)
  siteUrl: 'https://ktv2-gamma.vercel.app',

  // Hizmet verilen ilçeler (Google'a gönderilen işletme bilgisinde kullanılır)
  areas: ['Melikgazi', 'Kocasinan', 'Talas'],

  // Google Search Console doğrulama kodu (HTML etiketi yöntemi).
  // <meta name="google-site-verification" content="BURADAKİ_KOD"> içindeki kodu yazın.
  googleSiteVerification: '',

  // Google İşletme Profili, Instagram, Facebook vb. sayfa linkleri
  // Örnek: ['https://maps.app.goo.gl/xxxx', 'https://www.instagram.com/xxxx']
  sameAs: [] as string[],

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

// href: kartın "Detaylı bilgi" linki (aşağıdaki landingPages sayfalarından biri)
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
    href: '/kayseri-havalimani-taksi',
  },
  {
    icon: 'bus' as const,
    title: 'Otogar Transferi',
    text: 'Kayseri Otogarı’na bavullarınızla rahatça ulaşın, otobüsünüzü kaçırmayın.',
    href: '/kayseri-otogar-taksi',
  },
  {
    icon: 'hospital' as const,
    title: 'Hastane Ulaşımı',
    text: 'Şehir Hastanesi ve diğer sağlık kuruluşlarına güvenli, sakin ve hızlı ulaşım.',
    href: '/kayseri-sehir-hastanesi-taksi',
  },
  {
    icon: 'city' as const,
    title: 'Şehir İçi Taksi',
    text: 'Melikgazi, Kocasinan, Talas ve tüm merkez mahallelerde kısa sürede yanınızda.',
    href: '/melikgazi-taksi',
  },
  {
    icon: 'pin' as const,
    title: 'Şehirler Arası Taksi',
    text: 'Kayseri çıkışlı tüm il ve ilçelere özel araçla konforlu yolculuk.',
    href: '/kayseri-sehirler-arasi-taksi',
  },
];

export const features = [
  { title: '7 Gün 24 Saat', text: 'Bayram, tatil, gece demeden hizmetteyiz.' },
  { title: 'Hızlı Ulaşım', text: 'Aradığınızda hemen yola çıkar, kısa sürede yanınızda oluruz.' },
  { title: 'Temiz Araç', text: 'Bakımlı, temiz ve klimalı araçla konforlu yolculuk.' },
  { title: 'Tüm Türkiye', text: 'Kayseri içinde ve Kayseri çıkışlı her şehre gideriz.' },
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

// ============================================================
//  HİZMET / BÖLGE SAYFALARI
//  Her öğe sitede ayrı bir sayfa olur: ktv2-gamma.vercel.app/<slug>
//  Google'da "Kayseri havalimanı taksi", "Talas taksi" gibi aramalarda
//  çıkmak için her sayfanın başlığı ve metni farklı olmalıdır.
//  image: src/pages/[slug].astro içindeki fotoğraf listesindeki ad
//  menu: sitenin alt kısmındaki linklerde görünen kısa ad
// ============================================================

export const landingPages = [
  {
    slug: 'kayseri-havalimani-taksi',
    menu: 'Havalimanı Taksi',
    image: 'havalimani',
    imageAlt: 'Kayseri Erkilet Havalimanı terminali',
    title: 'Kayseri Havalimanı Taksi | Erkilet 7/24 Transfer',
    description:
      'Kayseri Erkilet Havalimanı taksi ve transfer hizmeti. Uçuş saatinize göre 7/24 karşılama; şehir merkezi, Talas ve Erciyes’e hızlı ulaşım. Hemen arayın.',
    eyebrow: 'Erkilet Havalimanı',
    h1: 'Kayseri Havalimanı Taksi',
    intro: 'Erkilet Havalimanı’na gidiş ve dönüşte, uçuş saatinize göre planlanmış zamanında taksi.',
    sections: [
      {
        h: 'Uçuşunuza göre planlanan transfer',
        p: 'Havalimanına gitmek için bizi önceden arayıp uçuş saatinizi söylemeniz yeterli. Trafiği ve check-in süresini hesaba katarak sizi uygun saatte kapınızdan alır, terminal girişine bırakırız. Erken sabah ve gece yarısı uçuşları dahil, günün her saatinde hizmetteyiz.',
      },
      {
        h: 'Havalimanından şehre dönüş',
        p: 'Kayseri’ye indiğinizde taksi beklemek istemiyorsanız inişten önce WhatsApp’tan uçuş bilginizi gönderin. Aracımız sizi terminal çıkışında karşılar; bavullarınızla birlikte Melikgazi, Kocasinan, Talas ya da ilçelerdeki adresinize götürür.',
      },
      {
        h: 'Erciyes ve Kapadokya bağlantısı',
        p: 'Kayak için gelen misafirlerimizi havalimanından doğrudan Erciyes Kayak Merkezi’ne, Kapadokya’ya gidecekleri ise Ürgüp, Göreme ve Nevşehir’e özel araçla götürüyoruz. Ücret bilgisini yola çıkmadan önce telefonda öğrenebilirsiniz.',
      },
    ],
    faqs: [
      {
        q: 'Havalimanında beni karşılayabilir misiniz?',
        a: 'Evet. Uçuş numaranızı ve iniş saatinizi WhatsApp’tan iletirseniz aracımız sizi terminal çıkışında bekler. Rötar olursa bize haber vermeniz yeterli; saati buna göre ayarlarız.',
      },
      {
        q: 'Havalimanı taksi ücreti ne kadar?',
        a: 'Ücret gideceğiniz adrese göre değişir. Bizi arayarak ya da WhatsApp’tan yazarak yola çıkmadan önce ücret bilgisi alabilirsiniz.',
      },
      {
        q: 'Gece uçuşları için taksi bulabilir miyim?',
        a: 'Evet, 7/24 çalışıyoruz. Gece yarısı ya da sabahın erken saatlerindeki uçuşlar için önceden aramanız yeterli.',
      },
    ],
  },
  {
    slug: 'kayseri-otogar-taksi',
    menu: 'Otogar Taksi',
    image: 'otogar',
    imageAlt: 'Kayseri Otogarı',
    title: 'Kayseri Otogar Taksi | 7/24 Otogar Transferi',
    description:
      'Kayseri Otogarı’na gidiş ve otogardan dönüş için 7/24 taksi. Bavullarınızla rahat yolculuk, otobüs saatinize göre zamanında alım. Hemen arayın.',
    eyebrow: 'Kayseri Otogarı',
    h1: 'Kayseri Otogar Taksi',
    intro: 'Otobüsünüzü kaçırmadan otogara, yorulmadan evinize.',
    sections: [
      {
        h: 'Otobüs saatinize göre alım',
        p: 'Bilet saatinizi söyleyin, sizi perona rahatça yetişecek şekilde kapınızdan alalım. Sabahın ilk seferleri ve gece kalkan otobüsler için de önceden arayıp aracınızı ayırtabilirsiniz.',
      },
      {
        h: 'Otogardan şehre',
        p: 'Uzun bir yolculuktan sonra otogardan çıktığınızda aramanız yeterli; en yakın aracımızı yönlendirir, sizi Kayseri’nin her mahallesine götürürüz. Bavul, koli ya da bebek arabasını bagaja yerleştirmenize yardımcı oluruz.',
      },
      {
        h: 'Öğrenciler ve misafirler için',
        p: 'Erciyes Üniversitesi’ne gelen öğrenciler, bayramda memleketine dönenler ve Kayseri’ye ilk kez gelen misafirler için otogar ile yurt, otel ya da ev arasında güvenli ulaşım sağlıyoruz.',
      },
    ],
    faqs: [
      {
        q: 'Otogara ne kadar önceden taksi çağırmalıyım?',
        a: 'Yoğun saatlerde otobüsünüzün kalkışından en az 30–45 dakika önce yola çıkmanızı öneririz. Aracınızı önceden ayırtmak için bizi arayabilirsiniz.',
      },
      {
        q: 'Çok bavulum var, sorun olur mu?',
        a: 'Hayır. Bavullarınızı bagaja yerleştirmenize yardımcı oluruz. Çok fazla eşyanız varsa aradığınızda belirtmeniz yeterli.',
      },
    ],
  },
  {
    slug: 'kayseri-sehir-hastanesi-taksi',
    menu: 'Şehir Hastanesi Taksi',
    image: 'hastane',
    imageAlt: 'Kayseri Şehir Hastanesi',
    title: 'Kayseri Şehir Hastanesi Taksi | 7/24 Hastane Ulaşımı',
    description:
      'Kayseri Şehir Hastanesi ve diğer hastanelere 7/24 taksi. Randevunuza zamanında; hasta ve yaşlı yakınlarınız için sakin, güvenli ulaşım. Hemen arayın.',
    eyebrow: 'Hastane ulaşımı',
    h1: 'Kayseri Şehir Hastanesi Taksi',
    intro: 'Randevunuza zamanında, işiniz bitince kapınıza kadar.',
    sections: [
      {
        h: 'Randevu saatinize göre',
        p: 'Şehir Hastanesi’ndeki randevunuz için bizi önceden arayın; saatinizi kaçırmayacak şekilde sizi adresinizden alırız. Tahlil, kontrol ya da tedavi dönüşünde de bir telefonla hastane girişine geliriz.',
      },
      {
        h: 'Yaşlı ve hasta yakınlarınız için',
        p: 'Araca binip inmekte zorlanan yakınlarınız için acele etmeden, sakin bir yolculuk sunarız. Katlanır tekerlekli sandalye ya da yürüteç gibi eşyaları bagaja yerleştirmenize yardımcı oluruz.',
      },
      {
        h: 'Tüm sağlık kuruluşları',
        p: 'Şehir Hastanesi’nin yanı sıra Erciyes Üniversitesi hastaneleri, özel hastaneler, aile sağlığı merkezleri ve nöbetçi eczanelere de 7/24 ulaşım sağlıyoruz.',
      },
    ],
    faqs: [
      {
        q: 'Gece hastaneye gitmem gerekirse taksi bulabilir miyim?',
        a: 'Evet. 7/24 hizmet veriyoruz; gecenin her saatinde arayabilirsiniz. Hayati tehlike içeren acil durumlarda ise lütfen önce 112’yi arayın.',
      },
      {
        q: 'Hastaneden dönüşte beni alabilir misiniz?',
        a: 'Evet. İşiniz bittiğinde arayın ya da WhatsApp’tan konum gönderin; hastanenin hangi girişinde olduğunuzu belirtmeniz yeterli.',
      },
    ],
  },
  {
    slug: 'kayseri-sehirler-arasi-taksi',
    menu: 'Şehirler Arası Taksi',
    image: 'sehirlerarasi',
    imageAlt: 'Gece yolda giden taksi',
    title: 'Kayseri Şehirler Arası Taksi | Özel Araçla Yolculuk',
    description:
      'Kayseri çıkışlı şehirler arası taksi. Kapadokya, Nevşehir, Ankara, Sivas, Niğde ve tüm illere özel araçla konforlu yolculuk. Ücret için hemen arayın.',
    eyebrow: 'Kayseri çıkışlı',
    h1: 'Kayseri Şehirler Arası Taksi',
    intro: 'Otobüs saatine bağlı kalmadan, istediğiniz saatte kapıdan kapıya.',
    sections: [
      {
        h: 'Kapıdan kapıya yolculuk',
        p: 'Şehirler arası taksiyle aktarma yapmadan, bavul taşımadan ve otobüs saatini beklemeden doğrudan gideceğiniz adrese ulaşırsınız. Aile, grup ya da acil yolculuklar için en pratik çözümdür.',
      },
      {
        h: 'Sık gidilen güzergâhlar',
        p: 'Kapadokya (Ürgüp, Göreme, Nevşehir), Niğde, Sivas, Yozgat, Kahramanmaraş, Adana ve Ankara en çok yolculuk yapılan yerler arasında. Develi, Bünyan, İncesu, Yahyalı, Pınarbaşı ve Kayseri’nin diğer ilçelerine de gidiyoruz.',
      },
      {
        h: 'Ücret yola çıkmadan belli',
        p: 'Şehirler arası yolculuklarda ücret bilgisini yola çıkmadan önce öğrenirsiniz; yolda sürprizle karşılaşmazsınız. Bilgi almak için arayın ya da WhatsApp’tan varış noktanızı yazın.',
      },
    ],
    faqs: [
      {
        q: 'Kayseri’den Kapadokya’ya taksi var mı?',
        a: 'Evet. Ürgüp, Göreme, Uçhisar ve Nevşehir merkezine özel araçla götürüyoruz. Havalimanından doğrudan Kapadokya’ya transfer de yapıyoruz.',
      },
      {
        q: 'Şehirler arası taksi ücreti nasıl belirleniyor?',
        a: 'Ücret gidilecek yere ve mesafeye göre belirlenir. Yola çıkmadan önce arayarak ya da WhatsApp’tan yazarak ücret bilgisi alabilirsiniz.',
      },
    ],
  },
  {
    slug: 'erciyes-kayak-merkezi-taksi',
    menu: 'Erciyes Taksi',
    image: 'erciyes',
    imageAlt: 'Erciyes Dağı’na giden yol',
    title: 'Erciyes Kayak Merkezi Taksi | Kayseri 7/24',
    description:
      'Kayseri’den Erciyes Kayak Merkezi’ne taksi. Havalimanı, otogar veya otelinizden Tekir ve Hisarcık kapılarına kayak ekipmanınızla rahat ulaşım.',
    eyebrow: 'Erciyes Kayak Merkezi',
    h1: 'Erciyes Kayak Merkezi Taksi',
    intro: 'Kayak ekipmanınızla birlikte, şehirden piste tek araçla.',
    sections: [
      {
        h: 'Şehirden piste',
        p: 'Kayseri merkezindeki otelinizden, havalimanından ya da otogardan sizi alıp Erciyes Kayak Merkezi’nin Tekir, Hisarcık, Develi veya Hacılar kapısına götürürüz. Akşam pistten dönüş için de aramanız yeterli.',
      },
      {
        h: 'Kış yoluna hazır',
        p: 'Kış aylarında kış lastikli araçlarla, Erciyes yolunu iyi bilen şoförlerle hizmet veriyoruz. Kar yağışlı günlerde yol durumunu takip eder, sizi güvenle ulaştırırız.',
      },
      {
        h: 'Kayak ekipmanı ve gruplar',
        p: 'Kayak, snowboard ve botlarınız için yer ayırırız. Grup hâlinde geliyorsanız aradığınızda kişi ve ekipman sayısını belirtin, ona göre planlayalım.',
      },
    ],
    faqs: [
      {
        q: 'Havalimanından doğrudan Erciyes’e gidebilir miyim?',
        a: 'Evet. Uçuş saatinizi bildirirseniz sizi Erkilet Havalimanı’ndan alıp doğrudan otelinize ya da kayak merkezine götürürüz.',
      },
      {
        q: 'Pistten dönüş için nasıl taksi çağırırım?',
        a: 'Bizi arayın ya da WhatsApp’tan konumunuzu gönderin; hangi kapıda olduğunuzu belirtmeniz yeterli.',
      },
    ],
  },
  {
    slug: 'talas-taksi',
    menu: 'Talas Taksi',
    image: 'talas',
    imageAlt: 'Talas’ta tarihi taş sokak ve cami',
    title: 'Talas Taksi | Kayseri Talas 7/24 Taksi Çağır',
    description:
      'Talas’ta 7/24 taksi. Erciyes Üniversitesi, Talas merkez ve tüm mahallelere hızlı taksi; havalimanı, otogar ve hastane transferi. Hemen arayın.',
    eyebrow: 'Talas',
    h1: 'Talas Taksi',
    intro: 'Talas’ın her mahallesinde, gece gündüz bir telefon uzağınızdayız.',
    sections: [
      {
        h: 'Talas’ın her yerine',
        p: 'Talas merkezden Erciyes Üniversitesi çevresine, yeni yerleşim bölgelerinden eski Talas’ın tarihi sokaklarına kadar ilçenin tamamında hizmet veriyoruz. Aradığınızda bulunduğunuz yere en kısa sürede ulaşırız.',
      },
      {
        h: 'Öğrenciler için pratik ulaşım',
        p: 'Gece geç saatte yurda ya da eve dönüşte, sınav sabahı kampüse yetişmek ya da bavullarla otogara gitmek için güvenle bizi arayabilirsiniz.',
      },
      {
        h: 'Talas’tan her yöne',
        p: 'Talas’tan şehir merkezine, Şehir Hastanesi’ne, Erkilet Havalimanı’na, otogara ve Erciyes Kayak Merkezi’ne transfer yapıyoruz.',
      },
    ],
    faqs: [
      {
        q: 'Talas’ta gece taksi bulabilir miyim?',
        a: 'Evet. 7/24 hizmet veriyoruz; gece geç saatlerde de arayabilir ya da WhatsApp’tan konum gönderebilirsiniz.',
      },
      {
        q: 'Erciyes Üniversitesi’ne geliyor musunuz?',
        a: 'Evet. Kampüs çevresindeki fakülte, yurt ve hastanelere ulaşım sağlıyoruz. Konumunuzu göndermeniz yeterli.',
      },
    ],
  },
  {
    slug: 'melikgazi-taksi',
    menu: 'Melikgazi Taksi',
    image: 'melikgazi',
    imageAlt: 'Kayseri Cumhuriyet Meydanı ve Saat Kulesi',
    title: 'Melikgazi Taksi | Kayseri Merkez 7/24 Taksi',
    description:
      'Melikgazi ve Kayseri merkezde 7/24 taksi. Cumhuriyet Meydanı, çarşı ve tüm mahallelere hızlı ulaşım; havalimanı, otogar ve hastane transferi.',
    eyebrow: 'Melikgazi · Merkez',
    h1: 'Melikgazi Taksi',
    intro: 'Kayseri’nin merkezinde, dakikalar içinde kapınızda.',
    sections: [
      {
        h: 'Şehrin kalbinde',
        p: 'Cumhuriyet Meydanı, Saat Kulesi, Kapalı Çarşı ve Kayseri Kalesi çevresi başta olmak üzere Melikgazi’nin tüm mahallelerinde hizmet veriyoruz. Alışverişten dönüşte ya da bir toplantıya yetişmek için bir telefon yeterli.',
      },
      {
        h: 'Gece de hizmetteyiz',
        p: 'Akşam yemeğinden, düğünden ya da iş çıkışı geç saatte eve dönerken toplu taşımayı beklemenize gerek yok. Günün her saatinde aradığınızda yola çıkarız.',
      },
      {
        h: 'Merkezden her yöne',
        p: 'Melikgazi’den Erkilet Havalimanı’na, otogara, Şehir Hastanesi’ne, Talas’a ve Erciyes’e transfer yapıyoruz; şehirler arası yolculuklarınız için de kapınızdan alıyoruz.',
      },
    ],
    faqs: [
      {
        q: 'Melikgazi’de taksi ne kadar sürede gelir?',
        a: 'Bulunduğunuz mahalleye ve trafiğe göre değişir. Aradığınızda en yakın aracımızı yönlendirir ve tahmini varış süresini söyleriz.',
      },
      {
        q: 'WhatsApp’tan konum göndererek taksi çağırabilir miyim?',
        a: 'Evet. WhatsApp butonuna dokunup konumunuzu paylaşmanız yeterli; bulunduğunuz yere geliriz.',
      },
    ],
  },
  {
    slug: 'kocasinan-taksi',
    menu: 'Kocasinan Taksi',
    image: 'kocasinan',
    imageAlt: 'Gece park hâlindeki taksi',
    title: 'Kocasinan Taksi | Kayseri Kocasinan 7/24 Taksi',
    description:
      'Kocasinan’da 7/24 taksi. Erkilet ve tüm mahallelere hızlı ulaşım; havalimanı, otogar, hastane ve şehirler arası transfer için hemen arayın.',
    eyebrow: 'Kocasinan',
    h1: 'Kocasinan Taksi',
    intro: 'Kocasinan’ın dört bir yanında 7/24 hızlı ve güvenilir taksi.',
    sections: [
      {
        h: 'Tüm mahallelerde',
        p: 'Kocasinan’ın merkeze yakın mahallelerinden Erkilet’e kadar ilçenin genelinde hizmet veriyoruz. Adresinizi söyleyin ya da WhatsApp’tan konumunuzu gönderin, en yakın aracımızı yönlendirelim.',
      },
      {
        h: 'Havalimanına yakın',
        p: 'Erkilet Havalimanı Kocasinan sınırları içinde olduğundan havalimanı transferlerinde hızlı ulaşım sağlıyoruz. Erken sabah uçuşları için aracınızı önceden ayırtabilirsiniz.',
      },
      {
        h: 'İş ve günlük ulaşım',
        p: 'İşe gidiş-dönüş, okul, alışveriş ve hastane ziyaretleri gibi günlük ulaşım ihtiyaçlarınız için 7/24 bir telefon uzağınızdayız.',
      },
    ],
    faqs: [
      {
        q: 'Kocasinan’da gece taksi çağırabilir miyim?',
        a: 'Evet, 7/24 hizmetteyiz. Gecenin her saatinde arayabilir ya da WhatsApp’tan konum gönderebilirsiniz.',
      },
      {
        q: 'Erkilet’ten şehir merkezine taksi var mı?',
        a: 'Evet. Erkilet ve çevresinden şehir merkezine, Talas’a ve diğer ilçelere ulaşım sağlıyoruz.',
      },
    ],
  },
];

export type LandingPage = (typeof landingPages)[number];
