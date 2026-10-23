/* Minimal, keyboard-accessible mobile navigation. No tracking or external scripts. */
(() => {
  'use strict';
  const toggle = document.querySelector('[data-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (!toggle || !nav) return;
  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  };
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open', !expanded);
  });
  nav.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') { closeMenu(); toggle.focus(); }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 800) closeMenu();
  });
})();
