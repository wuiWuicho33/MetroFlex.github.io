// Mostrar u ocultar el botón según la posición del scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

// Desplazamiento suave al hacer clic en el botón
document.getElementById("back-to-top").addEventListener("click", function(event) {
  event.preventDefault();
  scrollToTop(500); // 1000ms = 1 segundo
});

function scrollToTop(scrollDuration) {
  const scrollStep = -window.scrollY / (scrollDuration / 15);
  const scrollInterval = setInterval(function() {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}
