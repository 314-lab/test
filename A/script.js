// Seleccionamos los elementos del diseño
const openButton = document.getElementById('open-menu');
const closeButton = document.getElementById('close-menu');
const sidebar = document.getElementById('sidebar-menu');
const overlay = document.getElementById('menu-overlay');

// Función para abrir el menú y activar el fondo translúcido
openButton.addEventListener('click', () => {
    sidebar.classList.add('active');
    overlay.classList.add('active');
});

// Función para cerrar el menú y el fondo translúcido
const closeMenu = () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
};

// Eventos para cerrar al hacer clic en la 'X' o en el fondo oscuro
closeButton.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
