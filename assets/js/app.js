(() => {
  const body = document.body;
  const loader = document.querySelector('.loader');
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-menu');

  const finishLoad = () => setTimeout(() => loader?.classList.add('is-done'), 180);
  if (document.readyState === 'complete') finishLoad();
  else window.addEventListener('load', finishLoad, { once: true });

  const setHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
  setHeader();
  window.addEventListener('scroll', setHeader, { passive: true });

  const setMenu = (open) => {
    body.classList.toggle('menu-open', open);
    menu?.classList.toggle('is-open', open);
    menu?.setAttribute('aria-hidden', String(!open));
    toggle?.setAttribute('aria-expanded', String(open));
    if (toggle) {
      const lines = toggle.querySelectorAll('span');
      if (lines[0]) lines[0].style.transform = open ? 'translateY(4px) rotate(45deg)' : '';
      if (lines[1]) lines[1].style.transform = open ? 'translateY(-4px) rotate(-45deg)' : '';
    }
  };
  toggle?.addEventListener('click', () => setMenu(!menu?.classList.contains('is-open')));
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  document.querySelectorAll('.belief button').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.belief');
      const panel = item?.querySelector('.belief__body');
      const isOpen = item?.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(Boolean(isOpen)));
      if (panel) panel.style.maxHeight = isOpen ? `${panel.scrollHeight}px` : '0px';
    });
  });

  // Next Sunday at 10:30 AM in America/Chicago.
  const nextSundayLabel = () => {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Chicago', year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'short'
    }).formatToParts(new Date());
    const get = type => parts.find(p => p.type === type)?.value;
    const now = new Date(`${get('month')}/${get('day')}/${get('year')} 12:00:00`);
    const day = now.getDay();
    let add = (7 - day) % 7;
    const currentHour = Number(new Intl.DateTimeFormat('en-US', { timeZone: 'America/Chicago', hour: '2-digit', hour12: false }).format(new Date()));
    if (day === 0 && currentHour >= 11) add = 7;
    const next = new Date(now);
    next.setDate(now.getDate() + add);
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(next);
  };
  document.querySelectorAll('[data-next-sunday]').forEach(el => el.textContent = nextSundayLabel());

  // Form fallback: compose an email instead of silently posting data to an unconfigured endpoint.
  document.querySelectorAll('form[data-mail-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const type = form.dataset.mailForm || 'Website inquiry';
      const lines = [];
      for (const [key, value] of data.entries()) {
        if (String(value).trim()) lines.push(`${key}: ${value}`);
      }
      const subject = encodeURIComponent(`POM Website — ${type}`);
      const bodyText = encodeURIComponent(lines.join('\n'));
      window.location.href = `mailto:rev.dillon@pomchurch.life?subject=${subject}&body=${bodyText}`;
    });
  });

  // Parallax only where motion is allowed.
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const parallax = document.querySelectorAll('[data-parallax]');
    const tick = () => {
      const y = window.scrollY;
      parallax.forEach(el => {
        const speed = Number(el.dataset.parallax || 0.08);
        el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
      });
    };
    window.addEventListener('scroll', tick, { passive: true });
  }
})();
