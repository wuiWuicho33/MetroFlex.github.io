/* # Alert
---------------------------------------------- */
function closeAlert(button) {
	const alert = button.parentElement; // Selecciona el contenedor de alerta
	alert.classList.add('hide');
  
	// Esperar a que termine la transición antes de eliminar el elemento
	setTimeout(() => {
	  alert.style.display = 'none';
	}, 500);
}