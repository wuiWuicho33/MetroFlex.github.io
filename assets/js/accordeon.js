/* # Accordion
---------------------------------------------- */
document.querySelectorAll('.acordeon-header').forEach(button => {
    button.addEventListener('click', function() {
        const body = this.nextElementSibling;
        const icon = this.querySelector('.acordeon-icon');

        // Si el panel está abierto, lo cerramos y restablecemos el ícono
        if (body.style.display === "block") {
            body.style.display = "none";
            this.classList.remove('open');
        } else {
            // Cerrar otros paneles abiertos
            document.querySelectorAll('.acordeon-body').forEach(item => {
                item.style.display = "none"; // Ocultar el contenido
            });

            document.querySelectorAll('.acordeon-header').forEach(header => {
                header.classList.remove('open'); // Restablecer los íconos
            });

            // Abrir el panel actual
            body.style.display = "block";
            this.classList.add('open'); // Agregar clase 'open' para el ícono
        }
    });
});
