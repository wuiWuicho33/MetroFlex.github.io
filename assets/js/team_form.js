/*=========
FORM
=========*/
// Obtén los radio buttons
const radioIndividual = document.getElementById('radio1');
const radioEquipo = document.getElementById('radio2');

// Obtén el formulario de equipo
const formularioEquipo = document.querySelector('.team-form');

// Función para manejar la visibilidad
function toggleFormularioEquipo() {
if (radioEquipo.checked) {
	formularioEquipo.style.display = 'grid'; // Muestra el formulario de equipo
} else {
	formularioEquipo.style.display = 'none'; // Oculta el formulario de equipo
}
}

// Añadir event listeners a los radio buttons
radioIndividual.addEventListener('change', toggleFormularioEquipo);
radioEquipo.addEventListener('change', toggleFormularioEquipo);

// Inicializa la visibilidad del formulario al cargar la página
toggleFormularioEquipo();


