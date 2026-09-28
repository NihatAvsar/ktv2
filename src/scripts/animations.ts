// Sayfa animasyonları (GSAP + ScrollTrigger).
// Kural: İçerik CSS ile gizlenmez; gizleme/gösterme yalnızca burada yapılır.
// Böylece bu dosya yüklenmezse site yine eksiksiz görünür.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;
const mm = gsap.matchMedia();

// Üst üste duran slaytlar arasında yumuşak geçiş. Kutu ekrandayken döner, çıkınca durur.
// zoom > 0 ise gelen fotoğraf o oranda yakından başlayıp yavaşça uzaklaşır.
function crossfade(boxSel: string, slideSel: string, { hold, fade, zoom = 0 }: { hold: number; fade: number; zoom?: number }) {
  const box = document.querySelector<HTMLElement>(boxSel);
  if (!box) return;
  const slides = gsap.utils.toArray<HTMLElement>(slideSel, box);
  if (slides.length < 2) return;

  let current = 0;
  let timer: gsap.core.Tween | null = null;
  const next = () => {
    const prev = slides[current];
    current = (current + 1) % slides.length;
    const el = slides[current];
    gsap.set(slides, { zIndex: 0 });
    gsap.set(prev, { zIndex: 1 });
    gsap.set(el, { zIndex: 2 });
    gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: fade, ease: 'power1.inOut', onComplete: () => gsap.set(prev, { opacity: 0 }) });
    if (zoom) gsap.fromTo(el.querySelector('img'), { scale: 1 + zoom }, { scale: 1, duration: hold + fade, ease: 'none' });
    timer = gsap.delayedCall(hold, next);
  };
  const start = () => (timer ??= gsap.delayedCall(hold, next));
  const stop = () => {
    timer?.kill();
    timer = null;
  };

  const st = ScrollTrigger.create({
    trigger: box,
    start: 'top bottom',
    end: 'bottom top',
    onToggle: (self) => (self.isActive ? start() : stop()),
  });
  if (st.isActive) start();
}

mm.add('(prefers-reduced-motion: no-preference)', () => {
  // Açılış ekranı yalnızca ana sayfada var (hizmet sayfalarında atlanır)
  if (document.querySelector('.hero')) {
    // --- Açılış: fotoğraf yakından uzaklaşır, 7/24 aşağıdan yükselir, diğerleri sırayla belirir
    const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
    intro
      .fromTo('.hero .hero-slide:first-child img', { scale: 1.15 }, { scale: 1, duration: 1.8, ease: 'power2.out' }, 0)
      .fromTo('.hero .big-char', { y: 0, yPercent: 110 }, { yPercent: 0, duration: 0.9, stagger: 0.07 }, 0.1)
      .fromTo('.hero [data-hero]', { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 }, 0.45);

    // --- Açılış ekranı: kaydırdıkça fotoğraf yavaş kayar, yazılar hafifçe solar
    gsap.to('.hero .photo-bg', {
      yPercent: 18,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
    });
    gsap.to('.hero-content', {
      yPercent: -8,
      opacity: 0.15,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
    });
  }

  // Head'deki ön-gizleme sınıfını kaldır (başlangıç değerleri artık GSAP'te)
  root.classList.remove('anim-pending');

  // --- Açılışta Saat Kulesi/Erciyes, "Neden biz?"de konumlar, en altta taksi fotoğrafları döner
  crossfade('.hero .photo-bg', '.hero-slide', { hold: 6, fade: 1.6, zoom: 0.08 });
  crossfade('.why .photo', '.loc-slide', { hold: 4, fade: 1 });
  crossfade('.cta .photo-bg', '.cta-slide', { hold: 5, fade: 1.4, zoom: 0.06 });

  // --- Diğer fotoğraflarda paralaks (derinlik hissi)
  gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
    if (el.closest('.hero')) return;
    gsap.fromTo(
      el,
      { yPercent: -7 },
      {
        yPercent: 7,
        ease: 'none',
        scrollTrigger: { trigger: el.parentElement!, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    );
  });

  // --- Ekrana giren öğeler aşağıdan belirir
  const reveals = gsap.utils.toArray<HTMLElement>('[data-reveal]');
  gsap.set(reveals, { y: 40, opacity: 0 });
  ScrollTrigger.batch(reveals, {
    start: 'top 90%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, { y: 0, opacity: 1, duration: 0.8, stagger: 0.09, ease: 'power3.out', overwrite: true }),
  });

  // --- Rakamlar 0'dan sayar
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const end = Number(el.dataset.count);
    const counter = { v: 0 };
    el.textContent = '0';
    gsap.to(counter, {
      v: end,
      duration: 1.8,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      onUpdate: () => {
        el.textContent = String(Math.round(counter.v));
      },
    });
  });
});

// Fotoğraflar geç yüklenince tetikleme noktalarını yeniden hesapla
window.addEventListener('load', () => ScrollTrigger.refresh());
