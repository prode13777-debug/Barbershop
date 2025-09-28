// script.js — smooth anchors, mobile nav toggle, intersection reveal

document.addEventListener('DOMContentLoaded', () => {
  // Smooth anchor scrolling for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // For accessibility: focus target
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
  });

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('nav-list');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      if (!expanded) {
        navList.style.display = 'flex';
        navList.style.flexDirection = 'column';
        navList.style.gap = '12px';
      } else {
        navList.style.display = '';
      }
    });
  }

  // IntersectionObserver to reveal sections
  const observerOptions = { root: null, rootMargin: '0px', threshold: 0.12 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optionally unobserve to improve performance
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section').forEach(section => observer.observe(section));
});
