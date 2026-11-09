/* TR / EN dil geçişi.
 * Türkçe metin doğrudan index.html içinde duruyor (varsayılan dil, SEO için).
 * İngilizce karşılıklar aşağıdaki EN sözlüğünde; anahtarlar HTML'deki data-i18n değerleriyle eşleşir.
 * Yeni içerik eklerken: HTML'de öğeye data-i18n="anahtar" ver, buraya aynı anahtarla İngilizcesini ekle.
 */
const EN = {
  'meta.title': 'Fatih Öztürk — Mechatronics Engineer',
  'meta.desc': 'Fatih Öztürk — Mechatronics engineer experienced in mechatronic systems: system architecture, embedded systems, robotics and computer vision.',
  'skip': 'Skip to content',
  'nav.home': 'Fatih Öztürk — back to top',
  'role': 'Mechatronics Engineer',
  'nav.menu': 'Main menu',
  'nav.about': 'About',
  'nav.skills': 'Skills',
  'nav.exp': 'Experience',
  'nav.projects': 'Projects',
  'nav.pubs': 'Publications',
  'nav.contact': 'Contact',
  'theme': 'Toggle theme',
  'menu': 'Open menu',

  'hero.eyebrow': 'YTU Mechatronics · M.Sc. in progress',
  'hero.title': 'Mechatronics engineer who takes systems from architecture to <span class="accent">working hardware</span>.',
  'hero.lead': 'I bring mechanical design, custom electronics, embedded software and AI together in one system. I designed, built and validated a TÜBİTAK-funded robotic test platform — every layer, from mechanics to software.',
  'hero.cta': 'View projects',
  'hero.cv': 'Download CV',

  'dia.aria': 'Closed-loop mechatronic system diagram: camera, vision processing, controller, driver and actuator',
  'dia.l1': 'AI / VISION',
  'dia.l2': 'EMBEDDED',
  'dia.l3': 'MECHANICAL',
  'dia.cam': 'Camera',
  'dia.cam2': '3× synchronised',
  'dia.vis': 'Vision Pipeline',
  'dia.vis2': 'error vector',
  'dia.ctl': 'Controller',
  'dia.drv': 'Driver',
  'dia.drv2': 'isolated power',
  'dia.act': 'Actuator',
  'dia.act2': 'aiming axis',
  'dia.mech': 'Mechanism',
  'dia.mech2': 'draw · release',
  'dia.fb': 'visual feedback',
  'dia.cap': 'ARC-HIT · closed-loop architecture',

  'st.1': 'Research experience',
  'st.1b': 'years · ASIL Lab',
  'st.2': 'Team led',
  'st.2b': 'undergraduate researchers',
  'st.3': 'Papers & preprints',
  'st.4': 'B.Sc. GPA',
  'st.4b': 'out of 4.00 · ranked 3rd',

  'ab.num': '01 / About',
  'ab.h': 'Not in a single layer —<br>across the whole system.',
  'ab.p1': 'A machine only works when its mechanical, electronic and software layers are right at the same time. That is why, rather than specialising in a single field, I prefer to design the system as a whole and get the interfaces between those layers right.',
  'ab.p2': 'Over three years at the ASIL Lab I grew from undergraduate researcher to leading a 20-person team. In aerospace and medical-device internships I built embedded systems as part of real products, and in TÜBİTAK-funded research I worked with optical measurement systems and microfluidic chips.',
  'edu.t': 'Education',
  'edu.ms.d': 'Sep 2026 — Present',
  'edu.ms': 'M.Sc. Mechatronics Engineering',
  'edu.ytu': 'Yıldız Technical University',
  'edu.bs.d': 'Graduated · Jul 2026',
  'edu.bs': 'B.Sc. Mechatronics Engineering',
  'edu.bs.u': 'Yıldız Technical University · 100% English',
  'edu.b1': 'GPA 3.47 / 4.00',
  'edu.b2': 'Ranked 3rd in department',
  'edu.b3': 'Honours',
  'edu.lang': 'Languages',
  'edu.lang2': 'Turkish (native) · English (advanced)',

  'sk.num': '02 / Skills',
  'sk.h': 'Every layer of a mechatronic system',
  'sk.lead': 'From concept to working prototype: mechanical design, electronics, embedded software and the perception/decision layer.',
  'sk.1': 'Mechanical &amp; Manufacturing',
  'sk.1p': 'Mechanism design, precision positioning, prototype manufacturing.',
  'sk.3d': '3D printing',
  'sk.2': 'Electronics &amp; PCB',
  'sk.2p': 'Isolated power rails, motor drive, noise-robust board design.',
  'sk.pcb': 'PCB design',
  'sk.3': 'Embedded Systems &amp; Control',
  'sk.3p': 'Bare-metal firmware, communication architecture, closed-loop control.',
  'sk.4': 'AI &amp; Computer Vision',
  'sk.4p': 'Real-time image processing, object detection, deep learning.',

  'ex.num': '03 / Experience',
  'ex.h': 'From the lab to the field',
  'ex.a.d': 'Sep 2023 — Jul 2026',
  'ex.a.w': 'Istanbul · Robotics &amp; AI laboratory',
  'ex.a.t': 'Research',
  'ex.a.r1': 'Undergraduate Student Team Leader',
  'ex.a.r1d': 'Jul 2025 — Jul 2026',
  'ex.a.r2': 'Undergraduate Researcher',
  'ex.a.r2d': 'Sep 2023 — Jun 2025',
  'ex.a.1': 'Led <strong>20 undergraduate researchers</strong> in a multidisciplinary robotics and AI lab; ran recruitment and designed technical training plans.',
  'ex.a.2': 'Owned the end-to-end system design of <strong>ARC-HIT</strong>, my graduation project, as project lead.',
  'ex.a.3': 'Applied machine learning, deep learning, CNNs and object detection (YOLO) across the lab’s research projects.',
  'ex.e.d': 'Jan 2026 — Feb 2026',
  'ex.e.h': 'Enlighter Medical Device Technologies',
  'ex.e.w': 'Istanbul · R&amp;D Engineering Intern',
  'ex.e.t': 'Medical',
  'ex.e.1': 'Designed and integrated subsystems of a <strong>CNC-based PCB prototyping machine</strong> for in-house prototyping of medical device boards.',
  'ex.s.d': 'Aug 2025 — Feb 2026',
  'ex.s.w': 'Undergraduate Researcher',
  'ex.s.t': 'Optics · Microfluidics',
  'ex.s.1': 'Fabricated <strong>PDMS microfluidic chips</strong>.',
  'ex.s.2': 'Contributed to integrating a <strong>Michelson-based phase-shifting holography</strong> system for cell and spheroid stiffness measurement.',
  'ex.t.d': 'Jul 2025 — Aug 2025',
  'ex.t.h': 'TAAC Aerospace Technologies',
  'ex.t.w': 'Istanbul · Embedded Systems Intern',
  'ex.t.t': 'Aerospace',
  'ex.t.1': 'Developed <strong>bare-metal STM32 firmware at register level</strong>, including encrypted data transmission between nodes.',
  'ex.t.2': 'Designed the architecture of a <strong>CAN bus data-transfer hub</strong> for an aerospace application, defining node topology and message routing.',
  'ex.t.3': 'Verified node-to-node communication and validated firmware on real hardware targets in the lab.',

  'pr.num': '04 / Projects',
  'pr.h': 'Selected engineering projects',
  'pr.play': 'Play the ARC-HIT system demo video',
  'pr.video': 'System demo video',
  'pr.feat': 'Featured',
  'pr.a.d': 'Sep 2025 — Jun 2026',
  'pr.a.h': 'ARC-HIT — Autonomous Robotic Archery Test Platform',
  'pr.a.k': 'Graduation Project · Team Leader · Supported by TÜBİTAK 2209-B',
  'pr.a.p': 'A robotic archery platform that removes the human variable from arrow ballistic testing, making shot-to-shot comparison repeatable. I designed the system architecture and developed every layer, from mechanics to software.',
  'pr.a.s1': 'Requirement',
  'pr.a.s1b': 'group diameter @ 18 m',
  'pr.a.s2': 'Measured',
  'pr.a.s2b': '150-shot average',
  'pr.a.s3': 'Outcome',
  'pr.a.s3a': 'Patent',
  'pr.a.s3b': 'under evaluation',
  'pr.more': 'Engineering details',
  'pr.a.e': 'Electronics',
  'pr.a.e2': 'A two-layer architecture separating high-level vision processing from real-time motion control, on a custom PCB with isolated power rails that keep motor noise off the sensor and logic lines.',
  'pr.a.c': 'Control',
  'pr.a.c2': 'Closed-loop positioning of the aiming axes driven by visual feedback, plus controlled bow-draw and release — modelled and tuned in simulation.',
  'pr.a.al': 'Algorithm',
  'pr.a.al2': 'An image-processing pipeline extracting the target centre and post-shot impact point as an angular error vector, plus automated shot-group statistics.',
  'pr.a.o': 'Outcomes',
  'pr.a.o2': 'Funded by TÜBİTAK 2209-B (Project No: 1139B412503297). Intellectual-property application filed through the YTU Technology Transfer Office; after a positive patent search, now under patent evaluation. A paper on the angular positioning mechanism was presented at MEKON 2026.',
  'pr.a.adv': 'Advisor: Assoc. Prof. Hüseyin Üvet · Yıldız Technical University',
  'c.arch': 'System architecture',
  'c.cl': 'Closed-loop control',
  'c.ip': 'Image processing',
  'c.sim': 'Simulation',
  'pr.b.t': 'Computer vision',
  'pr.b.d': 'Dec 2024 — Jun 2025',
  'pr.b.h': 'AI-Based Athlete Posture Analysis System',
  'pr.b.p': 'A system that makes archery technique — normally judged by eye — measurable. It fuses video from three synchronised cameras to extract joint angles at the moment of release and shows the results on a 3D avatar in Unity.',
  'pr.details': 'Details',
  'pr.b.1': 'MediaPipe-based three-camera pipeline that recovers the depth a single camera cannot see, aligned to the moment of release.',
  'pr.b.2': 'Telescopic camera platform with 2 m spacing and up to 2.50 m height — designed in SolidWorks and manufactured.',
  'pr.b.3': 'Unity interface mapping the measured angles onto a 3D avatar so coaches can compare shots visually.',
  'pr.c.art': 'CNN → stroke',
  'pr.c.t': 'Deep learning',
  'pr.c.d': 'Feb 2025 — Aug 2025',
  'pr.c.h': 'TEKNOFEST 2025 — AI in Healthcare',
  'pr.c.p': 'Developed deep learning models detecting ischemic and haemorrhagic stroke from non-contrast CT, plus stroke-onset timing prediction from diffusion MRI.',
  'c.med': 'Medical imaging',
  'c.cls': 'Classification',

  'pu.num': '05 / Publications',
  'pu.h': 'Publications &amp; papers',
  'pu.conf': 'Conference',

  'co.num': '06 / Contact',
  'co.h': 'Let’s build the next system together.',
  'co.p': 'Get in touch about roles, R&amp;D projects and academic collaborations in mechatronic systems, robotics, embedded systems and computer vision.',
  'ft.city': 'Istanbul',
  'ft.tag': 'Mechanical · Electronics · Embedded · AI',
};

