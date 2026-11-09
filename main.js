document.documentElement.classList.add('js');

// Yıl
document.getElementById('year').textContent = new Date().getFullYear();

// Tema
const root = document.documentElement;
document.getElementById('themeToggle').addEventListener('click', () => {
  const current = root.dataset.theme ||
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// Mobil menü
const menuBtn = document.getElementById('menuToggle');
const links = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  const open = links.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', open);
});
links.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    links.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});

// Navigasyon kenarlığı + okuma çubuğu
const nav = document.querySelector('.nav');
const bar = document.getElementById('progress');
const onScroll = () => {
  nav.classList.toggle('is-scrolled', scrollY > 8);
  const max = document.documentElement.scrollHeight - innerHeight;
  bar.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + '%';
};
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Aktif bölüm
const navAnchors = [...links.querySelectorAll('a')];
const spy = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(s => spy.observe(s));

// Kaydırınca beliren öğeler
const reveal = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      reveal.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));

// Sayaç animasyonu
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const counter = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target, end = +el.dataset.count, t0 = performance.now();
    const step = t => {
      const p = Math.min((t - t0) / 900, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    counter.unobserve(el);
  });
});
if (!reduce) document.querySelectorAll('[data-count]').forEach(el => counter.observe(el));

// YouTube: tıklanınca yükle (sayfa hızlı açılsın)
document.querySelectorAll('.video[data-yt]').forEach(btn => {
  btn.addEventListener('click', () => {
    const f = document.createElement('iframe');
    f.src = `https://www.youtube-nocookie.com/embed/${btn.dataset.yt}?autoplay=1&rel=0`;
    f.title = 'ARC-HIT sistem demo videosu';
    f.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    f.allowFullscreen = true;
    btn.replaceWith(f);
  });
});
