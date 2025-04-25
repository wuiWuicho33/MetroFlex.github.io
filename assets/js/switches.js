/* # Switches
---------------------------------------------- */
// Función para actualizar el texto del label basado en el estado del switch
function updateLabels() {
	const switches = document.querySelectorAll('.switch-input');
	switches.forEach(switchElement => {
		const labelElement = switchElement.parentElement.previousElementSibling;
		if (labelElement) {
			switchElement.addEventListener('change', function() {
				labelElement.textContent = this.checked ? getCheckedText(this) : getUncheckedText(this);
			});
		}
	});
  }
  // Obtiene el texto para el estado checked
  function getCheckedText(element) {
	if (element.classList.contains('state-switch-note')) {
		return element.parentElement.previousElementSibling.textContent === 'Inactivo' ? 'Activo' : 'Sí';
	}
	return 'Si';
  }
  // Obtiene el texto para el estado unchecked
  function getUncheckedText(element) {
	if (element.classList.contains('state-switch-note')) {
		return element.parentElement.previousElementSibling.textContent === 'Activo' ? 'Inactivo' : 'No';
	}
	return 'No';
  }
  
  // Inicializa la funcionalidad de los interruptores
  updateLabels();

