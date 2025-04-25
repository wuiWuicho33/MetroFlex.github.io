/* # Sticky navbar
---------------------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const stickyOffset = navbar.offsetTop;

    window.addEventListener('scroll', function () {
      if (window.pageYOffset > stickyOffset) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    });
  });