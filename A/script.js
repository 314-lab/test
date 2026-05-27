// Seleccionamos los elementos del diseño
const openButton = document.getElementById('open-menu');
const closeButton = document.getElementById('close-menu');
const sidebar = document.getElementById('sidebar-menu');
const overlay = document.getElementById('menu-overlay');

// Función para abrir el menú
openButton.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.style.display = 'block'; // Muestra el fondo oscuro
});

// Función para cerrar el menú
const closeMenu = () => {
    sidebar.classList.remove('active');
    overlay.style.display = 'none'; // Oculta el fondo oscuro
};

// El menú se cierra si haces clic en la 'X' o fuera del menú (en el fondo oscuro)
closeButton.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
