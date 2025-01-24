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
    const comunicado = `
        <h2>Comunicado</h2>
        <p>Todos estos años buscando mi identidad musical terminaron generándome más confusión que claridad. Hasta el momento, "Trewa" más que mi alter ego fue un canal mediante el cual reflejé tanto mis logros como mis pérdidas. A lo largo de mi carrera, lo presenté en distintas variantes como "Trewa the Kid," "GZY Trewa" o "Yal Trewa." Y aunque cada una refleja un crecimiento, no puedo evitar sentirme atrapado en ser la misma persona de siempre.</p>
        <p>No voy a mentirles: desde chico, la inseguridad y los miedos han sido dos características muy presentes en mí. Cuando conocí este mundo, cada pequeño reconocimiento —como ganar una batalla o recibir un comentario positivo por una canción— me hacía sentir que esos miedos desaparecían. Pero no era así; simplemente los escondía. Con el tiempo, me volví adicto a esa sensación. Mi camino en la música dejó de ser una expresión auténtica y se convirtió en una búsqueda constante de halagos y reconocimientos. Eso que al principio me llenaba, comenzó a vaciarme por completo.</p>
        <p>El año pasado, en un intento de llenar ese vacío, traté de demostrarles que, a pesar de haber estado tanto tiempo alejado, seguía hecho para esto. Publiqué algunos singles y me enfoqué en un álbum nuevo. Sin embargo, por cosas de la vida, pocos de esos proyectos llegaron a completarse, y otros los lancé sin estar realmente convencido. Hasta que llegó un punto en el que ya no entendía qué estaba haciendo. ¿A quién debía demostrarle que estoy hecho para esto? ¿Quién iba a confiar en mí si yo mismo no lo hacía?</p>
        <p>Fue en medio de esas noches interminables, dando vueltas a estas preguntas en mi cabeza, cuando tomé una respiración profunda. De repente, el tiempo se detuvo, las voces se callaron... y, por un momento, dejé de ser yo. Dejé de ser "Trewa."</p>
        <p>Volví a conectar con ese pibe de 16 años que viajaba por cualquier parte de Buenos Aires sin importar cómo iba a volver. Ese pibe que no pensaba en lo que podía ganar, que grababa con un micrófono barato, con instrumentales de YouTube, y subía videos hechos con un celular. Ese pibe que disfrutaba lo que hacía, sin preocuparse por lo que los demás opinaban, porque sabía que la única persona a la que tenía que demostrarle algo era a sí mismo.</p>
        <p>A veces, para encontrarte, tenés que volver al punto de partida. Hoy, vuelvo a hacer música por el mismo motivo que la empecé: por mí. Gracias por ser parte de este viaje. Lo mejor está por venir.
        -Att:Wainiga</p>
    `;
    showModal(comunicado);
});

coverIcon.addEventListener('click', () => {
    showModal('<h2>Portada</h2><p>Muestra la portada de tu próximo proyecto o contenido.</p>');
});

folderIcon.addEventListener('click', () => {
    // Mostrar el texto
    const textContent = `
        <h2>Adelantos</h2>
        <p>Explora los adelantos de tu trabajo o nuevos lanzamientos.</p>
    `;
    
    // Mostrar el contenido de texto
    showModal(textContent);

    // Mostrar la lista de videos (esto se agrega después del texto)
    const videoModalContent = `
        <h2>Selecciona un Video</h2>
        <ul id="videoList">
            <li class="video-item" data-video-url="url_del_video_1">Video 1</li>
            <li class="video-item" data-video-url="url_del_video_2">Video 2</li>
            <li class="video-item" data-video-url="url_del_video_3">Video 3</li>
        </ul>
        <div id="videoPlayer"></div>
    `;

    // Mostrar el modal con la lista de videos
    showModal(videoModalContent);
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

// Función para mostrar la imagen de portada en grande
coverIcon.addEventListener('click', () => {
    // Creamos el contenido de la imagen en el modal
    const imageContent = `<h2>Portada</h2>
                          <img src="images/cover-icon.png" alt="Portada" class="large-image">`;
    
    // Llamamos a la función para mostrar el modal con la imagen
    showModal(imageContent);
});


