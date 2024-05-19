function mostrarDetalles(paquete) {
    // Oculta todos los detalles de los paquetes
    var detalles = document.querySelectorAll('[id^="detalles-"]');
    detalles.forEach(function(detalle) {
        detalle.style.display = 'none';
    });

    // Muestra los detalles del paquete seleccionado
    var detallesPaquete = document.getElementById('detalles-' + paquete);
    detallesPaquete.style.display = 'block';
}