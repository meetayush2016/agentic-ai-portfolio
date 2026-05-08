(function () {
  'use strict';

  /* ═══════════════════════════════════ THEME TOGGLE ══ */
  function initThemeToggle() {
    var btn = document.getElementById('theme-toggle');
    var html = document.documentElement;
    var KEY = 'portfolio-theme';

    var saved = localStorage.getItem(KEY);
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var initial = saved || (prefersDark ? 'dark' : 'light');
    html.setAttribute('data-theme', initial);
    updateIcon(initial);

    btn.addEventListener('click', function () {
      var current = html.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem(KEY, next);
      updateIcon(next);
    });

    function updateIcon(theme) {
      btn.innerHTML = theme === 'dark'
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
      btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  }

  /* ═══════════════════════════════════ NAVBAR ══════════ */
  function initNavbar() {
    var nav = document.getElementById('navbar');
    var links = document.querySelectorAll('.nav-links a');
    var sections = document.querySelectorAll('main section[id]');
    var lastScroll = 0;

    window.addEventListener('scroll', function () {
      var current = window.scrollY;
      nav.classList.toggle('scrolled', current > 20);
      if (current > 80) {
        nav.classList.toggle('nav-hidden', current > lastScroll + 5);
      } else {
        nav.classList.remove('nav-hidden');
      }
      lastScroll = current < 0 ? 0 : current;
    }, { passive: true });

    /* Active link via IntersectionObserver */
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (link) { link.classList.remove('active'); });
          var active = document.querySelector('.nav-links a[href="#' + entry.target.id + '"]');
          if (active) active.classList.add('active');
        }
      });
    }, { rootMargin: '-50% 0px -50% 0px' });

    sections.forEach(function (s) { navObserver.observe(s); });
  }

  /* ═══════════════════════════════════ MOBILE MENU ════ */
  function initMobileMenu() {
    var toggle = document.getElementById('menu-toggle');
    var menu = document.getElementById('mobile-menu');

    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.classList.toggle('active', open);
      toggle.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-hidden', String(!open));
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
      });
    });
  }

  /* ═══════════════════════════════════ SMOOTH SCROLL ══ */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var id = link.getAttribute('href');
        if (id === '#') return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        var navHeight = document.getElementById('navbar').offsetHeight;
        var top = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

  /* ═══════════════════════════════════ SCROLL REVEAL ══ */
  function initScrollReveal() {
    var elements = document.querySelectorAll('[data-reveal]');

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        /* Stagger siblings */
        var siblings = entry.target.parentElement.querySelectorAll('[data-reveal]');
        var idx = 0;
        siblings.forEach(function (el, i) { if (el === entry.target) idx = i; });
        entry.target.style.setProperty('--delay', idx);
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    elements.forEach(function (el) { observer.observe(el); });
  }

  /* ═══════════════════════════════════ PARTICLES ══════ */
  function initParticles() {
    var canvas = document.getElementById('particle-canvas');
    var ctx = canvas.getContext('2d');
    var particles = [];
    var animId = null;
    var W, H;

    var CFG = {
      count: 55,
      speed: 0.35,
      dotRadius: 1.8,
      lineDistance: 120,
      dotOpacity: 0.45,
      lineOpacity: 0.12,
    };

    function getAccent() {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      return dark ? '129,140,248' : '99,102,241';
    }

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function makeParticle() {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * CFG.speed * 2,
        vy: (Math.random() - 0.5) * CFG.speed * 2,
      };
    }

    function init() {
      resize();
      particles = [];
      for (var i = 0; i < CFG.count; i++) particles.push(makeParticle());
    }

    function update() {
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      var rgb = getAccent();

      /* Draw connections */
      for (var i = 0; i < particles.length; i++) {
        for (var j = i + 1; j < particles.length; j++) {
          var dx = particles[i].x - particles[j].x;
          var dy = particles[i].y - particles[j].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CFG.lineDistance) {
            var alpha = CFG.lineOpacity * (1 - dist / CFG.lineDistance);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = 'rgba(' + rgb + ',' + alpha + ')';
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      /* Draw dots */
      for (var k = 0; k < particles.length; k++) {
        ctx.beginPath();
        ctx.arc(particles[k].x, particles[k].y, CFG.dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + rgb + ',' + CFG.dotOpacity + ')';
        ctx.fill();
      }
    }

    function loop() {
      update();
      draw();
      animId = requestAnimationFrame(loop);
    }

    /* Pause when tab hidden */
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        cancelAnimationFrame(animId);
        animId = null;
      } else {
        if (!animId) loop();
      }
    });

    /* Debounced resize */
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(init, 150);
    });

    init();
    loop();
  }

  /* ═══════════════════════════════════ INIT ════════════ */
  document.addEventListener('DOMContentLoaded', function () {
    initThemeToggle();
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initScrollReveal();
    initParticles();
  });

}());
