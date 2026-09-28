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
| `siteUrl` | Alınan domain (`https://www.alanadiniz.com`) |
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

Ayrıca Google Search Console'a domaini ekleyip `https://alanadiniz.com/sitemap.xml` adresini gönderin.

## Dosya yapısı

```
src/config.ts           tüm bilgiler ve metinler
src/pages/index.astro   sayfa (bölümleri sıralar)
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
