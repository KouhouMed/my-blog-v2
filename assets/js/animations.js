document.addEventListener('DOMContentLoaded', () => {

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Header state (IntersectionObserver on a top sentinel, no scroll listener) ─
  const header   = document.getElementById('main-header');
  const sentinel = document.getElementById('top-sentinel');
  if (header && sentinel) {
    const headerObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          header.classList.toggle('is-stuck', !entry.isIntersecting);
        });
      },
      { root: null, threshold: 0 }
    );
    headerObserver.observe(sentinel);
  }

  // ── Scroll-triggered reveal ────────────────────────────────────────────────
  const revealTargets = document.querySelectorAll('.animate-on-scroll');

  const applyStagger = el => {
    if (!el.hasAttribute('data-stagger')) return;
    const items = Array.from(el.children).filter(child =>
      child.classList.contains('stagger-item')
    );
    items.slice(0, 6).forEach((item, i) => {
      item.style.transitionDelay = `${i * 60}ms`;
    });
  };

  if (reduce) {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          applyStagger(entry.target);
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        });
      },
      { root: null, rootMargin: '0px 0px -40px 0px', threshold: 0.12 }
    );
    revealTargets.forEach(el => revealObserver.observe(el));
  }

  // ── Multi-phrase typing effect ─────────────────────────────────────────────
  const taglineEl = document.getElementById('hero-tagline');
  if (!taglineEl) return;

  const textEl  = taglineEl.querySelector('.tw-text');
  const caretEl = taglineEl.querySelector('.tw-caret');
  if (!textEl) return;

  const raw     = taglineEl.getAttribute('data-text') || '';
  const phrases = raw.split(' | ').map(s => s.trim()).filter(Boolean);
  if (phrases.length === 0) return;

  if (reduce) {
    textEl.textContent = phrases[0];
    if (caretEl) caretEl.hidden = true;
    return;
  }

  const TYPING_MS = 65;
  const DELETE_MS = 30;
  const PAUSE_MS  = 2400;
  const GAP_MS    = 320;

  let phraseIdx  = 0;
  let charIdx    = 0;
  let isDeleting = false;

  const tick = () => {
    const phrase = phrases[phraseIdx];

    if (!isDeleting) {
      charIdx++;
      textEl.textContent = phrase.substring(0, charIdx);

      if (charIdx === phrase.length) {
        if (phrases.length === 1) return;              // single phrase, stop here
        setTimeout(() => { isDeleting = true; tick(); }, PAUSE_MS);
        return;
      }
    } else {
      charIdx--;
      textEl.textContent = phrase.substring(0, charIdx);

      if (charIdx === 0) {
        isDeleting = false;
        phraseIdx  = (phraseIdx + 1) % phrases.length;
        setTimeout(tick, GAP_MS);
        return;
      }
    }

    setTimeout(tick, isDeleting ? DELETE_MS : TYPING_MS);
  };

  // Paint the first phrase in full immediately: the role line is the most
  // important copy in the hero and must never be blank on first paint.
  // Cycling starts from the delete step once the reading pause has elapsed.
  textEl.textContent = phrases[0];
  charIdx = phrases[0].length;

  if (phrases.length > 1) {
    setTimeout(() => { isDeleting = true; tick(); }, PAUSE_MS);
  }

});
