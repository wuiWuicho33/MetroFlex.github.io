/* # Modal
---------------------------------------------- */
document.querySelectorAll('[data-modal]').forEach(button => {
  button.addEventListener('click', function() {
      const modalId = this.getAttribute('data-modal');
      openModal(modalId);
  });
});

document.querySelectorAll('[data-dismiss="modal"]').forEach(button => {
  button.addEventListener('click', function() {
      const modal = this.closest('.modal');
      closeModal(modal.id);
  });
});

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "flex"; // Usamos "flex" para mostrar el modal centrado
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none"; // Usamos "none" para ocultar el modal
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
      closeModal(event.target.id);
  }
};