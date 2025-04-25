document.querySelectorAll('.smooth_scrolling').forEach(anchor => {
anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    // Obtener el destino del enlace
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    // Desplazar suavemente al destino
    targetElement.scrollIntoView({
    behavior: 'smooth'
    });
});
});

