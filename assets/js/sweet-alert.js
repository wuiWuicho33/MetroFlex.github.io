/* # Sweet Alert
---------------------------------------------- */
// Botón para mostrar alerta de éxito
document.getElementById('alertaExitoBtn').addEventListener('click', function() {
	Swal.fire({
		title: '¡Éxito!',
		text: 'Este es un mensaje de éxito.',
		icon: 'success',
		confirmButtonText: 'Aceptar',
		customClass: {
			confirmButton: 'btn-alert' // Clase personalizada para el color del botón
		}
	});
});

// Botón para mostrar alerta de error
document.getElementById('alertaErrorBtn').addEventListener('click', function() {
	Swal.fire({
		title: '¡Error!',
		text: 'Algo salió mal. Intenta de nuevo.',
		icon: 'error',
		confirmButtonText: 'Aceptar',
		customClass: {
			confirmButton: 'btn-alert' // Clase personalizada para el color del botón
		}
	});
});
