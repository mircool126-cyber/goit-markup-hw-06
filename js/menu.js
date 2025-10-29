const menu = document.querySelector('.mobile-menu');
const toggleBtn = document.querySelector('.menu-toggle');

toggleBtn.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('is-open');
  toggleBtn.classList.toggle('is-open', isOpen);
  toggleBtn.setAttribute('aria-expanded', isOpen);
  document.body.classList.toggle('menu-open', isOpen);
});