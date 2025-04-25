/*===========================
Invertir contenido
===========================*/
// Seleccionamos el contenedor y el ícono
const ordenContainer = document.getElementById('ordenContainer');
const ordenIcon = document.getElementById('ordenIcon');

// Añadimos un evento de clic para alternar el ícono
ordenContainer.addEventListener('click', function() {
    // Comprobamos si el ícono actual es "fa-arrow-up-a-z"
    if (ordenIcon.classList.contains('fa-arrow-up-a-z')) {
        // Cambiamos el ícono a "fa-arrow-down-z-a"
        ordenIcon.classList.remove('fa-arrow-up-a-z');
        ordenIcon.classList.add('fa-arrow-down-z-a');
    } else {
        // Si no es "fa-arrow-up-a-z", lo cambiamos a "fa-arrow-up-a-z"
        ordenIcon.classList.remove('fa-arrow-down-z-a');
        ordenIcon.classList.add('fa-arrow-up-a-z');
    }
});