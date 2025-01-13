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
    modalBody.innerHTML = content;
    modal.style.display = 'flex';
}

// Función para cerrar el modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Acciones de los íconos del escritorio
cmdIcon.addEventListener('click', () => {
    showModal(`
        <h2>Comunicado</h2>
        <p>Bienvenidos al sistema operativo Wainiga OS.</p>
        <p>El EP "Nombre del EP" estará disponible en febrero.</p>
    `);
});

coverIcon.addEventListener('click', () => {
    showModal(`
        <h2>Portada</h2>
        <img src="images/cover.jpg" alt="Portada del EP" style="width: 100%; height: auto;">
    `);
});

folderIcon.addEventListener('click', () => {
    showModal(`
        <h2>Adelantos</h2>
        <p>Próximamente encontrarás aquí los videos de adelanto del EP.</p>
        <video controls style="width: 100%; height: auto;">
            <source src="videos/sample.mp4" type="video/mp4">
            Tu navegador no soporta reproducción de video.
        </video>
    `);
});

whatsappIcon.addEventListener('click', () => {
    window.open('https://wa.me/<tu-numero-de-whatsapp>?text=¡Hola!%20Quiero%20ser%20parte%20del%20grupo%20de%20fans%20de%20Wainiga.', '_blank');
});
