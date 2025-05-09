  function showAlert(type, message) {
    const container = document.getElementById('alert-container');
    const alert = document.getElementById('alert-message');
    const text = document.getElementById('alert-text');

    text.textContent = message;

    alert.className = 'p-4 rounded-md flex justify-between items-center';
    alert.classList.add(type === 'success' ? 'alert-success' : 'alert-error');

    container.classList.remove('hidden');

    // Ocultar automáticamente después de 5 segundos
    setTimeout(() => {
      closeAlert();
    }, 5000);
  }

  function closeAlert() {
    document.getElementById('alert-container').classList.add('hidden');
  }

  // Mostrar alerta si hay un status en la URL
  const params = new URLSearchParams(window.location.search);
  if (params.get('status') === 'success') {
    showAlert('success', '¡Tu mensaje fue enviado con éxito!');
  } else if (params.get('status') === 'error') {
    showAlert('error', 'Hubo un error al enviar el mensaje. Por favor intenta más tarde.');
  }