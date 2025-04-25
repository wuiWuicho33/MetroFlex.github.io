// Seleccionamos todos los enlaces de la barra de navegación
const navbarLinks = document.querySelectorAll('.navbar-link');

// Seleccionamos todas las secciones que corresponden a cada enlace
const sections = document.querySelectorAll('section'); // Seleccionamos todas las secciones

// Creamos el IntersectionObserver para detectar cuando una sección entra en vista
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.id;  // Obtenemos el id de la sección

    // Si la sección está visible, agregamos la clase 'active' al enlace correspondiente
    const navbarLink = document.querySelector(`.navbar-link[href="#${id}"]`);
    if (entry.isIntersecting) {
      navbarLink.classList.add('active');
    } else {
      navbarLink.classList.remove('active');
    }
  });
}, { threshold: 0.5 });  // Puedes ajustar el umbral de visibilidad (0.5 significa que el 50% de la sección debe ser visible)

// Observamos cada sección
sections.forEach(section => {
  observer.observe(section);
});
