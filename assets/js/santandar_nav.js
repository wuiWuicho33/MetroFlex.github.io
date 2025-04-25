// =========
// MAIN NAV
// =========
// Obtener elementos
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const links = document.querySelectorAll('.nav-links a');

// Toggle menú
toggle.addEventListener('click', () => {
  const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

  navLinks.classList.toggle('show');
  toggle.setAttribute('aria-expanded', (!isExpanded).toString());
  document.body.classList.toggle('no-scroll', !isExpanded);
  toggle.classList.toggle('open', !isExpanded); // Cambia ícono
});

// Cerrar menú al hacer clic en un enlace
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
    toggle.classList.remove('open');
  });
});

// Cerrar menú al hacer clic fuera de él
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
    navLinks.classList.remove('show');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
    toggle.classList.remove('open');
  }
});