const CV = { tr: 'assets/Fatih_Ozturk_CV_tr.pdf', en: 'assets/Fatih_Ozturk_CV_en.pdf' };

(function () {
  const root = document.documentElement;
  const textEls = [...document.querySelectorAll('[data-i18n]')];
  const attrEls = [...document.querySelectorAll('[data-i18n-attr]')];
  // Türkçe orijinalleri sakla
  textEls.forEach(el => { el.__tr = el.innerHTML; });
  attrEls.forEach(el => {
    el.__trAttr = {};
    el.dataset.i18nAttr.split(';').forEach(pair => {
      const [attr] = pair.split(':');
      el.__trAttr[attr] = el.getAttribute(attr);
    });
  });

  const btn = document.getElementById('langToggle');
  const label = document.getElementById('langLabel');

  function apply(lang) {
    const en = lang === 'en';
    textEls.forEach(el => {
      const k = el.dataset.i18n;
      el.innerHTML = en && EN[k] != null ? EN[k] : el.__tr;
    });
    attrEls.forEach(el => {
      el.dataset.i18nAttr.split(';').forEach(pair => {
        const [attr, k] = pair.split(':');
        el.setAttribute(attr, en && EN[k] != null ? EN[k] : el.__trAttr[attr]);
      });
    });
    document.querySelectorAll('[data-cv]').forEach(a => a.setAttribute('href', CV[lang]));
    root.lang = lang;
    label.textContent = en ? 'TR' : 'EN';
    btn.setAttribute('aria-label', en ? 'Türkçeye geç' : 'Switch to English');
    root.classList.remove('i18n-pending');
  }

  let current = window.__lang === 'en' ? 'en' : 'tr';
  apply(current);

  btn.addEventListener('click', () => {
    current = current === 'en' ? 'tr' : 'en';
    apply(current);
    try { localStorage.setItem('lang', current); } catch (e) {}
    const url = new URL(location.href);
    if (url.searchParams.has('lang')) { url.searchParams.set('lang', current); history.replaceState(null, '', url); }
  });

  // Geliştirme kontrolü: HTML'de olup sözlükte olmayan anahtarlar
  const missing = textEls.map(e => e.dataset.i18n).filter(k => !(k in EN));
  if (missing.length) console.warn('i18n: EN çevirisi eksik →', missing);
})();
