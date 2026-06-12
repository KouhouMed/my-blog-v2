document.addEventListener('DOMContentLoaded', () => {

  // ── Scroll Progress Bar ────────────────────────────────────────────────────
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    const updateProgress = () => {
      const scrolled = window.scrollY || document.documentElement.scrollTop;
      const total    = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = total > 0 ? `${(scrolled / total) * 100}%` : '0%';
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // ── Header Scroll Shrink ───────────────────────────────────────────────────
  const header = document.getElementById('main-header');
  if (header) {
    const onScroll = () => {
      const past = window.scrollY > 50;
      header.classList.toggle('py-2', past);
      header.classList.toggle('py-4', !past);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Intersection Observer: Scroll-Triggered Reveal ────────────────────────
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: '0px', threshold: 0.1 }
  );
  document.querySelectorAll('.animate-on-scroll').forEach(el => revealObserver.observe(el));

  // ── Skill Bar Fill Animation ───────────────────────────────────────────────
  const skillObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          bar.style.width = bar.getAttribute('data-width') || '0%';
          obs.unobserve(bar);
        }
      });
    },
    { root: null, rootMargin: '0px', threshold: 0.1 }
  );
  document.querySelectorAll('.skill-bar').forEach(bar => skillObserver.observe(bar));

  // ── Multi-Phrase Typing Effect ─────────────────────────────────────────────
  const taglineEl = document.getElementById('hero-tagline');
  if (taglineEl) {
    const raw     = taglineEl.getAttribute('data-text') || '';
    const phrases = raw.split(' | ').map(s => s.trim()).filter(Boolean);

    if (phrases.length === 0) return;

    let phraseIdx  = 0;
    let charIdx    = 0;
    let isDeleting = false;

    const TYPING_MS  = 65;
    const DELETE_MS  = 30;
    const PAUSE_MS   = 2400;
    const GAP_MS     = 320;

    const render = text => {
      taglineEl.innerHTML =
        `<span class="text-primary font-mono">${text}</span><span class="typing-cursor">▋</span>`;
    };

    const tick = () => {
      const phrase = phrases[phraseIdx];

      if (!isDeleting) {
        charIdx++;
        render(phrase.substring(0, charIdx));

        if (charIdx === phrase.length) {
          if (phrases.length === 1) return;                  // single phrase — stop
          setTimeout(() => { isDeleting = true; tick(); }, PAUSE_MS);
          return;
        }
      } else {
        charIdx--;
        render(phrase.substring(0, charIdx));

        if (charIdx === 0) {
          isDeleting = false;
          phraseIdx  = (phraseIdx + 1) % phrases.length;
          setTimeout(tick, GAP_MS);
          return;
        }
      }

      setTimeout(tick, isDeleting ? DELETE_MS : TYPING_MS);
    };

    render('');
    setTimeout(tick, 900);
  }

});
