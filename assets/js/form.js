/* # Upload image
---------------------------------------------- */
document.getElementById("subirImagenBtn").addEventListener("click", function() {
	document.getElementById("inputImagen").click();
  });

  document.getElementById("inputImagen").addEventListener("change", function(event) {
	const archivo = event.target.files[0];
	if (archivo) {
	  alert(`Archivo seleccionado: ${archivo.name}`);
	}
  });

/* # Range selector
---------------------------------------------- */
var el, newPoint, newPlace, offset;
 
$('input[type=range]').on('input', function () {
    $(this).trigger('change');
});
// Select all range inputs, watch for change
$("input[type='range']").change(function() {

 // Cache this for efficiency
 el = $(this);
 
 // Measure width of range input
 width = el.width();
 
 // Figure out placement percentage between left and right of input
 newPoint = (el.val() - el.attr("min")) / (el.attr("max") - el.attr("min"));
  
  offset = -1;

 // Prevent bubble from going beyond left or right (unsupported browsers)
 if (newPoint < 0) { newPlace = 0; }
 else if (newPoint > 1) { newPlace = width; }
 else { newPlace = width * newPoint + offset; offset -= newPoint; }
 
 // Move bubble
 el
   .next("output")
   .css({
     left: newPlace,
     marginLeft: offset + "%"
   })
     .text(el.val());
 })
 // Fake a change to position bubble at page load
 .trigger('change');

