function mostrarVista(vista) {
    // Oculta todas las vistas
    var vistas = document.querySelectorAll('.vista');
    vistas.forEach(function (vista) {
        vista.style.display = 'none';
    });

    // Muestra solo la vista seleccionada
    var vistaSeleccionada = document.querySelector('.' + vista);
    vistaSeleccionada.style.display = 'block';
}