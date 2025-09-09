document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const mobileNav = document.querySelector('.mobile-nav');

  burgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (mobileNav.classList.contains('active')) {
      if (!mobileNav.contains(e.target) && !burgerMenu.contains(e.target)) {
        mobileNav.classList.remove('active');
      }
    }
  });

  const contrastToggle = document.getElementById('contrast-toggle');
  contrastToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('high-contrast');
    const isPressed = contrastToggle.getAttribute('aria-pressed') === 'true';
    contrastToggle.setAttribute('aria-pressed', String(!isPressed));
  });
});
