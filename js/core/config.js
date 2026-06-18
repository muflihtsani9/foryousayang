/**
 * BUCIN — Cinematic Love Experience
 * Core Configuration System
 */

const CONFIG = {
  version: '2.0.0',
  debug: false,

  // ─── TIMING ───────────────────────────────────────────────────────
  timing: {
    preloaderMin: 2800,
    fadeIn: 1200,
    sectionTransition: 800,
    hoverDelay: 60,
    scrollThrottle: 16,
  },

  // ─── EASING ───────────────────────────────────────────────────────
  easing: {
    cinematic:   'power4.inOut',
    soft:        'power2.out',
    elastic:     'elastic.out(1, 0.4)',
    bounce:      'back.out(1.7)',
    silk:        'expo.out',
    brutal:      'power4.out',
    romantic:    'sine.inOut',
  },

  // ─── PARTICLES ────────────────────────────────────────────────────
  particles: {
    desktop: { count: 180, speed: 0.28, size: [0.8, 2.4] },
    tablet:  { count: 90,  speed: 0.22, size: [0.6, 1.8] },
    mobile:  { count: 45,  speed: 0.16, size: [0.5, 1.4] },
  },

  // ─── THREE.JS ─────────────────────────────────────────────────────
  three: {
    fov: 75,
    near: 0.1,
    far: 1000,
    cameraZ: 5,
    orbs: {
      desktop: 12,
      mobile: 6,
    },
    mouseInfluence: 0.035,
    scrollInfluence: 0.001,
  },

  // ─── BREAKPOINTS ──────────────────────────────────────────────────
  breakpoints: {
    mobile: 640,
    tablet: 1024,
    desktop: 1440,
  },

  // ─── PERFORMANCE ──────────────────────────────────────────────────
  performance: {
    fpsTarget: 60,
    fpsLow: 30,
    adaptiveQuality: true,
    maxDegradationLevel: 3,
  },

  // ─── QUOTES ───────────────────────────────────────────────────────
  loadingQuotes: [
    "hi! it’s your special day sayang<3",
  ],

  // ─── LOVE STORY DATA ──────────────────────────────────────────────
  timeline: [
    {
      date: "Prayer 1",
      title: "my best prayers for all of you🤍",
      quote: "semoga selalu di kasih kesehatan dan diberi umur yang panjang biar bisa temenin aku teruuss yaa ayang, sampe kapanpun aku butuh kamu soalnya☹️❤️",
      icon: "✦",
    },
    {
      date: "Prayer 2",
      title: "Harapan",
      quote: "semoga banyak orang-orang baik yg bawa hal-hal positif di hidup kamu, dan jangan lupa jdi bagian nya🤗",
      icon: "◈",
    },
    {
      date: "Prayer 3",
      title: "Doa",
      quote: "doa yg paling pgn cepet di kabulin “kita cepet ketemu ya”☹️❤️",
      icon: "◉",
    },
    {
      date: "Prayer 4",
      title: "Untukmu",
      quote: "Aku ga minta hidup kamu selalu mudah. tp semoga kamu selalu dikasih kekuatan untuk ngelewatin semua hal, kebahagiaan untuk menikmatinya, dan aku untuk temenin kamu sepanjang perjalanan🫶🏻",
      icon: "✧",
    },
    {
      date: "Prayer 5",
      title: "Always",
      quote: "wherever you are, may your heart always be mine🤍🤍",
      icon: "♡",
    },
  ],

  // ─── GALLERY CAPTIONS ─────────────────────────────────────────────
  //
  // CARA TAMBAH FOTO:
  //   1. Taruh file foto di folder:  assets/images/
  //   2. Isi field "img" dengan path-nya, contoh:
  //        img: 'assets/images/foto1.jpg'
  //   3. Kalau "img" dikosongkan (''), kartu tampil sebagai gradient placeholder
  //
  // Rasio foto ideal: 3:4 (portrait) — misal 600x800px atau 900x1200px
  //
  gallery: [
    { img: '', caption: "The way you look when you're not looking.", tag: "candid"   },
    { img: '', caption: "Late nights that turned into mornings.",     tag: "always"  },
    { img: '', caption: "Your laugh is genuinely a personality.",     tag: "chaos"   },
    { img: '', caption: "I memorized every version of you.",          tag: "favorite"},
    { img: '', caption: "Soft hours, golden light, you.",             tag: "ours"    },
    { img: '', caption: "The version of me that exists near you.",    tag: "best self"},
  ],
};

// Freeze to prevent accidental mutations
Object.freeze(CONFIG);
Object.freeze(CONFIG.timing);
Object.freeze(CONFIG.easing);
Object.freeze(CONFIG.particles);
Object.freeze(CONFIG.three);
Object.freeze(CONFIG.breakpoints);
Object.freeze(CONFIG.performance);

window.CONFIG = CONFIG;
