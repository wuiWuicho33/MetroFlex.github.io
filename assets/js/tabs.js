/* # Horizontal tabs
---------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  const tabContainers = document.querySelectorAll('.tabs-container');

  tabContainers.forEach(container => {
      const tabButtons = container.querySelectorAll('.tab-button');
      const tabPanes = container.querySelectorAll('.tab-pane');

      tabButtons.forEach(button => {
          button.addEventListener('click', () => {
              // Remove 'active' class from all buttons and panes within this container
              tabButtons.forEach(btn => btn.classList.remove('active'));
              tabPanes.forEach(pane => pane.classList.remove('active'));

              // Add 'active' class to the clicked button and corresponding pane
              button.classList.add('active');
              const targetId = button.dataset.target;
              document.getElementById(targetId).classList.add('active');
          });
      });
  });
});

/* # Vertical-Tabs
---------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
	const verticalTabs = document.querySelectorAll(".vertical-tab");
	const verticalTabPanes = document.querySelectorAll(".vertical-tab-pane");
  
	verticalTabs.forEach(tab => {
	  tab.addEventListener("click", () => {
		// Desactivar las pestañas y los contenidos
		verticalTabs.forEach(t => t.classList.remove("active"));
		verticalTabPanes.forEach(pane => pane.classList.remove("active"));
  
		// Activar la pestaña seleccionada
		tab.classList.add("active");
		
		// Mostrar el contenido correspondiente
		const tabId = tab.getAttribute("data-tab");
		document.getElementById(tabId).classList.add("active");
	  });
	});
  
	// Inicialmente mostrar el contenido de la primera pestaña
	verticalTabs[0].classList.add("active");
	verticalTabPanes[0].classList.add("active");
  });