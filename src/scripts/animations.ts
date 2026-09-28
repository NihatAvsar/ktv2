// Sayfa animasyonları (GSAP + ScrollTrigger).
// Kural: İçerik CSS ile gizlenmez; gizleme/gösterme yalnızca burada yapılır.
// Böylece bu dosya yüklenmezse site yine eksiksiz görünür.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;
const mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: no-preference)', () => {
  // --- Açılış: fotoğraf yakından uzaklaşır, 7/24 aşağıdan yükselir, diğerleri sırayla belirir
  const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
  intro
    .fromTo('.hero .photo-bg img', { scale: 1.15 }, { scale: 1, duration: 1.8, ease: 'power2.out' }, 0)
    .fromTo('.hero .big-char', { y: 0, yPercent: 110 }, { yPercent: 0, duration: 0.9, stagger: 0.07 }, 0.1)
    .fromTo('.hero [data-hero]', { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 }, 0.45);

  // Head'deki ön-gizleme sınıfını kaldır (başlangıç değerleri artık GSAP'te)
  root.classList.remove('anim-pending');

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
