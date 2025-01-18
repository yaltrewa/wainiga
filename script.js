// Referencias a elementos
const loginScreen = document.getElementById('login-screen');
const desktop = document.getElementById('desktop');
const enterButton = document.getElementById('enter-button');
const cmdIcon = document.getElementById('cmd-icon');
const coverIcon = document.getElementById('cover-icon');
const folderIcon = document.getElementById('folder-icon');
const whatsappIcon = document.getElementById('whatsapp-icon');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeButton = document.querySelector('.close-button');

// Función para mostrar el escritorio
enterButton.addEventListener('click', () => {
    loginScreen.style.display = 'none';
    desktop.style.display = 'flex';
});

// Función para mostrar el modal con contenido
function showModal(content) {
   

