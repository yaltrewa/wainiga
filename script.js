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
const clock = document.getElementById('clock');

// Función para mostrar el escritorio
enterButton.addEventListener('click', () => {
    loginScreen.style.display = 'none';
    desktop.style.display = 'flex';
});

// Función para mostrar el modal con contenido
function showModal(content) {
    modalBody.innerHTML = content;
    modal.style.display = 'flex';
}

// Función para cerrar el modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Eventos para los iconos del escritorio
cmdIcon.addEventListener('click', () => {
    showModal('<h2>Comunicado</h2><p>Comunicado</p>');
});

coverIcon.addEventListener('click', () => {
    showModal('<h2>Portada</h2><p>Muestra la portada de tu próximo proyecto o contenido.</p>');
});

folderIcon.addEventListener('click', () => {
    showModal('<h2>Adelantos</h2><p>Explora los adelantos de tu trabajo o nuevos lanzamientos.</p>');
});

whatsappIcon.addEventListener('click', () => {
    showModal('<h2>Fans</h2><p>Conéctate con tus fans a través de WhatsApp.</p>');
});

// Cerrar modal si se hace clic fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Función para actualizar el reloj
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    clock.textContent = `${hours}:${minutes}`;
}

// Actualiza el reloj inicialmente y cada minuto
updateClock();
setInterval(updateClock, 60000); // Actualiza cada 60 segundos


