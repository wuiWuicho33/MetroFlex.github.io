/* # Cambio de imagen destacada
---------------------------------------------- */
// JavaScript para cambiar la imagen destacada cuando se selecciona un "radio button"
document.addEventListener("DOMContentLoaded", function () {
  // Seleccionamos todas las galerías
  const galleries = document.querySelectorAll(".gallery-section");

  galleries.forEach(gallery => {
    const thumbnails = gallery.querySelectorAll(".thumbnail");
    const imagenDestacada = gallery.querySelector(".gallery-body #imagenDestacada");

    // Seleccionamos el primer thumbnail por defecto y le damos la clase 'selected'
    const firstThumbnail = thumbnails[0];
    firstThumbnail.classList.add("selected");
    imagenDestacada.src = firstThumbnail.dataset.img; // Establecer la imagen destacada al valor del primer thumbnail

    // Añadimos el evento click para cada thumbnail dentro de la galería
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener("click", function () {
        // Cambiar la imagen destacada a la imagen seleccionada
        imagenDestacada.src = this.dataset.img;
        
        // Eliminar el borde de todas las miniaturas y quitar la clase 'selected'
        thumbnails.forEach(th => th.classList.remove("selected"));
        
        // Agregar el borde a la imagen seleccionada y añadir la clase 'selected'
        this.classList.add("selected");
      });
    });
  });
});