# Kayseri Taksi – Tek Sayfalık Site

Astro ile yapılmış, backend'i olmayan statik taksi sitesi. Vercel'de ücretsiz yayınlanır.

## 1. Bilgileri değiştirme (tek dosya)

Tüm firma bilgileri **`src/config.ts`** dosyasında:

| Alan | Ne işe yarar |
|---|---|
| `brand` | Firma adı (logo, başlıklar) |
| `phoneDisplay` | Sitede görünen telefon (`0532 123 45 67`) |
| `phoneTel` | Arama linki, `+90` ile ve boşluksuz (`+905321234567`) |
| `whatsapp` | WhatsApp numarası, `+` olmadan (`905321234567`) |
| `whatsappMessage` | WhatsApp'ta hazır gelen mesaj |
| `siteUrl` | Sitenin yayındaki adresi (şu an `https://ktv2-gamma.vercel.app`) |
| `googleSiteVerification` | Search Console doğrulama kodu (bkz. 5. adım) |
| `sameAs` | Google İşletme Profili, Instagram vb. linkler |
| `googleAdsId` / `googleAdsCallLabel` | Google Ads dönüşüm takibi (bkz. 4. adım) |

Hizmetler ve SSS metinleri de aynı dosyada.
Domain alınınca `astro.config.mjs` içindeki `site` değerini de aynı yapın.

## 2. Bilgisayarda çalıştırma

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # yayına hazır dosyalar dist/ klasörüne çıkar
```

> Not: Bu projede Astro 5 kullanılıyor. Astro 7'nin bazı yerel modülleri Windows
> "Akıllı Uygulama Denetimi" tarafından engellendiği için bu bilgisayarda derlenmiyordu.

## 3. Vercel'de yayınlama ve domain bağlama

1. Projeyi GitHub'a yükleyin (yeni bir repo açıp bu klasörü push edin).
2. https://vercel.com → **Add New › Project** → GitHub reposunu seçin → Astro otomatik algılanır → **Deploy**.
3. Domain alındıktan sonra: Vercel proje sayfası → **Settings › Domains** → domaini ekleyin.
4. Vercel'in gösterdiği DNS kayıtlarını domaini aldığınız firmanın paneline girin
   (genellikle `A` kaydı `76.76.21.21` ve `www` için `CNAME` → `cname.vercel-dns.com`).
5. `src/config.ts` → `siteUrl` ve `astro.config.mjs` → `site` değerlerini yeni domain yapın, push edin.

## 4. Google Ads (sonraki aşama)

Sitede reklam gösterilmez; site, Google arama reklamlarının açılış sayfasıdır.
Arama/WhatsApp tıklamalarını dönüşüm olarak saymak için:

1. Google Ads → **Hedefler › Dönüşümler › Yeni dönüşüm işlemi › Web sitesi** → "Telefon aramaları: web sitesindeki numaraya tıklama".
2. Verilen etiketteki `AW-XXXXXXXXX` değerini `googleAdsId`'ye, `send_to` içindeki `/` sonrası kısmı `googleAdsCallLabel`'a yazın.
3. Push edin. Sitedeki tüm "Ara" ve "WhatsApp" butonları otomatik olarak dönüşüm gönderir.

ID boşken sitede hiçbir Google kodu yüklenmez.

## 5. Google'da görünürlük (SEO)

### Hizmet / bölge sayfaları
`src/config.ts` → `landingPages` listesindeki her öğe ayrı bir sayfadır
(ör. `/talas-taksi`, `/kayseri-havalimani-taksi`). Yeni sayfa eklemek için bir öğeyi
kopyalayıp `slug`, `title`, `description`, metinleri ve SSS'yi değiştirin. Sitemap,
alt kısımdaki linkler ve Google'a gönderilen yapısal veri otomatik güncellenir.
Her sayfanın metni **farklı** olmalı; kopya metinler Google'da işe yaramaz.
Fotoğraf eklemek için `src/pages/[slug].astro` içindeki `images` listesine ekleyin.

### Search Console
1. https://search.google.com/search-console → **Mülk ekle › URL ön eki** → `https://ktv2-gamma.vercel.app/`
2. Doğrulama yöntemi: **HTML etiketi**. `content="..."` içindeki kodu `googleSiteVerification`'a yazın, push edin.
3. **Doğrula** → sol menü **Site haritaları** → `sitemap.xml` gönderin.
4. **URL denetimi** ile ana sayfa ve her hizmet sayfası için "Dizine eklenmeyi iste".

### Google İşletme Profili
business.google.com adresinden profil açın (kategori: Taksi servisi, hizmet bölgesi işletmesi,
adres gizli). Profil linkini `sameAs` listesine ekleyin.

### Domain alındığında
1. Vercel → Settings › Domains → domaini ekleyin; `ktv2-gamma.vercel.app` için yeni domaine yönlendirme açın.
2. `src/config.ts` → `siteUrl` ve `astro.config.mjs` → `site` değerlerini yeni domain yapın, push edin.
3. Search Console'a yeni domaini ekleyin, sitemap'i yeniden gönderin. İşletme Profili'ndeki linki güncelleyin.

## Dosya yapısı

```
src/config.ts           tüm bilgiler ve metinler
src/pages/index.astro   ana sayfa (bölümleri sıralar)
src/pages/[slug].astro  hizmet / bölge sayfaları şablonu
src/components/         Header, Hero, Hizmetler, SSS, Footer, KVKK penceresi, mobil arama çubuğu
src/layouts/Base.astro  SEO etiketleri, schema.org verisi, Google Ads kodu
src/scripts/animations.ts  GSAP animasyonları (açılış, kaydırınca beliren öğeler, paralaks, sayaçlar)
src/assets/             fotoğraflar
```

## Fotoğrafları değiştirme

`src/assets/` klasöründeki dosyaları **aynı adla** yenisiyle değiştirmeniz yeterli;
Astro derlerken otomatik olarak küçültüp WebP/AVIF formatına çevirir.

| Dosya | Nerede |
|---|---|
| `hero-mobil.jpg` | Telefonda açılış arka planı (dikey fotoğraf olmalı) |
| `hero-masaustu.jpg` | Bilgisayarda açılış arka planı (yatay fotoğraf) |
| `erciyes-yol.jpg` | "Neden Biz" ve en alttaki çağrı bölümü |

Şu anki fotoğraflar Unsplash'ten (ticari kullanım serbest). Değiştirirseniz
`src/components/Footer.astro` içindeki "Fotoğraflar:" satırını da güncelleyin.
