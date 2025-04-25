/*===========================
Date group
===========================*/
// Elementos de la fecha de inicio
const startTextInput = document.getElementById('start-text-input');
const startDateInput = document.getElementById('start-date-input');

// Elementos de la fecha final
const endTextInput = document.getElementById('end-text-input');
const endDateInput = document.getElementById('end-date-input');

// Función para manejar el cambio de estado de los campos
function handleFieldInteraction(textInput, dateInput) {
    textInput.addEventListener('click', () => {
        textInput.style.display = 'none';
        dateInput.style.display = 'block';
        dateInput.focus();
    });

    dateInput.addEventListener('change', () => {
        if (dateInput.value) {
            textInput.style.display = 'block';
            textInput.value = dateInput.value;
            dateInput.style.display = 'none';
        }
    });

    dateInput.addEventListener('blur', () => {
        if (!dateInput.value) {
            textInput.style.display = 'block';
            dateInput.style.display = 'none';
        }
    });
}

// Aplicar la función a ambos pares de campos
handleFieldInteraction(startTextInput, startDateInput);
handleFieldInteraction(endTextInput, endDateInput);