document.addEventListener('DOMContentLoaded', function() {
    const btnInicioSesion = document.getElementById('btnInicioSesion');

    // Función para verificar si hay un ID almacenado en el almacenamiento
    function verificarSesion() {
        const idUsuario = localStorage.getItem('userID');
        if (idUsuario) {
            // Si hay un ID almacenado, cambiar el texto del botón a "Cerrar Sesión"
            btnInicioSesion.textContent = 'Cerrar Sesión';
            // Establecer el evento click para cerrar sesión
            btnInicioSesion.addEventListener('click', cerrarSesion);
        } else {
            // Si no hay un ID almacenado, cambiar el texto del botón a "Iniciar Sesión"
            btnInicioSesion.textContent = 'Iniciar Sesión';
            // Establecer el evento click para redirigir a la página de inicio de sesión
            btnInicioSesion.addEventListener('click', function() {
                window.location.href = '/html/inicio_sesion_registro.html'; // Cambiar a la página de inicio de sesión
            });
        }
    }

    // Función para manejar el cierre de sesión
    function cerrarSesion() {
        // Eliminar el ID de usuario del almacenamiento
        localStorage.removeItem('userID');
        // Actualizar el botón
        verificarSesion();
    }

    // Verificar el estado de la sesión al cargar la página
    verificarSesion();
});