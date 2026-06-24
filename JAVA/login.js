document.getElementById('loginForm').addEventListener('submit', function(event) {
    // 1. Evitamos que la página se refresque al enviar el formulario
    event.preventDefault();

    // 2. Capturamos el valor del input de usuario (eliminando espacios al inicio/final)
    const usernameInput = document.getElementById('username').value.trim();
    const messageDiv = document.getElementById('message');

    // 3. Definimos los únicos dos usuarios válidos según el requerimiento
    const validUsers = ['admin', 'cliente'];

    // 4. Preparamos el contenedor de mensajes (lo hacemos visible y limpiamos clases previas)
    messageDiv.style.display = 'block';
    messageDiv.className = ''; 

    // VALIDACIÓN A: ¿El campo está vacío?
    if (usernameInput === '') {
        messageDiv.textContent = 'Complete el campo usuario';
        messageDiv.classList.add('warning');
        return; // Detiene la ejecución aquí
    }

    // VALIDACIÓN B: ¿El usuario existe en nuestro arreglo?
    if (validUsers.includes(usernameInput)) {
        messageDiv.textContent = 'Sesión iniciada';
        messageDiv.classList.add('success');
    } else {
        messageDiv.textContent = 'Usuario incorrecto';
        messageDiv.classList.add('error');
    }
});