const burgerMenuToggle = document.querySelector('.burger-menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const navElements = mobileNav.querySelector('.nav-elements');

burgerMenuToggle.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
  navElements.classList.toggle('open');
  burgerMenuToggle.classList.toggle('active');
});