var swiper = new Swiper(".mySwiper", {
  loop: true,//Para regresar al inicio al dar clic al último bullet
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //Efectos de transición
  speed: 800, // Tiempo de transición en milisegundos (800 ms)
  effect: "slide", // Efecto de deslizamiento (puede ser 'slide', 'fade', 'cube', 'coverflow', etc.)
  // Efectos adicionales (opcional):
  fadeEffect: {
    crossFade: true, // Si deseas que las imágenes se desvanezcan entre sí
  },  
});