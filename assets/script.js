// Плавное появление блоков при скролле
function reveal() {
  const elements = document.querySelectorAll('.section, .hero h1, .hero p, .btn, .card, .price-item');
  const trigger = window.innerHeight * 0.85;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add('visible');
  });
}

window.addEventListener('scroll', reveal);
window.addEventListener('DOMContentLoaded', () => {
  reveal();
  // сразу показываем главный заголовок, текст и кнопку Hero
  document.querySelectorAll('.hero h1, .hero p, .btn')
    .forEach(el => el.classList.add('visible'));
});
